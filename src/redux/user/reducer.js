import { userTypes } from "./types";

const reducer = (state = {}, action) => {
	switch (action.type) {
		case userTypes.GET_USER_LOADING:
			return {
				...state,
				loadingUser: true,
				user: {},
				active_role: null,
			};

		case userTypes.GET_USER_SUCCESS: {
			const _defaultRole = action.payload.defaultRole;
			const _userroles = action.payload.userroles;

			_userroles.find(({ roleid }) => {
				return roleid === _defaultRole;
			});

			return {
				...state,
				loadingUser: false,
				user: action.payload,
				active_role: localStorage.getItem("active_role"),
			};
		}

		case userTypes.GET_USER_FAILURE:
			return {
				...state,
				loadingUser: false,
				user: {},
				active_role: null,
			};
		// get users for table
		case userTypes.GET_USERS_LOADING:
			return {
				...state,
				loadingUsers: true,
				users: [],
			};

		case userTypes.GET_USERS_SUCCESS:
			const users = action.payload?.rows?.map(item => {
				return {
					...item,
					name: `${item.firstName} ${item.lastName}`,
				};
			});
			const sortedUsers = (users = []) => {
				let superadmin = users.find(user => user.username === "superadmin");

				let result = users.filter(user => user.username !== "superadmin");
				result = result.sort((a, b) => a.firstName.localeCompare(b.firstName));

				return superadmin ? [superadmin, ...result] : result;
			};
			return {
				...state,
				loadingUsers: false,
				users: { data: users, count: action?.payload?.count },
			};

		case userTypes.GET_USERS_FAILURE:
			return {
				...state,
				loadingUsers: false,
				users: [],
			};

		// Get roles
		case userTypes.GET_ROLES_LOADING:
			return {
				...state,
				loadingUsers: true,
				data: [],
			};

		case userTypes.GET_ROLES_FAILURE:
			return {
				...state,
				loadingUsers: false,
				data: [],
			};

		case userTypes.GET_ROLES_SUCCESS:
			return {
				...state,
				data: action.payload,
			};

		/////////////////////////////////////////Get config/////
		case userTypes.GET_USER_CONFIG_LOADING:
			return {
				...state,
				loadingConfig: true,
				data: [],
			};

		case userTypes.GET_USER_CONFIG_FAILURE:
			return {
				...state,
				loadingConfig: false,
				data: [],
			};

		case userTypes.GET_USER_CONFIG_SUCCESS:
			return {
				...state,
				loadingConfig: false,
				userConfig: action.payload,
			};

		case userTypes.ACTIVE_ROLE:
			return {
				...state,
				active_role: action.payload,
			};
		////////////delay reasons

		case userTypes.SET_USERS_QUERIES:
			return {
				...state,
				user_query_params: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
