import dayjs from "dayjs";
import { monitorsheetType } from "./types";

const OrderMonitorReducer = (state = {}, action) => {
	switch (action.type) {
		/////////////////////order monitor production//////////

		case monitorsheetType.GET_ORDERMONITOR_FAILURE:
			return {
				...state,
				ordermonitorloading: false,
				ordermonitor: [],
				count: 0,
			};

		case monitorsheetType.GET_ORDERMONITOR_LOADING:
			return {
				...state,
				ordermonitorloading: true,
				ordermonitor: [],
				count: 0,
			};

		case monitorsheetType.GET_ORDERMONITOR_SUCCESS:
			const data = action.payload?.data?.body;
			const { limit, offset } = action.payload;
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

				const committedDate = new Date(item?.commitedDate);

				const dispatchDate = item?.dispachedItems
					? item?.dispachedItems?.[0]?.dispatchDate
					: item?.element?.dispatchDate;

				let delay;

				if (dispatchDate) {
					const diff = dayjs(dispatchDate).diff(dayjs(committedDate), "day");
					delay = Math.max(diff, 0);
				} else {
					delay = "NA";
				}
				return {
					customerName: item?.customername || "",
					customerOrderNumber: item?.customerOrderNumber || "",
					requestedDeliveryDate: item?.scheduleDate,
					scheduleDate: item?.scheduleDate,
					commitedDate: item?.commitedDate,
					OANumber: item?.orderno || "",
					orderDate: item?.orderDate,
					OADate: item?.itemAcceptanceDate,
					reviewedBy: item?.username?.username || "",
					reviewedOn: item?.itemAcceptanceDate || "NA",
					customerPartNo: item?.customerPartNo || "",
					mpn: (item?.mpn === "TradedGoods" ? item?.partNo : item?.mpn) || "",
					orderquantity:
						item?.packedItemCount || item?.packedItemCount === 0
							? item?.orderquantity || ""
							: "",
					price: item?.price || "",
					warehouse: item?.warehouse || "",
					orderStatus:
						item?.packedItemCount || item?.packedItemCount === 0
							? item?.itemStatus || ""
							: "",
					packedquantity: item?.packedItemCount || "",
					packedDate:
						!item?.packedItemCount || item?.packedItemCount === 0
							? false
							: item?.lastedPackDate || false,
					invoiceNumber: item?.dispachedItems
						? item?.dispachedItems?.[0]?.invoiceData?.[0]?.invoiceNo
						: item?.element?.invoiceData?.[0]?.invoiceNo || "",
					invoiceDate: item?.dispachedItems
						? item?.dispachedItems?.[0]?.invoiceData?.[0]?.createdAt || "NA"
						: item?.element?.invoiceData?.[0]?.createdAt || "NA",
					dispatchedQuantity: item?.dispachedItems
						? item?.dispachedItems?.[0]?.dispatchquantity
						: item?.element?.dispatchquantity || "",
					dataofDispatched: item?.dispachedItems
						? item?.dispachedItems?.[0]?.dispatchDate
						: item?.element?.dispatchDate,
					delayreasoncatagory: item?.dispachedItems
						? item?.dispachedItems?.[0]?.dispatchdelayreason?.[0]
								?.delayreasondata?.label
						: item?.element?.dispatchdelayreason?.[0]?.delayreasondata?.label ||
						  "",
					Balanceqty:
						item?.packedItemCount || item?.packedItemCount === 0
							? Balanceqty
							: "",
					delay: item?.element?.totaldispatchqty !== null ? delay : "",
					Remarks: "",
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
			let tableData = [];
			if (offset) {
				tableData = filteredData?.slice(offset, offset + limit);
			} else if (!offset && limit) {
				tableData = filteredData?.slice(0, limit);
			} else {
				tableData = filteredData;
			}

			return {
				...state,
				ordermonitorloading: false,
				ordermonitor: tableData,
				count: action.payload?.data?.count,
			};

		default:
			return state;
	}
};
export default OrderMonitorReducer;
