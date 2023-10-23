import { contextTypes } from "./types";

const contextReducer = (state = {}, action) => {
	switch (action.type) {
		/////////////////////delay Reason//////////

		case contextTypes.GET_DELAYREASONS_FAILURE:
			return {
				...state,
				loading: false,
				delayReason: [],
			};

		case contextTypes.GET_DELAYREASONS_LOADING:
			return {
				...state,
				loading: true,
				delayReason: [],
			};

		case contextTypes.GET_DELAYREASONS_SUCCESS:
			return {
				...state,
				loading: false,
				delayReason: action.payload,
			};

		////////////////////////Characteristics/////////

		case contextTypes.GET_CHARACTERISTICS_FAILURE:
			return {
				...state,
				loading: false,
				characteristics: [],
			};

		case contextTypes.GET_CHARACTERISTICS_LOADING:
			return {
				...state,
				loading: true,
				characteristics: [],
			};

		case contextTypes.GET_CHARACTERISTICS_SUCCESS:
			return {
				...state,
				loading: false,
				characteristics: action.payload,
			};

		//////////////////wattags///

		case contextTypes.GET_WATTAGES_FAILURE:
			return {
				...state,
				loading: false,
				wattages: [],
			};

		case contextTypes.GET_WATTAGES_LOADING:
			return {
				...state,
				loading: true,
				wattages: [],
			};

		case contextTypes.GET_WATTAGES_SUCCESS:
			return {
				...state,
				loading: false,
				wattages: action.payload,
			};

		/////////////////types///
		case contextTypes.GET_TYPES_FAILURE:
			return {
				...state,
				loading: false,
				types: [],
			};

		case contextTypes.GET_TYPES_LOADING:
			return {
				...state,
				loading: true,
				types: [],
			};

		case contextTypes.GET_TYPES_SUCCESS:
			return {
				...state,
				loading: false,
				types: action.payload,
			};
		/////////////////CORE SIZE///
		case contextTypes.GET_CORESIZES_FAILURE:
			return {
				...state,
				loading: false,
				coresizes: [],
			};

		case contextTypes.GET_CORESIZES_LOADING:
			return {
				...state,
				loading: true,
				coresizes: [],
			};

		case contextTypes.GET_CORESIZES_SUCCESS:
			return {
				...state,
				loading: false,
				coresizes: action.payload,
			};

		/////////////////form types/////

		case contextTypes.GET_FORMTYPES_FAILURE:
			return {
				...state,
				loading: false,
				formtypes: [],
			};

		case contextTypes.GET_FORMTYPES_LOADING:
			return {
				...state,
				loading: true,
				formtypes: [],
			};

		case contextTypes.GET_FORMTYPES_SUCCESS:
			return {
				...state,
				loading: false,
				formtypes: action.payload,
			};

		///////////////hold reasons////////
		case contextTypes.GET_HOLDREASONS_FAILURE:
			return {
				...state,
				loading: false,
				holdreasons: [],
			};

		case contextTypes.GET_HOLDREASONS_LOADING:
			return {
				...state,
				loading: true,
				holdreasons: [],
			};

		case contextTypes.GET_HOLDREASONS_SUCCESS:
			return {
				...state,
				loading: false,
				holdreasons: action.payload,
			};
		///////////////////////leaddias///////
		case contextTypes.GET_LEADDIAS_FAILURE:
			return {
				...state,
				loading: false,
				leaddias: [],
			};

		case contextTypes.GET_LEADDIAS_LOADING:
			return {
				...state,
				loading: true,
				leaddias: [],
			};

		case contextTypes.GET_LEADDIAS_SUCCESS:
			return {
				...state,
				loading: false,
				leaddias: action.payload,
			};
		////////////////////leadlengths/////
		case contextTypes.GET_LEADLENGTHS_FAILURE:
			return {
				...state,
				loading: false,
				leadlengths: [],
			};

		case contextTypes.GET_LEADLENGTHS_LOADING:
			return {
				...state,
				loading: true,
				leadlengths: [],
			};

		case contextTypes.GET_LEADLENGTHS_SUCCESS:
			return {
				...state,
				loading: false,
				leadlengths: action.payload,
			};
		///////////mpn suffix lists
		case contextTypes.GET_MPNSUFFIXLISTS_FAILURE:
			return {
				...state,
				loading: false,
				mpnsuffixlists: [],
			};

		case contextTypes.GET_MPNSUFFIXLISTS_LOADING:
			return {
				...state,
				loading: true,
				mpnsuffixlists: [],
			};

		case contextTypes.GET_MPNSUFFIXLISTS_SUCCESS:
			return {
				...state,
				loading: false,
				mpnsuffixlists: action.payload,
			};

		///////////////////////////////tcrs//
		case contextTypes.GET_TCRS_FAILURE:
			return {
				...state,
				loading: false,
				tcrs: [],
			};

		case contextTypes.GET_TCRS_LOADING:
			return {
				...state,
				loading: true,
				tcrs: [],
			};

		case contextTypes.GET_TCRS_SUCCESS:
			return {
				...state,
				loading: false,
				tcrs: action.payload,
			};

		///////////////////shapes/////
		case contextTypes.GET_SHAPES_FAILURE:
			return {
				...state,
				loading: false,
				shapes: [],
			};

		case contextTypes.GET_SHAPES_LOADING:
			return {
				...state,
				loading: true,
				shapes: [],
			};

		case contextTypes.GET_SHAPES_SUCCESS:
			return {
				...state,
				loading: false,
				shapes: action.payload,
			};
		/////////////////tolerances
		case contextTypes.GET_TOLERANCES_FAILURE:
			return {
				...state,
				loading: false,
				tolerances: [],
			};

		case contextTypes.GET_TOLERANCES_LOADING:
			return {
				...state,
				loading: true,
				tolerances: [],
			};

		case contextTypes.GET_TOLERANCES_SUCCESS:
			return {
				...state,
				loading: false,
				tolerances: action.payload,
			};

		/////////////////warehouse
		case contextTypes.GET_WAREHOUSE_FAILURE:
			return {
				...state,
				loading: false,
				warehouse: [],
			};

		case contextTypes.GET_WAREHOUSE_LOADING:
			return {
				...state,
				loading: true,
				warehouse: [],
			};

		case contextTypes.GET_WAREHOUSE_SUCCESS:
			return {
				...state,
				loading: false,
				warehouse: action.payload,
			};
		////////////////wattages to coresizes//
		case contextTypes.GET_WATTAGE_TO_CORESIZES_FAILURE:
			return {
				...state,
				loading: false,
				wattagestocoresize: [],
			};

		case contextTypes.GET_WATTAGE_TO_CORESIZES_LOADING:
			return {
				...state,
				loading: true,
				wattagestocoresize: [],
			};

		case contextTypes.GET_WATTAGE_TO_CORESIZES_SUCCESS:
			return {
				...state,
				loading: false,
				wattagestocoresize: action.payload,
			};

		////////////////////////////core to lead to dia

		case contextTypes.GET_CORESIZE_TO_LEAD_TO_DIA_FAILURE:
			return {
				...state,
				loading: false,
				coresizetoleadtodia: [],
			};

		case contextTypes.GET_CORESIZE_TO_LEAD_TO_DIA_LOADING:
			return {
				...state,
				loading: true,
				coresizetoleadtodia: [],
			};

		case contextTypes.GET_CORESIZE_TO_LEAD_TO_DIA_SUCCESS:
			return {
				...state,
				loading: false,
				coresizetoleadtodia: action.payload,
			};

		//////////////////////coustomers///

		case contextTypes.GET_CUSTOMERS_FAILURE:
			return {
				...state,
				loading: false,
				customers: [],
			};

		case contextTypes.GET_CUSTOMERS_LOADING:
			return {
				...state,
				loading: true,
				customers: [],
			};

		case contextTypes.GET_CUSTOMERS_SUCCESS:
			return {
				...state,
				loading: false,
				customers: action.payload,
			};
		////////////////machine///////
		case contextTypes.GET_MACHINE_FAILURE:
			return {
				...state,
				loading: false,
				machine: [],
			};

		case contextTypes.GET_MACHINE_LOADING:
			return {
				...state,
				loading: true,
				machine: [],
			};

		case contextTypes.GET_MACHINE_SUCCESS:
			return {
				...state,
				loading: false,
				machine: action.payload,
			};

		default:
			return state;
	}
};
export default contextReducer;
