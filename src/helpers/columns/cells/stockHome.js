import { Text } from "@mantine/core";
import StockPackedQty from "../../../component/StockPackedQty";
import { setDrawerSalesQuery } from "../../../redux/order/actions";
import { store } from "../../../store";

const styles = {
	// cursor: "pointer",
	// color: "blue",
};
export const stockHomeItemCell = ({ row }) => {
	return <Text>{row.original?.mpn}</Text>;
};
export const stockHomeTotalStockQuantityCell = ({ row }) => {
	return (
		<Text
			// size="lg"
			className="stockTotals"
			onClick={() => {
				setDrawerSalesQuery("");
				store.dispatch({
					type: "TOTAL_STOCK_CLICK",
					payload: true,
				});
				store.dispatch({ type: "CLICKED_ROW_DETAILS", payload: row?.original });
			}}
			style={styles}>
			{/* {row.original?.total_stock_quantity?.toLocaleString("en-IN")} */}
			{row.original?.total_stock_quantity}
		</Text>
	);
};
export const stockHomePackedQuantityCell = ({ row }) => {
	return (
		<Text
			// size="lg"
			className="stockTotals"
			onClick={() => {
				setDrawerSalesQuery("");
				store.dispatch({
					type: "TOTAL_PACKED_STOCK_CLICK",
					payload: true,
				});
				store.dispatch({ type: "CLICKED_ROW_DETAILS", payload: row?.original });
			}}
			style={styles}>
			{/* {row.original?.packed_quantity?.toLocaleString("en-IN")} */}
			{row.original?.packed_quantity}
		</Text>
	);
};
export const stockHomeReturnsQuantityCell = ({ row }) => {
	return (
		<Text
			// size="lg"
			className="stockTotals"
			onClick={() => {
				setDrawerSalesQuery("");
				store.dispatch({
					type: "TOTAL_RETURNS_CLICK",
					payload: true,
				});
				store.dispatch({ type: "CLICKED_ROW_DETAILS", payload: row?.original });
			}}
			style={styles}>
			{/* {row.original?.return_quantity?.toLocaleString("en-IN")} */}
			{row.original?.return_quantity}
		</Text>
	);
};
export const stockHomeTotalQuantityCell = ({ row }) => {
	return (
		<Text
		// size="lg"
		>
			{/* {(
				(row.original?.total_stock_quantity ?? 0) +
				(row.original?.packed_quantity ?? 0)
			)?.toLocaleString("en-IN")} */}
			{(row.original?.total_stock_quantity ?? 0) +
				(row.original?.packed_quantity ?? 0) +
				(row.original?.return_quantity ?? 0)}
		</Text>
	);
};
