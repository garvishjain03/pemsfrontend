import { permissionsType } from "./types";

const permissionsReducer = (state = {}, action) => {
	switch (action.type) {
		/////////////////////get permissions//////////

		case permissionsType.GET_PERMISSIONS_FAILURE:
			return {
				...state,
				loading: false,
				permissions: {},
			};

		case permissionsType.GET_PERMISSIONS_LOADING:
			return {
				...state,
				loading: true,
				permissions: {},
			};

		case permissionsType.GET_PERMISSIONS_SUCCESS:
			return {
				...state,
				loading: false,
				permissions: action.payload,
			};

		case permissionsType.GET_SYSTEMUSER_PERMISSIONS_FAILURE:
			return {
				...state,
				loading: false,
				systemUserPermissions: {},
			};

		case permissionsType.GET_SYSTEMUSER_PERMISSIONS_LOADING:
			return {
				...state,
				loadingsystempermission: true,
				systemUserPermissions: {},
			};

		case permissionsType.GET_SYSTEMUSER_PERMISSIONS_SUCCESS:
			return {
				...state,
				loadingsystempermission: false,
				systemUserPermissions: action.payload,
			};

		default:
			return state;
	}
};
export default permissionsReducer;
