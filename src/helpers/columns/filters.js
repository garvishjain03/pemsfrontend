import { Input, MultiSelect, Select } from "@mantine/core";
import { DateRangePicker } from "@mantine/dates";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { setDrawerSalesQuery } from "../../redux/order/actions";
import {
	generateQuery,
	generateSalesQuery,
} from "../../services/generateQuery";
import { store } from "../../store";
import { todayDateStyle } from "../../utils/todayDateBg";

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

					// if (location.pathname.includes("salesitem")) {
					// 	let gen = generateQuery([obj]);
					// 	setSearchParams(gen);
					// } else {
					setValue(e.target.value);
					setDrawerSalesQuery(generateSalesQuery(obj, drawerSalesQuery));
					// }
				}}
			/>
		</span>
	);
};

export const LaserCutFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<MultiSelect
			value={searchParams.get("laserCut") ? searchParams.get("laserCut") : ""}
			defaultValue=""
			onChange={value => {
				let gen = value.length > 0 ? generateQuery([{ laserCut: value }]) : "";
				setSearchParams(gen);
			}}
			data={[
				{ value: "YES", key: "Y", label: "Y" },
				{ value: "NO", key: "N", label: "N" },
			]}
		/>
	);
};

export const OrderStatusFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<MultiSelect
			value={
				searchParams.get("orderStatus") ? searchParams.get("orderStatus") : ""
			}
			defaultValue=""
			onChange={value => {
				// store.dispatch({
				// 	type: "removeAll",
				// });

				let gen =
					value.length > 0 ? generateQuery([{ orderStatus: value }]) : "";
				setSearchParams(gen);
			}}
			data={[
				{ value: "active", key: "active", label: "ACTIVE" },
				{ value: "", key: "ALL", label: "All" },
				{
					value: "cancelled",
					key: "cancelled",
					label: "CANCELLED",
				},
				{
					value: "dispatched",
					key: "dispatched",
					label: "DISPATCHED",
				},
				{ value: "orderclosed", key: "orderclosed", label: "ORDER CLOSED" },
				{
					value: "itemonhold",
					key: "itemonhold",
					label: "ITEM ON HOLD",
				},
				{
					value: "orderonhold",
					key: "orderonhold",
					label: "ORDER ON HOLD",
				},
				{
					value: "packingcompleted",
					key: "packingcompleted",
					label: "PACKING COMPLETED",
				},
				{ value: "pending", key: "pending", label: "PENDING" },

				{
					value: "recheck",
					key: "recheck",
					label: "RECHECK",
				},
			]}
		/>
	);
};
export const WorkOrderStatusFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<MultiSelect
			value={searchParams.get("status") ? searchParams.get("status") : ""}
			defaultValue=""
			onChange={value => {
				let gen = value.length > 0 ? generateQuery([{ status: value }]) : "";
				setSearchParams(gen);
			}}
			data={[
				{ value: "pending", key: "pending", label: "PENDING" },

				{ value: "inprogress", key: "inprogress", label: "INPROGRESS" },
				{ value: "onhold", key: "onhold", label: "ONHOLD" },
				{
					value: "tcissuedcompleted",
					key: "tcissuedcompleted",
					label: "TCISSUEDCOMPLETED",
				},
				{ value: "completed", key: "completed", label: "COMPLETED" },
				{ value: "cancelled", key: "cancelled", label: "CANCELLED" },
			]}
		/>
	);
};
export const WorkOrderCustomerStatusFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<MultiSelect
			value={searchParams.get("status") ? searchParams.get("status") : ""}
			defaultValue=""
			onChange={value => {
				let gen = generateQuery([{ status: value }]);
				setSearchParams(gen);
			}}
			data={[
				{ value: "pending", key: "pending", label: "PENDING" },

				{ value: "inprogress", key: "inprogress", label: "INPROGRESS" },
				{
					value: "tcissuedcompleted",
					key: "tcissuedcompleted",
					label: "TCISSUEDCOMPLETED",
				},
			]}
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
		date = date?.map(item => new Date(item));
		date = date[0] === "Invalid Date" ? "" : date;
	}

	return (
		<DateRangePicker
			clickOutsideEvents={["click"]}
			dayStyle={date => todayDateStyle(date)}
			value={date}
			inputFormat="DD/MM/YYYY"
			placeholder="Pick date"
			style={{ minWidth: "115px" }}
			allowSingleDateInRange
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

export const SelectMultiRolesFilter = () => {
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
							return { label: item.label, value: item.id };
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

export const SelectMultiCoresizeFilter = () => {
	const coreSizes = useSelector(state => state.context?.coresizes);

	const [searchParams, setSearchParams] = useSearchParams();
	const roles = localStorage.getItem("active_role");

	const roleCheck =
		roles === "WELDINGOP" ||
		roles === "CUTTINGOP" ||
		roles === "WINDINGOP" ||
		roles === "COATINGOP"
			? "tccoresize"
			: "CoreSize";

	return (
		<MultiSelect
			searchable
			zIndex={10}
			value={
				searchParams.get(roleCheck)
					? searchParams.get(roleCheck).split(",")
					: null
			}
			data={
				coreSizes?.rows?.length > 0
					? coreSizes?.rows?.map(item => {
							return { label: item.label, value: item.id };
					  })
					: []
			}
			onChange={value => {
				if (
					roles === "WELDINGOP" ||
					roles === "CUTTINGOP" ||
					roles === "WINDINGOP" ||
					roles === "COATINGOP"
				) {
					let gen = generateQuery([{ tccoresize: value }]);
					setSearchParams(gen);
				} else {
					let gen = generateQuery([{ CoreSize: value }]);
					setSearchParams(gen);
				}
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

export const SelectMultiDiameterFilter = () => {
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

export const SelectMultiLeadLengthFilter = () => {
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
export const SelectMultiTypeFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<MultiSelect
			zIndex={10}
			value={
				searchParams.get("type") ? searchParams.get("type").split(",") : null
			}
			data={["Coating", "Cutting", "Welding", "Winding"]}
			onChange={value => {
				let gen = generateQuery([{ type: value }]);
				setSearchParams(gen);
			}}
			style={{ maxWidth: 150 }}
		/>
	);
};
export const ReportMultiTypeFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<MultiSelect
			zIndex={10}
			value={
				searchParams.get("type") ? searchParams.get("type").split(",") : null
			}
			data={["Coating", "Cutting", "Welding", "Winding"]}
			onChange={value => {
				let gen = generateQuery([{ section: value }]);
				setSearchParams(gen);
			}}
			style={{ maxWidth: 150 }}
		/>
	);
};
export const SelectMultiWeddingFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<MultiSelect
			zIndex={10}
			value={
				searchParams.get("category")
					? searchParams.get("category").split(",")
					: null
			}
			data={[
				{ label: "N/A", value: "N/A" },
				{ label: "Melf", value: "Melf" },
				{ label: "Leaded", value: "Leaded" },
			]}
			onChange={value => {
				let gen = generateQuery([{ category: value }]);
				setSearchParams(gen);
			}}
			style={{ maxWidth: 150 }}
		/>
	);
};

export const SelectMultiWindingTypeFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<MultiSelect
			zIndex={10}
			value={
				searchParams.get("windingtype")
					? searchParams.get("windingtype").split(",")
					: null
			}
			data={[
				{ label: "N/A", value: "N/A" },
				{ label: "Melf", value: "Melf" },
				{ label: "Leaded", value: "Leaded" },
			]}
			onChange={value => {
				let gen = generateQuery([{ windingtype: value }]);
				setSearchParams(gen);
			}}
			style={{ maxWidth: 150 }}
		/>
	);
};

