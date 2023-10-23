import Cookies from "js-cookie";
import { activeRole } from "../redux/user/actions";
import { getUser } from "../services/user";
import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";
import { message } from "../utils/message";
import { translate } from "../utils/translate";

export const login = async data => {
	let _res = {};

	try {
		_res = await fetch(getURL("auth/login"), {
			method: "POST",
			body: JSON.stringify({
				username: data.email,
				password: data.password,
			}),
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.warn(error);
		message.error({ message: translate("LoginErrorMessage") });
	} finally {
		const _data = await _res.json();
		if (_data.code === "0006") {
			message.error({ message: translate("LoginUserNameErrorMessage") });
		} else if (_data.code === "0005") {
			message.error({ message: translate("LoginPasswrodErroMessage") });
		} else if (_data.code === "0004") {
			message.error({ message: translate("LoginDeactivatedUserErrorMessage") });
		} else if (_res.status === 200) {
			Cookies.set("ACCESS_TOKEN", _data.token);
			Cookies.set("USER_ID", _data.data.id);

			const _defaultRole = _data.data.defaultRole;
			const _userroles = _data.data.all_user_role;

			const _activeRole = _userroles.find(role => {
				return role?.allroles?.id === _defaultRole;
			});

			const _activeRoleTitle = _activeRole?.allroles?.slug;
			localStorage.setItem("active_role", _activeRoleTitle);
			localStorage.setItem("active_roleid", _activeRole.allroles?.id);
			activeRole(localStorage.getItem("active_role"));
			getUser(_data.data.id);
			message.success({ message: translate("LoginSuccessMessage") });
			return _data;
		}

		return false;
	}
};

export const logout = async () => {
	let _res = {};
	try {
		_res = await fetchRequest(getURL("auth/logout"));
	} catch (error) {
		console.warn(error);
		message.error({ message: translate("LogoutErrorMessage") });
	} finally {
		if (_res.status === 200) {
			Cookies.remove("ACCESS_TOKEN");
			Cookies.remove("USER_ID");
			return true;
		}
		return false;
	}
};

export const showPassword = async id => {
	let _res = {};
	try {
		_res = await fetch(getURL(`users/${id}/showpassword`), {
			method: "GET",
			headers: {
				Authorization: `Bearer ${Cookies.get("ACCESS_TOKEN")}`,
			},
		});
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.status === 200) {
			const _data = await _res.json();
			return _data.password;
		}
	}
};
