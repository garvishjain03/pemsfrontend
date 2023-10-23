import { Avatar, Badge, Center, Group, Text } from "@mantine/core";
import dayjs from "dayjs";
import {
	DateFilter,
	SelectMultiCoresizeFilter,
	SelectMultiTypeFilter,
	SelectMultiWindingFilter,
	SelectVisibleFilter,
} from "../../component/table/table";
import { FaUserCircle } from "react-icons/fa";

import Visible from "./Visible";
import Update from "./Update";
import Delete from "./Delete";

export const COLUMNS = [
	{
		Header: "Name",
		accessor: "name",
		disableFilters: false,
	},
	{
		Header: "Type",
		accessor: "type",
		id: "Type",
		disableFilters: false,
		Filter: SelectMultiTypeFilter,
	},
	{
		Header: "Coresize",
		accessor: row => row?.all_machinemanage?.map(item => item.coresizeid),

		disableFilters: false,
		Filter: SelectMultiCoresizeFilter,
		Cell: ({ row }) => {
			return (
				<Group>
					{row.original?.all_machinemanage?.map(item => {
						return (
							<Badge color={"dark"}>{item?.all_machinecoresize?.label}</Badge>
						);
					})}
				</Group>
			);
		},
	},
	{
		Header: "WindingProcess",
		accessor: "WindingProcess",
		disableFilters: false,
		Filter: SelectMultiWindingFilter,
		Cell: ({ row }) => {
			return row.original?.WindingProcess === ""
				? "N/A"
				: row.original?.WindingProcess;
		},
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
		Header: "Visible",
		accessor: "visible",
		disableFilters: false,
		Filter: SelectVisibleFilter,
		Cell: ({ row }) => (
			<Center>
				<Visible status={row.original?.visible} id={row.original?.id} />
			</Center>
		),
	},
	{
		Header: "Action",
		accessor: "action",
		disableFilters: true,
		Cell: ({ row }) => {
			return (
				<Center>
					<Group spacing={4} style={{ width: "60px" }}>
						<Update defaultValues={row.original} id={row.original?.id} />
						<Delete row={row} id={row.original?.id} path={"machine"} />
					</Group>
				</Center>
			);
		},
	},
];
