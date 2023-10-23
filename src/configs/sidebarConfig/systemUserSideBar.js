import { AiOutlineCloudUpload, AiOutlineFileDone } from "react-icons/ai";
import { HiTemplate } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import {
	MdLibraryBooks,
	MdOutlineRestorePage,
	MdPendingActions,
} from "react-icons/md";
import { RiDashboardLine, RiGroupFill, RiRouteFill } from "react-icons/ri";
import * as ROUTES from "../routes";
export const systemUserSidebar = [
	{
		title: "User",
		key: "userPage",
		path: ROUTES.USERS,
		icon: RiGroupFill,
	},
	{
		title: "Context Menu",
		key: "contextMenu",
		icon: HiTemplate,
		subMenu: [
			{
				title: "MPN Details",
				key: "mapnDetails",
				subMenu: [
					{
						title: "Types",
						key: "typesPage",
						path: ROUTES.TYPES,
					},
					{
						title: "Characteristics",
						key: "characteristicsPage",
						path: ROUTES.CHARACTERISTICS,
					},
					{
						title: "Core Sizes",
						key: "coreSizePage",
						path: ROUTES.CORESIZES,
					},
					{
						title: "Wattages",
						key: "wattagesPage",
						path: ROUTES.WATTAGES,
					},
					{
						title: "Tolerances",
						key: "tolerancesPage",
						path: ROUTES.TOLERANCES,
					},
					{
						title: "Shapes",
						key: "shapesPage",
						path: ROUTES.SHAPES,
					},
					{
						title: "Lead Lengths",
						key: "leadLengthPage",
						path: ROUTES.LEADLENGTHS,
					},
					{
						title: "Lead Dias",
						key: "leadDiaspage",
						path: ROUTES.LEADDIAS,
					},
					{
						title: "Form Types",
						key: "formTypesPage",
						path: ROUTES.FORMTYPES,
					},
					{
						title: "TCR",
						key: "tcrsPage",
						path: ROUTES.TCRS,
					},
				],
			},
			{
				title: "Delay Reason",
				key: "delayReasonsPage",
				path: ROUTES.DELAYREASON,
			},
			{
				title: "Hold Reasons",
				key: "holdReasonsPage",
				path: ROUTES.HOLDREASONS,
			},
			{
				title: "Mpn Suffix",
				key: "mpnSuffixListsPage",
				path: ROUTES.MPNSUFFIXLISTS,
			},

			{
				title: "Warehouse",
				key: "warehousePage",
				path: ROUTES.WAREHOUSE,
			},
			{
				title: "Machine Management",
				key: "machinePage",
				path: ROUTES.MACHINEMANGEMENT,
			},
			{
				title: "Customers",
				key: "customerPage",
				path: ROUTES.CUSTOMERS,
			},

			{
				title: "Mapping",
				key: "mapping",
				subMenu: [
					{
						title: "Wattage To Coresize",
						key: "wattageToCoresizePage",
						path: ROUTES.WATTAGETOCORESIZE,
					},
					{
						title: "CoreSize to Lead Length and dia",
						key: "coresizeToLeadLengthToDiaPage",
						path: ROUTES.CORESIZETOLEADLENGTHANDDIA,
					},
				],
			},
		],
	},
	{
		title: "Permissions",
		key: "permissions",
		path: ROUTES.PERMISSIONS,
		icon: RiRouteFill,
	},
	{
		title: "Dashboard",
		key: "dashboardPage",
		path: ROUTES.DASHBOARD,
		icon: RiDashboardLine,
	},
	{
		title: "Orders",
		key: "ordersPage",
		path: ROUTES.SALESORDER,
		icon: ImProfile,
	},
	{
		title: "Sales Excel Upload",
		key: "salesExcelUpload",
		path: ROUTES.SALESEXCELUPLOAD,
		icon: AiOutlineCloudUpload,
	},
	{
		title: "Pending Orders",
		key: "pendingOrdersPage",
		path: ROUTES.PENDINGORDERS,
		icon: MdPendingActions,
	},
	{
		title: "Recheck Orders",
		key: "RecheckOrdersPage",
		path: ROUTES.RECHECKORDERS,
		icon: MdOutlineRestorePage,
	},
	{
		title: "Accepted Orders",
		key: "ActiveOrdersPage",
		path: ROUTES.ACTIVEORDERS,
		icon: AiOutlineFileDone,
	},
	{
		title: "Issued TC",
		key: "issuedTcPage",
		path: ROUTES.ISSUEDTC,
		icon: MdPendingActions,
	},
	{
		title: "Planning Chart",
		key: "planningChartPage",
		path: ROUTES.PLANNINGCHART,
		icon: MdPendingActions,
	},
	{
		title: "Work Orders",
		key: "workOrdersPage",
		path: ROUTES.WORKORDER,
		icon: MdPendingActions,
	},
	{
		title: "Pending Work Orders",
		key: "pendingWorkOrdersPage",
		path: ROUTES.PENDINGWORKORDERS,
		icon: MdPendingActions,
	},
	{
		title: "Item List",
		key: "packingItemList",
		path: ROUTES.PACKINGITEMLIST,
		icon: MdPendingActions,
	},
	{
		title: "Item List",
		key: "dispatchItemList",
		path: ROUTES.DISPATCHITEMLIST,
		icon: MdPendingActions,
	},
	{
		title: "Stock Home",
		key: "stockHome",
		path: ROUTES.STOCKHOME,
		icon: MdPendingActions,
	},
	{
		title: "Coating Production Chart",
		key: "coatingProductionPage",
		path: ROUTES.COATINGPRODUCTIONCHART,
		icon: MdPendingActions,
	},
	{
		title: "Order Monitor",
		key: "orderMonitorPage",
		path: ROUTES.ORDERMONITOR,
		icon: MdPendingActions,
	},
	{
		title: "Production Report",
		key: "productionReport",
		path: ROUTES.PRODUCTIONREPORT,
		icon: MdLibraryBooks,
	},
];
