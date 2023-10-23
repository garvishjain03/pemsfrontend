import logsReducer from "../redux/logs/reducer";
import { logsType } from "../redux/logs/type";
import { store } from "../store";
import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";

export const getLogs = async (id, type) => {
	let _res = {};

	try {
		_res = await fetchRequest(getURL(`logs?${type}=${id}`));
	} catch (error) {
		console.warn(error);
	} finally {
		store.dispatch({
			type: logsType.LOGS,
			payload: _res.data.body,
		});
	}
};
