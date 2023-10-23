import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sales from "./component/Sales";
// Routes
import * as ROUTES from "./configs/routes";
import SalesOrderItem from "./containers/salesOrder/SalesOrderItem";
import ActiveOrdersPage from "./pages/ActiveOrders/ActiveOrdersPage";
import Characteristics from "./pages/Characteristics/Characteristics";
import CoreSizes from "./pages/Coresizes/CoreSizes";
import CoreSizeToLeadToDia from "./pages/CoresizeToLeadToDia/CoresizeToLeadToDia";
import Customer from "./pages/Customer/Customer";
import DashBoard from "./pages/DashBoard/dashboard";
import DelayReason from "./pages/DelayReason/DelayReason";
import DispatchItemList from "./pages/DispatchItemList/DispatchItemList";
import FormTypes from "./pages/FormTypes/FormTypes";
import HoldReasons from "./pages/Holdreasons/HoldReasons";
import IssuedTC from "./pages/IssuedTC";
import LeadDias from "./pages/Leaddias/LeadDias";
import LeadLengths from "./pages/LeadLengths/LeadLength";
import MachineManagement from "./pages/MachineManagement/MachineManagement";
import MpnSuffxLists from "./pages/MpnSuffixLists/MpnSuffixLists";
import PackingItemList from "./pages/PackingItemList/";
import PendingOrders from "./pages/PendingOrders";
import Permissions from "./pages/permissions/Permissions";
import PlanningChart from "./pages/PlanningChart/PlanningChart";
import RecheckOrders from "./pages/RecheckOrders";
import SalesOrder from "./pages/salesOrder";
import Shapes from "./pages/Shapes/Shapes";
import StockHome from "./pages/StockHome";
import Tcrs from "./pages/Tcrs/Tcrs";
import Tolerances from "./pages/Tolerances/Tolerances";
import Types from "./pages/Types/Types";
import Users from "./pages/Users/Users";
import Warehouse from "./pages/Warehouse/Warehouse";
import Watteges from "./pages/Wattages/Wattages";
import WattagesToCoreSize from "./pages/WattageToCoresize";
import WorkOrderPage from "./pages/WorkOrderPage/WorkOrderPage2";
import CoatingProductionChart from "./pages/CoatingProductionChart/CoatingProductionChart";
import OrderMonitor from "./pages/OrderMonitor";
import ProductionReport from "./pages/ProductionReport/ProductionReport";
import SalesExcelUpload from "./pages/SalesExcelUpload/SalesExcelUpload";
import PendingWorkOrders from "./pages/PendingWorkOrders/PendingWorkOrders";

const Router = () => (
	<Routes>
		<Route path={ROUTES.STOCKHOME} element={<StockHome />} />
		<Route path={ROUTES.PACKINGITEMLIST} element={<PackingItemList />} />
		<Route path={ROUTES.DISPATCHITEMLIST} element={<DispatchItemList />} />
		<Route path={ROUTES.PLANNINGCHART} element={<PlanningChart />} />
		<Route path={ROUTES.ISSUEDTC} element={<IssuedTC />} />
		<Route path={ROUTES.ACTIVEORDERS} element={<ActiveOrdersPage />} />
		<Route path={ROUTES.WORKORDER} element={<WorkOrderPage />} />
		<Route path={ROUTES.PENDINGWORKORDERS} element={<PendingWorkOrders />} />
		<Route path={ROUTES.MACHINEMANGEMENT} element={<MachineManagement />} />
		<Route path={ROUTES.CUSTOMERS} element={<Customer />} />
		<Route path={`${ROUTES.SALESITEMS}/:id`} element={<SalesOrderItem />} />
		{localStorage.getItem("active_role") === "SYSTEMUSER" ? (
			<Route path={ROUTES.PERMISSIONS} element={<Permissions />} />
		) : (
			<Route path="*" element={<Navigate to="/" replace />} />
		)}{" "}
		<Route path={ROUTES.SALESORDER} element={<SalesOrder />} />
		<Route path={ROUTES.SALESEXCELUPLOAD} element={<SalesExcelUpload />} />
		<Route
			path={ROUTES.CORESIZETOLEADLENGTHANDDIA}
			element={<CoreSizeToLeadToDia />}
		/>
		<Route path={ROUTES.WATTAGETOCORESIZE} element={<WattagesToCoreSize />} />
		<Route path={ROUTES.WAREHOUSE} element={<Warehouse />} />
		<Route path={ROUTES.PENDINGORDERS} element={<PendingOrders />} />
		<Route path={ROUTES.RECHECKORDERS} element={<RecheckOrders />} />
		<Route path={ROUTES.ACTIVEORDERS} element={<ActiveOrdersPage />} />
		<Route path={ROUTES.TOLERANCES} element={<Tolerances />} />
		<Route path={ROUTES.TCRS} element={<Tcrs />} />
		<Route path={ROUTES.SHAPES} element={<Shapes />} />
		<Route path={ROUTES.MPNSUFFIXLISTS} element={<MpnSuffxLists />} />
		<Route path={ROUTES.LEADLENGTHS} element={<LeadLengths />} />
		<Route path={ROUTES.LEADDIAS} element={<LeadDias />} />
		<Route path={ROUTES.HOLDREASONS} element={<HoldReasons />} />
		<Route path={ROUTES.FORMTYPES} element={<FormTypes />} />
		<Route path={ROUTES.CORESIZES} element={<CoreSizes />} />
		<Route path={ROUTES.WATTAGES} element={<Watteges />} />
		<Route path={ROUTES.TYPES} element={<Types />} />
		<Route path={ROUTES.CHARACTERISTICS} element={<Characteristics />} />
		<Route path={ROUTES.DELAYREASON} element={<DelayReason />} />
		<Route path={ROUTES.SALES} element={<Sales />} />
		<Route path={ROUTES.ORDERS} element={<></>} />
		<Route path={ROUTES.USERS} element={<Users />} />
		<Route path={ROUTES.DASHBOARD} element={<DashBoard />} />
		<Route
			path={ROUTES.COATINGPRODUCTIONCHART}
			element={<CoatingProductionChart />}
		/>
		<Route path={ROUTES.ORDERMONITOR} element={<OrderMonitor />} />
		<Route path={ROUTES.PRODUCTIONREPORT} element={<ProductionReport />} />
		<Route path={"/"} element={<></>} />
	</Routes>
);

export default Router;
