import { productionReportType } from "./types";

const productionReportReducer = (state = {}, action) => {
	switch (action.type) {
		///////////////////// Get Production Report//////////

		case productionReportType.GET_PRODUCTIONREPORT_FAILURE:
			return {
				...state,
				productionReportLoading: false,
				productionReportData: [],
				count: 0,
			};

		case productionReportType.GET_PRODUCTIONREPORT_LOADING:
			return {
				...state,
				productionReportLoading: true,
				productionReportData: [],
				count: 0,
			};

		case productionReportType.GET_PRODUCTIONREPORT_SUCCESS:
			return {
				...state,
				productionReportLoading: false,
				productionReportData: action.payload,
				count: action.payload.count,
			};

		default:
			return state;
	}
};
export default productionReportReducer;
