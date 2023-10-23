import { commentType } from "./types";

const commentReducer = (state = {}, action) => {
	switch (action.type) {
		/////////////////////delay Reason//////////

		case commentType.GET_COMMENTS_FAILURE:
			return {
				...state,
				commentloading: false,
				comments: [],
			};

		case commentType.GET_COMMENTS_LOADING:
			return {
				...state,
				commentloading: true,
				comments: [],
			};

		case commentType.GET_COMMENTS_SUCCESS:
			return {
				...state,
				commentloading: false,
				comments: action.payload,
			};

		default:
			return state;
	}
};
export default commentReducer;
