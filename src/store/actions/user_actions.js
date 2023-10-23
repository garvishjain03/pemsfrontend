import axios from "axios";
import Cookies from "js-cookie";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";

const URL_SERV = "http://localhost:3005/api/v1";

export const signInUser = async values => {
	try {
		axios.defaults.headers.post["Content-Type"] = "application/json";
		const doc = await axios
			.post(`${URL_SERV}/auth/login`, {
				username: values.email,
				password: values.password,
			})
			.then(res => res);

		Cookies.set("Xauth_token", doc.data.token);
		message.success({ message: translate("SignInUserSucessMessage") });
		return doc;
	} catch (error) {
		message.error({ message: translate("SignInUserError") });
	}
};

export const createUser = async values => {
	try {
		const AdminToken = Cookies.get("Xauth_token");

		var formData = new FormData();
		formData.append("firstName", values.firstName);
		formData.append("lastName", values.lastName);
		formData.append("username", values.username);
		formData.append("password", values.password);
		formData.append("email", values.email);
		formData.append("phone", values.phone);
		formData.append("defaultRole", values.defaultRole);
		formData.append("roles", values.role);

		return await axios({
			method: "post",
			url: `${URL_SERV}/users`,
			data: formData,
			headers: {
				Authorization: `bearer ${AdminToken}`,
				"Content-Type": "multipart/form-data",
			},
		});
	} catch (error) {
		message.error({ message: translate("CreateUserErrorMessage") });
	}
};

export const getUsers = async () => {
	try {
		const AdminToken = Cookies.get("Xauth_token");
		const doc = await axios({
			method: "get",
			url: `${URL_SERV}/users`,
			headers: {
				Authorization: `bearer ${AdminToken}`,
			},
		});
		return { users_list: doc.data.data };
	} catch (error) {}
};

export const Logout = async () => {
	try {
		const AdminToken = Cookies.get("Xauth_token");
		await axios({
			method: "get",
			url: `${URL_SERV}/auth/logout`,
			headers: {
				Authorization: `bearer ${AdminToken}`,
			},
		});

		Cookies.remove("Xauth_token");
		return true;
	} catch (error) {
		message.error({ message: translate("LogoutErrorMessage") });

		return false;
	}
};

export const deleteUser = async id => {
	try {
		const AdminToken = Cookies.get("Xauth_token");
		return await axios({
			method: "delete",
			url: `${URL_SERV}/users/${id}`,
			headers: {
				Authorization: `bearer ${AdminToken}`,
			},
		});
	} catch (error) {
		message.error({ message: translate("DeleteUserErrorMessage") });
	}
};

export const updateUser = async (values, id) => {
	try {
		const adminToken = Cookies.get("Xauth_token");

		var formData = new FormData();
		formData.append("firstName", values.firstName);
		formData.append("lastName", values.lastName);
		formData.append("username", values.username);
		formData.append("password", values.password);
		formData.append("email", values.email);
		formData.append("phone", values.phone);
		formData.append("defaultRole", values.defaultRole);
		formData.append("roles", values.role);

		return await axios({
			method: "put",
			url: `${URL_SERV}/users/${id}`,
			data: formData,
			headers: {
				Authorization: `bearer ${adminToken}`,
				"Content-Type": "multipart/form-data",
			},
		});
	} catch (error) {}
};

export const changeStatus = async (id, status) => {
	try {
		const AdminToken = Cookies.get("Xauth_token");
		return await axios({
			method: "put",
			url: `${URL_SERV}/users/change-status`,
			data: { userid: id, userStatus: status },
			headers: {
				Authorization: `bearer ${AdminToken}`,
			},
		});
	} catch (error) {
		message.error({ message: translate("UpdateStatusErrorMessage") });
	}
};

export const getUser = async id => {
	try {
		const AdminToken = Cookies.get("Xauth_token");
		const doc = await axios({
			method: "get",
			url: `${URL_SERV}/users/${id}`,
			headers: {
				Authorization: `bearer ${AdminToken}`,
			},
		});
		return doc;
	} catch (error) {}
};
