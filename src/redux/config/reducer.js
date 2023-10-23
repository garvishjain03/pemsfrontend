import { configTypes, orderTypes } from "./types";

const reducer = (state = {}, action) => {
	switch (action.type) {
		case configTypes.GET_ALL_ITEMEDITFIELD_LOADING:
			return {
				...state,
				loadingItemField: true,
				itemEditFields: [],
			};

		case configTypes.GET_ALL_ITEMEDITFIELD_FAILURE:
			return {
				...state,
				loadingItemField: false,
				itemEditFields: [],
			};
		case configTypes.GET_ALL_ITEMEDITFIELD_SUCCESS:
			return {
				...state,
				loadingItemField: false,
				itemEditFields: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
