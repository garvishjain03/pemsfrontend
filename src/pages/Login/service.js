import Cookies from "js-cookie";
import { getUser } from "../../services/user";
import { getURL } from "../../utils/apiURL";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";
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
		if (_res.status === 200) {
			const _data = await _res.json();
			Cookies.set("ACCESS_TOKEN", _data.token);
			Cookies.set("USER_ID", _data.data.id);
			await getUser(_data.data.id);
			return _data;
		}

		return false;
	}
};
