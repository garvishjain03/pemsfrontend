import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";
import { userTypes } from "../redux/user/types";
import { store } from "../store";

export const getRole = async id => {
	let _res = {};

	try {
		_res = await fetchRequest(getURL(`role/${id}`));
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) return "";
		else return _res.data.body.title;
	}
};

export const getAllRole = async () => {
	store.dispatch({ type: userTypes.GET_ROLES_LOADING });
	let _res = {};

	try {
		_res = await fetchRequest(getURL(`role`));
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) store.dispatch({ type: userTypes.GET_ROLES_FAILURE });
		else
			store.dispatch({
				type: userTypes.GET_ROLES_SUCCESS,
				payload: _res.data.data.body.rows,
			});
	}
};
