import {
	Button,
	Group,
	Input,
	Loader,
	MultiSelect,
	NumberInput,
	Select,
	Stack,
	Table,
	Text,
} from "@mantine/core";
import { DateRangePicker } from "@mantine/dates";
import dayjs from "dayjs";
import Cookies from "js-cookie";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import {
	useExpanded,
	useFilters,
	useGlobalFilter,
	usePagination,
	useRowSelect,
	useSortBy,
	useTable,
} from "react-table";
import WorkorderExpendView from "../../pages/WorkOrderPage/WorkOrderExpendView";
import {
	currentViewOrderId,
	setDrawerSalesQuery,
} from "../../redux/order/actions";
import {
	generateQuery,
	generateSalesQuery,
} from "../../services/generateQuery";
import { SortingIcon } from "../SortingIcon";
import { RowCheckbox } from "./selectRowCheckbox";
import { RowCheckboxHeader } from "./selectRowCheckboxHeader";
import "./styles.css";
import "./table.css";
import * as ROUTES from "../../configs/routes";
import { store } from "../../store";
import { todayDateStyle } from "../../utils/todayDateBg";

export const GlobleFilter = ({ filter, setFilter }) => {
	return (
		<span>
			<Input value={filter} onChange={e => setFilter(e.target.value)} />
		</span>
	);
};

export const DefaultFilterColumn = ({ column }) => {
	const { id } = column;

	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<span>
			<Input
				value={
					searchParams.get(id.replaceAll(" ", ""))
						? searchParams.get(id.replaceAll(" ", ""))
						: ""
				}
				onChange={e => {
					let obj = {};
					obj[id.replaceAll(" ", "")] = e.target.value;
					let gen = generateQuery([obj]);
					setSearchParams(gen);
				}}
			/>
		</span>
	);
};

export const DefaultSalesFilterColumn = ({ column }) => {
	const { id } = column;
	const [value, setValue] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();
	let location = useLocation();
	const { orderId, drawerSalesQuery = "" } = useSelector(state => ({
		orderId: state.orders?.currentOrderId,
		drawerSalesQuery: state?.orders?.drawersalesquery,
	}));

	return (
		<span>
			<Input
				value={
					location.pathname.includes("salesitem")
						? searchParams.get(id.replaceAll(" ", ""))
						: value
				}
				onChange={e => {
					let obj = {};
					obj[id.replaceAll(" ", "")] = e.target.value;

					if (location.pathname.includes("salesitem")) {
						let gen = generateQuery([obj]);
						setSearchParams(gen);
					} else {
						setValue(e.target.value);
						setDrawerSalesQuery(generateSalesQuery(obj, drawerSalesQuery));
					}
				}}
			/>
		</span>
	);
};

export const OrderStatusFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<Select
			value={
				searchParams.get("orderStatus") ? searchParams.get("orderStatus") : ""
			}
			defaultValue=""
			onChange={value => {
				let gen = generateQuery([{ orderStatus: value }]);
				setSearchParams(gen);
			}}
			data={[
				{ value: "", key: "ALL", label: "All" },
				{ value: "pending", key: "pending", label: "pending" },
				{ value: "accepted", key: "accepted", label: "accepted" },
				{ value: "recheck", key: "recheck", label: "recheck" },
				{
					value: "productionCompleted",
					key: "productionCompleted",
					label: "productionCompleted",
				},
				{
					value: "packingCompleted",
					key: "packingCompleted",
					label: "packingCompleted",
				},
				{
					value: "partiallyPacked",
					key: "partiallyPacked",
					label: "partiallyPacked",
				},
				{
					value: "partiallyDispatched",
					key: "partiallyDispatched",
					label: "partiallyDispatched",
				},
				{ value: "dispatch", key: "dispatch", label: "dispatch" },
				{ value: "itemOnHold", key: "itemOnHold", label: "itemOnHold" },
				{ value: "cancelled", key: "cancelled", label: "cancelled" },
			]}
		/>
	);
};
export const SalesItemOrderStatusFilter = ({ column }) => {
	const { id } = column;

	const [value, setValue] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();

	let location = useLocation();

	const { drawerSalesQuery = "" } = useSelector(state => ({
		drawerSalesQuery: state?.orders?.drawersalesquery,
	}));

	return (
		<Select
			value={
				location.pathname.includes("salesitem")
					? searchParams.get("itemStatus")
						? searchParams.get("itemStatus")
						: ""
					: value
			}
			defaultValue=""
			onChange={value => {
				let obj = {};
				obj[id.replaceAll(" ", "")] = value;

				if (location.pathname.includes("salesitem")) {
					let gen = generateQuery([obj]);
					setSearchParams(gen);
				} else {
					setValue(value);
					setDrawerSalesQuery(generateSalesQuery(obj, drawerSalesQuery));
				}
			}}
			data={[
				{ value: "", key: "ALL", label: "All" },
				{ value: "pending", key: "pending", label: "pending" },
				{ value: "accepted", key: "accepted", label: "accepted" },
				{ value: "recheck", key: "recheck", label: "recheck" },
				{
					value: "productionCompleted",
					key: "productionCompleted",
					label: "productionCompleted",
				},
				{
					value: "packingCompleted",
					key: "packingCompleted",
					label: "packingCompleted",
				},
				{
					value: "partiallyPacked",
					key: "partiallyPacked",
					label: "partiallyPacked",
				},
				{
					value: "partiallyDispatched",
					key: "partiallyDispatched",
					label: "partiallyDispatched",
				},
				{ value: "dispatch", key: "dispatch", label: "dispatch" },
				{ value: "itemOnHold", key: "itemOnHold", label: "itemOnHold" },
				{ value: "cancelled", key: "cancelled", label: "cancelled" },
			]}
		/>
	);
};

