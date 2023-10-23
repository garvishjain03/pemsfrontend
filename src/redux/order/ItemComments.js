// import { orderTypes } from "./types";

const reducer = (state = [], action) => {
	switch (action.type) {
		case "addItemComments":
			return action.payload;
		case "removeCommnets":
			return [];

		default:
			return state;
	}
};

export default reducer;
