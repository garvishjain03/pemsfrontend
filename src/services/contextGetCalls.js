import * as ROUTES from "../configs/routes";
import { contextTypes } from "../redux/context/types";
import { store } from "../store";
import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";

export const getMachine = async argsQuery => {
	store.dispatch({ type: contextTypes.GET_MACHINE_LOADING });
	const query = new URLSearchParams(window.location.search);
	let _res = {};

	try {
		if (argsQuery == "all") {
			_res = await fetchRequest(getURL(`machine?order_by=name&order=asc`));
		} else if (argsQuery) {
			_res = await fetchRequest(
				getURL(`machine?${argsQuery}&order_by=name&order=asc`)
			);
		} else if (
			query.toString() &&
			window.location.pathname === ROUTES.MACHINEMANGEMENT
		) {
			_res = await fetchRequest(getURL(`machine?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`machine?limit=50&offset=0&order_by=name&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_MACHINE_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_MACHINE_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getCustomers = async searchQuery => {
	store.dispatch({ type: contextTypes.GET_CUSTOMERS_LOADING });
	const query = new URLSearchParams(window.location.search);
	let _res = {};

	try {
		if (searchQuery === "ALL") {
			_res = await fetchRequest(
				getURL(`customer?filterType=dropdown&order=asc&order_by=name`)
			);
		} else if (searchQuery) {
			_res = await fetchRequest(
				getURL(`customer?${searchQuery}&limit=50&offset=0&order=asc`)
			);
		} else if (
			query.toString() &&
			window.location.pathname === ROUTES.CUSTOMERS
		) {
			_res = await fetchRequest(getURL(`customer?${query}&order=asc`));
		} else {
			_res = await fetchRequest(
				getURL(`customer?limit=50&offset=0&order_by=name&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_CUSTOMERS_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_CUSTOMERS_SUCCESS,
				payload: _res.data,
			});
		}
	}
};
export const getWattages = async searchQuery => {
	store.dispatch({ type: contextTypes.GET_WATTAGES_LOADING });
	const query = new URLSearchParams(window.location.search);
	let _res = {};

	try {
		if (searchQuery) {
			_res = await fetchRequest(
				getURL(`wattages?${searchQuery}&limit=50&offset=0&`)
			);
		} else if (
			query.toString() &&
			window.location.pathname === ROUTES.WATTAGES
		) {
			_res = await fetchRequest(getURL(`wattages?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`wattages?limit=100&offset=0&order_by=value&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_WATTAGES_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_WATTAGES_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getCharacteristics = async searchQuery => {
	store.dispatch({ type: contextTypes.GET_CHARACTERISTICS_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (searchQuery) {
			_res = await fetchRequest(
				getURL(`characteristics?${searchQuery}&limit=50&offset=0&`)
			);
		} else if (
			query.toString() &&
			window.location.pathname === ROUTES.CHARACTERISTICS
		) {
			_res = await fetchRequest(getURL(`characteristics?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`characteristics?limit=100&offset=0&order_by=value&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_CHARACTERISTICS_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_CHARACTERISTICS_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getDelayReasons = async () => {
	store.dispatch({ type: contextTypes.GET_DELAYREASONS_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (query.toString() && window.location.pathname === ROUTES.DELAYREASON) {
			_res = await fetchRequest(getURL(`delayreasons?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`delayreasons?limit=50&offset=0&order_by=value&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_DELAYREASONS_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_DELAYREASONS_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getTypes = async searchQuery => {
	store.dispatch({ type: contextTypes.GET_TYPES_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (searchQuery) {
			_res = await fetchRequest(
				getURL(`types?${searchQuery}&limit=50&offset=0&`)
			);
		} else if (query.toString() && window.location.pathname === ROUTES.TYPES) {
			_res = await fetchRequest(getURL(`types?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`types?limit=100&offset=0&order_by=value&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_TYPES_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_TYPES_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getCoreSizes = async () => {
	store.dispatch({ type: contextTypes.GET_CORESIZES_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (query.toString() && window.location.pathname === ROUTES.CORESIZES) {
			_res = await fetchRequest(getURL(`coresizes?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`coresizes?limit=50&offset=0&order_by=value&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_CORESIZES_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_CORESIZES_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getHoldReasons = async () => {
	store.dispatch({ type: contextTypes.GET_HOLDREASONS_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (query.toString() && window.location.pathname === ROUTES.HOLDREASONS) {
			_res = await fetchRequest(getURL(`holdreasons?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`holdreasons?limit=50&offset=0&order_by=value&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_HOLDREASONS_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_HOLDREASONS_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getFormTypes = async searchQuery => {
	store.dispatch({ type: contextTypes.GET_FORMTYPES_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (searchQuery) {
			_res = await fetchRequest(
				getURL(`formtypes?${searchQuery}&limit=50&offset=0&`)
			);
		} else if (
			query.toString() &&
			window.location.pathname === ROUTES.FORMTYPES
		) {
			_res = await fetchRequest(getURL(`formtypes?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`formtypes?limit=100&offset=0&order_by=value&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_FORMTYPES_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_FORMTYPES_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getLeadDias = async searchQuery => {
	store.dispatch({ type: contextTypes.GET_LEADDIAS_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (searchQuery) {
			_res = await fetchRequest(
				getURL(`leaddias?${searchQuery}&limit=50&offset=0&`)
			);
		} else if (
			query.toString() &&
			window.location.pathname === ROUTES.LEADDIAS
		) {
			_res = await fetchRequest(getURL(`leaddias?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`leaddias?limit=100&offset=0&order_by=value&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_LEADDIAS_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_LEADDIAS_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getLeadLengths = async searchQuery => {
	store.dispatch({ type: contextTypes.GET_LEADLENGTHS_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (searchQuery) {
			_res = await fetchRequest(
				getURL(`leadlengths?${searchQuery}&limit=50&offset=0&`)
			);
		} else if (
			query.toString() &&
			window.location.pathname === ROUTES.LEADLENGTHS
		) {
			_res = await fetchRequest(getURL(`leadlengths?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`leadlengths?limit=100&offset=0&order_by=value&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_LEADLENGTHS_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_LEADLENGTHS_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getMpnSuffixLists = async () => {
	store.dispatch({ type: contextTypes.GET_MPNSUFFIXLISTS_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (
			query.toString() &&
			window.location.pathname === ROUTES.MPNSUFFIXLISTS
		) {
			_res = await fetchRequest(getURL(`mpnsuffixlists?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`mpnsuffixlists?limit=50&offset=0&order_by=value&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_MPNSUFFIXLISTS_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_MPNSUFFIXLISTS_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getShapes = async searchQuery => {
	store.dispatch({ type: contextTypes.GET_SHAPES_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (searchQuery) {
			_res = await fetchRequest(
				getURL(`shapes?${searchQuery}&limit=50&offset=0&`)
			);
		} else if (query.toString() && window.location.pathname === ROUTES.SHAPES) {
			_res = await fetchRequest(getURL(`shapes?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`shapes?limit=100&offset=0&order_by=value&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_SHAPES_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_SHAPES_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getTcrs = async searchQuery => {
	store.dispatch({ type: contextTypes.GET_TCRS_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (searchQuery) {
			_res = await fetchRequest(
				getURL(`tcrs?${searchQuery}&limit=50&offset=0&`)
			);
		} else if (query.toString() && window.location.pathname === ROUTES.TCRS) {
			_res = await fetchRequest(getURL(`tcrs?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`tcrs?limit=100&offset=0&order_by=value&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_TCRS_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_TCRS_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getTolerances = async searchQuery => {
	store.dispatch({ type: contextTypes.GET_TOLERANCES_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (searchQuery) {
			_res = await fetchRequest(
				getURL(`tolerances?${searchQuery}&limit=50&offset=0&`)
			);
		} else if (
			query.toString() &&
			window.location.pathname === ROUTES.TOLERANCES
		) {
			_res = await fetchRequest(getURL(`tolerances?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`tolerances?limit=100&offset=0&order_by=value&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_TOLERANCES_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_TOLERANCES_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getWareHouse = async searchQuery => {
	store.dispatch({ type: contextTypes.GET_WAREHOUSE_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (searchQuery) {
			_res = await fetchRequest(
				getURL(`warehouse?${searchQuery}&limit=50&offset=0&`)
			);
		} else if (
			query.toString() &&
			window.location.pathname === ROUTES.WAREHOUSE
		) {
			_res = await fetchRequest(getURL(`warehouse?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`warehouse?limit=100&offset=0&order_by=value&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_WAREHOUSE_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_WAREHOUSE_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getWattageToCoresizes = async () => {
	store.dispatch({ type: contextTypes.GET_WATTAGE_TO_CORESIZES_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (
			query.toString() &&
			window.location.pathname.includes(ROUTES.WATTAGETOCORESIZE)
		) {
			_res = await fetchRequest(getURL(`wattage-to-coresizes?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`wattage-to-coresizes?limit=100&offset=0&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: contextTypes.GET_WATTAGE_TO_CORESIZES_FAILURE });
		} else {
			store.dispatch({
				type: contextTypes.GET_WATTAGE_TO_CORESIZES_SUCCESS,
				payload: _res.data,
			});
		}
	}
};

export const getCoresizesToLeadLengthandDia = async () => {
	store.dispatch({ type: contextTypes.GET_CORESIZE_TO_LEAD_TO_DIA_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (query.toString()) {
			_res = await fetchRequest(
				getURL(`coresize-to-leadlength-and-leaddia?${query}`)
			);
		} else {
			_res = await fetchRequest(
				getURL(`coresize-to-leadlength-and-leaddia?limit=50&offset=0&order=asc`)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({
				type: contextTypes.GET_CORESIZE_TO_LEAD_TO_DIA_FAILURE,
			});
		} else {
			store.dispatch({
				type: contextTypes.GET_CORESIZE_TO_LEAD_TO_DIA_SUCCESS,
				payload: _res.data,
			});
		}
	}
};