export const SalesItemOrderDateFilter = ({ column }) => {
	const { id } = column;
	const [value, setValue] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();
	let location = useLocation();
	const { drawerSalesQuery = "" } = useSelector(state => ({
		drawerSalesQuery: state?.orders?.drawersalesquery,
	}));

	let date = location.pathname.includes("salesitem")
		? searchParams.get(id.replaceAll(" ", ""))
			? searchParams.get(id.replaceAll(" ", ""))
			: null
		: value;
	if (date && location.pathname.includes("salesitem")) {
		date = date.split(",");
		date = date?.map(item => new Date(dayjs(item).format("DD/MM/YYYY")));
		date = date[0] === "Invalid Date" ? "" : date;
	}

	return (
		<DateRangePicker
			dayStyle={date => todayDateStyle(date)}
			value={date}
			inputFormat="DD/MM/YYYY"
			placeholder="Pick date"
			style={{ minWidth: "115px" }}
			onChange={value => {
				// createdAt: `${value[0]},${value[1]}`,

				if (value[0] && value[1]) {
					let obj = {};
					obj[
						id.replaceAll(" ", "")
					] = `${value[0].toISOString()},${value[1].toISOString()}`;
					if (location.pathname.includes("salesitem")) {
						let gen = generateQuery([obj]);
						setSearchParams(gen);
					} else {
						setValue(value);
						setDrawerSalesQuery(generateSalesQuery(obj, drawerSalesQuery));
					}
				} else {
					let obj = {};
					obj[id.replaceAll(" ", "")] = "";
					if (location.pathname.includes("salesitem")) {
						let gen = generateQuery([obj]);
						setSearchParams(gen);
					} else {
						setValue(value);
						setDrawerSalesQuery(generateSalesQuery(obj, drawerSalesQuery));
					}
				}
			}}
		/>
	);
};

export const DateFilter = ({ column }) => {
	const { id } = column;
	const [searchParams, setSearchParams] = useSearchParams();
	let date = searchParams.get(id.replaceAll(" ", ""))
		? searchParams.get(id.replaceAll(" ", ""))
		: null;
	if (date) {
		date = date.split(",");
		date = date?.map(item => new Date(dayjs(item).format("DD/MM/YYYY")));
		date = date[0] === "Invalid Date" ? "" : date;
	}

	return (
		<DateRangePicker
			dayStyle={date => todayDateStyle(date)}
			value={date}
			inputFormat="DD/MM/YYYY"
			placeholder="Pick date"
			style={{ minWidth: "115px" }}
			onChange={value => {
				// createdAt: `${value[0]},${value[1]}`,

				if (value[0] && value[1]) {
					let obj = {};
					obj[
						id.replaceAll(" ", "")
					] = `${value[0].toISOString()},${value[1].toISOString()}`;
					let gen = generateQuery([obj]);
					setSearchParams(gen);
				} else {
					let obj = {};
					obj[id.replaceAll(" ", "")] = "";
					let gen = generateQuery([obj]);
					setSearchParams(gen);
				}
			}}
		/>
	);
};

