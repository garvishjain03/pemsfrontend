import * as ROUTES from "../configs/routes";
import { configTypes } from "../redux/config/types";
import { orderTypes } from "../redux/order/types";
import { stockType } from "../redux/stock/type";
import { store } from "../store";
import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";
import { message } from "../utils/message";
import { translate } from "../utils/translate";

export const getAllSalesOrders = async searchQuery => {
	store.dispatch({ type: orderTypes.GET_ALL_ORDER_LOADING });
	const query = new URLSearchParams(window.location.search);
	const roleid = localStorage.getItem("active_roleid");
	let _res = {};
	try {
		if (window.location.pathname.includes(ROUTES.PENDINGORDERS)) {
			const tempQuery = query?.toString().includes("order_by")
				? ""
				: "order_by=createdAt&order=desc";

			_res = await fetchRequest(
				getURL(
					`salesorder?${query}&orderStatus=pending&${tempQuery}&roleid=${roleid}`
				)
			);
		} else if (searchQuery) {
			_res = await fetchRequest(
				getURL(`salesorder?${searchQuery}&limit=50&offset=0&roleid=${roleid}`)
			);
		} else if (window.location.pathname.includes(ROUTES.RECHECKORDERS)) {
			const tempQuery = query?.toString().includes("order_by")
				? ""
				: "order_by=createdAt&order=desc";

			_res = await fetchRequest(
				getURL(
					`salesorder?${query}&orderStatus=recheck&${tempQuery}&roleid=${roleid}`
				)
			);
		} else if (query.toString()) {
			_res = await fetchRequest(getURL(`salesorder?${query}&roleid=${roleid}`));
		} else {
			_res = await fetchRequest(
				getURL(`salesorder?limit=50&offset=0&roleid=${roleid}`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: orderTypes.GET_ALL_ORDER_FAILURE });
		} else {
			store.dispatch({
				type: orderTypes.GET_ALL_ORDER_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getUploadSalesApi = async () => {
	store.dispatch({ type: orderTypes.GET_SALES_EXCEL_UPLOAD_LOADING });
	let _res = {};
	const query = new URLSearchParams(window.location.search);
	try {
		if (query.toString()) {
			_res = await fetchRequest(getURL(`upload-jobs?${query}`));
		} else {
			_res = await fetchRequest(getURL(`upload-jobs`));
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.status === 200) {
			store.dispatch({
				type: orderTypes.GET_SALES_EXCEL_UPLOAD_SUCCESS,
				payload: _res.data,
			});
		} else {
			store.dispatch({ type: orderTypes.GET_SALES_EXCEL_UPLOAD_FAILURE });
		}
	}
};

export const getAllPackingItems = async drawerSalesQuery => {
	store.dispatch({ type: orderTypes.GET_ALL_PACKINGITEMS_LOADING });
	let query;
	let queryValue = drawerSalesQuery?.split("=");
	if (queryValue[queryValue.length - 1]) {
		query = drawerSalesQuery;
	} else {
		query = new URLSearchParams(window.location.search);
	}
	const roleid = localStorage.getItem("active_roleid");
	let _res = {};
	try {
		if (query.toString()) {
			_res = await fetchRequest(getURL(`salesitem?${query}&roleid=${roleid}`));
		} else {
			_res = await fetchRequest(getURL(`salesitem?roleid=${roleid}`));
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: orderTypes.GET_ALL_PACKINGITEMS_FAILURE });
		} else {
			store.dispatch({
				type: orderTypes.GET_ALL_PACKINGITEMS_SUCCESS,
				payload: _res.data?.result?.body,
			});
		}
	}
};

export const getAllDispatchItems = async drawerSalesQuery => {
	store.dispatch({ type: orderTypes.GET_ALL_DISPATCHITEMS_LOADING });
	let query;
	let queryValue = drawerSalesQuery?.split("=");
	if (queryValue[queryValue.length - 1]) {
		query = drawerSalesQuery;
	} else {
		query = new URLSearchParams(window.location.search);
	}
	const roleid = localStorage.getItem("active_roleid");
	let _res = {};
	try {
		if (query.toString()) {
			_res = await fetchRequest(getURL(`salesitem?${query}&roleid=${roleid}`));
		} else {
			_res = await fetchRequest(getURL(`salesitem?roleid=${roleid}`));
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: orderTypes.GET_ALL_DISPATCHITEMS_FAILURE });
		} else {
			store.dispatch({
				type: orderTypes.GET_ALL_DISPATCHITEMS_SUCCESS,
				payload: _res.data?.result?.body,
			});
		}
	}
};

export const getAllSalesOrdersForProduction = async searchQuery => {
	const roleid = localStorage.getItem("active_roleid");
	store.dispatch({ type: orderTypes.GET_ALL_ORDER_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};
	try {
		// if (query.toString()) {
		_res = await fetchRequest(
			getURL(
				`salesorder?orderStatus=&orderPageType=accepted&${query}&limit=50&roleid=${roleid}`
			)
		);
		// } else if (searchQuery) {
		// 	_res = await fetchRequest(getURL(searchQuery));
		// }
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: orderTypes.GET_ALL_ACCEPTED_ORDER_SUCCESS });
		} else {
			store.dispatch({
				type: orderTypes.GET_ALL_ACCEPTED_ORDER_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getAllSalesItems = async (id, searchQuery) => {
	store.dispatch({ type: orderTypes.GET_ALL_ORDERITEM_LOADING });
	const query = new URLSearchParams(window.location.search);
	let _res = {};

	let combinedQuery =
		"limit=" +
		query.get("limit")?.toString() +
		(query.get("offset")?.toString()
			? "&offset=" + (query.get("offset")?.toString() ?? "")
			: "") +
		("&" + searchQuery ?? "");

	try {
		// if (id === null) {
		// 	_res = await fetchRequest(
		// 		// getURL(`salesitem/${id}?${searchQuery}&limit=50&offset=0&`)
		// 		//salesitem?itemStatus=ACCEPTED
		// 		getURL(`accepteditem/salesorder`)
		// 	);
		// } else
		if (searchQuery || query.toString()) {
			_res = await fetchRequest(getURL(`salesitem/${id}?${combinedQuery}`));
		} else if (
			query.toString() &&
			window.location.pathname.includes(ROUTES.SALESITEMS)
		) {
			_res = await fetchRequest(getURL(`salesitem/${id}?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`salesitem/${id}?limit=50&offset=0&order=desc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: orderTypes.GET_ALL_ORDERITEM_FAILURE });
		} else {
			store.dispatch({
				type: orderTypes.GET_ALL_ORDERITEM_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

// export const getOrdersAllCount = async () => {
// 	let _res = {};
// 	let url = `salesorder`;
// 	store.dispatch({ type: orderTypes.GET_ALL_ORDER_COUNT_LOADING });
// 	try {
// 		_res = await fetchRequest(getURL(url));
// 	} catch (error) {
// 		console.warn(error);
// 	} finally {
// 		if (_res.hasError) {
// 			store.dispatch({ type: orderTypes.GET_ALL_ORDER_COUNT_FAILURE });
// 		} else {
// 			store.dispatch({
// 				type: orderTypes.GET_ALL_ORDER_COUNT_SUCCESS,
// 				payload: _res.data.count,
// 			});
// 		}
// 	}
// };
// export const getOrdersAllCountProduction = async () => {
// 	let _res = {};
// 	let url = `salesorder?orderPageType=accepted`;
// 	store.dispatch({ type: orderTypes.GET_ALL_ORDER_COUNT_LOADING });
// 	try {
// 		_res = await fetchRequest(getURL(url));
// 	} catch (error) {
// 		console.warn(error);
// 	} finally {
// 		if (_res.hasError) {
// 			store.dispatch({ type: orderTypes.GET_ALL_ORDER_COUNT_FAILURE });
// 		} else {
// 			store.dispatch({
// 				type: orderTypes.GET_ALL_ORDER_COUNT_SUCCESS,
// 				payload: _res.data.count,
// 			});
// 		}
// 	}
// };
// export const getPendingOrdersCount = async () => {
// 	let _res = {};
// 	store.dispatch({ type: orderTypes.GET_ALL_PENDING_ORDER_COUNT_LOADING });
// 	let url = `salesorder?orderStatus=pending`;
// 	try {
// 		_res = await fetchRequest(getURL(url));
// 	} catch (error) {
// 		console.warn(error);
// 	} finally {
// 		if (_res.hasError) {
// 			store.dispatch({ type: orderTypes.GET_ALL_PENDING_ORDER_COUNT_FAILURE });
// 		} else {
// 			store.dispatch({
// 				type: orderTypes.GET_ALL_PENDING_ORDER_COUNT_SUCCESS,
// 				payload: _res.data.count,
// 			});
// 		}
// 	}
// };
// export const getRecheckOrdersCount = async () => {
// 	let _res = {};
// 	store.dispatch({ type: orderTypes.GET_ALL_RECHECK_ORDER_COUNT_LOADING });
// 	let url = `salesorder?orderStatus=recheck`;
// 	try {
// 		_res = await fetchRequest(getURL(url));
// 	} catch (error) {
// 		console.warn(error);
// 	} finally {
// 		if (_res.hasError) {
// 			store.dispatch({ type: orderTypes.GET_ALL_RECHECK_ORDER_COUNT_FAILURE });
// 		} else {
// 			store.dispatch({
// 				type: orderTypes.GET_ALL_RECHECK_ORDER_COUNT_SUCCESS,
// 				payload: _res.data.count,
// 			});
// 		}
// 	}
// };

export const getCount = async (orderId, itemid) => {
	let _res = {};
	const activeUser = ["SALES", "ADMIN", "SUPERADMIN"].includes(
		localStorage.getItem("active_role")
	)
		? "OrderCount"
		: "ItemCount";

	const RoleId = localStorage.getItem("active_roleid");
	let url = `salesorder/status/count/${RoleId}`;
	let StoreKeeperworkorderCountUrl = "workorder/status/count";
	let StoreKeeperIssueTCCountUrl = "issuetc/status/count";
	let packingOpExpiryCountUrl = `salesorder/expirey/count/${localStorage.getItem(
		"active_roleid"
	)}`;
	//issuetc/status/count
	let orderCount = 0;
	let recheckcount = 0;
	let accepted_Count = 0;
	let cancelled_Count = 0;
	let dispatched_Count = 0;
	let infgstore_Count = 0;
	let inproduction_Count = 0;
	let itemonhold_Count = 0;
	let packingcompleted_Count = 0;
	let partiallydispatched_Count = 0;
	let partiallypacked_Count = 0;
	let pending_Count = 0;
	let procurement_Count = 0;
	let recheck_Count = 0;
	let acceptedBubbleCount = 0;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "GET",
		});
		let StoreKeeperworkOrderRes = await fetchRequest(
			getURL(StoreKeeperworkorderCountUrl),
			{
				method: "GET",
			}
		);
		let StoreKeeperIssueTCRes = await fetchRequest(
			getURL(StoreKeeperIssueTCCountUrl),
			{
				method: "GET",
			}
		);
		let packingOpCountRes = await fetchRequest(
			getURL(packingOpExpiryCountUrl),
			{
				method: "GET",
			}
		);
		const { pending_count = 0, inprogress_count = 0 } =
			StoreKeeperworkOrderRes.data.result[0] ?? {};
		const { pending_count: IssueTcStoreKeeperCount = 0 } =
			StoreKeeperIssueTCRes.data.result[0] ?? {};

		const StoreKeeperCountSiderBarCount = {
			storeKeeperWorkOrderCount:
				Number(pending_count) + Number(inprogress_count),
			IssueTcStoreKeeperCount,
		};

		const { expiryCommitedDateCount, dispatched_expiryCommitedDateCount } =
			packingOpCountRes?.data;

		if (_res && _res.status === 200) {
			if (activeUser === "OrderCount") {
				const Obj = _res.data.result[0];
				pending_Count = Obj.pending_count;
				orderCount = Obj.pending_count;
				recheckcount = Obj.recheck_count;

				const updatedObj = {
					AcceptRPendingCount: pending_Count,
					orderCount,
					recheckcount,
					role: "SALES",
					...StoreKeeperCountSiderBarCount,
					...Obj,
				};
				store.dispatch({
					type: orderTypes.GETCOUNT,
					payload: updatedObj,
				});
			} else {
				const Obj = _res.data.result;
				Obj.map(
					({
						accepted_count,
						cancelled_count,
						dispatched_count,
						infgstore_count,
						inproduction_count,
						itemonhold_count,
						packingcompleted_count,
						partiallydispatched_count,
						partiallypacked_count,
						pending_count,
						procurement_count,
						recheck_count,
					}) => {
						accepted_Count += Number(accepted_count);
						acceptedBubbleCount =
							accepted_count > 0
								? acceptedBubbleCount + 1
								: acceptedBubbleCount;
						cancelled_Count += Number(cancelled_count);
						dispatched_Count += Number(dispatched_count);
						infgstore_Count += Number(infgstore_count);
						inproduction_Count += Number(inproduction_count);
						itemonhold_Count += Number(itemonhold_count);
						packingcompleted_Count += Number(packingcompleted_count);
						partiallydispatched_Count += Number(partiallydispatched_count);
						partiallypacked_Count += Number(partiallypacked_count);
						pending_Count += Number(pending_count);
						procurement_Count += Number(procurement_count);
						recheck_Count += Number(recheck_count);
						return null;
					}
				);

				const AcceptRPendingCount =
					localStorage.getItem("active_role") == "PRODUCTIONPL"
						? accepted_Count
						: pending_Count;
				const updatedObj = {
					orderCount: accepted_Count,
					acceptedBubbleCount,
					AcceptRPendingCount,
					cancelled_Count,
					dispatched_Count,
					infgstore_Count,
					inproduction_Count,
					itemonhold_Count,
					packingcompleted_Count,
					partiallydispatched_Count,
					partiallypacked_Count,
					procurement_Count,
					recheck_Count,
					pending_Count,
					expiryCommitedDateCount,
					dispatched_expiryCommitedDateCount,
					role: "NOT SALES",
					...StoreKeeperCountSiderBarCount,
				};
				store.dispatch({
					type: orderTypes.GETCOUNT,
					payload: updatedObj,
				});
			}
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});

		console.warn(error);
	}
};
export const getWorkOrders = async (from, workOrderNo) => {
	store.dispatch({ type: orderTypes.GET_ALL_WORKORDER__LOADING });

	const query = new URLSearchParams(window.location.search);

	let _res = {};

	let url;
	if (localStorage.getItem("active_role") == "STOREKEEPER") {
	}
	url = `workorder?limit=100`;

	if (query) {
		url = `workorder?${query}&limit=100`;
	}
	if (from == "salesItemView") {
		url = `workorder?workorderno=${workOrderNo}&type=ALL`;
	}
	if (from == "combine") {
		url = `workorder?combine=asc&limit=100`;
		if (query) {
			url = `workorder?${query}&combine=asc&limit=100`;
		}
	}
	try {
		_res = await fetchRequest(getURL(url));

		if (_res && _res.status === 200) {
			store.dispatch({
				type: orderTypes.GET_ALL_WORKORDER_SUCCESS,
				payload: _res.data,
			});
		}
	} catch (error) {
		store.dispatch({ type: orderTypes.GET_ALL_WORKORDER__FAILURE });
		console.warn(error);
	}
};

export const getItemEditFields = async id => {
	store.dispatch({ type: configTypes.GET_ALL_ITEMEDITFIELD_LOADING });

	let _res = {};

	try {
		_res = await fetchRequest(getURL(`validate/salesitem/${id}`));
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: configTypes.GET_ALL_ITEMEDITFIELD_FAILURE });
		} else {
			store.dispatch({
				type: configTypes.GET_ALL_ITEMEDITFIELD_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getWorkorderShiftcount = async id => {
	store.dispatch({ type: orderTypes.GET_ALL_TOTALSHIFTCOUNT_LOADING });

	let _res = {};

	try {
		_res = await fetchRequest(getURL(`totalshiftcountbyworkorder/${id}`));
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: orderTypes.GET_ALL_TOTALSHIFTCOUNT_FAILURE });
		} else {
			store.dispatch({
				type: orderTypes.GET_ALL_TOTALSHIFTCOUNT_SUCCESS,
				payload: _res.data,
			});
		}
	}
};
