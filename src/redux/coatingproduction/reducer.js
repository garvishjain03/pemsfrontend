import { coatingProductionType } from "./types";

const coatingProductionReducer = (state = {}, action) => {
	switch (action.type) {
		/////////////////////coating production//////////

		case coatingProductionType.GET_COATIONPRODUCTION_FAILURE:
			return {
				...state,
				coatingproductionloading: false,
				coatingproduction: [],
				count: 0,
			};

		case coatingProductionType.GET_COATIONPRODUCTION_LOADING:
			return {
				...state,
				coatingproductionloading: true,
				coatingproduction: [],
				count: 0,
			};

		case coatingProductionType.GET_COATIONPRODUCTION_SUCCESS:
			return {
				...state,
				coatingproductionloading: false,
				coatingproduction: action.payload.rows,
				count: action.payload.count,
			};

		default:
			return state;
	}
};
export default coatingProductionReducer;
