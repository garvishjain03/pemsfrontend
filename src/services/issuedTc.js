import * as ROUTES from "../configs/routes";
import { issuedTcType } from "../redux/issuedTc/types";
import { store } from "../store";
import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";
import { message } from "../utils/message";
import { translate } from "../utils/translate";

export const getIssuedTc = async id => {
	store.dispatch({ type: issuedTcType.GET_ISSUEDTC_LOADING });
	const query = new URLSearchParams(window.location.search);

	let _res = {};

	try {
		if (id) {
			_res = await fetchRequest(getURL(`issuetc?tcworkorderno${id}`));
		} else if (
			query.toString() &&
			window.location.pathname === ROUTES.ISSUEDTC
		) {
			_res = await fetchRequest(
				getURL(`issuetc?${query}&order_by=createdAt&order=desc`)
			);
		} else {
			_res = await fetchRequest(
				getURL(`issuetc?limit=100&order_by=createdAt&order=desc`)
			);
		}
	} catch (error) {
		store.dispatch({ type: issuedTcType.GET_ISSUEDTC_FAILURE });
		console.warn(error);
	} finally {
		if (_res.hasError) {
			console.warn("hasError");
		} else {
			store.dispatch({
				type: issuedTcType.GET_ISSUEDTC_SUCCESS,
				payload: _res.data?.body,
			});
		}
	}
};
export const editIssuedTc = async (id, body) => {
	let _res = {};

	try {
		_res = await fetchRequest(getURL(`issuetc/${id}`), {
			method: "PUT",
			body: JSON.stringify(body),
		});
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
		} else {
			message.success({
				message: translate(`Tc  Edited Successfully`),
			});
			getIssuedTc();
		}
	}
};
export const editShifitTc = async (id, body, tcId, status, quantity) => {
	let _res = {};

	try {
		_res = await fetchRequest(getURL(`shifttc/${id}`), {
			method: "PUT",
			body: JSON.stringify({ ...body, status, quantity }),
		});
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
		} else {
			message.success({
				message: translate(`Tc Shift Edited Successfully`),
			});
			getShiftDetails(tcId);
		}
	}
};

export const addShiftDetails = async body => {
	let _res = {};

	try {
		_res = await fetchRequest(getURL(`actions/tc/addshiftsection`), {
			method: "POST",
			body: JSON.stringify(body),
		});
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
		} else {
			message.success({
				message: translate(`Tc Shift Added Successfully`),
			});
			getShiftDetails(body?.tcid);
		}
	}
};

export const deleteShiftDetails = async (shiftId, tcId, body) => {
	let _res = {};

	try {
		_res = await fetchRequest(
			getURL(`/actions/tc/deleteshiftsection/${shiftId}`),
			{
				method: "PUT",
				body: JSON.stringify(body),
			}
		);
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
		} else {
			message.success({
				message: translate(`Tc Shift Deleted Successfully`),
			});
			getShiftDetails(tcId);
		}
	}
};

export const getIssuedTcById = async id => {
	store.dispatch({ type: issuedTcType.GET_ISSUEDTC_BY_ID_LOADING });

	let _res = {};

	try {
		if (id) {
			_res = await fetchRequest(getURL(`issuetc/${id}`));
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: issuedTcType.GET_ISSUEDTC_BY_ID_FAILURE });
		} else {
			store.dispatch({
				type: issuedTcType.GET_ISSUEDTC_BY_ID_SUCCESS,
				payload: _res.data?.body,
			});
		}
	}
};
export const getCuttingTc = async () => {
	store.dispatch({ type: issuedTcType.GET_ISSUEDTC_LOADING });
	const query = new URLSearchParams(window.location.search);

	const status = {
		CUTTINGOP: "CUTTING",
		COATINGOP: "COATING",
		WELDINGOP: "WELDING",
		WINDINGOP: "WINDING",
	};

	const roleStatus = status[localStorage.getItem("active_role")]
		? status[localStorage.getItem("active_role")]
		: "";
	let _res = {};

	try {
		if (query.toString()) {
			if (localStorage.getItem("active_role") === "CHECKINGOP") {
				_res = await fetchRequest(
					getURL(
						`issuetc/checkingoperator?${query}&status=${roleStatus}&order_by=wodeliverydate&order=asc`
					)
				);
			} else {
				_res = await fetchRequest(
					getURL(
						`issuetc?${query}&status=${roleStatus}&order_by=wodeliverydate&order=asc`
					)
				);
			}
		} else if (localStorage.getItem("active_role") === "CHECKINGOP") {
			_res = await fetchRequest(getURL(`issuetc/checkingoperator`));
		} else {
			_res = await fetchRequest(
				getURL(
					`issuetc?status=${roleStatus}&limit=100&order_by=wodeliverydate&order=asc`
				)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: issuedTcType.GET_ISSUEDTC_FAILURE });
		} else {
			store.dispatch({
				type: issuedTcType.GET_ISSUEDTC_SUCCESS,
				payload:
					localStorage.getItem("active_role") === "CHECKINGOP"
						? _res?.data
						: _res.data?.body,
			});
		}
	}
};

export const getShiftDetails = async id => {
	store.dispatch({ type: issuedTcType.GET_SHIFTDETAIL_LOADING });

	let _res = {};

	try {
		_res = await fetchRequest(getURL(`shifttc/${id}`));
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: issuedTcType.GET_SHIFTDETAIL_FAILURE });
		} else {
			store.dispatch({
				type: issuedTcType.GET_SHIFTDETAIL_SUCCESS,
				payload: _res.data,
			});
		}
	}
};
