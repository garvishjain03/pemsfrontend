import * as ROUTES from "../routes";

import { FaUserFriends } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { RiRouteFill, RiGroupFill } from "react-icons/ri";
export const superAdminSidebar = [
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
];
