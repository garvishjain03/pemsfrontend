export const delayReason = [
	{
		display: true,
		Header: "Value",
		accessor: {
			string: "value",
		},

		disableSortBy: true,
		disableFilters: false,
	},
	{
		display: true,
		Header: "Label",
		accessor: {
			string: "label",
		},
		disableSortBy: false,
		disableFilters: false,
	},
	{
		display: true,
		Header: "Code",
		accessor: {
			string: "code",
		},
		disableSortBy: false,
		disableFilters: false,
	},
	{
		display: false,
		Header: "Created By",
		accessor: {
			method: "usernameAccessors",
		},
		disableSortBy: false,
		disableFilters: false,
		Cell: "createByCell",
	},
	{
		display: false,
		Header: "Created At",
		accessor: {
			method: "createdAtAccessors",
		},
		disableSortBy: false,
		disableFilters: false,
		Filter: "DateFilter",
		Cell: "createdAtCell",
	},
	{
		display: false,
		Header: "Last Updated At",
		accessor: {
			method: "updatedAtAccessors",
		},
		disableSortBy: false,
		disableFilters: false,
		Filter: "DateFilter",
		filters: {
			enable: true,
			server: false,
			type: "updatedAt",
		},
		Cell: "updatedAtCell",
	},
	{
		display: true,
		Header: "Visible",
		accessor: {
			string: "visible",
		},
		disableSortBy: false,
		disableFilters: false,
		Filter: "ColumnSelectVisibleFilter",
		filters: {
			enable: true,
			server: false,
			type: "visible",
		},
		Cell: "visibleCell",
	},
	{
		display: true,
		Header: "Actions",
		accessor: {
			string: "action",
		},
		disableSortBy: false,
		disableFilters: false,
		filters: {
			enable: true,
			server: false,
			type: "action",
		},
		Cell: "ActionsCell",
	},
];
