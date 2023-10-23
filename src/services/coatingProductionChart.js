import { coatingProductionType } from "../redux/coatingproduction/types";
import { store } from "../store";
import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";

export const getCoatingProduction = async (drawerSalesQuery, type) => {
	type !== "ALL" &&
		store.dispatch({
			type: coatingProductionType.GET_COATIONPRODUCTION_LOADING,
		});
	let query;

	query = new URLSearchParams(window.location.search);

	if (drawerSalesQuery) {
		query = query + "&" + drawerSalesQuery;
	}

	let _res = {};

	try {
		if (type === "ALL") {
			_res = await fetchRequest(
				getURL(
					`coatingproduction?shiftDate=${query.get(
						"shiftDate"
					)}&order_by=createdAt&order=desc`
				)
			);
		} else if (query.toString()) {
			_res = await fetchRequest(
				getURL(`coatingproduction?${query}&order_by=createdAt&order=desc`)
			);
		} else {
			_res = await fetchRequest(
				getURL(`coatingproduction?order_by=createdAt&order=desc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (type === "ALL" && !_res.hasError) {
			return _res?.data?.rows;
		} else if (_res.hasError) {
			store.dispatch({
				type: coatingProductionType.GET_COATIONPRODUCTION_FAILURE,
			});
		} else {
			store.dispatch({
				type: coatingProductionType.GET_COATIONPRODUCTION_SUCCESS,
				payload: _res.data,
			});
		}
	}
};
