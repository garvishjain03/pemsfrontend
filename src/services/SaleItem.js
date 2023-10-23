import { orderTypes } from "../redux/order/types";
import { store } from "../store";
import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";
import * as ROUTES from "../configs/routes";
import { message } from "../utils/message";
import { translate } from "../utils/translate";
import {
	getAllDispatchItems,
	getAllPackingItems,
	getAllSalesItems,
	getAllSalesOrders,
	getWorkOrders,
} from "./salesOrder";
import { stockType } from "../redux/stock/type";

export const saveCommnetTheItem = async (orderId, itemId, comments) => {
	let _res = {};
	let url = `comments`;
	const obj = {
		orderid: orderId,
		itemid: itemId,
		comments: comments,
		commentstatus: "commentstatus",
	};
	try {
		_res = await fetchRequest(getURL(url), {
			method: "POST",
			body: JSON.stringify(obj),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`Comment`),
			});
		}
	} catch (error) {
		console.warn(error);
	} finally {
		getAllSalesItems(orderId);
	}
};
export const saveBulAcceptItemAcceptedStatus = async (orderId, itemid) => {
	let _res = {};
	let url = `salesitem/bulk/${orderId}/accept`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(itemid),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`ItemStatusChanged`),
			});
			getAllSalesItems(orderId);
			// getAllSalesOrders();
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};
export const saveRecheckItem = async (orderId, itemId) => {
	let _res = {};
	///http://localhost:3005/api/v1/salesitem/ad69d3b8-ba43-441d-ad67-01978bb2b32f/5b1a85d2-c6ed-45d4-9dec-040ede228c80/recheck
	let url = `salesitem/${orderId}/${itemId}/recheck`;
	// const obj = {
	// 	orderid: orderId,
	// 	itemid: itemId,
	// 	comments: comments,
	// };
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify({
				itemStatus: "",
			}),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`Success`),
			});
		}
	} catch (error) {
		console.warn(error);
	} finally {
		getAllSalesItems(orderId);
		store.dispatch({
			type: "removeAll",
		});
	}
};
export const getBulkRecheckItemStatus = async (orderId, itemid) => {
	let _res = {};
	//http://localhost:3005/api/v1/salesitem/bulk/344928a6-4ee8-4592-8bc1-f2b41df34473/recheck
	//http://localhost:3005/api/v1/salesitem/bulk/21229cd2-753e-4233-9fb7-69eefe11c7f9/recheck
	let url = `salesitem/bulk/${orderId}/recheck`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(itemid),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`ItemStatusChanged`),
			});
			getAllSalesItems(orderId);
			getAllSalesOrders();
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
	store.dispatch({
		type: "removeAll",
	});
};

export const saveBulkWorkOrderItemStatus = async (orderId, obj) => {
	let _res = {};
	let url = `bulkworkorder`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "POST",
			body: JSON.stringify(obj),
		});
		if (_res && _res.status === 201) {
			message.success({
				message: translate(`ItemStatusChanged`),
			});
			getAllSalesItems(orderId);
			getAllSalesOrders();
			store.dispatch({
				type: "removeAll",
			});
			// window.location.reload();
		}
	} catch (error) {
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
	store.dispatch({
		type: "removeAll",
	});
};

export const getCommentsByItemId = async (itemId, obj) => {
	let _res = {};
	let url = `comments/item/${itemId}`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "GET",
		});
		if (_res && _res.status === 200) {
			store.dispatch({
				type: "addItemComments",
				payload: _res.data.rows,
			});
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
	store.dispatch({
		type: "removeAll",
	});
};
export const getCommentsByItemIdWorkOrder = async (itemId, obj) => {
	let _res = {};
	let url = `workordercomments/workorderid/${itemId}`;
	try {
		_res = await fetchRequest(getURL(url));
		if (_res && _res.status === 200) {
			store.dispatch({
				type: "addItemComments",
				payload: _res.data.rows,
			});
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
	store.dispatch({
		type: "removeAll",
	});
};
export const getBulkRecheckItem = async (orderId, itemid) => {
	let _res = {};
	//http://localhost:3005/api/v1/salesitem/bulk/8914a35e-8f19-438f-80b1-f587aa872f16/recheck
	let url = `salesitem/bulk/${orderId}/recheck`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify({ itemid }),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`ItemStatusChanged`),
			});
			getAllSalesItems(orderId);
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};

