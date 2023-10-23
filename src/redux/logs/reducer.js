import { logsType } from "./type";

const logsReducer = (state = {}, action) => {
	switch (action.type) {
		case logsType.LOGS:
			return {
				...state,
				logs: action.payload,
				count: action.payload?.count,
			};
		case logsType.CLEAR_LOGS:
			return {
				...state,
				logs: [],
				count: action.payload?.count,
			};
		default:
			return state;
	}
};
export default logsReducer;
