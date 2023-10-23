import { Avatar, Center, Group, Text } from "@mantine/core";
import dayjs from "dayjs";
import { FaUserCircle } from "react-icons/fa";
import {
	ColumnSelectVisibleFilter,
	DateFilter,
} from "../../component/table/table";
import Delete from "./Delete";
import Update from "./Update";

export const codeCall = {
	Header: "Code",
	accessor: "code",
	disableFilters: false,
};

export const labelCall = {
	Header: "Label",
	accessor: "label",
	disableFilters: false,
};

export const valueCall = {
	Header: "Value",
	accessor: "value",
	disableFilters: false,
};

export const createdByCall = context => ({
	Header: "Created By",
	accessor: row => row[context]?.username,
	disableFilters: false,
	Cell: ({ row }) => {
		return (
			<Group style={{ minWidth: "120px" }}>
				{row.original[context]?.user_profile[0]?.blob_mimetype ? (
					<Avatar
						radius="xl"
						src={`data:${row.original[context]?.user_profile[0]?.blob_mimetype};base64,${row.original[context]?.user_profile[0]?.blob_data}`}
						alt="abc"
					/>
				) : (
					<FaUserCircle size={20} />
				)}
				{row.original[context]?.username}
			</Group>
		);
	},
});

export const createdAtCall = {
	Header: "Created At",
	accessor: row => dayjs(row.createdAt).format("MMMM DD YYYY"),
	disableFilters: false,
	Filter: DateFilter,
	// filter: (rows, id, filterValue) => {
	// 	const sd = filterValue[0] ? new Date(filterValue[0]) : null;
	// 	const ed = filterValue[1] ? new Date(filterValue[1]) : null;
	//
	// 	if (filterValue) {
	// 		return rows.filter(r => {
	// 			const cellDate = new Date(r.values[id]);

	// 			if (ed && sd) {
	// 				return cellDate >= sd && cellDate <= ed;
	// 			} else if (sd) {
	// 				return cellDate >= sd;
	// 			} else if (ed) {
	// 				return cellDate <= ed;
	// 			} else {
	// 				return rows;
	// 			}
	// 		});
	// 	} else return rows;
	// },
	Cell: ({ row }) => {
		return (
			<span style={{ whiteSpace: "nowrap" }}>
				{dayjs(row.original?.createdAt).format("DD/MM/YYYY h:mm A")}
			</span>
		);
	},
};

export const updateAtCAll = {
	Header: "Last Updated At",
	accessor: row => dayjs(row.updatedAt).format("MMMM DD YYYY"),
	disableFilters: false,
	Filter: DateFilter,
	filter: (rows, id, filterValue) => {
		const sd = filterValue[0] ? new Date(filterValue[0]) : null;
		const ed = filterValue[1] ? new Date(filterValue[1]) : null;

		if (filterValue) {
			return rows.filter(r => {
				const cellDate = new Date(r.values[id]);

				if (ed && sd) {
					return cellDate >= sd && cellDate <= ed;
				} else if (sd) {
					return cellDate >= sd;
				} else if (ed) {
					return cellDate <= ed;
				} else {
					return rows;
				}
			});
		} else return rows;
	},
	Cell: ({ row }) => (
		<span style={{ whiteSpace: "nowrap" }}>
			{dayjs(row.original?.updatedAt).format("DD/MM/YYYY h:mm A")}
		</span>
	),
};
export const visibleCall = {
	Header: "Visible",
	accessor: "visible",
	disableFilters: false,
	Filter: ColumnSelectVisibleFilter,
	Cell: ({ row }) => {
		return String(row.original?.visible).toUpperCase() === "TRUE"
			? "Show"
			: "Hide";
	},
};

export const actionCall = (context, path) => ({
	Header: "Actions",
	accessor: "action",
	disableFilters: true,
	Cell: ({ row }) => {
		return (
			<Center>
				<Group spacing={4} style={{ width: "60px" }}>
					<Update
						defaultValues={row.original}
						id={row.original?.id}
						context={context}
						path={path}
					/>
					{/* <Delete row={row} id={row.original?.id} path={path} /> */}
				</Group>
			</Center>
		);
	},
});