export const getChangeStateItemStatusToAccept = async (orderId, itemId) => {
	let _res = {};
	let url = `salesitem/${orderId}/${itemId}/accepted`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify({
				itemStatus: "ACCEPTED",
			}),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`ItemStatusChanged`),
			});
			getAllSalesItems(orderId);
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};
export const getChangeStateItemStatusToAcceptSingle = async (
	orderId,
	itemId,
	remark
) => {
	let _res = {};
	let url = `salesitem/bulk/${orderId}/accept`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify({
				items: [
					{
						id: itemId,
						remarks: remark,
					},
				],
				roleid: localStorage.getItem("active_roleid"),
				universalRemark: "",
			}),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`ItemStatusChanged`),
			});

			getAllSalesItems(orderId);
			getAllSalesOrders();
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};

export const getCommentOnItem = async (orderId, itemId, remark) => {
	let _res = {};
	let url = `comments`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "POST",
			body: JSON.stringify({
				orderid: orderId,
				itemid: itemId,
				comments: remark,
				roleid: localStorage.getItem("active_roleid"),
			}),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`ItemStatusChanged`),
			});
			getAllSalesItems(orderId);
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};

export const saveCommentOnWorkOrderItem = async (
	workorderid,
	orderid,
	itemid,
	comments
) => {
	let _res = {};
	let url = `comments`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "POST",
			body: JSON.stringify({
				workorderid,
				orderid,
				itemid,
				comments,
				roleid: localStorage.getItem("active_roleid"),
				workorderPageOpen: true,
			}),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`ItemStatusChanged`),
			});
			// getAllSalesItems(orderId);
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};

export const saveChangeStateItemStatusToCancel = async (orderId, itemId) => {
	let _res = {};
	let url = `salesitem/${orderId}/${itemId}/cancelled`;
	// const url=`salesitem/479823db-5791-4255-8fcb-920c34b472c9/eec84de1-1e76-41f5-8a36-ec07a0ae0ae4/cancelled`
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`ItemStatusChanged`),
			});
			getAllSalesItems(orderId);
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};
export const saveBulAcceptItemAccept = async (orderId, itemid) => {
	let _res = {};
	let url = `salesitem/bulk/${orderId}/accept`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(itemid),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`ItemStatusChanged`),
			});
			getAllSalesItems(orderId);
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};

export const saveBulkCancelItemAccept = async (orderId, itemid) => {
	let _res = {};
	let url = `salesitem/bulk/${orderId}/cancel`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(itemid),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`ItemStatusChanged`),
			});
			getAllSalesItems(orderId);
			// getAllSalesOrders();
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};

export const holdItemApi = async (orderid, body) => {
	let _res = {};
	let url = `salesitem/${orderid}/{id}/onhold`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`Item On Hold`),
			});
			getAllSalesItems(orderid);
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};

export const unHoldItemApi = async (orderid, body) => {
	let _res = {};
	let url = `salesitem/${orderid}/unhold`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`Item Un Holded`),
			});
			getAllSalesItems(orderid);
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};

export const procureItemApi = async (orderid, body) => {
	let _res = {};
	let url = `salesitem/${orderid}/procurement`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`Item  Procured`),
			});
			getAllSalesItems(orderid);
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};

export const markAsAcceptApi = async (orderid, body) => {
	let _res = {};
	let url = `salesitem/${orderid}/procurementMarkAccepted`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`Item  Procurement MarkedAccepted`),
			});
			getAllSalesItems(orderid);
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};
export const editHistoryApi = async (id, body, orderid) => {
	let _res = {};
	let url = `salesitem/itemhistory/edit/${id}`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`Item  Successfully Edited`),
			});
			getAllSalesItems(orderid);
			getAllSalesOrders();
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		console.warn(error);
	}
};
export const getEditDatesApi = async (id, body) => {
	let _res = {};
	let url = `salesitem/bulk/edit/${id}`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`Successfully Edited`),
			});
			getAllSalesItems(id);
			getAllSalesOrders();
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		console.warn(error);
	}
	store.dispatch({
		type: "removeAll",
	});
};
export const packApi = async (orderid, body, drawerSalesQuery) => {
	let _res = {};
	let url;
	orderid
		? (url = `salesitem/bulk/${orderid}/packingcompleted`)
		: (url = `salesitem/bulk/packingcompleted`);
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`Item  Packed Successfully`),
			});
			if (window.location.pathname == "/packingitemlist") {
				getAllPackingItems(drawerSalesQuery);
			} else {
				getAllSalesItems(orderid);
				getAllSalesOrders();
			}
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};
export const unPackApi = async (orderid, body, drawerSalesQuery) => {
	let _res = {};
	let url;
	orderid
		? (url = `salesitem/bulk/${orderid}/unpackingitems`)
		: (url = `salesitem/bulk/unpackingitems`);
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`Item  UnPacked Successfully`),
			});
			if (window.location.pathname == "/packingitemlist") {
				getAllPackingItems(drawerSalesQuery);
			} else {
				getAllSalesItems(orderid);
				getAllSalesOrders();
			}

			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};

