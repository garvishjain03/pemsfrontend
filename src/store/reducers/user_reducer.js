import {
	ACTIVE_ROLE,
	GET_USER,
	USER_DATA,
	USERFULLNAME,
	USER_ROLES,
} from "../types";

export default function userReducer(state = {}, action) {
	switch (action.type) {
		case GET_USER:
			return { ...state, ...action.payload };
		case ACTIVE_ROLE:
			return { ...state, active_role: action.payload };
		case USER_DATA:
			return { ...state, user_data: action.payload };
		case USERFULLNAME:
			return { ...state, user_fullname: action.payload };
		case USER_ROLES:
			return { ...state, user_roles: action.payload };
		default:
			return state;
	}
}
