import { permissionsType } from "../redux/permission/types";
import { store } from "../store";
import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";

export const getPermissions = async roleid => {
	store.dispatch({ type: permissionsType.GET_PERMISSIONS_LOADING });

	let _res = {};

	try {
		_res = await fetchRequest(getURL(`permission/roles/${roleid}`));
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: permissionsType.GET_PERMISSIONS_FAILURE });
		} else {
			store.dispatch({
				type: permissionsType.GET_PERMISSIONS_SUCCESS,
				payload: _res.data[0]?.app_config,
			});
		}
	}
};

export const getSystemUserPermissions = async roleid => {
	store.dispatch({ type: permissionsType.GET_SYSTEMUSER_PERMISSIONS_LOADING });

	let _res = {};

	try {
		_res = await fetchRequest(getURL(`permission/roles/${roleid}`));
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({
				type: permissionsType.GET_SYSTEMUSER_PERMISSIONS_FAILURE,
			});
		} else {
			store.dispatch({
				type: permissionsType.GET_SYSTEMUSER_PERMISSIONS_SUCCESS,
				payload: _res.data[0]?.app_config,
			});
		}
	}
};
