import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import SalesOrderContainer from "../../containers/salesOrder/SalesOrderContainer";
import { schema } from "../../containers/salesOrder/schema";
import { genrateColumnConfig } from "../../helpers/columns";
import useFetch from "../../hooks/useFetch";
import { getAllSalesOrders, getCount } from "../../services/salesOrder";
import { getURL } from "../../utils/apiURL";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";

const PendingOrders = () => {
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

	const COLUMNS = useMemo(() => {
		return genrateColumnConfig(permissionData?.pendingOrdersPage?.Table1 || []);
	}, [loadingPermission]);

	//drop down data

	const wattagesDropDown = wattageToCore
		?.filter(item => item.visible)
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
				ohms: 0,
				itemType: false,
				orderquantity: "",
				shape: "Standard Axial",
				surge: 0,
				tcr: "",
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
				tctype: "regular",
			},
		],
	};

	const setCoreSizeFn = (key, value) => {
		const coresizeObject = wattageToCore?.find(item => item.id === value);
		const coresizedropdown = coresizeObject?.all_wattages_core?.map(item => {
			return {
				value: item?.coresizeid,
				label: item?.wattage_to_coresizes.label,
			};
		});

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

	// useEffect(() => {
	// 	getTypes();
	// 	getCharacteristics();
	// 	getTolerances();
	// 	getTcrs();
	// 	getShapes();
	// 	getWareHouse();
	// 	getCustomers("ALL");
	// 	getWattageToCoresizes();
	// 	getLeadLengths();
	// 	getLeadDias();
	// 	getFormTypes();
	// 	getAllSalesOrders("orderStatus=pending&order_by=createdAt&order=desc");
	// 	getCoresizesToLeadLengthandDia();
	// }, []);

	useEffect(() => {
		if (!drawerStatus)
			getAllSalesOrders("orderStatus=pending&order_by=createdAt&order=desc");
	}, [searchParams.toString()]);

	const shapeLabelToId = label => {
		const _id = shapeDropDown?.find(item => item.label === label);
		return _id?.key;
	};

	const CharacteristicsLabelToId = label => {
		const _id = characteristicsDropDown?.find(item => item.label === label);
		return _id?.key;
	};

	const onSubmit = async data => {
		getCount();
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
			getAllSalesOrders("orderStatus=pending&order_by=createdAt&order=desc");
		}
	};

	return (
		<SalesOrderContainer
			Pagetitle="Pending Order"
			textAlign="center"
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
			permission={permissionData?.pendingOrdersPage}
			createLoading={createLoading}
		/>
	);
};

export default PendingOrders;
