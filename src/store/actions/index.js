import {
	GET_USER,
	LOGOUT,
	ACTIVE_ROLE,
	USER_DATA,
	USERFULLNAME,
	USER_ROLES,
} from "../types";
import * as userApi from "./user_actions";

export const getUsers = () => ({
	type: GET_USER,
	payload: userApi.getUsers(),
});

export const logout = () => ({
	type: LOGOUT,
});

export const activeRole = role => ({
	type: ACTIVE_ROLE,
	payload: role,
});

export const getUserData = user => ({
	type: USER_DATA,
	payload: user,
});

export const getFullname = name => ({
	type: USERFULLNAME,
	payload: name,
});

export const getUserRoles = roles => ({
	type: USER_ROLES,
	payload: roles,
});