export const ColumnSelectStatusFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<Select
			value={
				searchParams.get("userStatus") ? searchParams.get("userStatus") : null
			}
			style={{ maxWidth: "130px" }}
			defaultValue=""
			onChange={value => {
				let gen = generateQuery([{ userStatus: value }]);
				setSearchParams(gen);
			}}
			data={[
				{ value: "", key: "ALL", label: "All" },
				{ value: "1", key: "ACTIVATED", label: "Activated" },
				{ value: "0", key: "DEACTIVATED", label: "Deactivated" },
			]}
		/>
	);
};

export const ColumnSelectVisibleFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<Select
			value={searchParams.get("visible") ? searchParams.get("visible") : ""}
			defaultValue=""
			onChange={value => {
				let gen = generateQuery([{ visible: value }]);
				setSearchParams(gen);
			}}
			data={[
				{ value: "", key: "ALL", label: "All" },
				{ value: "1", key: "Show", label: "Show" },
				{ value: "0", key: "Hide", label: "Hide" },
			]}
		/>
	);
};

export const SelectMultiRolesFilter = ({ column: { filter, setFilter } }) => {
	const allRoles = useSelector(state => state?.user?.data);
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<MultiSelect
			zIndex={10}
			style={{ maxWidth: "200px" }}
			value={
				searchParams.get("userroles")
					? searchParams.get("userroles").split(",")
					: null
			}
			data={
				allRoles
					? allRoles?.map(item => {
							return { value: item?.id, key: item?.slug, label: item?.title };
					  })
					: []
			}
			onChange={value => {
				let gen = generateQuery([{ userroles: value }]);
				setSearchParams(gen);
			}}
		/>
	);
};
export const SelectMultiWattageFilter = column => {
	const { filter, setFilter, preFilteredRows, id } = column;
	const [searchParams, setSearchParams] = useSearchParams();
	const wattages = useSelector(state => state.context?.wattages);
	return (
		<MultiSelect
			zIndex={10}
			searchable
			value={
				searchParams.get("Wattage")
					? searchParams.get("Wattage").split(",")
					: null
			}
			data={
				wattages?.rows?.length > 0
					? wattages?.rows?.map(item => {
							return { label: item.label, value: item.label };
					  })
					: []
			}
			onChange={value => {
				let gen = generateQuery([{ Wattage: value }]);
				setSearchParams(gen);
				// setFilter(value || undefined);
			}}
		/>
	);
};

export const SelectMultiCoresizeFilter = ({
	column: { filter, setFilter, preFilteredRows, id },
}) => {
	const coreSizes = useSelector(state => state.context?.coresizes);

	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<MultiSelect
			zIndex={10}
			searchable
			value={
				searchParams.get("CoreSize")
					? searchParams.get("CoreSize").split(",")
					: null
			}
			data={
				coreSizes?.rows?.length > 0
					? coreSizes?.rows?.map(item => {
							return { label: item.label, value: item.label };
					  })
					: []
			}
			onChange={value => {
				let gen = generateQuery([{ coresize: value }]);
				setSearchParams(gen);
			}}
		/>
	);
};
export const SelectMultiDiameterFilter = column => {
	const { filter, setFilter, preFilteredRows, id } = column;
	const [searchParams, setSearchParams] = useSearchParams();
	const leadDias = useSelector(state => state.context?.leaddias);
	return (
		<MultiSelect
			zIndex={10}
			searchable
			value={
				searchParams.get("LeadDia")
					? searchParams.get("LeadDia").split(",")
					: null
			}
			data={
				leadDias?.rows?.length > 0
					? leadDias?.rows?.map(item => {
							return { label: item.label, value: item.label };
					  })
					: []
			}
			onChange={value => {
				let gen = generateQuery([{ LeadDia: value }]);
				setSearchParams(gen);
				// setFilter(value || undefined);
			}}
		/>
	);
};

