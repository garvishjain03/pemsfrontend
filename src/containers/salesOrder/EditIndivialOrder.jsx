import React, { useState } from "react";
import { useSelector } from "react-redux";
import { schema } from "../../containers/salesOrder/schemaEditOrder";
import useFetch from "../../hooks/useFetch";
import { getAllSalesOrders } from "../../services/salesOrder";
import { store } from "../../store";
import { getURL } from "../../utils/apiURL";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";
import CustomerOrderDetailForm from "./CustomerOrderDetailForm";

const EditIndivialOrder = () => {
	const [createOrder] = useFetch();
	const [leaded, setLeaded] = useState({});
	const [coresizeDropDown, setCoreSizeDropDown] = useState({});

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

		EditOrder,
		selectedOrder,
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
		selectedOrder: state.EditOrder,
		EditOrder: state.EditOrder,
	}));

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
		customer: EditOrder?.record?.customer,
		commitedDate: EditOrder?.record?.commitedDate
			? new Date(EditOrder?.record?.commitedDate)
			: null,
		customerOrderNumber: EditOrder?.record?.customerOrderNumber,
		paymentTerm: EditOrder?.record?.paymentTerm,
		orderDate: new Date(EditOrder?.record?.orderDate),
		scheduleDate: EditOrder?.record?.scheduleDate
			? new Date(EditOrder?.record?.scheduleDate)
			: null,
	};

	const setLeadedFn = (key, value) =>
		setLeaded(crr => {
			const _curr = { ...crr };
			_curr[key] = value;
			return _curr;
		});

	const onSubmit = async data => {
		delete data.array;
		const res = await createOrder(
			getURL(`salesorder/${selectedOrder.record.id}`),
			{
				method: "PUT",
				body: JSON.stringify(data),
			}
		);

		if (res && res.status === 200) {
			message.success({
				message: translate("CreateSalesOrderMessage"),
			});
		}
		getAllSalesOrders();
		store.dispatch({
			type: "EditremoveOrder",
		});
	};
	const [DataPickerPopover, setDataPickerPopover] = useState([
		false,
		false,
		false,
	]);

	return (
		<div onClick={() => {}}>
			<CustomerOrderDetailForm
				defaultValues={defaultValues}
				onSubmit={onSubmit}
				schema={schema}
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
				visibleOrderForm={true}
				showOrderForm={false}
				DataPickerPopover={DataPickerPopover}
				setDataPickerPopover={setDataPickerPopover}
			/>
		</div>
	);
};

export default EditIndivialOrder;
