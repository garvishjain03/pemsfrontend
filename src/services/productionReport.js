import { monitorsheetType } from "../redux/ordermonitor/types";
import { productionReportType } from "../redux/productionReport/types";
import { store } from "../store";
import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";

export const getProductionReport = async type => {
	type !== "ALL" &&
		store.dispatch({ type: productionReportType.GET_PRODUCTIONREPORT_LOADING });
	const query = new URLSearchParams(window.location.search);
	let _res = {};

	try {
		if (type === "ALL") {
			_res = await fetchRequest(
				getURL(`shifttc?shiftDate=${query.get("shiftDate")}`)
			);
		} else if (query.toString()) {
			_res = await fetchRequest(getURL(`shifttc?${query}`));
		} else {
			_res = await fetchRequest(getURL(`shifttc`));
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (type === "ALL" && !_res.hasError) {
			return _res?.data?.body?.rows;
		} else if (_res.hasError) {
			store.dispatch({
				type: productionReportType.GET_PRODUCTIONREPORT_FAILURE,
			});
		} else {
			store.dispatch({
				type: productionReportType.GET_PRODUCTIONREPORT_SUCCESS,
				payload: _res.data.body,
			});
		}
	}
};
