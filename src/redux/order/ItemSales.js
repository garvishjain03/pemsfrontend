// import { orderTypes } from "./types";

const reducer = (state = [], action) => {
	switch (action.type) {
		case "new":
			const exist = state.filter(({ id }) => id === action.payload.id);
			if (exist.length > 0) {
				const updatedItem = state.filter(({ id }) => id !== action.payload.id);
				return updatedItem;
			}
			return [...state, action.payload.row];
		case "addAll":
			return action.payload;
		case "removeAll":
			return [];
		default:
			return state;
	}
};

export default reducer;
