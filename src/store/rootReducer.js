import { combineReducers } from "redux";
import comment from "../redux/comment/reducer";
import context from "../redux/context/reducer";
import IssuedTc from "../redux/issuedTc/reducer";
import EditOrder from "../redux/order/EditOrder";
import ItemComments from "../redux/order/ItemComments";
import Items from "../redux/order/ItemSales";
import orders from "../redux/order/reducer";
import permission from "../redux/permission/reducers";
import user from "../redux/user/reducer";
import stock from "../redux/stock/reducer";
import configs from "../redux/config/reducer";
import coatingProduction from "../redux/coatingproduction/reducer";
import OrderMonitor from "../redux/ordermonitor/reducer";
import productionReport from "../redux/productionReport/reducer";
import logs from "../redux/logs/reducer";
const rootReducer = combineReducers({
	user,
	context,
	permission,
	orders,
	IssuedTc,
	Items,
	ItemComments,
	EditOrder,
	comment,
	configs,
	coatingProduction,
	OrderMonitor,
	stock,
	productionReport,
	logs,
});

export default rootReducer;
