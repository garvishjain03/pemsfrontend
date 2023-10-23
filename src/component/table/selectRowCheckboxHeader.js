import React, { useState } from "react";
import { Checkbox } from "@mantine/core";
import { useSelector } from "react-redux";
import { store } from "../../store";

export const RowCheckboxHeader = React.forwardRef(
	({ indeterminate, Data, from, ...rest }, ref) => {
		const {
			selectedItem,
			tabledataForSalesOrder,
			tabledataForSalesItem,
			packingitems,
			dispatchitems,
			coatingProductionItems,
			orderMonitorItems,
			productionReportItems,
			stockHomeItems,
			stockHistoryItems,
			totalPackedStock = [],
			returnHistoryItems,
			totalStockClick,
			totalPackedStockClick,
			totalReturnsClick,
			acceptedOrders,
			types,
		} = useSelector(state => ({
			selectedItem: state.Items,
			tabledataForSalesOrder: state.orders?.allorders?.rows,
			tabledataForSalesItem: state.orders?.allitems?.rows,
			packingitems: state.orders?.packingItems?.rows,
			dispatchitems: state.orders?.dispatchItems?.rows,
			coatingProductionItems: state?.coatingProduction?.coatingproduction,
			orderMonitorItems: state.OrderMonitor.ordermonitor,
			productionReportItems: state.productionReport?.productionReportData?.rows,
			stockHomeItems: state.stock?.stockHomeItems?.rows,
			stockHistoryItems: state.stock?.stockHistoryItems?.rows,
			totalPackedStock: state.stock?.totalPackedStockItems?.rows,
			returnHistoryItems: state.stock?.returnHistoryItems?.rows,
			totalStockClick: state.stock?.totalStockClick,
			totalPackedStockClick: state.stock?.totalPackedStockClick,
			totalReturnsClick: state.stock?.totalReturnsClick,
			acceptedOrders: state.orders?.allAcceptedOrders?.rows,
			types: state.context.types?.rows,
		}));

		let tableDataObj = {
			"/packingitemlist": packingitems,
			"/dispatchitemlist": dispatchitems,
			"/coatingproductionchart": coatingProductionItems,
			"/ordermonitor": orderMonitorItems,
			"/productionreport": productionReportItems,
			"/stockhome": stockHomeItems,
			"/types": types,
		};
		let tabledata;
		tabledata = tableDataObj[window.location.pathname];

		tabledata = totalStockClick
			? stockHistoryItems
			: totalPackedStockClick
			? totalPackedStock
			: totalReturnsClick
			? returnHistoryItems
			: tabledata;

		if (window.location.pathname === "/salesorder") {
			tabledata =
				from == "salesitem" ? tabledataForSalesItem : tabledataForSalesOrder;
		}
		if (window.location.pathname === "/activeorders") {
			tabledata = from == "salesitem" ? tabledataForSalesItem : acceptedOrders;
		}
		// if (window.location.pathname == "/packingitemlist") {
		// 	tabledata = packingitems;
		// }
		// if (window.location.pathname == "/dispatchitemlist") {
		// 	tabledata = dispatchitems;
		// }
		// if (window.location.pathname == "/coatingproductionchart") {
		// 	tabledata = coatingProductionItems;
		// }

		const defaultRef = React.useRef();
		const resolvedRef = ref || defaultRef;
		const [check, setcheck] = useState(false);
		React.useEffect(() => {
			resolvedRef.current.indeterminate = indeterminate;
		}, [resolvedRef, indeterminate]);
		const handleCheck = () => {
			if (selectedItem?.length === tabledata?.length) {
				store.dispatch({
					type: "removeAll",
				});
			} else {
				store.dispatch({
					type: "addAll",
					payload: tabledata,
				});
			}
			setcheck(prev => !prev);
		};
		return (
			<Checkbox
				checked={check}
				onClick={handleCheck}
				ref={resolvedRef}
				{...rest}
			/>
		);
	}
);
