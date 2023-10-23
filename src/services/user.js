import { userTypes } from "../redux/user/types";
import { store } from "../store";
import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";
import Cookies from "js-cookie";
import { message } from "../utils/message";
import { translate } from "../utils/translate";
import { userConfig } from "../configs/userConfig";

export const getUser = async id => {
	store.dispatch({ type: userTypes.GET_USER_LOADING });

	let _res = {};

	try {
		_res = await fetchRequest(getURL(`users/${id}`));
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: userTypes.GET_USER_FAILURE });
		} else {
			store.dispatch({
				type: userTypes.GET_USER_SUCCESS,
				payload: _res.data.data.body,
			});
			store.dispatch({
				type: userTypes.GET_USER_CONFIG_SUCCESS,
				payload: userConfig,
			});
		}
	}
};

export const getUsers = async type => {
	store.dispatch({ type: userTypes.GET_USERS_LOADING });
	const query = new URLSearchParams(window.location.search);
	let _res = {};
	// users?firstName=ja&lastName=j&username=4&userStatus=1&defaultRole=3f45b9f1-aa83-4ec7-8874-162062662ea6'
	try {
		if (type) {
			_res = await fetchRequest(getURL(`users`));
		} else if (query.toString()) {
			_res = await fetchRequest(getURL(`users?${query}`));
		} else {
			_res = await fetchRequest(
				getURL(`users?limit=50&offset=0&order_by=firstName&order=asc `)
			);
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: userTypes.GET_USERS_FAILURE });
		} else {
			store.dispatch({
				type: userTypes.GET_USERS_SUCCESS,
				payload: _res.data.data,
			});
		}
	}
};

export const createUser = async value => {
	let _res = {};

	try {
		const formData = new FormData();
		formData.append("firstName", value.firstName);
		formData.append("lastName", value.lastName);
		formData.append("username", value.username);
		formData.append("password", value.password);
		formData.append("email", value.email);
		formData.append("phone", value.phone);
		formData.append("defaultRole", value.defaultRole);
		formData.append("roles", value.role);
		formData.append("profile", value.userImg[0]);

		_res = await fetch(getURL(`users`), {
			method: "POST",
			body: formData,
			headers: {
				Authorization: `Bearer ${Cookies.get("ACCESS_TOKEN")}`,
			},
		});
	} catch (error) {
		console.warn(error);
		message.error({ message: translate("CreateUserErrorMessage") });
	} finally {
		const _data = await _res.json();
		if (_data.code === "0003") {
			message.error({ message: translate("CreateNewUserErrorMessage") });
		}
		if (_data.code === "0019") {
			message.error({ message: translate("PhoneNumberErrorMessage") });
		}
		if (_data.code === "0034") {
			message.error({ message: translate("EmailErrorMessage") });
		}
		if (_data.code === "0036") {
			message.error({ message: translate("UsernameSpaceErrorMessage") });
		}
		if (_data.code === "0033") {
			message.error({ message: translate("PasswordSpaceErrorMessage") });
		}
		return _res;
	}
};

export const updateUser = async (value, id) => {
	let _res = {};

	try {
		const formData = new FormData();
		formData.append("firstName", value.firstName);
		formData.append("lastName", value.lastName);
		formData.append("password", value.password);
		formData.append("email", value.email);
		formData.append("phone", value.phone);
		formData.append("defaultRole", value.defaultRole ? value.defaultRole : "");
		formData.append("user_roles", value.role);
		formData.append("profile", value.userImg[0]);

		_res = await fetch(getURL(`users/${id}`), {
			method: "PUT",
			body: formData,
			headers: {
				Authorization: `Bearer ${Cookies.get("ACCESS_TOKEN")}`,
			},
		});
	} catch (error) {
		console.warn(error);
		message.error({ message: translate("UpdateUserErrorMessage") });
	} finally {
		if (_res && _res.status === 412) {
			const _data = await _res.json();

			if (_data.code === "0019") {
				message.error({ message: translate("PhoneNumberErrorMessage") });
			}
			if (_data.code === "0034") {
				message.error({ message: translate("EmailErrorMessage") });
			}
			if (_data.code === "0033") {
				message.error({ message: translate("PasswordSpaceErrorMessage") });
			}
		}
		return _res;
	}
};