export const SelectMultiShiftFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<MultiSelect
			zIndex={10}
			value={
				searchParams.get("shifttype")
					? searchParams.get("shifttype").split(",")
					: null
			}
			data={[
				{ label: "N/A", value: "N/A" },
				{ label: "SHIFT 1", value: "shift1" },
				{ label: "SHIFT 2", value: "shift2" },
				{ label: "SHIFT 3", value: "shift3" },
			]}
			onChange={value => {
				let gen = generateQuery([{ shift: value }]);
				setSearchParams(gen);
			}}
			style={{ maxWidth: 150 }}
		/>
	);
};

export const SelectMultiMachineCoresizeFilter = () => {
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
							return { label: item.label, value: item.id };
					  })
					: []
			}
			onChange={value => {
				let gen = generateQuery([{ CoreSize: value }]);
				setSearchParams(gen);
			}}
		/>
	);
};
export const ReportMultiMachineCoresizeFilter = () => {
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
							return { label: item.label, value: item.id };
					  })
					: []
			}
			onChange={value => {
				let gen = generateQuery([{ shiftcoresize: value }]);
				setSearchParams(gen);
			}}
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
		<MultiSelect
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

				// if (location.pathname.includes("salesitem")) {
				// 	let gen = generateQuery([obj]);
				// 	setSearchParams(gen);
				// } else {
				setValue(value);

				setDrawerSalesQuery(generateSalesQuery(obj, drawerSalesQuery));
				// }
			}}
			data={[
				{ value: "accepted", key: "accepted", label: "ACCEPTED" },
				{ value: "", key: "ALL", label: "All" },
				{ value: "cancelled", key: "cancelled", label: "CANCELLED" },
				{ value: "dispatched", key: "dispatched", label: "DISPATCHED" },
				{
					value: "infgstore",
					key: "infgstore",
					label: "IN FG STORE",
				},
				{ value: "itemOnHold", key: "itemOnHold", label: "ITEM ON HOLD" },
				{
					value: "inproduction",
					key: "inproduction",
					label: "IN PRODUCTION",
				},
				{
					value: "packingCompleted",
					key: "packingCompleted",
					label: "PACKING COMPLETED",
				},
				{
					value: "partiallyDispatched",
					key: "partiallyDispatched",
					label: "PARTIALLY DISPATCHED",
				},
				{
					value: "partiallyPacked",
					key: "partiallyPacked",
					label: "PARTIALLY PACKED",
				},
				{ value: "pending", key: "pending", label: "PENDING" },
				{ value: "procurement", key: "procurement", label: "PROCUREMENT" },
				{ value: "recheck", key: "recheck", label: "RECHECK" },
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
		date = date?.map(item => new Date(item));
		date = date[0] === "Invalid Date" ? "" : date;
	}

	return (
		<DateRangePicker
			clickOutsideEvents={["click"]}
			dayStyle={date => todayDateStyle(date)}
			allowSingleDateInRange
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
					// if (location.pathname.includes("salesitem")) {
					// 	let gen = generateQuery([obj]);
					// 	setSearchParams(gen);
					// } else {
					setValue(value);
					setDrawerSalesQuery(generateSalesQuery(obj, drawerSalesQuery));
					// }
				} else {
					let obj = {};
					obj[id.replaceAll(" ", "")] = "";
					// if (location.pathname.includes("salesitem")) {
					// 	let gen = generateQuery([obj]);
					// 	setSearchParams(gen);
					// } else {
					setValue(value);
					setDrawerSalesQuery(generateSalesQuery(obj, drawerSalesQuery));
					// }
				}
			}}
		/>
	);
};

