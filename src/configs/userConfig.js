module.exports = {
	// title: "user config file",
	// roles: {
	SYSTEM: {
		userPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: true,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		ActiveOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		pendingOrdersPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		RecheckOrdersPage: {
			pageVisible: true,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		salesItemPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Issue WorkOrder", value: "issueWorkOrder" },
				{
					enable: true,
					title: "Recheck",
					value: "recheck",
				},
				{
					enable: false,
					title: "Hold",
					value: "hold",
				},
				{
					enable: false,
					title: "UnHold",
					value: "unHold",
				},
				{
					enable: false,
					title: "Procurement",
					value: "procurement",
				},
				{
					enable: true,
					title: "Add Items",
					value: "addItems",
				},
				{
					enable: true,
					title: "Accept",
					value: "accept",
				},
				{
					enable: true,
					title: "Cancel",
					value: "cancel",
				},
				{
					enable: false,
					title: "Pack",
					value: "pack",
				},
				{
					enable: false,
					title: "Unpack",
					value: "unpack",
				},
				{
					enable: false,
					title: "Dispatch",
					value: "dispatch",
				},
				{
					enable: false,
					title: "Return",
					value: "return",
				},
			],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "SalesItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "itemMpnCell",
					source: "drawer",
				},

				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "SalesItemItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					source: "drawer",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					source: "drawer",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "orderQuantityCell",
					source: "drawer",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemCommitedDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemScheduleDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemOrderDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",
					Cell: "SalesItemCreatedAtCell",
					source: "drawer",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemUpdatedAtCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "SalesItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "SalesItemDelivarySummaryCell",
					source: "drawer",
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						comment: true,
						accept: true,
						cancel: true,
						issueWorkorder: true,
						recheck: true,
						unhold: true,
						hold: true,
						procurement: true,
					},
					Cell: "SalesItemActionCell",

					source: "drawer",
				},
			],
		},
		workOrdersPage: {
			pageVisible: true,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{ enable: false, title: "Combine Tc", value: "combineTcIssue" },
			],
			Table1: [
				{
					display: true,
					id: "wocustomer",
					Header: "Customer",
					accessor: {
						method: "CustomerAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "workorderno",
					Header: "Work Order No",
					accessor: {
						method: "WorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "MPN",
					Header: "Part Number",
					accessor: {
						method: "WorkOrdreMPNAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issueqty",
					Header: "Issue Quantity",
					accessor: {
						method: "IssueQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: false,
					id: "qty",
					Header: "Completed Quantity",

					accessor: {
						method: "CompletedQuantityAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "IssueDate",
					Header: "Issue Date",
					accessor: {
						method: "IssueDateAccesorStoreKeeper",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "deliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "deliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},

				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "statusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "WorkOrderStatusFilter",
				},
				{
					display: false,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "OperatorAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						comment: true,
						issueTc: false,
						tcIssuedCompleted: false,
					},
					Cell: "SalesWorkOrderItemActionCell",

					source: "drawer",
				},
			],
		},
		issuedTcPage: {
			pageVisible: true,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcworkorderno",
					Header: "Work Order No",
					accessor: {
						method: "issuedTcWorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "Issuedtcqty",
					Header: "Issue Quantity",
					accessor: {
						method: "issuedTcQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "IssuedTcStatusFilter",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						print: true,
						cancel: true,
						send: true,
					},
					Cell: "IssuedTCActionCell",
				},
			],
		},
		permissions: {
			pageVisible: true,
		},
	},
	SUPERADMIN: {
		orderMonitorPage: {
			pageVisible: true,
			topButtons: [],
			Table1: [
				{
					display: true,
					id: "customername",
					Header: "Customer",
					accessor: {
						method: "customeraccessor",
					},
					Cell: "custormerOrderMonitorCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "customerorderno",
					Header: "Customer Order No.",
					accessor: {
						method: "customerordernoaccessor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "order date",
					accessor: {
						method: "orderdateaccessor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "requestDeliveryDate",
					Header: "Requested Delivery date",
					accessor: {
						method: "requesteddeliverydatedateaccessor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "committedDeliveryDate",
					Header: "Committed Delivery Date",
					accessor: {
						method: "comitteddeliverydateaccessor",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
				},

				{
					display: true,
					id: "OANo",
					Header: "OA Number",
					accessor: {
						method: "oanumberaccessor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "OADate",
					Header: "OA Date",
					accessor: {
						accessor: "oadateaccessor",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "reviewedby",
					Header: "Reviewed By",
					accessor: {
						method: "reviewedby",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "reviewedOn",
					Header: "Reviewed On",
					accessor: {
						string: "orderAcceptanceDate",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "customerPartNo",
					Header: "Customer Part No.(if Applicable)",
					accessor: {
						string: "customerPartNo",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "mpn",
					Header: "Watts Part No",
					accessor: {
						string: "mpn",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "orderQuantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "price",
					Header: "Price/100pcs",
					accessor: {
						string: "price",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "warehouse",
					Header: "WareHouse",
					accessor: {
						method: "warehouseaccessor",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Order Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "packingquantity",
					Header: "Packed Quantity",
					accessor: {
						method: "packingquantity",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "packingdate",
					Header: "Packed Date",
					accessor: {
						method: "packeddateaccessor",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "invoiceno",
					Header: "Invoice Number",
					accessor: {
						method: "invoicenumberaccessor",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "invoicenumberaccessorActionsCell",
				},
				{
					display: true,
					id: "invoiceDate",
					Header: "Invoice Date",
					accessor: {
						method: "invoicedateaccessor",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "invoicedateaccessorActionsCell",
				},
				{
					display: true,
					id: "dispatchedquantity",
					Header: "Dispatched Quantity",
					accessor: {
						method: "dispactedquantityaccessor",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "dispactedquantityaccessorActionsCell",
				},
				{
					display: true,
					id: "dispatchdate",
					Header: "Date of Dispatched",
					accessor: {
						method: "dateofdispatchedaccessor",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "dateofdispatchedaccessorActionsCell",
				},
				{
					display: true,
					id: "delayreason",
					Header: "Delay reason catagory",
					accessor: {
						method: "delayreasoncatagoryaccessor",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "delayreasoncatagoryaccessorActionsCell",
				},
			],
		},
		coatingProductionPage: {
			pageVisible: true,
			topButtons: [],
			Table1: [
				{
					display: true,
					id: "tcno",
					Header: "TC no",
					accessor: {
						string: "tcno",
					},
					Cell: "tcnoCoatingCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "partnumber",
					Header: "Part Number",
					accessor: {
						method: "partnumberaccessor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "coatingdate",
					Header: "Coating Date",
					accessor: {
						method: "coatingdateaccessor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tccompletiondate",
					Header: "TC Completion Date",
					accessor: {
						string: "tccompletiondateaccessor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "winding Total",
					Header: "Winding Total",
					accessor: {
						method: "windingtotalaccessor",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
				},

				{
					display: true,
					id: "cuttingtotal",
					Header: "Cutting Total",
					accessor: {
						string: "cuttingTotal",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "lasercut",
					Header: "Laser Cut",
					accessor: {
						string: "lasercut",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "WeldingTotal",
					Header: "Welding Total",
					accessor: {
						string: "Welding Total",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "coatingtotal",
					Header: "Coating Total",
					accessor: {
						string: "coatingtotal",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "shift",
					Header: "Shift",
					accessor: {
						string: "shift",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "coatingmachine",
					Header: "Coating Machine",
					accessor: {
						string: "coatingmachine",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "totalrejectioncoating",
					Header: "Total Rejection Coating",
					accessor: {
						string: "totalrejectioncoating",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "totalrejectioncoatingpercent",
					Header: "Total Rejection Coating%",
					accessor: {
						string: "totalrejectioncoatingpercent",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "weldingRejection",
					Header: "Welding Rejection",
					accessor: {
						string: "weldingRejection",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "checkingtotal",
					Header: "Checking Total",
					accessor: {
						string: "checkingtotal",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "finalrejectionpercent",
					Header: "Final Rejection %",
					accessor: {
						string: "finalrejectionpercent",
					},
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Actions",
					Header: "Remarks",
					accessor: {
						method: "actionsAccessor",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "RemarksActionsCell",
				},
			],
		},
		userPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: true,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		pendingOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		RecheckOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		salesItemPage: {
			pageVisible: true,
			topButtons: [
				{ enable: false, title: "Issue WorkOrder", value: "issueWorkOrder" },
				{
					enable: false,
					title: "Recheck",
					value: "recheck",
				},
				{
					enable: false,
					title: "Hold",
					value: "hold",
				},
				{
					enable: false,
					title: "UnHold",
					value: "unHold",
				},
				{
					enable: false,
					title: "Procurement",
					value: "procurement",
				},
				{
					enable: false,
					title: "Add Items",
					value: "addItems",
				},
				{
					enable: false,
					title: "Accept",
					value: "accept",
				},
				{
					enable: false,
					title: "Cancel",
					value: "cancel",
				},
				{
					enable: false,
					title: "Pack",
					value: "pack",
				},
				{
					enable: false,
					title: "Unpack",
					value: "unpack",
				},
				{
					enable: false,
					title: "Dispatch",
					value: "dispatch",
				},
				{
					enable: false,
					title: "Return",
					value: "return",
				},
			],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "SalesItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "itemMpnCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "SalesItemItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					source: "drawer",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					source: "drawer",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "orderQuantityCell",
					source: "drawer",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemCommitedDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemScheduleDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemOrderDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",
					Cell: "SalesItemCreatedAtCell",
					source: "drawer",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemUpdatedAtCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "SalesItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "SalesItemDelivarySummaryCell",
					source: "drawer",
				},

				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: false,
						comment: false,
						accept: false,
						cancel: false,
						issueWorkorder: false,
						recheck: false,
						unhold: false,
						procurement: false,
					},
					Cell: "SalesItemActionCell",

					source: "drawer",
				},
			],
		},
		permissions: {
			pageVisible: false,
		},
		ActiveOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		workOrdersPage: {
			pageVisible: true,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{ enable: false, title: "Combine Tc", value: "combineTcIssue" },
			],
			Table1: [
				{
					display: true,
					id: "wocustomer",
					Header: "Customer",
					accessor: {
						method: "CustomerAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "workorderno",
					Header: "Work Order No",
					accessor: {
						method: "WorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "MPN",
					Header: "Part Number",
					accessor: {
						method: "WorkOrdreMPNAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issueqty",
					Header: "Issue Quantity",
					accessor: {
						method: "IssueQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: false,
					id: "qty",
					Header: "Completed Quantity",

					accessor: {
						method: "CompletedQuantityAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "IssueDate",
					Header: "Issue Date",
					accessor: {
						method: "IssueDateAccesorStoreKeeper",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "deliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "deliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},

				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "statusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "WorkOrderStatusFilter",
				},
				{
					display: false,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "OperatorAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						comment: true,
						issueTc: false,
						tcIssuedCompleted: false,
					},
					Cell: "SalesWorkOrderItemActionCell",

					source: "drawer",
				},
			],
		},
		issuedTcPage: {
			pageVisible: true,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: true,
					title: "Print TC	",
					value: "hidePrintTc",
				},
				{
					enable: true,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcworkorderno",
					Header: "Work Order No",
					accessor: {
						method: "issuedTcWorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					Cell: "issuedTcPartNoCell",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "Issuedtcqty",
					Header: "Issue Quantity",
					accessor: {
						method: "issuedTcQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},

				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "IssuedTcStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: false,
						print: false,
						cancel: false,
						send: false,
						comment: true,
					},
					Cell: "IssuedTCActionCell",
				},
			],
		},
	},
	ADMIN: {
		userPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: true,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		workOrdersPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{ enable: false, title: "Combine Tc", value: "combineTcIssue" },
			],
			Table1: [
				{
					display: true,
					id: "wocustomer",
					Header: "Customer",
					accessor: {
						method: "CustomerAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "workorderno",
					Header: "Work Order No",
					accessor: {
						method: "WorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "MPN",
					Header: "Part Number",
					accessor: {
						method: "WorkOrdreMPNAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issueqty",
					Header: "Issue Quantity",
					accessor: {
						method: "IssueQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: false,
					id: "qty",
					Header: "Completed Quantity",

					accessor: {
						method: "CompletedQuantityAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "IssueDate",
					Header: "Issue Date",
					accessor: {
						method: "IssueDateAccesorStoreKeeper",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "deliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "deliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},

				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "statusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "WorkOrderStatusFilter",
				},
				{
					display: false,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "OperatorAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						comment: true,
						issueTc: false,
						tcIssuedCompleted: false,
					},
					Cell: "SalesWorkOrderItemActionCell",

					source: "drawer",
				},
			],
		},
		issuedTcPage: {
			pageVisible: true,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: true,
					title: "Print TC	",
					value: "hidePrintTc",
				},
				{
					enable: true,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcworkorderno",
					Header: "Work Order No",
					accessor: {
						method: "issuedTcWorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					Cell: "issuedTcPartNoCell",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "Issuedtcqty",
					Header: "Issue Quantity",
					accessor: {
						method: "issuedTcQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},

				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "IssuedTcStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: false,
						print: false,
						cancel: false,
						send: false,
						comment: true,
					},
					Cell: "IssuedTCActionCell",
				},
			],
		},
		pendingOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		salesItemPage: {
			pageVisible: true,
			topButtons: [
				{ enable: false, title: "Issue WorkOrder", value: "issueWorkOrder" },
				{
					enable: false,
					title: "Recheck",
					value: "recheck",
				},
				{
					enable: false,
					title: "Hold",
					value: "hold",
				},
				{
					enable: false,
					title: "UnHold",
					value: "unHold",
				},
				{
					enable: false,
					title: "Procurement",
					value: "procurement",
				},
				{
					enable: false,
					title: "Add Items",
					value: "addItems",
				},
				{
					enable: false,
					title: "Accept",
					value: "accept",
				},
				{
					enable: false,
					title: "Cancel",
					value: "cancel",
				},
				{
					enable: false,
					title: "Pack",
					value: "pack",
				},
				{
					enable: false,
					title: "Unpack",
					value: "unpack",
				},
				{
					enable: false,
					title: "Dispatch",
					value: "dispatch",
				},
				{
					enable: false,
					title: "Return",
					value: "return",
				},
			],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "SalesItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "itemMpnCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "SalesItemItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					source: "drawer",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					source: "drawer",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "orderQuantityCell",
					source: "drawer",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemCommitedDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemScheduleDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemOrderDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",
					Cell: "SalesItemCreatedAtCell",
					source: "drawer",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemUpdatedAtCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "SalesItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "SalesItemDelivarySummaryCell",
					source: "drawer",
				},

				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: false,
						comment: false,
						accept: false,
						cancel: false,
						issueWorkorder: false,
						recheck: false,
						unhold: false,
						procurement: false,
					},
					Cell: "SalesItemActionCell",

					source: "drawer",
				},
			],
		},
		permissions: {
			pageVisible: false,
		},
		ActiveOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
	},
	USER: {
		userPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		workOrdersPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{ enable: false, title: "Combine Tc", value: "combineTcIssue" },
			],
			Table1: [
				{
					display: true,
					id: "wocustomer",
					Header: "Customer",
					accessor: {
						method: "CustomerAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "workorderno",
					Header: "Work Order No",
					accessor: {
						method: "WorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "MPN",
					Header: "Part Number",
					accessor: {
						method: "WorkOrdreMPNAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issueqty",
					Header: "Issue Quantity",
					accessor: {
						method: "IssueQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: false,
					id: "qty",
					Header: "Completed Quantity",

					accessor: {
						method: "CompletedQuantityAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "IssueDate",
					Header: "Issue Date",
					accessor: {
						method: "IssueDateAccesorStoreKeeper",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "deliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "deliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},

				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "statusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "WorkOrderStatusFilter",
				},
				{
					display: false,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "OperatorAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						comment: true,
						issueTc: false,
						tcIssuedCompleted: false,
					},
					Cell: "SalesWorkOrderItemActionCell",

					source: "drawer",
				},
			],
		},
		issuedTcPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcworkorderno",
					Header: "Work Order No",
					accessor: {
						method: "issuedTcWorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "Issuedtcqty",
					Header: "Issue Quantity",
					accessor: {
						method: "issuedTcQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "IssuedTcStatusFilter",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						print: true,
						cancel: true,
						send: true,
					},
					Cell: "IssuedTCActionCell",
				},
			],
		},
		pendingOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		salesItemPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Issue WorkOrder", value: "issueWorkOrder" },
				{
					enable: true,
					title: "Recheck",
					value: "recheck",
				},
				{
					enable: false,
					title: "Hold",
					value: "hold",
				},
				{
					enable: false,
					title: "UnHold",
					value: "unHold",
				},
				{
					enable: false,
					title: "Procurement",
					value: "procurement",
				},
				{
					enable: true,
					title: "Add Items",
					value: "addItems",
				},
				{
					enable: true,
					title: "Accept",
					value: "accept",
				},
				{
					enable: true,
					title: "Cancel",
					value: "cancel",
				},
				{
					enable: false,
					title: "Pack",
					value: "pack",
				},
				{
					enable: false,
					title: "Unpack",
					value: "unpack",
				},
				{
					enable: false,
					title: "Dispatch",
					value: "dispatch",
				},
				{
					enable: false,
					title: "Return",
					value: "return",
				},
			],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "SalesItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "itemMpnCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "SalesItemItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					source: "drawer",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					source: "drawer",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "orderQuantityCell",
					source: "drawer",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemCommitedDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemScheduleDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemOrderDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",
					Cell: "SalesItemCreatedAtCell",
					source: "drawer",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemUpdatedAtCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "SalesItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "SalesItemDelivarySummaryCell",
					source: "drawer",
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						comment: true,
						accept: true,
						cancel: true,
						issueWorkorder: true,
						recheck: true,
						unhold: true,
						hold: true,
						procurement: true,
					},
					Cell: "SalesItemActionCell",

					source: "drawer",
				},
			],
		},
		permissions: {
			pageVisible: false,
		},
		ActiveOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
	},
	STOREKEEPER: {
		userPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},

		workOrdersPage: {
			pageVisible: true,
			topButtons: [
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{ enable: true, title: "Combine Tc", value: "combineTcIssue" },
			],
			Table1: [
				{
					display: true,
					id: "wocustomer",
					Header: "Customer",
					accessor: {
						method: "CustomerAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "workorderno",
					Header: "Work Order No",
					accessor: {
						method: "WorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "MPN",
					Header: "Part Number",
					accessor: {
						method: "WorkOrdreMPNAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issueqty",
					Header: "Issue Quantity",
					accessor: {
						method: "IssueQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},

				{
					display: false,
					id: "qty",
					Header: "Completed Quantity",

					accessor: {
						method: "CompletedQuantityAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CreatedAt",
					Header: "Issue Date",
					accessor: {
						method: "IssueDateAccesorStoreKeeper",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "deliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "deliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},

				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "statusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "WorkOrderStatusFilter",
				},
				{
					display: false,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "OperatorAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						comment: true,
						issueTc: true,
						tcIssuedCompleted: true,
					},
					Cell: "SalesWorkOrderItemActionCell",

					source: "drawer",
				},
			],
		},
		issuedTcPage: {
			pageVisible: true,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: true,
					title: "Print TC	",
					value: "hidePrintTc",
				},
				{
					enable: true,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcworkorderno",
					Header: "Work Order No",
					accessor: {
						method: "issuedTcWorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					Cell: "issuedTcPartNoCell",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "Issuedtcqty",
					Header: "Issue Quantity",
					accessor: {
						method: "issuedTcQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},

				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "IssuedTcStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						print: true,
						cancel: true,
						send: true,
						comment: true,
					},
					Cell: "IssuedTCActionCell",
				},
			],
		},
		pendingOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		salesItemPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Issue WorkOrder", value: "issueWorkOrder" },
				{
					enable: true,
					title: "Recheck",
					value: "recheck",
				},
				{
					enable: false,
					title: "Hold",
					value: "hold",
				},
				{
					enable: false,
					title: "UnHold",
					value: "unHold",
				},
				{
					enable: false,
					title: "Procurement",
					value: "procurement",
				},
				{
					enable: true,
					title: "Add Items",
					value: "addItems",
				},
				{
					enable: true,
					title: "Accept",
					value: "accept",
				},
				{
					enable: true,
					title: "Cancel",
					value: "cancel",
				},
				{
					enable: false,
					title: "Pack",
					value: "pack",
				},
				{
					enable: false,
					title: "Unpack",
					value: "unpack",
				},
				{
					enable: false,
					title: "Dispatch",
					value: "dispatch",
				},
				{
					enable: false,
					title: "Return",
					value: "return",
				},
			],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "SalesItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "itemMpnCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "SalesItemItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					source: "drawer",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					source: "drawer",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "orderQuantityCell",
					source: "drawer",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemCommitedDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemScheduleDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemOrderDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",
					Cell: "SalesItemCreatedAtCell",
					source: "drawer",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemUpdatedAtCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "SalesItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "SalesItemDelivarySummaryCell",
					source: "drawer",
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						comment: true,
						accept: true,
						cancel: true,
						issueWorkorder: true,
						recheck: true,
						unhold: true,
						hold: true,
						procurement: true,
					},
					Cell: "SalesItemActionCell",

					source: "drawer",
				},
			],
		},
		permissions: {
			pageVisible: false,
		},

		ActiveOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
	},
	CHECKINGOP: {
		userPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		workOrdersPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{ enable: false, title: "Combine Tc", value: "combineTcIssue" },
			],
			Table1: [
				{
					display: true,
					id: "wocustomer",
					Header: "Customer",
					accessor: {
						method: "CustomerAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "workorderno",
					Header: "Work Order No",
					accessor: {
						method: "WorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "MPN",
					Header: "Part Number",
					accessor: {
						method: "WorkOrdreMPNAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issueqty",
					Header: "Issue Quantity",
					accessor: {
						method: "IssueQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: false,
					id: "qty",
					Header: "Completed Quantity",

					accessor: {
						method: "CompletedQuantityAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "IssueDate",
					Header: "Issue Date",
					accessor: {
						method: "IssueDateAccesorStoreKeeper",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "deliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "deliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},

				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "statusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "WorkOrderStatusFilter",
				},
				{
					display: false,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "OperatorAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						comment: true,
						issueTc: false,
						tcIssuedCompleted: false,
					},
					Cell: "SalesWorkOrderItemActionCell",

					source: "drawer",
				},
			],
		},
		issuedTcPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcworkorderno",
					Header: "Work Order No",
					accessor: {
						method: "issuedTcWorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "Issuedtcqty",
					Header: "Issue Quantity",
					accessor: {
						method: "issuedTcQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "IssuedTcStatusFilter",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						print: true,
						cancel: true,
						send: true,
					},
					Cell: "IssuedTCActionCell",
				},
			],
		},
		pendingOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		salesItemPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Issue WorkOrder", value: "issueWorkOrder" },
				{
					enable: true,
					title: "Recheck",
					value: "recheck",
				},
				{
					enable: false,
					title: "Hold",
					value: "hold",
				},
				{
					enable: false,
					title: "UnHold",
					value: "unHold",
				},
				{
					enable: false,
					title: "Procurement",
					value: "procurement",
				},
				{
					enable: true,
					title: "Add Items",
					value: "addItems",
				},
				{
					enable: true,
					title: "Accept",
					value: "accept",
				},
				{
					enable: true,
					title: "Cancel",
					value: "cancel",
				},
				{
					enable: false,
					title: "Pack",
					value: "pack",
				},
				{
					enable: false,
					title: "Unpack",
					value: "unpack",
				},
				{
					enable: false,
					title: "Dispatch",
					value: "dispatch",
				},
				{
					enable: false,
					title: "Return",
					value: "return",
				},
			],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "SalesItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "itemMpnCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "SalesItemItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					source: "drawer",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					source: "drawer",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "orderQuantityCell",
					source: "drawer",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemCommitedDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemScheduleDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemOrderDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",
					Cell: "SalesItemCreatedAtCell",
					source: "drawer",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemUpdatedAtCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "SalesItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "SalesItemDelivarySummaryCell",
					source: "drawer",
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						comment: true,
						accept: true,
						cancel: true,
						issueWorkorder: true,
						recheck: true,
						unhold: true,
						hold: true,
						procurement: true,
					},
					Cell: "SalesItemActionCell",

					source: "drawer",
				},
			],
		},
		permissions: {
			pageVisible: false,
		},
		ActiveOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		planningChartPage: {
			pageVisible: true,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "cuttingquantity",
					Header: "Cutting Qty",
					accessor: {
						method: "cuttingQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},

				{
					display: true,
					id: "windingquantity",
					Header: "Winding Qty",
					accessor: {
						method: "windingQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},
				{
					display: true,
					id: "weldingquantity",
					Header: "Welding Qty",
					accessor: {
						method: "weldingQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},
				{
					display: true,
					id: "coatingquantity",
					Header: " Coating Qty",
					accessor: {
						method: "coatingQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Machines Used",
					id: "machines_used",
					accessor: {
						method: "tcMachineAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {},
					Cell: "CuttingTCActionCell",
				},
			],
		},
	},
	COATINGOP: {
		userPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		workOrdersPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{ enable: false, title: "Combine Tc", value: "combineTcIssue" },
			],
			Table1: [
				{
					display: true,
					id: "wocustomer",
					Header: "Customer",
					accessor: {
						method: "CustomerAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "workorderno",
					Header: "Work Order No",
					accessor: {
						method: "WorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "MPN",
					Header: "Part Number",
					accessor: {
						method: "WorkOrdreMPNAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issueqty",
					Header: "Issue Quantity",
					accessor: {
						method: "IssueQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: false,
					id: "qty",
					Header: "Completed Quantity",

					accessor: {
						method: "CompletedQuantityAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "IssueDate",
					Header: "Issue Date",
					accessor: {
						method: "IssueDateAccesorStoreKeeper",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "deliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "deliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},

				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "statusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "WorkOrderStatusFilter",
				},
				{
					display: false,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "OperatorAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						comment: true,
						issueTc: false,
						tcIssuedCompleted: false,
					},
					Cell: "SalesWorkOrderItemActionCell",

					source: "drawer",
				},
			],
		},
		issuedTcPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcworkorderno",
					Header: "Work Order No",
					accessor: {
						method: "issuedTcWorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "Issuedtcqty",
					Header: "Issue Quantity",
					accessor: {
						method: "issuedTcQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "IssuedTcStatusFilter",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						print: true,
						cancel: true,
						send: true,
					},
					Cell: "IssuedTCActionCell",
				},
			],
		},
		pendingOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		salesItemPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Issue WorkOrder", value: "issueWorkOrder" },
				{
					enable: true,
					title: "Recheck",
					value: "recheck",
				},
				{
					enable: false,
					title: "Hold",
					value: "hold",
				},
				{
					enable: false,
					title: "UnHold",
					value: "unHold",
				},
				{
					enable: false,
					title: "Procurement",
					value: "procurement",
				},
				{
					enable: true,
					title: "Add Items",
					value: "addItems",
				},
				{
					enable: true,
					title: "Accept",
					value: "accept",
				},
				{
					enable: true,
					title: "Cancel",
					value: "cancel",
				},
				{
					enable: false,
					title: "Pack",
					value: "pack",
				},
				{
					enable: false,
					title: "Unpack",
					value: "unpack",
				},
				{
					enable: false,
					title: "Dispatch",
					value: "dispatch",
				},
				{
					enable: false,
					title: "Return",
					value: "return",
				},
			],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "SalesItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "itemMpnCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "SalesItemItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					source: "drawer",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					source: "drawer",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "orderQuantityCell",
					source: "drawer",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemCommitedDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemScheduleDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemOrderDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",
					Cell: "SalesItemCreatedAtCell",
					source: "drawer",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemUpdatedAtCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "SalesItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "SalesItemDelivarySummaryCell",
					source: "drawer",
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						comment: true,
						accept: true,
						cancel: true,
						issueWorkorder: true,
						recheck: true,
						unhold: true,
						hold: true,
						procurement: true,
					},
					Cell: "SalesItemActionCell",

					source: "drawer",
				},
			],
		},
		permissions: {
			pageVisible: false,
		},
		ActiveOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		planningChartPage: {
			pageVisible: true,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tccoresize",
					Header: "Coresize",
					accessor: {
						method: "tcCoresizeAccessors",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "CuttingTcCoresizeCell",
				},
				{
					display: true,
					id: "binno",
					Header: "Bin No",
					accessor: {
						method: "tcBinnoAccessors",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issuetcqty",
					Header: "Order Quantity",
					accessor: {
						method: "OrderQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},
				{
					display: true,
					id: "productionquantity",
					Header: "Production Quantity",
					accessor: {
						method: "productionQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "windingType",
					Header: "Winding Type",

					accessor: {
						method: "plannigChartWindingTypeAccesor",
					},
					Filter: "SelectMultiWindingTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: true,
					disableSortBy: false,

					Cell: "CuttingTcOperatorCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {},
					Cell: "CuttingTCActionCell",
				},
			],
		},
	},
	WINDINGOP: {
		userPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		workOrdersPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{ enable: false, title: "Combine Tc", value: "combineTcIssue" },
			],
			Table1: [
				{
					display: true,
					id: "wocustomer",
					Header: "Customer",
					accessor: {
						method: "CustomerAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "workorderno",
					Header: "Work Order No",
					accessor: {
						method: "WorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "MPN",
					Header: "Part Number",
					accessor: {
						method: "WorkOrdreMPNAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issueqty",
					Header: "Issue Quantity",
					accessor: {
						method: "IssueQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: false,
					id: "qty",
					Header: "Completed Quantity",

					accessor: {
						method: "CompletedQuantityAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "IssueDate",
					Header: "Issue Date",
					accessor: {
						method: "IssueDateAccesorStoreKeeper",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "deliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "deliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},

				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "statusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "WorkOrderStatusFilter",
				},
				{
					display: false,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "OperatorAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						comment: true,
						issueTc: false,
						tcIssuedCompleted: false,
					},
					Cell: "SalesWorkOrderItemActionCell",

					source: "drawer",
				},
			],
		},
		issuedTcPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcworkorderno",
					Header: "Work Order No",
					accessor: {
						method: "issuedTcWorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "Issuedtcqty",
					Header: "Issue Quantity",
					accessor: {
						method: "issuedTcQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "IssuedTcStatusFilter",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						print: true,
						cancel: true,
						send: true,
					},
					Cell: "IssuedTCActionCell",
				},
			],
		},
		pendingOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		salesItemPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Issue WorkOrder", value: "issueWorkOrder" },
				{
					enable: true,
					title: "Recheck",
					value: "recheck",
				},
				{
					enable: false,
					title: "Hold",
					value: "hold",
				},
				{
					enable: false,
					title: "UnHold",
					value: "unHold",
				},
				{
					enable: false,
					title: "Procurement",
					value: "procurement",
				},
				{
					enable: true,
					title: "Add Items",
					value: "addItems",
				},
				{
					enable: true,
					title: "Accept",
					value: "accept",
				},
				{
					enable: true,
					title: "Cancel",
					value: "cancel",
				},
				{
					enable: false,
					title: "Pack",
					value: "pack",
				},
				{
					enable: false,
					title: "Unpack",
					value: "unpack",
				},
				{
					enable: false,
					title: "Dispatch",
					value: "dispatch",
				},
				{
					enable: false,
					title: "Return",
					value: "return",
				},
			],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "SalesItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "itemMpnCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "SalesItemItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					source: "drawer",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					source: "drawer",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "orderQuantityCell",
					source: "drawer",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemCommitedDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemScheduleDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemOrderDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",
					Cell: "SalesItemCreatedAtCell",
					source: "drawer",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemUpdatedAtCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "SalesItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "SalesItemDelivarySummaryCell",
					source: "drawer",
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						comment: true,
						accept: true,
						cancel: true,
						issueWorkorder: true,
						recheck: true,
						unhold: true,
						hold: true,
						procurement: true,
					},
					Cell: "SalesItemActionCell",

					source: "drawer",
				},
			],
		},
		permissions: {
			pageVisible: false,
		},
		ActiveOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		planningChartPage: {
			pageVisible: true,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tccoresize",
					Header: "Coresize",
					accessor: {
						method: "tcCoresizeAccessors",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "CuttingTcCoresizeCell",
				},
				{
					display: true,
					id: "binno",
					Header: "Bin No",
					accessor: {
						method: "tcBinnoAccessors",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issuetcqty",
					Header: "Order Quantity",
					accessor: {
						method: "OrderQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},
				{
					display: true,
					id: "productionquantity",
					Header: "Production Quantity",
					accessor: {
						method: "productionQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "windingType",
					Header: "Winding Type",

					accessor: {
						method: "plannigChartWindingTypeAccesor",
					},
					Filter: "SelectMultiWindingTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: true,
					disableSortBy: false,

					Cell: "CuttingTcOperatorCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {},
					Cell: "CuttingTCActionCell",
				},
			],
		},
	},
	DISPATCHOP: {
		userPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: true,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		workOrdersPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{ enable: false, title: "Combine Tc", value: "combineTcIssue" },
			],
			Table1: [
				{
					display: true,
					id: "wocustomer",
					Header: "Customer",
					accessor: {
						method: "CustomerAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "workorderno",
					Header: "Work Order No",
					accessor: {
						method: "WorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "MPN",
					Header: "Part Number",
					accessor: {
						method: "WorkOrdreMPNAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issueqty",
					Header: "Issue Quantity",
					accessor: {
						method: "IssueQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: false,
					id: "qty",
					Header: "Completed Quantity",

					accessor: {
						method: "CompletedQuantityAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "IssueDate",
					Header: "Issue Date",
					accessor: {
						method: "IssueDateAccesorStoreKeeper",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "deliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "deliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},

				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "statusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "WorkOrderStatusFilter",
				},
				{
					display: false,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "OperatorAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						comment: true,
						issueTc: false,
						tcIssuedCompleted: false,
					},
					Cell: "SalesWorkOrderItemActionCell",

					source: "drawer",
				},
			],
		},
		issuedTcPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcworkorderno",
					Header: "Work Order No",
					accessor: {
						method: "issuedTcWorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "Issuedtcqty",
					Header: "Issue Quantity",
					accessor: {
						method: "issuedTcQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "IssuedTcStatusFilter",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						print: true,
						cancel: true,
						send: true,
					},
					Cell: "IssuedTCActionCell",
				},
			],
		},
		pendingOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		salesItemPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Issue WorkOrder", value: "issueWorkOrder" },
				{
					enable: false,
					title: "Recheck",
					value: "recheck",
				},
				{
					enable: false,
					title: "Hold",
					value: "hold",
				},
				{
					enable: false,
					title: "UnHold",
					value: "unHold",
				},
				{
					enable: false,
					title: "Procurement",
					value: "procurement",
				},
				{
					enable: false,
					title: "Add Items",
					value: "addItems",
				},
				{
					enable: false,
					title: "Accept",
					value: "accept",
				},
				{
					enable: false,
					title: "Cancel",
					value: "cancel",
				},
				{
					enable: false,
					title: "Pack",
					value: "pack",
				},
				{
					enable: false,
					title: "Unpack",
					value: "unpack",
				},
				{
					enable: true,
					title: "Dispatch",
					value: "dispatch",
				},
				{
					enable: true,
					title: "Return",
					value: "return",
				},
			],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "SalesItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "itemMpnCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "SalesItemItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					source: "drawer",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					source: "drawer",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "orderQuantityCell",
					source: "drawer",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemCommitedDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemScheduleDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemOrderDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",
					Cell: "SalesItemCreatedAtCell",
					source: "drawer",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemUpdatedAtCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "SalesItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "SalesItemDelivarySummaryCell",
					source: "drawer",
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: false,
						comment: false,
						accept: false,
						cancel: false,
						issueWorkorder: false,
						recheck: false,
						unhold: false,
						hold: false,
						procurement: false,
						dispatch: true,
						return: true,
					},
					Cell: "SalesItemActionCell",

					source: "drawer",
				},
			],
		},
		permissions: {
			pageVisible: false,
		},
		ActiveOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		dispatchItemList: {
			pageVisible: true,
			topButtons: [],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "dispatchItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "dispatchItemMpnCell",
				},
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "dispatchCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
					Cell: "dispatchOrderNoCell",
				},

				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "dispatchItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					Cell: "dispatchItemStatusCell",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "dispatchOrderQuantityCell",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "dispatchItemCommitedDateCell",
				},

				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "dispatchItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "dispatchItemDelivarySummaryCell",
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						dispatch: true,
						return: true,
					},
					Cell: "SalesItemActionCell",
				},
			],
		},
	},
	SALES: {
		userPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		pendingOrdersPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		RecheckOrdersPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		salesItemPage: {
			pageVisible: true,
			topButtons: [
				{ enable: true, title: "Issue WorkOrder", value: "issueWorkOrder" },
				{
					enable: true,
					title: "Recheck",
					value: "recheck",
				},
				{
					enable: false,
					title: "Hold",
					value: "hold",
				},
				{
					enable: false,
					title: "UnHold",
					value: "unHold",
				},
				{
					enable: false,
					title: "Procurement",
					value: "procurement",
				},
				{
					enable: true,
					title: "Add Items",
					value: "addItems",
				},
				{
					enable: true,
					title: "Accept",
					value: "accept",
				},
				{
					enable: true,
					title: "Cancel",
					value: "cancel",
				},
				{
					enable: false,
					title: "Pack",
					value: "pack",
				},
				{
					enable: false,
					title: "Unpack",
					value: "unpack",
				},
				{
					enable: false,
					title: "Dispatch",
					value: "dispatch",
				},
				{
					enable: false,
					title: "Return",
					value: "return",
				},
			],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "SalesItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "itemMpnCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "SalesItemItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					source: "drawer",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					source: "drawer",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "orderQuantityCell",
					source: "drawer",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemCommitedDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemScheduleDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemOrderDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",
					Cell: "SalesItemCreatedAtCell",
					source: "drawer",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemUpdatedAtCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "SalesItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "SalesItemDelivarySummaryCell",
					source: "drawer",
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						comment: true,
						accept: true,
						cancel: true,
						issueWorkorder: true,
						recheck: true,
						unhold: true,
						hold: true,
						procurement: true,
					},
					Cell: "SalesItemActionCell",

					source: "drawer",
				},
			],
		},
		permissions: {
			pageVisible: false,
		},
		ActiveOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
	},
	CUTTINGOP: {
		userPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		workOrdersPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{ enable: false, title: "Combine Tc", value: "combineTcIssue" },
			],
			Table1: [
				{
					display: true,
					id: "wocustomer",
					Header: "Customer",
					accessor: {
						method: "CustomerAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "workorderno",
					Header: "Work Order No",
					accessor: {
						method: "WorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "MPN",
					Header: "Part Number",
					accessor: {
						method: "WorkOrdreMPNAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issueqty",
					Header: "Issue Quantity",
					accessor: {
						method: "IssueQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: false,
					id: "qty",
					Header: "Completed Quantity",

					accessor: {
						method: "CompletedQuantityAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "IssueDate",
					Header: "Issue Date",
					accessor: {
						method: "IssueDateAccesorStoreKeeper",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "deliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "deliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},

				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "statusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "WorkOrderStatusFilter",
				},
				{
					display: false,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "OperatorAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						comment: true,
						issueTc: false,
						tcIssuedCompleted: false,
					},
					Cell: "SalesWorkOrderItemActionCell",

					source: "drawer",
				},
			],
		},
		issuedTcPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcworkorderno",
					Header: "Work Order No",
					accessor: {
						method: "issuedTcWorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "Issuedtcqty",
					Header: "Issue Quantity",
					accessor: {
						method: "issuedTcQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "IssuedTcStatusFilter",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						print: true,
						cancel: true,
						send: true,
					},
					Cell: "IssuedTCActionCell",
				},
			],
		},
		pendingOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		salesItemPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Issue WorkOrder", value: "issueWorkOrder" },
				{
					enable: true,
					title: "Recheck",
					value: "recheck",
				},
				{
					enable: false,
					title: "Hold",
					value: "hold",
				},
				{
					enable: false,
					title: "UnHold",
					value: "unHold",
				},
				{
					enable: false,
					title: "Procurement",
					value: "procurement",
				},
				{
					enable: true,
					title: "Add Items",
					value: "addItems",
				},
				{
					enable: true,
					title: "Accept",
					value: "accept",
				},
				{
					enable: true,
					title: "Cancel",
					value: "cancel",
				},
				{
					enable: false,
					title: "Pack",
					value: "pack",
				},
				{
					enable: false,
					title: "Unpack",
					value: "unpack",
				},
				{
					enable: false,
					title: "Dispatch",
					value: "dispatch",
				},
				{
					enable: false,
					title: "Return",
					value: "return",
				},
			],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "SalesItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "itemMpnCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "SalesItemItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					source: "drawer",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					source: "drawer",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "orderQuantityCell",
					source: "drawer",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemCommitedDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemScheduleDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemOrderDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",
					Cell: "SalesItemCreatedAtCell",
					source: "drawer",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemUpdatedAtCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "SalesItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "SalesItemDelivarySummaryCell",
					source: "drawer",
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						comment: true,
						accept: true,
						cancel: true,
						issueWorkorder: true,
						recheck: true,
						unhold: true,
						hold: true,
						procurement: true,
					},
					Cell: "SalesItemActionCell",

					source: "drawer",
				},
			],
		},
		permissions: {
			pageVisible: false,
		},
		ActiveOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		planningChartPage: {
			pageVisible: true,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tccoresize",
					Header: "Coresize",
					accessor: {
						method: "tcCoresizeAccessors",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "CuttingTcCoresizeCell",
				},
				{
					display: true,
					id: "binno",
					Header: "Bin No",
					accessor: {
						method: "tcBinnoAccessors",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issuetcqty",
					Header: "Order Quantity",
					accessor: {
						method: "OrderQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},
				{
					display: true,
					id: "productionquantity",
					Header: "Production Quantity",
					accessor: {
						method: "productionQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: true,
					disableSortBy: false,

					Cell: "CuttingTcOperatorCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {},
					Cell: "CuttingTCActionCell",
				},
			],
		},
	},
	PACKINGOP: {
		userPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: true,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForPacking",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		workOrdersPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{ enable: false, title: "Combine Tc", value: "combineTcIssue" },
			],
			Table1: [
				{
					display: true,
					id: "wocustomer",
					Header: "Customer",
					accessor: {
						method: "CustomerAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "workorderno",
					Header: "Work Order No",
					accessor: {
						method: "WorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "MPN",
					Header: "Part Number",
					accessor: {
						method: "WorkOrdreMPNAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issueqty",
					Header: "Issue Quantity",
					accessor: {
						method: "IssueQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: false,
					id: "qty",
					Header: "Completed Quantity",

					accessor: {
						method: "CompletedQuantityAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "IssueDate",
					Header: "Issue Date",
					accessor: {
						method: "IssueDateAccesorStoreKeeper",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "deliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "deliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},

				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "statusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "WorkOrderStatusFilter",
				},
				{
					display: false,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "OperatorAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						comment: true,
						issueTc: false,
						tcIssuedCompleted: false,
					},
					Cell: "SalesWorkOrderItemActionCell",

					source: "drawer",
				},
			],
		},
		issuedTcPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcworkorderno",
					Header: "Work Order No",
					accessor: {
						method: "issuedTcWorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "Issuedtcqty",
					Header: "Issue Quantity",
					accessor: {
						method: "issuedTcQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "IssuedTcStatusFilter",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						print: true,
						cancel: true,
						send: true,
					},
					Cell: "IssuedTCActionCell",
				},
			],
		},
		pendingOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		salesItemPage: {
			pageVisible: true,
			topButtons: [
				{ enable: false, title: "Issue WorkOrder", value: "issueWorkOrder" },
				{
					enable: false,
					title: "Recheck",
					value: "recheck",
				},
				{
					enable: false,
					title: "Hold",
					value: "hold",
				},
				{
					enable: false,
					title: "UnHold",
					value: "unHold",
				},
				{
					enable: false,
					title: "Procurement",
					value: "procurement",
				},
				{
					enable: false,
					title: "Add Items",
					value: "addItems",
				},
				{
					enable: false,
					title: "Accept",
					value: "accept",
				},
				{
					enable: false,
					title: "Cancel",
					value: "cancel",
				},
				{
					enable: true,
					title: "Pack",
					value: "pack",
				},
				{
					enable: true,
					title: "Unpack",
					value: "unpack",
				},
				{
					enable: false,
					title: "Dispatch",
					value: "dispatch",
				},
				{
					enable: false,
					title: "Return",
					value: "return",
				},
			],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "SalesItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "itemMpnCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "SalesItemItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					source: "drawer",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					source: "drawer",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "orderQuantityCell",
					source: "drawer",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemCommitedDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemScheduleDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemOrderDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",
					Cell: "SalesItemCreatedAtCell",
					source: "drawer",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemUpdatedAtCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "SalesItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "SalesItemDelivarySummaryCell",
					source: "drawer",
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: false,
						comment: true,
						accept: false,
						cancel: false,
						issueWorkorder: false,
						recheck: false,
						unhold: false,
						hold: false,
						procurement: false,
						pack: true,
						unpack: true,
					},
					Cell: "SalesItemActionCell",

					source: "drawer",
				},
			],
		},
		permissions: {
			pageVisible: false,
		},
		ActiveOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		packingItemList: {
			pageVisible: true,
			topButtons: [],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "packingItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "packingiItemMpnCell",
				},
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "packingCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
					Cell: "packingOrderNoCell",
				},

				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "packingItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "packingOaDateCell",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					Cell: "packingItemStatusCell",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "packingOrderQuantityCell",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "packingItemCommitedDateCell",
				},

				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "packingItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "packingItemDelivarySummaryCell",
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						pack: true,
						unpack: true,
					},
					Cell: "SalesItemActionCell",
				},
			],
		},
	},
	WELDINGOP: {
		userPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		workOrdersPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{ enable: false, title: "Combine Tc", value: "combineTcIssue" },
			],
			Table1: [
				{
					display: true,
					id: "wocustomer",
					Header: "Customer",
					accessor: {
						method: "CustomerAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "workorderno",
					Header: "Work Order No",
					accessor: {
						method: "WorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "MPN",
					Header: "Part Number",
					accessor: {
						method: "WorkOrdreMPNAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issueqty",
					Header: "Issue Quantity",
					accessor: {
						method: "IssueQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: false,
					id: "qty",
					Header: "Completed Quantity",

					accessor: {
						method: "CompletedQuantityAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "IssueDate",
					Header: "Issue Date",
					accessor: {
						method: "IssueDateAccesorStoreKeeper",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "deliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "deliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},

				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "statusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "WorkOrderStatusFilter",
				},
				{
					display: false,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "OperatorAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						comment: true,
						issueTc: false,
						tcIssuedCompleted: false,
					},
					Cell: "SalesWorkOrderItemActionCell",

					source: "drawer",
				},
			],
		},
		issuedTcPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcworkorderno",
					Header: "Work Order No",
					accessor: {
						method: "issuedTcWorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "Issuedtcqty",
					Header: "Issue Quantity",
					accessor: {
						method: "issuedTcQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "IssuedTcStatusFilter",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						print: true,
						cancel: true,
						send: true,
					},
					Cell: "IssuedTCActionCell",
				},
			],
		},
		pendingOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		salesItemPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Issue WorkOrder", value: "issueWorkOrder" },
				{
					enable: true,
					title: "Recheck",
					value: "recheck",
				},
				{
					enable: false,
					title: "Hold",
					value: "hold",
				},
				{
					enable: false,
					title: "UnHold",
					value: "unHold",
				},
				{
					enable: false,
					title: "Procurement",
					value: "procurement",
				},
				{
					enable: true,
					title: "Add Items",
					value: "addItems",
				},
				{
					enable: true,
					title: "Accept",
					value: "accept",
				},
				{
					enable: true,
					title: "Cancel",
					value: "cancel",
				},
				{
					enable: false,
					title: "Pack",
					value: "pack",
				},
				{
					enable: false,
					title: "Unpack",
					value: "unpack",
				},
				{
					enable: false,
					title: "Dispatch",
					value: "dispatch",
				},
				{
					enable: false,
					title: "Return",
					value: "return",
				},
			],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "SalesItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "itemMpnCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "SalesItemItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					source: "drawer",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					source: "drawer",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "orderQuantityCell",
					source: "drawer",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemCommitedDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemScheduleDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemOrderDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",
					Cell: "SalesItemCreatedAtCell",
					source: "drawer",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemUpdatedAtCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "SalesItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "SalesItemDelivarySummaryCell",
					source: "drawer",
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						comment: true,
						accept: true,
						cancel: true,
						issueWorkorder: true,
						recheck: true,
						unhold: true,
						hold: true,
						procurement: true,
					},
					Cell: "SalesItemActionCell",

					source: "drawer",
				},
			],
		},
		permissions: {
			pageVisible: false,
		},
		ActiveOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		planningChartPage: {
			pageVisible: true,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tccoresize",
					Header: "Coresize",
					accessor: {
						method: "tcCoresizeAccessors",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "CuttingTcCoresizeCell",
				},
				{
					display: true,
					id: "binno",
					Header: "Bin No",
					accessor: {
						method: "tcBinnoAccessors",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issuetcqty",
					Header: "Order Quantity",
					accessor: {
						method: "OrderQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},
				{
					display: true,
					id: "productionquantity",
					Header: "Production Quantity",
					accessor: {
						method: "productionQuantityAccesor",
					},
					disableFilters: true,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "windingType",
					Header: "Winding Type",

					accessor: {
						method: "plannigChartWindingTypeAccesor",
					},
					Filter: "SelectMultiWindingTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: true,
					disableSortBy: false,

					Cell: "CuttingTcOperatorCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {},
					Cell: "CuttingTCActionCell",
				},
			],
		},
	},
	SUPERVISOR: {
		userPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		workOrdersPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{ enable: false, title: "Combine Tc", value: "combineTcIssue" },
			],
			Table1: [
				{
					display: true,
					id: "wocustomer",
					Header: "Customer",
					accessor: {
						method: "CustomerAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "workorderno",
					Header: "Work Order No",
					accessor: {
						method: "WorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "MPN",
					Header: "Part Number",
					accessor: {
						method: "WorkOrdreMPNAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "issueqty",
					Header: "Issue Quantity",
					accessor: {
						method: "IssueQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: false,
					id: "qty",
					Header: "Completed Quantity",

					accessor: {
						method: "CompletedQuantityAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "IssueDate",
					Header: "Issue Date",
					accessor: {
						method: "IssueDateAccesorStoreKeeper",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "deliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "deliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},

				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "statusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "WorkOrderStatusFilter",
				},
				{
					display: false,
					id: "operator",
					Header: "Operator",

					accessor: {
						method: "OperatorAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						comment: true,
						issueTc: false,
						tcIssuedCompleted: false,
					},
					Cell: "SalesWorkOrderItemActionCell",

					source: "drawer",
				},
			],
		},
		issuedTcPage: {
			pageVisible: false,
			topButtons: [
				{
					enable: false,
					title: "Send Bulk Tc",
					value: "sendbulktc",
				},
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
				{
					enable: false,
					title: "Print TC	",
					value: "hidePrintTc",
				},
			],
			Table1: [
				{
					display: true,
					id: "tccustomer",
					Header: "Customer",
					accessor: {
						method: "issuedTcCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcworkorderno",
					Header: "Work Order No",
					accessor: {
						method: "issuedTcWorkOrderNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcmpnNo",
					Header: "Part No",
					accessor: {
						method: "issuedTcMpnNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "tcno",
					Header: "TC NO",
					accessor: {
						method: "issuedTcNoAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "Issuedtcqty",
					Header: "Issue Quantity",
					accessor: {
						method: "issuedTcQuantityAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
				},

				{
					display: true,
					id: "issuedDate",
					Header: "Issued Date",
					accessor: {
						method: "issuedTCDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "tcdeliveryDate",
					Header: "Delivery Date",
					accessor: {
						method: "issuedTCDeliveryDateAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",
				},
				{
					display: true,
					id: "status",
					Header: "Status",

					accessor: {
						method: "issuedTcstatusAccesor",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "IssuedTcStatusFilter",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						print: true,
						cancel: true,
						send: true,
					},
					Cell: "IssuedTCActionCell",
				},
			],
		},
		pendingOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: false,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		salesItemPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Issue WorkOrder", value: "issueWorkOrder" },
				{
					enable: true,
					title: "Recheck",
					value: "recheck",
				},
				{
					enable: false,
					title: "Hold",
					value: "hold",
				},
				{
					enable: false,
					title: "UnHold",
					value: "unHold",
				},
				{
					enable: false,
					title: "Procurement",
					value: "procurement",
				},
				{
					enable: true,
					title: "Add Items",
					value: "addItems",
				},
				{
					enable: true,
					title: "Accept",
					value: "accept",
				},
				{
					enable: true,
					title: "Cancel",
					value: "cancel",
				},
				{
					enable: false,
					title: "Pack",
					value: "pack",
				},
				{
					enable: false,
					title: "Unpack",
					value: "unpack",
				},
				{
					enable: false,
					title: "Dispatch",
					value: "dispatch",
				},
				{
					enable: false,
					title: "Return",
					value: "return",
				},
			],
			Table1: [
				{
					display: true,
					id: "item",
					Header: "MPN",
					accessor: {
						method: "SalesItemMpnAccessor",
					},
					Filter: "DefaultSalesFilterColumn",
					disableFilters: false,
					disableSortBy: false,
					Cell: "itemMpnCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemCode",
					Header: "Item Code",
					accessor: {
						method: "SalesItemItemCodeAccesor",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					source: "drawer",
				},
				{
					display: true,
					id: "itemStatus",
					Header: "Status",
					accessor: {
						string: "itemStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderStatusFilter",
					source: "drawer",
				},
				{
					display: true,
					id: "orderquantity",
					Header: "Order Quantity",
					accessor: {
						string: "orderquantity",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DefaultSalesFilterColumn",
					Cell: "orderQuantityCell",
					source: "drawer",
				},

				{
					display: true,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemCommitedDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemScheduleDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemOrderDateCell",
					source: "drawer",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",
					Cell: "SalesItemCreatedAtCell",
					source: "drawer",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "SalesItemOrderDateFilter",

					Cell: "SalesItemUpdatedAtCell",
					source: "drawer",
				},
				{
					display: true,
					id: "itemDeliverySummary",
					Header: "Delivery Summary",
					accessor: {
						method: "SalesItemDelivarySummaryAccesor",
					},
					disableSortBy: true,
					disableFilters: true,
					Filter: "DefaultSalesFilterColumn",

					Cell: "SalesItemDelivarySummaryCell",
					source: "drawer",
				},

				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,
					showCellElements: {
						delete: false,
						edit: true,
						comment: true,
						accept: true,
						cancel: true,
						issueWorkorder: true,
						recheck: true,
						unhold: true,
						hold: true,
						procurement: true,
					},
					Cell: "SalesItemActionCell",

					source: "drawer",
				},
			],
		},
		permissions: {
			pageVisible: false,
		},
		ActiveOrdersPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
	},
	PRODUCTIONPL: {
		userPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "Activate All Button",
					value: "activateAllButton",
				},
				{
					enable: true,
					title: "Deactivate All Button",
					value: "deactivateAllButton",
				},
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Profile",
					accessor: {
						string: "profile",
					},
					Cell: "usersProfileCell",
					disableFilters: true,
					disableSortBy: true,
				},
				{
					display: true,
					id: "Name",
					Header: "Name",
					accessor: {
						string: "name",
					},
					sortType: {
						method: "nameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "UserName",
					Header: "UserName",
					accessor: {
						string: "username",
					},
					sortType: {
						method: "usernameSortType",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "DefaultRole",
					Header: "DefaultRole",
					accessor: {
						string: "defaultRole",
					},
					sortType: {
						method: "defaultRoleSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiDefaultRolesFilter",

					Cell: "usersDefaultRolesCell",
				},
				{
					display: true,
					id: "Roles",
					Header: "Roles",
					accessor: {
						method: "usersRolesAccessor",
					},
					sortType: {
						method: "rolesSortType",
					},
					disableFilters: false,
					disableSortBy: false,
					canGroupBy: true,
					Filter: "SelectMultiRolesFilter",

					Cell: "usersRolesCell",
				},

				{
					display: true,
					id: "Status",
					Header: "Status",
					accessor: {
						string: "userStatus",
					},
					sortType: {
						method: "userStatusSortType",
					},
					disableFilters: false,
					disableSortBy: false,

					Filter: "ColumnSelectStatusFilter",
					Cell: "usersStatusCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "actions",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "usersActionsCell",
				},
			],
		},
		delayReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "usernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCell",
				},
				{
					display: false,
					id: "CreatedAt",
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
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCell",
				},
			],
		},
		characteristicsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "characteristicUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "characteristicCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "characteristicCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "characteristicCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "characteristicUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "characteristicUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "characteristicVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "characteristicActionsCell",
				},
			],
		},
		typesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "typeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "typeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "typeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "typeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "typeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "typeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "typeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "typeActionsCell",
				},
			],
		},
		wattagesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "wattagesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "wattageCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "wattagesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "wattageCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "wattagesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "wattageUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "wattageVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "wattageActionsCell",
				},
			],
		},
		coreSizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "coresizeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "coresizeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "coresizeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "coresizeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "coresizeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "coresizeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "coreizeActionsCell",
				},
			],
		},
		formTypesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "formtypeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "formtypeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "formtypeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "formtypeCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "formtypeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "formtypeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "formtypeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "formtypeActionsCell",
				},
			],
		},
		holdReasonsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "holdreasonUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "holdreasonCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "holdreasonCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "holdreasonCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "holdreasonUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "holdreasonUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "holdreasonVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "holdReasonActionsCell",
				},
			],
		},
		leadDiaspage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leaddiaUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leaddiaCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leaddiaCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leaddiaCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leaddiaUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leaddiaUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leaddiaVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leaddiaActionsCell",
				},
			],
		},
		leadLengthPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "leadlengthUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "leadlengthCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "leadlengthCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "leadlengthCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "leadlengthUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "leadlengthUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "leadlengthVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "leadlengthActionsCell",
				},
			],
		},
		mpnSuffixListsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mpnSuffixListUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "mpnsuffixlistCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mpnSuffixListCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "mpnsuffixlistCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mpnSuffixListUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "mpnsuffixlistUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "mpnsuffixlistVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "mpnsuffixlistActionsCell",
				},
			],
		},
		shapesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "shapeUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "shapeCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "shapeCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdshapeCreatedAtCellAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "shapeUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "shapeUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "shapeVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "shapeActionsCell",
				},
			],
		},
		tcrsPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tcrUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tcrCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tcrCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tcrCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tcrUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tcrUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tcrVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tcrActionsCell",
				},
			],
		},
		tolerancesPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "tolerancesUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "tolerancesCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "tolerancesCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "tolerancesCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "tolerancesUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "tolerancesUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "tolerancesVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "tolerancesActionsCell",
				},
			],
		},
		warehousePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{ enable: true, title: "Show All Button", value: "showAllButton" },
				{ enable: true, title: "Hide All Button", value: "hideAllButton" },
				{
					enable: true,
					title: "Delete All Button",
					value: "deleteAllButton",
				},
				{
					enable: false,
					title: "Hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Value",
					Header: "Value",
					accessor: {
						string: "value",
					},

					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Label",
					Header: "Label",
					accessor: {
						string: "label",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Code",
					Header: "Code",
					accessor: {
						string: "code",
					},
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "warehouseUsernameAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "warehouseCreatedByCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "warehouseCreatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "warehouseCreatedAtCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "warehouseUpdatedAtAccessors",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "warehouseUpdatedAtCell",
				},
				{
					display: true,
					id: "Visible",
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
					Cell: "warehouseVisibleCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "warehouseActionsCell",
				},
			],
		},
		wattageToCoresizePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "Wattage",
					Header: "Wattage",
					accessor: {
						method: "wattageAccessor",
					},
					Filter: "SelectMultiWattageFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "Coresize",
					Header: "CoreSize",
					accessor: {
						method: "coresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coresizeWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "createdByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createByWattageToCoresizeCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "createdAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtWattageToCoresizeCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "updatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtWattageToCoresizeCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsWattageToCoresizeCell",
				},
			],
		},
		coresizeToLeadLengthToDiaPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "mappingCoresizeAccessor",
					},
					Filter: "SelectMultiCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadLength",
					Header: "Lead Length",
					accessor: {
						method: "mappingLeadLengthAccessor",
					},
					Filter: "SelectMultiLeadLengthFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: true,
					id: "LeadDia",
					Header: "Lead Dia",
					accessor: {
						method: "mappingLeadDiaAccessor",
					},
					Filter: "SelectMultiDiameterFilter",
					disableSortBy: false,
					disableFilters: false,
				},
				{
					display: false,
					id: "CreatedBy",
					Header: "Created By",
					accessor: {
						method: "mappingCreatedByAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Cell: "createdByCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "mappingCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "mappingupdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCoresizeToLeadLengthToDiaCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						delete: false,
						edit: true,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCoresizeToLeadLengthToDiaCell",
				},
			],
		},
		machinePage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: false,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "MachineName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Type",
					id: "MachineType",
					accessor: {
						string: "type",
					},
					Filter: "SelectMultiTypeFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "CoreSize",
					Header: "CoreSize",
					accessor: {
						method: "machineCoresizeAccessor",
					},
					Filter: "SelectMultiMachineCoresizeFilter",
					disableSortBy: false,
					disableFilters: false,
					Cell: "coreSizeMachineCell",
				},
				{
					display: true,
					Header: "WindingProcess",
					id: "WindingProcess",
					accessor: {
						string: "WindingProcess",
					},
					Filter: "SelectMultiWeddingFilter",
					disableFilters: false,
					disableSortBy: false,
					Cell: "windingProcessMachineCell",
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "machineCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtMachineCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "machineUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtMachineCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleMachineCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "actionsMachineCell",
				},
			],
		},
		customerPage: {
			pageVisible: false,
			topButtons: [
				{ enable: true, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					Header: "Name",
					id: "CustomerName",
					accessor: {
						string: "name",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					Header: "Value",
					id: "Value",
					accessor: {
						string: "value",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: false,
					id: "CreatedAt",
					Header: "Created At",
					accessor: {
						method: "customerCreatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "createdAtCustomerCell",
				},
				{
					display: false,
					id: "LastUpdatedAt",
					Header: "Last Updated At",
					accessor: {
						method: "customerUpdatedAtAccessor",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "updatedAtCustomerCell",
				},
				{
					display: true,
					id: "Visible",
					Header: "Visible",
					accessor: {
						string: "visible",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "ColumnSelectVisibleFilter",
					Cell: "visibleCustomerCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Actions",
					accessor: {
						string: "action",
					},
					showCellElements: {
						edit: true,
						delete: false,
					},
					disableSortBy: true,
					disableFilters: true,

					Cell: "ActionsCustomerCell",
				},
			],
		},
		dashboardPage: {
			pageVisible: false,
		},
		ordersPage: {
			pageVisible: true,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
					Cell: "SalesStatusCell",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCell",
				},
				{
					display: true,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
			Table2: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "orderDate",
					Header: "Order Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOrderDateCell",
				},
				{
					display: true,
					id: "orderno",
					Header: "OA Number",
					accessor: {
						string: "orderno",
					},
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "creationDate",
					Header: "Creation Date",

					accessor: {
						string: "orderDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesOaDateCell",
				},
				{
					display: false,
					id: "scheduleDate",
					Header: "Schedule Date",

					accessor: {
						string: "scheduleDate",
					},

					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesScheduleDateCell",
				},
				{
					display: false,
					id: "commitedDate",
					Header: "Commited Date",

					accessor: {
						string: "commitedDate",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "DateFilter",

					Cell: "SalesCommitedDateCell",
				},
				{
					display: false,
					id: "createdAt",
					Header: "Created At",
					accessor: {
						string: "createdAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",
					Cell: "SalesCreatedAtCell",
				},
				{
					display: false,
					id: "updatedAt",
					Header: "Last Updated At",
					accessor: {
						string: "updatedAt",
					},
					disableSortBy: false,
					disableFilters: false,
					Filter: "DateFilter",

					Cell: "SalesUpdatedAtCell",
				},

				{
					display: true,
					id: "orderStatus",
					Header: "Status",
					accessor: {
						string: "orderStatus",
					},
					disableFilters: false,
					disableSortBy: false,
					Filter: "OrderStatusFilter",
				},
				{
					display: true,
					id: "PaymentTerms ",
					Header: "Payment Terms ",
					accessor: {
						string: "PaymentTerms ",
					},
					disableFilters: false,
					disableSortBy: false,

					Cell: "PaymentTermCellForOrder",
				},
				{
					display: true,
					id: "Notification",
					Header: "",
					accessor: {
						string: "Notification",
					},
					disableFilters: true,
					disableSortBy: true,
					Cell: "NotificationCellForSales",
				},
				{
					display: false,
					id: "Actions",
					Header: "Action",
					accessor: {
						string: "action",
					},
					disableFilters: true,
					disableSortBy: true,

					Cell: "SalesActionCell",
				},
			],
		},
		ActiveOrdersPage: {
			pageVisible: true,
			topButtons: [
				{ enable: false, title: "Add Button", value: "addButton" },
				{
					enable: true,
					title: "hide Filters Button",
					value: "hideFiltersButton",
				},
			],
			Table1: [
				{
					display: true,
					id: "customer",
					Header: "Customer",
					accessor: {
						method: "SalesCustomerNameAccesor",
					},
					Filter: "CustomerNameFilter",
					disableFilters: false,
					disableSortBy: false,
				},
				{
					display: true,
					id: "customerOrderNumber",
					Header: "Order No",
					accessor: {
						string: "customerOrderNumber",
					},
					disableFilters: false,
				},