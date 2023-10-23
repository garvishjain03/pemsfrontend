import {
	Button,
	Container,
	Drawer,
	Group,
	ScrollArea,
	Text,
} from "@mantine/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { genrateColumnConfig } from "../helpers/columns";
import { setDrawerSalesQuery } from "../redux/order/actions";
import { generateQuery } from "../services/generateQuery";
import { getAllPackedStock } from "../services/stock";
import { store } from "../store";
import ExportAllToExcel from "../utils/exportAllToExcel";
import ExportToExcel from "../utils/exportToExcel";
import TableComponent from "./table/table";

const StockPackedQty = ({}) => {
	const {
		loading = false,
		permissionData,
		loadingPermission,
		selectedData,
		drawerSalesQuery,
		totalPackedStockClick = false,
		totalPackedStock = [],
		clickedRowDetails,
		packedStockCount,
	} = useSelector(state => ({
		loading: state.stock?.totalPackedStockLoading,
		permissionData: state.permission?.permissions,
		loadingPermission: state.permission?.loading,
		selectedData: state.Items,
		drawerSalesQuery: state?.orders?.drawersalesquery,
		totalPackedStockClick: state.stock?.totalPackedStockClick,
		totalPackedStock: state.stock?.totalPackedStockItems?.rows,
		packedStockCount: state.stock?.totalPackedStockItems?.count,
		clickedRowDetails: state.stock?.clickedRowDetails,
	}));
	const [searchParams, setSearchParams] = useSearchParams();
	const [stockHomeFilter, setStockHomeFilter] = useState(false);

	const COLUMNS = useMemo(() => {
		if (loadingPermission) return [];
		return genrateColumnConfig(permissionData?.stockPackedQty?.Table1 || []);
	}, [loadingPermission, permissionData?.stockPackedQty?.Table1]);

	const setSelected = () => {};

	const handleSelectRow = row => {
		store.dispatch({
			type: "new",
			payload: {
				id: row.id,
				row,
			},
		});
	};

	const setPagnation = useCallback(
		async ({ pageNumber, pageSize }) => {
			if (searchParams.get("mpn") && !searchParams.get("limit")) {
				setStockHomeFilter(searchParams.get("mpn"));
			}
			const limit = searchParams.get("limit")
				? parseInt(searchParams.get("limit"))
				: 50;
			let gen = generateQuery([
				{
					limit: parseInt(pageSize),
					offset: parseInt(limit * (pageNumber - 1)),
					mpn: clickedRowDetails?.mpn,
				},
			]);

			if (totalPackedStockClick) setSearchParams(gen);
		},
		[searchParams, setSearchParams, totalPackedStockClick]
	);

	const showbutton = btn => {
		const obj = buttonCofig?.find(item => item.value === btn);
		return obj ? obj.enable : false;
	};

	const buttonCofig = useMemo(() => {
		return permissionData?.stockHistory?.topButtons;
	}, [permissionData?.stockHistory?.topButtons]);

	const totalPackedQty = totalPackedStock.reduce(
		(total, currentValue) => total + currentValue.packedQuantity,
		0
	);

	useEffect(() => {
		if (totalPackedStockClick) {
			store.dispatch({
				type: "removeAll",
			});
			getAllPackedStock(drawerSalesQuery);
		}
	}, [searchParams.toString(), drawerSalesQuery]);

	useEffect(() => {
		setDrawerSalesQuery("");
	}, []);

	const excelData = data => {
		let mappableData =
			selectedData?.length > 0 ? selectedData : totalPackedStock;
		if (data?.length > 0) mappableData = data;
		const array = mappableData?.map(obj => {
			return {
				Customer: obj?.PackedItemDetails?.allItems?.customerName?.name,
				"OA Number": obj?.PackedItemDetails?.allItems?.orderno,
				MPN: obj?.mpn,
				"Item SI. No": obj?.PackedItemDetails?.itemno,
				"Packed Quantity": obj?.packedQuantity ?? 0,
			};
		});
		return array;
	};

	const handleClick = async () => {
		const data = await getAllPackedStock(drawerSalesQuery, "ALL");
		return excelData(data);
		// return excelData();
	};

	return (
		<>
			<Drawer
				opened={totalPackedStockClick}
				onClose={() => {
					store.dispatch({
						type: "TOTAL_PACKED_STOCK_CLICK",
						payload: false,
					});
					store.dispatch({
						type: "removeAll",
					});
					setDrawerSalesQuery("");
					setSearchParams(stockHomeFilter ? { mpn: stockHomeFilter } : "");
					setStockHomeFilter(false);
				}}
				title={`Packed Items: ${clickedRowDetails?.mpn}`}
				styles={{
					drawer: { background: "rgb(248, 249, 250)" },
					closeButton: {
						color: "#ffff",
						"&:hover": {
							color: "red",
						},
					},

					title: { color: "#ffff", fontWeight: "600" },
					header: {
						padding: "10px",
						backgroundColor: "#228BE6",
						marginRight: "0px",
						margin: "0px",
					},
				}}
				size="full">
				<Container fluid>
					<Group position="apart" style={{ fontWeight: "bold" }} mt={12}>
						<Text styles={{ fontSize: "1.2rem" }}>
							Total Quantity: {totalPackedQty}
						</Text>

						<Group position="right" style={{ fontWeight: "bold" }} mt={12}>
							<ExportAllToExcel handleClick={handleClick} />
							{showbutton("exportToExcel") && (
								<ExportToExcel data={excelData()} />
							)}
						</Group>
					</Group>
					<ScrollArea style={{ height: "70vh" }}>
						<TableComponent
							from="stockhome"
							Data={totalPackedStock || []}
							Columns={COLUMNS}
							sort={true}
							setSelected={setSelected}
							loading={loading}
							// setOpenedDrawer={setOpenedSale}
							// rowClick={true}
							handleSelectRow={handleSelectRow}
							showFilter={true}
							pagesize={100}
							setPagnation={setPagnation}
							// itemClick={true}
							// ExpandItemView={ExpendItemVIew}
							dataCount={packedStockCount}
						/>
					</ScrollArea>
				</Container>
			</Drawer>
		</>
	);
};

export default StockPackedQty;
