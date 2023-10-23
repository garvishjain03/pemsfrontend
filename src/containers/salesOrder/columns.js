import { ActionIcon, Center, Text } from "@mantine/core";
import dayjs from "dayjs";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";
import {
	DateFilter,
	DefaultSalesFilterColumn,
	OrderStatusFilter,
	SalesItemOrderDateFilter,
	SalesItemOrderStatusFilter,
} from "../../component/table/table";
import * as ROUTES from "../../configs/routes";
import EditItem from "./EditItem";

export const COLUMNS = [
	{
		Header: "Customer",
		accessor: row => row?.customerName.name,
		id: "customer",
		disableFilters: false,
	},
	{
		Header: "Order No",
		accessor: "customerOrderNumber",
		id: "customerOrderNumber",
		disableFilters: false,
	},
	{
		Header: "OA Number",
		accessor: "oAnumber",
		id: "oAnumber",
		disableFilters: false,
	},

	// {
	// 	Header: "Created By",
	// 	accessor: row => row?.created_by?.username,
	// 	disableFilters: false,
	// 	Cell: ({ row }) => {
	// 		return (
	// 			<Group style={{ minWidth: "120px" }}>
	// 				{row.original.created_by?.user_profile[0]?.blob_mimetype ? (
	// 					<Avatar
	// 						radius="xl"
	// 						src={`data:${row.original.created_by?.user_profile[0]?.blob_mimetype};base64,${row.original.created_by?.user_profile[0]?.blob_data}`}
	// 						alt="abc"
	// 					/>
	// 				) : (
	// 					<FaUserCircle size={20} />
	// 				)}
	// 				{row.original.created_by?.username}
	// 			</Group>
	// 		);
	// 	},
	// },
	// {
	// 	Header: "Last Updated At",
	// 	accessor: row => dayjs(row.updatedAt).format("MMMM DD YYYY"),
	// 	disableFilters: false,
	// 	Filter: DateFilter,
	// 	filter: (rows, id, filterValue) => {
	// 		const sd = filterValue[0] ? new Date(filterValue[0]) : null;
	// 		const ed = filterValue[1] ? new Date(filterValue[1]) : null;

	// 		if (filterValue) {
	// 			return rows.filter(r => {
	// 				const cellDate = new Date(r.values[id]);

	// 				if (ed && sd) {
	// 					return cellDate >= sd && cellDate <= ed;
	// 				} else if (sd) {
	// 					return cellDate >= sd;
	// 				} else if (ed) {
	// 					return cellDate <= ed;
	// 				} else {
	// 					return rows;
	// 				}
	// 			});
	// 		} else return rows;
	// 	},
	// 	Cell: ({ row }) => {
	// 		return dayjs(row.original?.updatedAt).format("DD/MM/YYYY h:mm A");
	// 	},
	// },
	// {
	// 	Header: "Created At",
	// 	accessor: row => dayjs(row.createdAt).format("MMMM DD YYYY"),
	// 	disableFilters: false,
	// 	Filter: DateFilter,
	// 	filter: (rows, id, filterValue) => {
	// 		const sd = filterValue[0] ? new Date(filterValue[0]) : null;
	// 		const ed = filterValue[1] ? new Date(filterValue[1]) : null;

	// 		if (filterValue) {
	// 			return rows.filter(r => {
	// 				const cellDate = new Date(r.values[id]);

	// 				if (ed && sd) {
	// 					return cellDate >= sd && cellDate <= ed;
	// 				} else if (sd) {
	// 					return cellDate >= sd;
	// 				} else if (ed) {
	// 					return cellDate <= ed;
	// 				} else {
	// 					return rows;
	// 				}
	// 			});
	// 		} else return rows;
	// 	},
	// 	Cell: ({ row }) => {
	// 		return dayjs(row.original?.createdAt).format("DD/MM/YYYY h:mm A");
	// 	},
	// },
	{
		Header: "OA Date",
		accessor: "orderDate",
		id: "OADate",
		Filter: DateFilter,
		disableFilters: false,
		Cell: ({ row }) => {
			return dayjs(row.original?.orderDate).format("DD/MM/YYYY");
		},
	},
	{
		Header: "Status",
		accessor: "orderStatus",
		id: "orderStatus",
		Filter: OrderStatusFilter,
		disableFilters: false,
	},

	{
		Header: "Action",
		accessor: "action",
		disableFilters: true,
		Cell: ({ row }) => {
			return (
				<Center>
					{/* GoLinkExternaGoLinkExternaGoLinkExternallGoLinkExternall */}
					<Link
						target={"_blank"}
						to={{
							pathname: `${ROUTES.SALESITEMS}/${row?.original?.id}`,
						}}
						params={{ test: "hello" }}>
						<ActionIcon>
							<GoLinkExternal size={24} color="#228be6" />
						</ActionIcon>
					</Link>
				</Center>
			);
		},
	},
];
export const ITEMCOLUMNS = [
	{
		Header: "Item",
		accessor: row => row.item,
		id: "item",
		disableFilters: false,
		Filter: DefaultSalesFilterColumn,
		Cell: ({ row }) => {
			return <Text>MPN</Text>;
		},
		source: "drawer",
	},
	{
		Header: "Item Code",
		accessor: row => row.id,
		id: "itemCode",
		Filter: DefaultSalesFilterColumn,
		disableFilters: false,
		source: "drawer",
	},
	{
		Header: "Status",
		accessor: "itemStatus",
		id: "itemStatus",
		Filter: SalesItemOrderStatusFilter,
		disableFilters: false,
		source: "drawer",
	},
	{
		Header: "Order Quantity",
		accessor: "orderquantity",
		Filter: DefaultSalesFilterColumn,
		id: "itemOrderquantity",
		disableFilters: false,
		source: "drawer",
	},

	// {
	// 	Header: "Created By",
	// 	accessor: row => row?.created_by?.username,
	// 	disableFilters: false,
	// 	Cell: ({ row }) => {
	// 		return (
	// 			<Group style={{ minWidth: "120px" }}>
	// 				{row.original.created_by?.user_profile[0]?.blob_mimetype ? (
	// 					<Avatar
	// 						radius="xl"
	// 						src={`data:${row.original.created_by?.user_profile[0]?.blob_mimetype};base64,${row.original.created_by?.user_profile[0]?.blob_data}`}
	// 						alt="abc"
	// 					/>
	// 				) : (
	// 					<FaUserCircle size={20} />
	// 				)}
	// 				{row.original.created_by?.username}
	// 			</Group>
	// 		);
	// 	},
	// },
	// {
	// 	Header: "Last Updated At",
	// 	accessor: row => dayjs(row.updatedAt).format("MMMM DD YYYY"),
	// 	disableFilters: false,
	// 	Filter: DateFilter,
	// 	filter: (rows, id, filterValue) => {
	// 		const sd = filterValue[0] ? new Date(filterValue[0]) : null;
	// 		const ed = filterValue[1] ? new Date(filterValue[1]) : null;

	// 		if (filterValue) {
	// 			return rows.filter(r => {
	// 				const cellDate = new Date(r.values[id]);

	// 				if (ed && sd) {
	// 					return cellDate >= sd && cellDate <= ed;
	// 				} else if (sd) {
	// 					return cellDate >= sd;
	// 				} else if (ed) {
	// 					return cellDate <= ed;
	// 				} else {
	// 					return rows;
	// 				}
	// 			});
	// 		} else return rows;
	// 	},
	// 	Cell: ({ row }) => {
	// 		return dayjs(row.original?.updatedAt).format("DD/MM/YYYY h:mm A");
	// 	},
	// },
	// {
	// 	Header: "Created At",
	// 	accessor: row => dayjs(row.createdAt).format("MMMM DD YYYY"),
	// 	disableFilters: false,
	// 	Filter: DateFilter,
	// 	filter: (rows, id, filterValue) => {
	// 		const sd = filterValue[0] ? new Date(filterValue[0]) : null;
	// 		const ed = filterValue[1] ? new Date(filterValue[1]) : null;

	// 		if (filterValue) {
	// 			return rows.filter(r => {
	// 				const cellDate = new Date(r.values[id]);

	// 				if (ed && sd) {
	// 					return cellDate >= sd && cellDate <= ed;
	// 				} else if (sd) {
	// 					return cellDate >= sd;
	// 				} else if (ed) {
	// 					return cellDate <= ed;
	// 				} else {
	// 					return rows;Cell: "SalesOaDateCell",
	// 				}
	// 			});
	// 		} else return rows;
	// 	},
	// 	Cell: ({ row }) => {
	// 		return dayjs(row.original?.createdAt).format("DD/MM/YYYY h:mm A");
	// 	},
	// },
	{
		Header: "Commited Date",
		accessor: "commitedDate",
		id: "CommitedDate",
		Filter: SalesItemOrderDateFilter,
		disableFilters: false,
		source: "drawer",
		Cell: ({ row }) => {
			return dayjs(row.original?.commitedDate).format("DD/MM/YYYY");
		},
	},
	{
		Header: "Delivery Summary",
		accessor: "deliverySummary",
		id: "itemDeliverySummary",
		Filter: DefaultSalesFilterColumn,
		disableFilters: false,
		source: "drawer",
	},
	{
		Header: "Action",
		accessor: "action",
		id: "action",
		disableFilters: true,
		Cell: ({ row }) => {
			return (
				<Center>
					<EditItem defaultValues={row?.original} />
				</Center>
			);
		},
	},
];