export const SelectMultiLeadLengthFilter = ({
	column: { filter, setFilter, preFilteredRows, id },
}) => {
	const leadLengths = useSelector(state => state.context?.leadlengths);

	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<MultiSelect
			zIndex={10}
			searchable
			value={
				searchParams.get("LeadLength")
					? searchParams.get("LeadLength").split(",")
					: null
			}
			data={
				leadLengths?.rows?.length > 0
					? leadLengths?.rows?.map(item => {
							return { label: item.label, value: item.label };
					  })
					: []
			}
			onChange={value => {
				let gen = generateQuery([{ LeadLength: value }]);
				setSearchParams(gen);
			}}
		/>
	);
};
export const SelectMultiDefaultRolesFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const allRoles = useSelector(state => state.user.data);

	return (
		<MultiSelect
			zIndex={10}
			value={
				searchParams.get("defaultRole")
					? searchParams.get("defaultRole").split(",")
					: null
			}
			data={
				allRoles
					? allRoles?.map(item => {
							return { value: item?.id, key: item?.slug, label: item?.title };
					  })
					: []
			}
			onChange={value => {
				let gen = generateQuery([{ defaultRole: value }]);
				setSearchParams(gen);
			}}
			style={{ maxWidth: 150 }}
		/>
	);
};

export const SelectMultiTypeFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<MultiSelect
			zIndex={10}
			value={
				searchParams.get("type") ? searchParams.get("type").split(",") : null
			}
			data={["Cutting", "Winding", "Welding", "Coating"]}
			onChange={value => {
				let gen = generateQuery([{ type: value }]);
				setSearchParams(gen);
			}}
			style={{ maxWidth: 150 }}
		/>
	);
};
export const SelectMultiWindingFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<MultiSelect
			zIndex={10}
			value={
				searchParams.get("WindingProcess")
					? searchParams.get("WindingProcess").split(",")
					: null
			}
			data={[
				{ label: "N/A", value: "0" },
				{ label: "Melf", value: "Melf" },
				{ label: "Leaded", value: "Leaded" },
			]}
			onChange={value => {
				let gen = generateQuery([{ WindingProcess: value }]);
				setSearchParams(gen);
			}}
			style={{ maxWidth: 150 }}
		/>
	);
};

export const SelectVisibleFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<Select
			value={searchParams.get("visible") ? searchParams.get("visible") : ""}
			defaultValue=""
			onChange={value => {
				let gen = generateQuery([{ visible: value }]);
				setSearchParams(gen);
			}}
			data={[
				{ value: "", key: "ALL", label: "All" },
				{ value: "true", key: "Show", label: "Show" },
				{ value: "false", key: "Hide", label: "Hide" },
			]}
		/>
	);
};

