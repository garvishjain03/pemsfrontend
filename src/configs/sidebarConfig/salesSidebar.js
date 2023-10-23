import * as ROUTES from "../routes";
import { RiDashboardLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";

export const salesSidebar = [
	{
		title: "Dashboard",
		key: "dashboard",
		path: ROUTES.DASHBOARD,
		icon: RiDashboardLine,
	},
	{
		title: "Orders",
		key: "orders",
		path: ROUTES.ORDERS,
		icon: ImProfile,
	},
];
