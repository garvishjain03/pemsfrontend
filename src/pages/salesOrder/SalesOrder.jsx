import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import SalesOrderContainer from "../../containers/salesOrder/SalesOrderContainer";
import { schema } from "../../containers/salesOrder/schema";
// import { useSearchParams } from "react-router-dom";
import { genrateColumnConfig } from "../../helpers/columns";
import useFetch from "../../hooks/useFetch";
import {
	getAllSalesOrders,
	getAllSalesOrdersForProduction,
	getCount,
} from "../../services/salesOrder";
import { store } from "../../store";
import { getURL } from "../../utils/apiURL";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";

const SalesOrder = () => {
	const [createOrder] = useFetch();
	const [opened, setOpened] = useState(false);
	const [leaded, setLeaded] = useState({});
	const [coresizeDropDown, setCoreSizeDropDown] = useState({});
	const [searchParams] = useSearchParams();
	const [createLoading, setCreateLoading] = useState(false);

	const {
		types,
		characteristics,
		tolerance,
		tcr,
		shape,
		warehouse,
		customer,
		wattageToCore,
		leaddia,
		leadlength,
		formtype,
		loading,
		orders,
		orderCount,
		permissionData,
		loadingOrders,
		loadingPermission,
		drawerStatus,
	} = useSelector(state => ({
		types: state.context.types?.rows,
		characteristics: state.context.characteristics?.rows,
		tolerance: state.context.tolerances?.rows,
		tcr: state.context.tcrs?.rows,
		shape: state.context.shapes?.rows,
		warehouse: state.context.warehouse?.rows,
		customer: state.context.customers?.rows,
		wattageToCore: state.context?.wattagestocoresize?.rows,
		leaddia: state.context.leaddias?.rows,
		leadlength: state.context.leadlengths?.rows,
		formtype: state.context.formtypes?.rows,
		loading: state.context.loading,
		orders: state.orders?.allorders?.rows,
		orderCount: state.orders?.allorders?.count,
		loadingOrders: state.orders?.loadingOrders,
		permissionData: state.permission?.permissions,
		loadingPermission: state.permission?.loading,
		drawerStatus: state.orders?.drawerStatus,
	}));

	///tabel Column

	const loaction = useLocation();
	const COLUMNS = useMemo(() => {
		return genrateColumnConfig(permissionData?.ordersPage?.Table1 || []);
	}, [loadingPermission]);

	useEffect(() => {
		store.dispatch({
			type: "removeAll",
		});
	}, [opened]);

	useEffect(() => {
		return () => {
			localStorage.removeItem("OANumber");
		};
	}, []);

	const tcrLabelToId = label => {
		let id = "";
		tcr?.map(item => {
			if (item.label === label) id = item.id;
		});
		return id;
	};

	const wattagesDropDown = wattageToCore
		?.filter(item => item.visible === true)
		?.map(item => {
			return { label: item.label, value: item.id };
		});
	const formtypeDropDown = formtype
		?.filter(item => item.visible)
		?.sort((a, b) => a.code - b.code)
		?.map(item => {
			return { label: item?.code + "-" + item.label, value: item.id };
		});

	const leaddiaDropDown = leaddia
		?.filter(item => item.visible)
		?.map(item => {
			return { label: item.label, value: item.id };
		});
	const leadlengthDropDown = leadlength
		?.filter(item => item.visible)
		?.map(item => {
			return { label: item.label, value: item.id };
		});
	const typesDropDown = types
		?.filter(item => item.visible)
		?.map(item => {
			return { label: item.label, value: item.id };
		});
	const characteristicsDropDown = characteristics
		?.filter(item => item.visible)
		?.map(item => {
			return { label: item.label, value: item.label, key: item.id };
		});

	const toleranceDropDown = tolerance
		?.filter(item => item.visible)
		?.map(item => {
			return { label: item.label, value: item.id };
		});
	const tcrDropDown = tcr
		?.filter(item => item.visible)
		?.map(item => {
			if (item.label === "NA")
				return { label: item.label, value: item.id, disabled: false };
			return { label: item.label, value: item.id };
		});
	const shapeDropDown = shape
		?.filter(item => item.visible)
		?.map(item => {
			return { label: item.label, value: item.label, key: item.id };
		});
	const warehouseDropDown = warehouse
		?.filter(item => item.visible)
		?.map(item => {
			return { label: item.label, value: item.id };
		});
	const customerDropDown = customer
		?.filter(item => item.visible)
		?.map(item => {
			return { label: item.name, value: item.id };
		});

	const defaultValues = {
		array: [
			{
				characteristics: "Standard",
				coresize: "",
				leaddia: "",
				leadlength: "",
				ohms: null,
				itemType: false,
				orderquantity: "",
				shape: "Standard Axial",
				surge: null,
				tcr: tcrLabelToId("NA"),
				formType: "",
				tolerance: "",
				type: "",
				unit: "",
				warehouse: "",
				wattage: "",
				orderDate: "",
				commitedDate: "",
				scheduleDate: "",
				orderType: "Manufacture",
				customerPartNo: "",
				partNo: "",
				tctype: "regular",
			},
		],
	};

	const setCoreSizeFn = (key, value, coresizeid, setValue, index) => {
		const coresizeObject = wattageToCore?.find(item => item.id === value);
		const coresizedropdown = coresizeObject?.all_wattages_core?.map(item => {
			return {
				value: item?.coresizeid,
				label: item?.wattage_to_coresizes.label,
			};
		});

		const coreSizeExist = coresizedropdown?.find(
			ele => ele.value === coresizeid
		);

		if (!coreSizeExist) {
			setValue(`array.${index}.coresize`, "");
		}

		setCoreSizeDropDown(crr => {
			const _curr = { ...crr };
			_curr[key] = coresizedropdown;
			return _curr;
		});
	};

	const setLeadedFn = (key, value) =>
		setLeaded(crr => {
			const _curr = { ...crr };
			_curr[key] = value;
			return _curr;
		});

	useEffect(() => {
		// if (localStorage.getItem("active_role") === "PRODUCTIONPL") {
		// 	getAllSalesOrdersForProduction("salesorder?orderPageType=order");
		// } else {
		// 	getAllSalesOrders();
		// }
	}, []);

	const activeRoleId = localStorage.getItem("active_roleid");

	useEffect(() => {
		// getAllSalesOrdersForProduction();
		if (!drawerStatus) getAllSalesOrders();
	}, [searchParams.toString(), activeRoleId]);

	// let dispatchRestrict = false;

	// if (localStorage.getItem("active_role") === "DISPATCHOP") {
	// 	dispatchRestrict = true;
	// }

	const shapeLabelToId = label => {
		const _id = shapeDropDown?.find(item => item.label === label);
		return _id?.key;
	};

	const CharacteristicsLabelToId = label => {
		const _id = characteristicsDropDown?.find(item => item.label === label);
		return _id?.key;
	};

	const onSubmit = async data => {
		setCreateLoading(true);
		const _data = data;
		_data["item"] = data["array"];
		delete _data["array"];

		_data["item"]?.forEach(item => {
			for (const key in item) {
				if (item[key] === "") delete item[key];
			}
			if (item.itemType === true) {
				item["orderType"] = "Traded";
			}
			if (item.itemType === false) {
				item["orderType"] = "Manufacture";
			}
			item.shape = shapeLabelToId(item.shape);
			item.characteristics = CharacteristicsLabelToId(item.characteristics);
		});
		const res = await createOrder(getURL(`salesorder`), {
			method: "POST",
			body: JSON.stringify(_data),
		});
		if (res) setCreateLoading(false);
		if (res && res.status === 201) {
			message.success({
				message: translate("CreateSalesOrderMessage"),
			});
			getCount();
			setOpened(false);
			getAllSalesOrders();
			getAllSalesOrdersForProduction();
		}
	};

	return (
		<>
			<SalesOrderContainer
				textAlign="center"
				Pagetitle="Sales Order"
				leaded={leaded}
				setLeadedFn={setLeadedFn}
				setCoreSizeFn={setCoreSizeFn}
				contextData={{
					typesDropDown,
					characteristicsDropDown,
					toleranceDropDown,
					tcrDropDown,
					shapeDropDown,
					warehouseDropDown,
					customerDropDown,
					wattagesDropDown,
					coresizeDropDown,
					leaddiaDropDown,
					leadlengthDropDown,
					formtypeDropDown,
				}}
				tabledata={orders}
				COLUMNS={COLUMNS}
				defaultValues={defaultValues}
				schema={schema}
				onSubmit={onSubmit}
				opened={opened}
				setOpened={setOpened}
				dataCount={orderCount}
				loading={loadingOrders}
				createLoading={createLoading}
				permission={permissionData?.ordersPage}
			/>
		</>
	);
};

export default SalesOrder;