export const DispatchApi = async (orderid, body, drawerSalesQuery) => {
	store.dispatch({
		type: "LOADING",
		payload: true,
	});
	let _res = {};
	let url;
	orderid
		? (url = `salesitem/bulk/${orderid}/partialdispatched`)
		: (url = `salesitem/bulk/partialdispatched`);
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`Item  Dispatched Successfully`),
			});
			if (window.location.pathname == "/dispatchitemlist") {
				getAllDispatchItems(drawerSalesQuery);
			} else {
				getAllSalesOrders();
				getAllSalesItems(orderid);
			}
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
	store.dispatch({
		type: "LOADING",
		payload: false,
	});
};
// export const DispatchEditApi = async (orderid, body, drawerSalesQuery) => {
// 	let _res = {};
// 	let url = `salesitem/bulk/${orderid}/editdispatched`;
// 	try {
// 		_res = await fetchRequest(getURL(url), {
// 			method: "PUT",
// 			body: JSON.stringify(body),
// 		});
// 		if (_res && _res.status === 200) {
// 			message.success({
// 				message: translate(`Item  Edited Successfully`),
// 			});
// 			getAllSalesItems(orderid);
// 			store.dispatch({
// 				type: "removeAll",
// 			});
// 		}
// 	} catch (error) {
// 		message.success({
// 			message: translate(`Error`),
// 		});
// 		store.dispatch({
// 			type: "removeAll",
// 		});
// 		console.warn(error);
// 	}
// };
export const ReturnApi = async (orderid, body, drawerSalesQuery) => {
	let _res = {};
	let url;
	orderid
		? (url = `salesitem/bulk/${orderid}/returnitem`)
		: (url = `salesitem/bulk/returnitem`);
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`Item  Returned Successfully`),
			});
			if (window.location.pathname == "/dispatchitemlist") {
				getAllDispatchItems(drawerSalesQuery);
			} else {
				getAllSalesItems(orderid);
				getAllSalesOrders();
			}
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};

export const updateSalesItemApi = async (id, body, orderid) => {
	let _res = {};
	let url = `/salesitem/add/mpn-suffix/${id}`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`Item Updated Successfully`),
			});
			if (window.location.pathname == "/workorders") {
				getWorkOrders();
			} else {
				getAllSalesItems(orderid);
			}
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		console.warn(error);
	}
};

export const getStockQuantity = async body => {
	let _res = {};
	let url = `stocks/mpn-quantity`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "POST",
			body: JSON.stringify({ mpn: body }),
		});
		if (_res && _res.status === 200) {
			store.dispatch({
				type: stockType.STOCK_QUANTITY,
				payload: _res.data.body.rows,
			});
		}
	} catch (error) {
		console.error(error);
	}
};

export const getWorkOrderCompletedQty = async id => {
	let _res = {};
	let url = `workorder/tccompletedqty/${id}`;
	try {
		_res = await fetchRequest(getURL(url));
		if (_res && _res.status === 200) {
			store.dispatch({
				type: "WORK_ORDER_COMPLETE_QTY",
				payload: _res.data,
			});
		}
	} catch (error) {
		console.error(error);
	}
};

export const getItemHistory = async id => {
	let _res = {};
	let url = `salesitem/itemhistory/${id}`;
	try {
		_res = await fetchRequest(getURL(url));
		if (_res && _res.status === 200) {
			store.dispatch({
				type: "ITEM_HISTORY",
				payload: _res?.data?.body?.rows,
			});
		}
	} catch (error) {
		console.error(error);
	}
};
