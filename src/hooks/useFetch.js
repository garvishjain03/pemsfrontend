import { useCallback, useEffect, useReducer } from "react";
import { fetchRequest } from "../utils/fetchRequest";

const ACTIONS = {
	START: "START",
	SUCCESS: "SUCCESS",
	FAIL: "FAIL",
	RESET: "RESET",
};

const useFetch = INITIALIZE => {
	const reducer = (state, action) => {
		const { type, payload } = action;

		switch (type) {
			case ACTIONS.START:
				return { loading: true, data: INITIALIZE };

			case ACTIONS.SUCCESS:
				return {
					loading: false,
					data: payload?.data || INITIALIZE,
				};

			case ACTIONS.FAIL:
				return { loading: false, data: INITIALIZE };

			case ACTIONS.RESET:
				return { loading: false, data: INITIALIZE };

			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, {
		loading: false,
		data: INITIALIZE,
	});

	useEffect(() => {
		return () => dispatch({ type: ACTIONS.RESET });
	}, []);

	const handleFetch = useCallback(async (url, options = { method: "GET" }) => {
		let _res = {};

		try {
			dispatch({ type: ACTIONS.START });
			_res = await fetchRequest(url, options);
		} catch (error) {
			console.warn(error.message);
		} finally {
			if (_res.hasError) {
				dispatch({ type: ACTIONS.FAIL });
			} else {
				dispatch({
					type: ACTIONS.SUCCESS,
					payload: { data: _res.data },
				});
			}

			return _res;
		}
	}, []);

	return [handleFetch, state.loading, state.data];
};

export default useFetch;
