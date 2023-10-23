import { useSelector } from "react-redux";
import * as ROUTES from "../configs/routes";
import { configTypes } from "../redux/config/types";
import { orderTypes } from "../redux/order/types";
import { stockType } from "../redux/stock/type";
import { store } from "../store";
import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";
import { message } from "../utils/message";
import { translate } from "../utils/translate";

export const getAllStock = async type => {
	type !== "ALL" && store.dispatch({ type: stockType.GET_ALL_STOCK_LOADING });
	let query = new URLSearchParams(window.location.search);
	let _res = {};
	try {
		if (type === "ALL") {
			_res = await fetchRequest(getURL(`stocks`));
		} else if (query.toString()) {
			_res = await fetchRequest(getURL(`stocks?${query}`));
		} else {
			_res = await fetchRequest(getURL(`stocks?limit=100`));
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (type === "ALL" && !_res.hasError) {
			return _res?.data?.body?.rows;
		} else if (_res.hasError) {
			store.dispatch({ type: stockType.GET_ALL_STOCK_FAILURE });
		} else {
			store.dispatch({
				type: stockType.GET_ALL_STOCK_SUCCESS,
				payload: _res.data?.body,
			});
			return _res.data?.body;
		}
	}
};

export const getAllStockHistory = async (drawerSalesQuery, type) => {
	type !== "ALL" &&
		store.dispatch({ type: stockType.GET_ALL_STOCK_HISTORY_LOADING });
	let query;
	let queryValue = drawerSalesQuery?.split("=");
	if (queryValue[queryValue.length - 1]) {
		query =
			new URLSearchParams(window.location.search).toString() +
			"&" +
			drawerSalesQuery;
	} else {
		query = new URLSearchParams(window.location.search);
	}
	let _res = {};
	try {
		if (type === "ALL") {
			_res = await fetchRequest(
				getURL(
					`transaction?mpn=${query.get("mpn")}&order_by=createdAt&order=desc`
				)
			);
		} else if (query.toString()) {
			if (query?.toString()?.includes("order_by")) {
				_res = await fetchRequest(getURL(`transaction?${query}`));
			} else {
				_res = await fetchRequest(
					getURL(`transaction?${query}&order_by=createdAt&order=desc`)
				);
			}
		} else {
			_res = await fetchRequest(
				getURL(`transaction?order_by=createdAt&order=desc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (type === "ALL" && !_res.hasError) {
			return _res?.data?.body?.rows;
		} else if (_res.hasError) {
			store.dispatch({
				type: stockType.GET_ALL_STOCK_HISTORY_FAILURE,
			});
		} else {
			store.dispatch({
				type: stockType.GET_ALL_STOCK_HISTORY_SUCCESS,
				payload: _res.data?.body,
			});
		}
	}
};

export const getAllReturnHistory = async (drawerSalesQuery, type) => {
	type !== "ALL" &&
		store.dispatch({ type: stockType.GET_ALL_RETURN_HISTORY_LOADING });
	let query;
	let queryValue = drawerSalesQuery?.split("=");
	if (queryValue[queryValue.length - 1]) {
		query =
			new URLSearchParams(window.location.search).toString() +
			"&" +
			drawerSalesQuery;
	} else {
		query = new URLSearchParams(window.location.search);
	}
	let _res = {};
	try {
		if (type === "ALL") {
			_res = await fetchRequest(
				getURL(
					`transaction/returnItem?mpn=${query.get(
						"mpn"
					)}&order_by=updatedAt&order=desc`
				)
			);
		} else if (query.toString()) {
			if (query.toString()?.includes("order_by")) {
				_res = await fetchRequest(getURL(`transaction/returnItem?${query}`));
			} else {
				_res = await fetchRequest(
					getURL(
						`transaction/returnItem?${query}&order_by=updatedAt&order=desc`
					)
				);
			}
		} else {
			_res = await fetchRequest(
				getURL(`transaction/returnItem?order_by=updatedAt&order=desc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (type === "ALL" && !_res.hasError) {
			return _res?.data?.body?.rows;
		} else if (_res.hasError) {
			store.dispatch({
				type: stockType.GET_ALL_RETURN_HISTORY_FAILURE,
			});
		} else {
			store.dispatch({
				type: stockType.GET_ALL_RETURN_HISTORY_SUCCESS,
				payload: _res.data?.body,
			});
		}
	}
};

export const getAllPackedStock = async (querySearch, type) => {
	type !== "ALL" &&
		store.dispatch({ type: stockType.GET_ALL_PACKED_STOCK_LOADING });
	let query;
	let queryValue = querySearch?.split("=");
	if (queryValue?.[queryValue?.length - 1]) {
		query = querySearch + "&" + new URLSearchParams(window.location.search);
	} else {
		query = new URLSearchParams(window.location.search);
	}
	let _res = {};
	try {
		if (type === "ALL") {
			_res = await fetchRequest(
				getURL(`transaction/packedItem?mpn=${query.get("mpn")}`)
			);
		} else if (query.toString()) {
			_res = await fetchRequest(getURL(`transaction/packedItem?${query}`));
		} else {
			_res = await fetchRequest(getURL(`transaction/packedItem`));
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (type === "ALL" && !_res.hasError) {
			return _res?.data?.body?.rows;
		} else if (_res.hasError) {
			store.dispatch({ type: stockType.GET_ALL_PACKED_STOCK_FAILURE });
		} else {
			store.dispatch({
				type: stockType.GET_ALL_PACKED_STOCK_SUCCESS,
				payload: _res.data?.body,
			});
		}
	}
};

export const getAllMpn = async boolean => {
	let _res = {};
	try {
		if (boolean) {
			_res = await fetchRequest(getURL(`mpn?notInStock=${boolean}`));
		} else {
			_res = await fetchRequest(getURL(`mpn`));
		}
	} catch (error) {
		console.warn(error);
	} finally {
		store.dispatch({
			type: stockType.GET_ALL_MPN,
			payload: _res.data,
		});
	}
};

export const processReturnApi = async (body, mpn, from) => {
	store.dispatch({
		type: "LOADING",
		payload: true,
	});
	let _res = {};
	let url = `stocks/transfer/${mpn}`;
	if (from == "returnHistory") {
		url = `process/returns/${mpn}`;
	}
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(
					`${
						from == "returnHistory" ? "process return" : "transfer"
					} successful`
				),
			});
		}
	} catch (error) {
		console.warn(error);
	} finally {
		from != "returnHistory" && getAllStockHistory("");
		getAllStock("").then(res => {
			const [filteredItem] = res?.rows?.filter(res => res.mpn == mpn);
			store.dispatch({ type: "CLICKED_ROW_DETAILS", payload: filteredItem });
		});
	}
	store.dispatch({
		type: "LOADING",
		payload: false,
	});
};

export const editStockApi = async (body, mpn) => {
	store.dispatch({
		type: "LOADING",
		payload: true,
	});
	let _res = {};
	let url = `stocks/${mpn}`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`stocked edited successfully`),
			});
		}
	} catch (error) {
		console.warn(error);
	} finally {
		getAllStockHistory("");
		getAllStock("").then(res => {
			const [filteredItem] = res?.rows?.filter(res => res.mpn == mpn);
			store.dispatch({ type: "CLICKED_ROW_DETAILS", payload: filteredItem });
		});
	}
	store.dispatch({
		type: "LOADING",
		payload: false,
	});
};

export const addNewItemApi = async body => {
	let _res = {};
	let url = `stocks/add-item`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "POST",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`item added successfully`),
			});
		}
	} catch (error) {
		console.warn(error);
	} finally {
		getAllStock("");
	}
};
