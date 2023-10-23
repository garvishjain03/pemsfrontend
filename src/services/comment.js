import { commentType } from "../redux/comment/types";
import { store } from "../store";
import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";

export const getComment = async (query, type) => {
	store.dispatch({ type: commentType.GET_COMMENTS_LOADING });
	// const query = new URLSearchParams(window.location.search);

	let _res = {};
	let path = "comments?";
	if (type == "salesitem") {
		path = "comments/";
	} else if (type === "workordercomments") {
		path = "workordercomments/";
	}
	try {
		if (query) {
			_res = await fetchRequest(getURL(`${path}${query}`));
		}
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: commentType.GET_COMMENTS_FAILURE });
		} else {
			store.dispatch({
				type: commentType.GET_COMMENTS_SUCCESS,
				payload: _res.data?.rows,
			});
		}
	}
};
