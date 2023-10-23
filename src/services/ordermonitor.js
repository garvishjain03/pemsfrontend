import { monitorsheetType } from "../redux/ordermonitor/types";
import { store } from "../store";
import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";

export const getorderMonitor = async (
	drawerSalesQuery,
	type,
	limit,
	offset
) => {
	type !== "ALL" &&
		store.dispatch({ type: monitorsheetType.GET_ORDERMONITOR_LOADING });
	let query = new URLSearchParams(window.location.search);
	let _res = {};

	if (drawerSalesQuery) {
		query = query + "&" + drawerSalesQuery;
	}

	try {
		if (type === "ALL") {
			_res = await fetchRequest(getURL(`salesitem/monitorsheet?order=desc`));
		} else if (query.toString()) {
			_res = await fetchRequest(
				getURL(`salesitem/monitorsheet?${query}&order=desc`)
			);
		} else {
			_res = await fetchRequest(getURL(`salesitem/monitorsheet?order=desc`));
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (type === "ALL" && !_res.hasError) {
			const data = _res?.data?.body;
			const filteredData = data?.map((item, index) => {
				let Balanceqty =
					item?.orderquantity -
					(item?.dispachedItems?.[0]?.directFullDispatch
						? item?.dispachedItems?.[0]?.dispatchquantity ?? 0
						: data?.[index + 1]?.dispachedItems
						? data?.[index + 1]?.dispachedItems?.[0]?.totaldispatchqty ?? 0
						: data?.[index + 1]?.element
						? data?.[index + 1]?.element?.totaldispatchqty ?? 0
						: 0);
				// Get the current date
				const currentDate = new Date();
				const committedDate = new Date(item?.commitedDate);
				// Calculate the difference in milliseconds
				const delayInMs = currentDate - committedDate;
				// Convert the delay to days
				const delayInDays = Math.floor(delayInMs / (1000 * 60 * 60 * 24));

				return {
					customerName: item?.customername || "NA",
					customerOrderNumber: item?.customerOrderNumber || "NA",
					requestedDeliveryDate: item?.scheduleDate,
					scheduleDate: item?.scheduleDate,
					commitedDate: item?.commitedDate,
					OANumber: item?.orderno || "NA",
					orderDate: item?.orderDate,
					OADate: item?.orderAcceptanceDate,
					reviewedBy: item?.username?.username || "NA",
					reviewedOn: item?.itemAcceptanceDate || "NA",
					customerPartNo: item?.customerPartNo || "NA",
					mpn: (item?.mpn === "TradedGoods" ? item?.partNo : item?.mpn) || "NA",
					orderquantity:
						item?.packedItemCount || item?.packedItemCount === 0
							? item?.orderquantity || "NA"
							: "NA",
					price: item?.price || "NA",
					warehouse: item?.warehouse || "NA",
					orderStatus:
						item?.packedItemCount || item?.packedItemCount === 0
							? item?.itemStatus || "NA"
							: "NA",
					packedquantity: item?.packedItemCount || "NA",
					packedDate:
						!item?.packedItemCount || item?.packedItemCount === 0
							? false
							: item?.lastedPackDate || false,
					invoiceNumber: item?.dispachedItems
						? item?.dispachedItems?.[0]?.invoiceData?.[0]?.invoiceNo
						: item?.element?.invoiceData?.[0]?.invoiceNo || "NA",
					invoiceDate: item?.dispachedItems
						? item?.dispachedItems?.[0]?.invoiceData?.[0]?.createdAt || "NA"
						: item?.element?.invoiceData?.[0]?.createdAt || "NA",
					dispatchedQuantity: item?.dispachedItems
						? item?.dispachedItems?.[0]?.dispatchquantity
						: item?.element?.dispatchquantity || "NA",
					dataofDispatched: item?.dispachedItems
						? item?.dispachedItems?.[0]?.dispatchDate
						: item?.element?.dispatchDate,
					delayreasoncatagory: item?.dispachedItems
						? item?.dispachedItems?.[0]?.dispatchdelayreason?.[0]
								?.delayreasondata?.label
						: item?.element?.dispatchdelayreason?.[0]?.delayreasondata?.label ||
						  "NA",
					Balanceqty:
						item?.packedItemCount || item?.packedItemCount === 0
							? Balanceqty
							: "NA",
					delay:
						item?.element?.totaldispatchqty == null
							? delayInDays > 0
								? delayInDays
								: "NA"
							: "NA",
					Remarks: "NA",
					orderId: item?.orderid,
					itemCode: item?.itemno,
					id: index,
					wattage: item?.wattage,
					type: item?.type,
					tolerance: item?.tolerance,
					ohms: item?.ohms,
					unit: item?.unit,
					surge: item?.surge,
					itemId: item?.itemid,
				};
			});

			return filteredData;
		} else if (_res.hasError) {
			store.dispatch({
				type: monitorsheetType.GET_ORDERMONITOR_FAILURE,
			});
		} else {
			store.dispatch({
				type: monitorsheetType.GET_ORDERMONITOR_SUCCESS,
				payload: { data: _res.data, limit, offset },
			});
		}
	}
};
