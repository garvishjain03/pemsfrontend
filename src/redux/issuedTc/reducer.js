import { issuedTcType } from "./types";

const contextReducer = (state = {}, action) => {
	switch (action.type) {
		/////////////////////delay Reason//////////

		case issuedTcType.GET_ISSUEDTC_FAILURE:
			return {
				...state,
				issuedTCloading: false,
				issuedTC: [],
			};

		case issuedTcType.GET_ISSUEDTC_LOADING:
			return {
				...state,
				issuedTCloading: true,
				issuedTC: [],
			};

		case issuedTcType.GET_ISSUEDTC_SUCCESS:
			return {
				...state,
				issuedTCloading: false,
				issuedTC: action.payload,
			};

		case issuedTcType.GET_ISSUEDTC_BY_ID_FAILURE:
			return {
				...state,
				issuedTCloading: false,
				issuedTCById: {},
			};

		case issuedTcType.GET_ISSUEDTC_BY_ID_LOADING:
			return {
				...state,
				issuedTCloading: true,
				issuedTCById: {},
			};

		case issuedTcType.GET_ISSUEDTC_BY_ID_SUCCESS:
			return {
				...state,
				issuedTCloading: false,
				issuedTCById: action.payload,
			};

		case issuedTcType.GET_SHIFTDETAIL_FAILURE:
			return {
				...state,
				tcShiftloading: false,
				tcShift: [],
			};

		case issuedTcType.GET_SHIFTDETAIL_LOADING:
			return {
				...state,
				tcShiftloading: true,
				tcShift: [],
			};

		case issuedTcType.GET_SHIFTDETAIL_SUCCESS:
			return {
				...state,
				tcShiftloading: false,
				tcShift: action.payload,
			};

		default:
			return state;
	}
};
export default contextReducer;
