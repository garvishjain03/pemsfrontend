import { store } from "../../store";
import { userTypes } from "./types";

export const activeRole = role => {
	store.dispatch({
		type: userTypes.ACTIVE_ROLE,
		payload: role,
	});
};
