// import { orderTypes } from "./types";

const reducer = (state = { active: false }, action) => {
	switch (action.type) {
		case "EditaddOrder":
			return action.payload;
		case "EditremoveOrder":
			return {
				active: false,
			};
		default:
			return state;
	}
};

export default reducer;