export const CustomerNameFilter = ({ column }) => {
	const { id } = column;
	const customer = useSelector(state => state.context?.customers?.rows);

	const customerDropdown = customer?.map(item => {
		return { label: item?.name, value: item?.id };
	});

	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<MultiSelect
			// zIndex={10}
			searchable
			value={
				searchParams.get("Customer")
					? searchParams.get("Customer").split(",")
					: null
			}
			data={customerDropdown || []}
			onChange={value => {
				let obj = {};
				obj[id.replaceAll(" ", "")] = value;
				let gen = generateQuery([obj]);
				setSearchParams(gen);
			}}
		/>
	);
};

export const WarehouseFilter = ({ column }) => {
	const { id } = column;
	const warehouse = useSelector(state => state.context?.warehouse?.rows);

	const warehouseDropdown = warehouse?.map(item => {
		return { label: item?.label, value: item?.id };
	});

	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<MultiSelect
			zIndex={10}
			searchable
			value={
				searchParams.get("warehouse")
					? searchParams.get("warehouse").split(",")
					: null
			}
			data={warehouseDropdown || []}
			onChange={value => {
				let obj = {};
				obj[id.replaceAll(" ", "")] = value;
				let gen = generateQuery([obj]);
				setSearchParams(gen);
			}}
		/>
	);
};
export const DelayReasonFilter = ({ column }) => {
	const { id } = column;
	const delayreason = useSelector(state => state.context?.delayReason?.rows);

	const delayreasonDropdown = delayreason?.map(item => {
		return { label: item?.label, value: item?.id };
	});

	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<MultiSelect
			zIndex={10}
			searchable
			value={
				searchParams.get("delayreason")
					? searchParams.get("delayreason").split(",")
					: null
			}
			data={delayreasonDropdown || []}
			onChange={value => {
				let obj = {};
				obj[id.replaceAll(" ", "")] = value;
				let gen = generateQuery([obj]);
				setSearchParams(gen);
			}}
		/>
	);
};
export const IssuedTcStatusFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<>
			<MultiSelect
				value={searchParams.get("status") ? searchParams.get("status") : ""}
				defaultValue=""
				onChange={value => {
					let gen = generateQuery([{ status: value }]);
					setSearchParams(gen);
				}}
				data={[
					{ value: "", key: "ALL", label: "All" },
					{ value: "PENDING", key: "PENDING", label: "PENDING" },
					{
						value: "COMPLETED",
						key: "COMPLETED",
						label: "COMPLETED",
					},
					{
						value: "CUTTING",
						key: "CUTTING",
						label: "CUTTING",
					},
					{
						value: "WINDING",
						key: "WINDING",
						label: "WINDING",
					},
					{
						value: "WELDING",
						key: "WELDING",
						label: "WELDING",
					},
					{
						value: "COATING",
						key: "COATING",
						label: "COATING",
					},
					{
						value: "QUALITY",
						key: "QUALITY",
						label: "QUALITY",
					},
					{
						value: "ONHOLD",
						key: "ONHOLD",
						label: "ONHOLD",
					},
					{
						value: "CANCELLED",
						key: "CANCELLED",
						label: "CANCELLED",
					},
				]}
			/>
		</>
	);
};
export const MachineFilter = () => {
	const machine = useSelector(state => state.context?.machine?.rows);
	const [searchParams, setSearchParams] = useSearchParams();
	let selectedSection = searchParams.get("section");
	selectedSection = selectedSection?.split(",");
	const machinesOperatorWise = machine?.filter(item => {
		return selectedSection?.includes(item.type);
	});

	const machineDropDown = useMemo(
		() =>
			machinesOperatorWise?.map(item => {
				return {
					label: item?.name,
					value: item?.id,
				};
			}),
		[machinesOperatorWise]
	);
	return (
		<>
			<MultiSelect
				value={searchParams.get("machine") ?? ""}
				defaultValue=""
				onChange={value => {
					let gen = generateQuery([{ machine: value }]);
					setSearchParams(gen);
				}}
				data={machineDropDown ?? []}
			/>
		</>
	);
};