const TableComponent = ({
	from,
	Data,
	loading,
	Columns,
	setOpened,
	setDrawerData,
	sort,
	globleSearch = false,
	columnSearch = false,
	setSelected,
	showFilter = true,
	setPagnation,
	planningChartClick = false,
	salesOrderItemsPageOpen = false,
	dataCount,
	ExpandItemView,
	setOpenedDrawer = () => {},
	opened,
	rowClick = false,
	itemClick = false,
	selectAllRows = () => {},
	handleSelectRow = () => {},
	showPagination = true,
	hideColumCLick = true,
	pagesize,
	setData,
	setFlag,
	flag,
	setcolumnName,
	columnName,
}) => {
	const columns = useMemo(() => Columns, [Columns]);
	const data = useMemo(() => Data, [Data]);
	const location = useLocation();
	const [pageNumber, setpageNumber] = useState(1);
	const [itemClickStatus, setItemClickStatus] = useState({});
	const [searchParams, setSearchParams] = useSearchParams();
	const {
		orderId = "",
		drawerOpened,
		totalStockClick,
		totalPackedStockClick,
		totalReturnsClick,
	} = useSelector(state => ({
		orderId: state.orders?.currentOrderId,
		drawerOpened: state.orders?.drawerOpened,
		totalStockClick: state.stock?.totalStockClick,
		totalPackedStockClick: state.stock?.totalPackedStockClick,
		totalReturnsClick: state.stock?.totalReturnsClick,
	}));

	const selectedData = useSelector(state => state.Items);

	const setItemClickStatusFn = (key, value) => {
		return setItemClickStatus(crr => {
			const _curr = {};
			_curr[key] = value;
			return _curr;
		});
	};

	const defaultColumn = useMemo(
		() => ({
			// Let's set up our default Filter UI
			Filter: DefaultFilterColumn,
		}),
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,

		previousPage,
		prepareRow,
		visibleColumns,
		selectedFlatRows,
		canNextPage,
		pageOptions,
		canPreviousPage,
		state: { pageIndex, pageSize, expanded },
		gotoPage,
		setPageSize,
		pageCount,
	} = useTable(
		{
			columns,
			data,
			defaultColumn,
			manualSortBy: true,

			disableGlobalFilter: !globleSearch,
			disableSortBy: !sort,
			initialState: { pageIndex: 0, pageSize: pagesize ? pagesize : 50 },
		},
		useGlobalFilter,
		useFilters,
		useSortBy,
		useExpanded,
		usePagination,
		useRowSelect,

		hooks => {
			hooks.visibleColumns.push(columns => {
				return [
					{
						id: "selection",
						Header: ({ getToggleAllPageRowsSelectedProps }) =>
							showPagination && (
								<div>
									<RowCheckboxHeader
										from={from}
										Data={Data}
										selectAllRows={selectAllRows}
										{...getToggleAllPageRowsSelectedProps()}
									/>
								</div>
							),

						Cell: ({ row }) =>
							showPagination && (
								<div>
									<RowCheckbox
										handleSelectRow={handleSelectRow}
										{...row.getToggleRowSelectedProps()}
										row={row}
									/>
								</div>
							),
					},
					...columns,
				];
			});
		}
	);

	useEffect(() => {
		if (loading) return null;
		setSelected(selectedFlatRows);
	}, [selectedFlatRows, loading]);

	useEffect(() => {
		if (!pageIndex && !pageSize) return;
		if (setPagnation) {
			setPagnation({ pageNumber, pageSize });
		}
	}, [pageNumber, pageSize]);

	// useEffect(() => {
	// 	if (selectedData.length != 0) {
	// 		store.dispatch({
	// 			type: "removeAll",
	// 		});
	// 	}
	// }, [data]);

	const handleNumberOfPage = pageSize => {
		return parseInt(dataCount / pageSize) + (dataCount % pageSize ? 1 : 0);
	};
	const topValues = {
		"/stockhome": 79,
		"/salesorder": 79,
		"/pendingorders": 79,
		"/recheckorders": 79,
		"/activeorders": 79,
		"/users": 79,
		"/types": 79,
		"/characterstics": 79,
		"/coresizes": 79,
		"/wattages": 79,
		"/tolerances": 79,
		"/shapes": 79,
		"/leadlengths": 79,
		"/leaddias": 79,
		"/formtypes": 79,
		"/delayreasons": 79,
		"/holdreasons": 79,
		"/mpnsuffixlists": 79,
		"/warehouse": 79,
		"/machinemanagement": 79,
		"/customers": 79,
		"/wattagetocoresize": 79,
		"/coresizetoleadlengthanddia": 79,
	};
	return (
		<>
			<Stack align="flex-end">
				<Table className="table" my="xs" highlightOnHover {...getTableProps()}>
					<thead
						style={{
							backgroundColor: "#F1F3F5",
							position: "sticky",
							top: [
								totalReturnsClick,
								totalPackedStockClick,
								totalStockClick,
								drawerOpened,
							].includes(true)
								? -1
								: window.location.pathname.includes("/salesitem")
								? 111
								: topValues?.[window.location.pathname] || -1,
							zIndex: 11,
						}}>
						{headerGroups.map(headerGroup => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers?.map(column => {
									return (
										<Text
											component="th"
											size="sm"
											weight={600}
											key={column.id}
											{...column.getHeaderProps(column.getSortByToggleProps())}
											style={{ textAlign: !showFilter ? "left" : "center" }}>
											{column?.button?.length > 0 ? (
												<button
													id={column.id}
													onClick={() => {
														setData(column.button);
														if (flag) {
															setFlag(false);
															setcolumnName(previousState => {
																let pr = previousState;
																pr[column.id] = null;

																return {
																	...pr,
																};
															});
														} else {
															setcolumnName(previousState => {
																return {
																	...previousState,
																	[column.id]: column.id,
																};
															});
															setFlag(true);
														}
													}}>
													{column.id === columnName[column.id] ? "-" : "+"}
												</button>
											) : (
												""
											)}
											{column.render("Header")}
											<SortingIcon
												isSorted={column.isSorted}
												isDesc={column.isSortedDesc}
												fieldtitle={column.id}
												source={column.source}
												id={orderId}
											/>
										</Text>
									);
								})}
							</tr>
						))}
						{showFilter
							? headerGroups?.map(headerGroup => (
									<tr {...headerGroup.getHeaderGroupProps()}>
										{headerGroup.headers?.map(column => (
											<th key={column.id}>
												<div>
													{column.canFilter ? column.render("Filter") : null}
												</div>
											</th>
										))}
									</tr>
							  ))
							: null}
					</thead>
					<tbody {...getTableBodyProps()} style={{ paddingTop: "9rem" }}>
						{page?.map((row, index) => {
							const itemStatus = row?.original?.itemStatus;

							let showColor = false;
							if (localStorage.getItem("active_role") === "SALES") {
								showColor =
									itemStatus === "PENDING" || itemStatus === "RECHECK";
							}
							if (localStorage.getItem("active_role") === "PRODUCTIONPL") {
								showColor = itemStatus === "ACCEPTED";
							}

							let committedDatePassed = false;
							let itemsWithNoBg = false;
							if (localStorage.getItem("active_role") === "PACKINGOP") {
								itemsWithNoBg =
									itemStatus === "PENDING" ||
									itemStatus === "CANCELLED" ||
									itemStatus === "PACKINGCOMPLETED" ||
									itemStatus === "DISPATCHED";
								committedDatePassed = dayjs().isAfter(
									dayjs(row?.original?.commitedDate, "day").add(1, "day")
								);
							}
							if (localStorage.getItem("active_role") === "DISPATCHOP") {
								itemsWithNoBg =
									itemStatus === "PENDING" ||
									itemStatus === "CANCELLED" ||
									itemStatus === "DISPATCHED";

								committedDatePassed = dayjs().isAfter(
									dayjs(row?.original?.commitedDate, "day").add(3, "day")
								);
							}

							let highlightCondition =
								["/salesorder", "/dispatchitemlist"].includes(
									window.location.pathname
								) &&
								localStorage.getItem("active_role") === "DISPATCHOP" &&
								["PARTIALLYPACKED", "PACKINGCOMPLETED"].includes(itemStatus);

							prepareRow(row);

							return (
								<>
									<tr
										className={
											showColor
												? "showColor"
												: salesOrderItemsPageOpen &&
												  !itemsWithNoBg &&
												  (committedDatePassed || highlightCondition)
												? "showDangerBg"
												: ""
										}
										key={index}
										style={{
											background:
												planningChartClick && row.original?.isAccepted === "YES"
													? Cookies.get("USER_ID") === row.original?.operator
														? "#9FE2BF"
														: "#CED4DA"
													: localStorage.getItem("itemCode") ===
													  row.original?.itemno
													? "#9FE2BF"
													: localStorage.getItem("OANumber") ===
															row.original?.orderno &&
													  window.location.pathname === "/salesorder"
													? "#9FE2BF"
													: "",
										}}
										{...row.getRowProps()}>
										{row?.cells?.map(cell => {
											const rowId = cell?.column?.id;
											const status =
												cell?.row?.original?.tcMapper?.[0]?.issueTcItem
													?.itemStatus;
											// if (
											// 	[
											// 		"CUTTINGOP",
											// 		"COATINGOP",
											// 		"WINDINGOP",
											// 		"WELDINGOP",
											// 		"CHECKINGOP",
											// 	].includes(localStorage.getItem("active_role"))
											// ) {
											// 	planningChartClick =
											// 		status == "ITEMONHOLD" ? false : true;
											// }
											return (
												<Text
													onClick={
														// rowClick && itemClick
														// 	? setItemClickStatusFn(row?.original?.id, true)
														// 	:
														rowClick &&
														hideColumCLick &&
														rowId !== ("action" || "actions") &&
														rowId !== "Actions" &&
														rowId !== "selection"
															? () => {
																	if (itemClick) {
																		setItemClickStatusFn(
																			row?.original?.id,
																			itemClickStatus[row?.original?.id]
																				? false
																				: true
																		);
																	} else if (
																		planningChartClick &&
																		([
																			"CUTTINGOP",
																			"COATINGOP",
																			"WINDINGOP",
																			"WELDINGOP",
																			"CHECKINGOP",
																		].includes(
																			localStorage.getItem("active_role")
																		)
																			? status !== "ITEMONHOLD"
																			: true)
																	) {
																		setOpened(true);
																		setDrawerData(
																			window.location.pathname ==
																				"/coatingproductionchart"
																				? row?.original?.tcshift_detail
																				: row?.original
																		);
																	} else if (
																		window.location.pathname == "/ordermonitor"
																	) {
																		localStorage.setItem(
																			"itemCode",
																			row.original?.itemCode
																		);
																		window.open(
																			`${ROUTES.SALESITEMS}/${row.original?.orderId}`,
																			// `${ROUTES.SALESITEMS}/${row.original?.orderId}?itemCode=${row.original?.itemCode}`,
																			"_blank"
																		);
																	} else if (
																		window.location.pathname ==
																		"/salesexcelupload"
																	) {
																		localStorage.setItem(
																			"OANumber",
																			row.original?.oanumber
																		);
																		window.open(
																			`${ROUTES.SALESORDER}`,
																			"_blank"
																		);
																	} else {
																		setOpenedDrawer({
																			opened: true,
																			data: row?.original,
																		});
																		currentViewOrderId(row?.original?.id);
																	}
															  }
															: () => {}
													}
													component="td"
													size="sm"
													style={{
														border: "none",
														textAlign: [
															"stockHomeTotalStockQuantityCell",
															"stockHomePackedQuantityCell",
															"stockHomeReturnsQuantityCell",
															"stockHomeTotalQuantityCell",
														].includes(cell?.column?.Cell?.name)
															? "center"
															: "left",
														cursor: rowClick ? "pointer" : "",
													}}
													{...cell.getCellProps()}>
													{cell.render("Cell")}
												</Text>
											);
										})}
									</tr>

									{itemClickStatus[row?.original?.id] ? (
										<tr>
											{itemClick &&
											![
												"/workorders",
												"/pendingworkorders",
												"/packingitemlist",
												"/dispatchitemlist",
											].includes(location.pathname) ? (
												<td colSpan={visibleColumns.length}>
													<ExpandItemView data={row?.original} row={row} />
												</td>
											) : null}
											{[
												"/workorders",
												"/pendingworkorders",
												"/packingitemlist",
												"/dispatchitemlist",
											].includes(location.pathname) ? (
												<td colSpan={visibleColumns.length}>
													<WorkorderExpendView data={row?.original} row={row} />
												</td>
											) : null}
										</tr>
									) : null}
								</>
							);
						})}
					</tbody>
				</Table>
				{loading && (
					<Group position="center" style={{ width: "100%" }}>
						<Loader />
					</Group>
				)}

				{showPagination && (
					<Group spacing={2} align="center" noWrap direction="row">
						<Button onClick={() => setpageNumber(1)} disabled={pageNumber <= 1}>
							{"<<"}
						</Button>

						<Button
							onClick={() => setpageNumber(pageNumber - 1)}
							disabled={pageNumber <= 1}>
							{"<"}
						</Button>

						<Button
							onClick={() => setpageNumber(pageNumber + 1)}
							disabled={
								pageNumber === handleNumberOfPage(pageSize) ||
								handleNumberOfPage(pageSize) === 0
							}>
							{">"}
						</Button>

						<Button
							onClick={() => setpageNumber(handleNumberOfPage(pageSize))}
							disabled={
								pageNumber === handleNumberOfPage(pageSize) ||
								handleNumberOfPage(pageSize) === 0
							}>
							{">>"}
						</Button>

						<Text color={"gray"} ml="xs" size="sm">
							Page {pageNumber} of{" "}
							{isNaN(handleNumberOfPage(pageSize))
								? "...LOADING"
								: handleNumberOfPage(pageSize)}
						</Text>

						<Group spacing={8} noWrap>
							<Text color={"gray"} size="sm">
								| Go to page:{" "}
								<NumberInput
									value={pageNumber}
									min={1}
									max={dataCount ? handleNumberOfPage(pageSize) : ""}
									defaultValue={1}
									onChange={val => {
										const page = val > 0 ? Number(val) : 1;
										setpageNumber(page);
									}}
									style={{ width: "100px", display: "inline-flex" }}
								/>
							</Text>

							<Select
								style={{ maxWidth: "120px" }}
								placeholder={`Show ${pageSize}`}
								// value={pageSize}
								// defaultValue={""}
								onChange={value => {
									setPageSize(parseInt(value));
								}}
								data={["10", "20", "30", "40", "50", "100"].map(item => {
									return { value: item, label: "Show " + item };
								})}
							/>
						</Group>
					</Group>
				)}
			</Stack>
		</>
	);
};
export default TableComponent;
