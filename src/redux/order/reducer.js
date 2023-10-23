import { orderTypes } from "./types";

const reducer = (state = {}, action) => {
	switch (action.type) {
		case orderTypes.GETCOUNT:
			return {
				...state,
				allcount: action.payload,
			};
		case orderTypes.GET_ALL_ORDER_LOADING:
			return {
				...state,
				loadingOrders: true,
				allorders: [],
			};
		case orderTypes.GET_ALL_ORDER_FAILURE:
			return {
				...state,
				loadingOrders: false,
				allorders: [],
			};
		case orderTypes.GET_ALL_ORDER_SUCCESS:
			return {
				...state,
				loadingOrders: false,
				allorders: action.payload,
			};
		case orderTypes.GET_SALES_EXCEL_UPLOAD_LOADING:
			return {
				...state,
				excelUploadLoading: true,
				excelUploadDetails: [],
			};
		case orderTypes.GET_SALES_EXCEL_UPLOAD_SUCCESS:
			return {
				...state,
				excelUploadLoading: false,
				excelUploadDetails: action.payload,
			};
		case orderTypes.GET_SALES_EXCEL_UPLOAD_FAILURE:
			return {
				...state,
				excelUploadLoading: false,
				excelUploadDetails: [],
			};

		case orderTypes.FILE_ID:
			return {
				...state,
				fileId: action.payload,
			};
		case orderTypes.REMOVE_FILE_ID:
			return {
				...state,
				fileId: null,
			};

		case orderTypes.GET_ALL_ACCEPTED_ORDER_SUCCESS:
			return {
				...state,
				loadingOrders: false,
				allAcceptedOrders: action.payload,
			};

		case orderTypes.GET_ALL_ORDER_COUNT_LOADING:
			return {
				...state,
				loadingOrderCount: true,
			};
		case orderTypes.GET_ALL_ORDER_COUNT_FAILURE:
			return {
				...state,
				loadingOrderCount: false,
			};
		case orderTypes.GET_ALL_ORDER_COUNT_SUCCESS:
			return {
				...state,
				allOrderCount: action.payload,
				loadingOrderCount: false,
			};

		case orderTypes.GET_ALL_PENDING_ORDER_COUNT_LOADING:
			return {
				...state,
				loadingPendingOrder: true,
			};
		case orderTypes.GET_ALL_PENDING_ORDER_COUNT_FAILURE:
			return {
				...state,
				loadingPendingOrder: false,
			};
		case orderTypes.GET_ALL_PENDING_ORDER_COUNT_SUCCESS:
			return {
				...state,
				loadingPendingOrder: false,
				PendingOrderCount: action.payload,
			};

		case orderTypes.GET_ALL_RECHECK_ORDER_COUNT_LOADING:
			return {
				...state,
				RecheckOrderOrders: true,
			};
		case orderTypes.GET_ALL_RECHECK_ORDER_COUNT_FAILURE:
			return {
				...state,
				RecheckOrderOrders: false,
			};
		case orderTypes.GET_ALL_RECHECK_ORDER_COUNT_SUCCESS:
			return {
				...state,
				RecheckOrderOrders: false,
				RecheckOrderCount: action.payload,
			};

		case orderTypes.GET_ALL_ORDERITEM_LOADING:
			return {
				...state,
				loadingItems: true,
				allitems: [],
			};

		case orderTypes.GET_ALL_WORKORDER__LOADING:
			return {
				...state,
				workorderLoading: true,
				workorder: [],
			};
		case orderTypes.GET_ALL_WORKORDER__FAILURE:
			return {
				...state,
				workorderLoading: false,
				workorder: [],
			};
		case orderTypes.GET_ALL_WORKORDER_SUCCESS:
			return {
				...state,
				workorderLoading: false,
				workorder: action.payload,
			};

		case orderTypes.GET_ALL_PACKINGITEMS_LOADING:
			return {
				...state,
				packingItemLoading: true,
				packingItems: [],
			};
		case orderTypes.GET_ALL_PACKINGITEMS_FAILURE:
			return {
				...state,
				packingItemLoading: false,
				packingItems: [],
			};
		case orderTypes.GET_ALL_PACKINGITEMS_SUCCESS:
			return {
				...state,
				packingItemLoading: false,
				packingItems: action.payload,
			};

		case orderTypes.GET_ALL_DISPATCHITEMS_LOADING:
			return {
				...state,
				dispatchItemLoading: true,
				dispatchItems: [],
			};
		case orderTypes.GET_ALL_DISPATCHITEMS_FAILURE:
			return {
				...state,
				dispatchItemLoading: false,
				dispatchItems: [],
			};
		case orderTypes.GET_ALL_DISPATCHITEMS_SUCCESS:
			return {
				...state,
				dispatchItemLoading: false,
				dispatchItems: action.payload,
			};

		case orderTypes.GET_ALL_PENDING_ORDER_COUNT_LOADING:
			return {
				...state,
				workorderShiftCountLoading: true,
				workorderShiftCount: [],
			};
		case orderTypes.GET_ALL_TOTALSHIFTCOUNT_FAILURE:
			return {
				...state,
				workorderShiftCountLoading: false,
				workorderShiftCount: [],
			};
		case orderTypes.GET_ALL_TOTALSHIFTCOUNT_SUCCESS:
			return {
				...state,
				workorderShiftCountLoading: false,
				workorderShiftCount: action.payload,
			};
		// case orderTypes.GETWORKORDER:
		// 	return {
		// 		...state,
		// 		loadingItems: true,
		// 		workorder: action.payload,
		// 	};
		case orderTypes.GET_ALL_ORDERITEM_FAILURE:
			return {
				...state,
				loadingItems: false,
				allitems: [],
			};
		case orderTypes.GET_ALL_ORDERITEM_SUCCESS:
			return {
				...state,
				loadingItems: false,
				allitems: action.payload,
			};

		case orderTypes.CURRENT_VIEW_ORDERID:
			return {
				...state,
				currentOrderId: action.payload,
			};

		case orderTypes.SET_DRAWER_SALES_QUERY:
			return {
				...state,
				drawersalesquery: action.payload,
			};

		case orderTypes.INDIVIDUAL_ITEM:
			return {
				...state,
				individualItem: action.payload,
			};
		case orderTypes.INDIVIDUAL_ITEM_DETAILS:
			return {
				...state,
				individualItemDetails: [action.payload.original],
			};
		case "WORK_ORDER_COMPLETE_QTY":
			return {
				...state,
				workOrderCompleteQty: action.payload,
			};
		case "ITEM_HISTORY":
			let formattedData = {
				PACKED: [],
				UNPACKED: [],
				DISPATCHED: [],
				RETURN: [],
			};
			action.payload?.forEach(element => {
				const type = element.action_type;
				formattedData[type].push(element);
			});
			return {
				...state,
				itemHistory: formattedData,
			};
		case "DRAWER_STATUS":
			return {
				...state,
				drawerStatus: action.payload?.opened,
			};
		case "LOADING":
			return {
				...state,
				loading: action.payload,
			};
		case "DRAWER_OPENED":
			return {
				...state,
				drawerOpened: true,
			};
		case "DRAWER_CLOSED":
			return {
				...state,
				drawerOpened: false,
			};
		default:
			return state;
	}
};

export default reducer;
