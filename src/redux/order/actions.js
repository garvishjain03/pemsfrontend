import { store } from "../../store";
import { orderTypes } from "./types";

export const currentViewOrderId = orderId => {
	store.dispatch({
		type: orderTypes.CURRENT_VIEW_ORDERID,
		payload: orderId,
	});
};

export const setDrawerSalesQuery = query => {
	store.dispatch({
		type: orderTypes.SET_DRAWER_SALES_QUERY,
		payload: query,
	});
};
