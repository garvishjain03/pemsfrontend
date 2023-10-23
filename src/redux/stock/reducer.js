import { stockType } from "./type";

const reducer = (state = {}, action) => {
	switch (action.type) {
		case stockType.TOTAL_STOCK_CLICK:
			return {
				...state,
				totalStockClick: action.payload,
			};
		case stockType.TOTAL_RETURNS_CLICK:
			return {
				...state,
				totalReturnsClick: action.payload,
			};
		case stockType.CLOSE:
			return {
				...state,
				totalStockClick: false,
				totalReturnsClick: false,
			};
		case stockType.CLICKED_ROW_DETAILS:
			return {
				...state,
				clickedRowDetails: action.payload,
			};
		case stockType.GET_ALL_STOCK_LOADING:
			return {
				...state,
				stockHomeLoading: true,
				stockHomeItems: [],
			};
		case stockType.GET_ALL_STOCK_FAILURE:
			return {
				...state,
				stockHomeLoading: false,
				stockHomeItems: [],
			};
		case stockType.GET_ALL_STOCK_SUCCESS:
			return {
				...state,
				stockHomeLoading: false,
				stockHomeItems: action.payload,
			};
		case stockType.GET_ALL_STOCK_HISTORY_LOADING:
			return {
				...state,
				stockHistoryLoading: true,
				stockHistoryItems: [],
			};
		case stockType.GET_ALL_STOCK_HISTORY_FAILURE:
			return {
				...state,
				stockHistoryLoading: false,
				stockHistoryItems: [],
			};
		case stockType.GET_ALL_STOCK_HISTORY_SUCCESS:
			return {
				...state,
				stockHistoryLoading: false,
				stockHistoryItems: action.payload,
			};

		case stockType.TOTAL_PACKED_STOCK_CLICK:
			return {
				...state,
				totalPackedStockClick: action.payload,
			};
		case stockType.GET_ALL_PACKED_STOCK_LOADING:
			return {
				...state,
				totalPackedStockLoading: true,
				totalPackedStockItems: [],
			};
		case stockType.GET_ALL_PACKED_STOCK_FAILURE:
			return {
				...state,
				totalPackedStockLoading: false,
				totalPackedStockItems: [],
			};
		case stockType.GET_ALL_PACKED_STOCK_SUCCESS:
			return {
				...state,
				totalPackedStockLoading: false,
				totalPackedStockItems: action.payload,
			};
		case stockType.GET_ALL_RETURN_HISTORY_LOADING:
			return {
				...state,
				returnHistoryLoading: true,
				returnHistoryItems: [],
			};
		case stockType.GET_ALL_RETURN_HISTORY_FAILURE:
			return {
				...state,
				returnHistoryLoading: false,
				returnHistoryItems: [],
			};
		case stockType.GET_ALL_RETURN_HISTORY_SUCCESS:
			return {
				...state,
				returnHistoryLoading: false,
				returnHistoryItems: action.payload,
			};
		case stockType.GET_ALL_MPN:
			// let data = action.payload?.map(obj => {
			// 	return { label: obj.mpn, value: obj.mpn };
			// });
			return {
				...state,
				mpn: action.payload,
			};
		case stockType.STOCK_QUANTITY:
			return {
				...state,
				stockQuantity: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
