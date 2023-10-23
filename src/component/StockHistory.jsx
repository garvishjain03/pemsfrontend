import {
	Button,
	Center,
	Container,
	Drawer,
	Group,
	ScrollArea,
	Modal,
} from "@mantine/core";
import dayjs from "dayjs";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import EditStockForm from "../containers/salesOrder/Forms/EditStockForm";
import TransferStockForm from "../containers/salesOrder/Forms/TransferStockForm";
import { ModelStyleObj } from "../containers/salesOrder/SalesOrderItem";
import { genrateColumnConfig } from "../helpers/columns";
import { setDrawerSalesQuery } from "../redux/order/actions";
import { generateQuery } from "../services/generateQuery";
import { getAllStockHistory } from "../services/stock";
import { store } from "../store";
import ExportAllToExcel from "../utils/exportAllToExcel";
import ExportToExcel from "../utils/exportToExcel";
import TableComponent from "./table/table";

const StockHistory = ({ data }) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const {
		loading = false,
		permissionData,
		loadingPermission,
		selectedData,
		drawerSalesQuery,
		totalStockClick,
		stockHistoryItems = [],
		stockHistoryCount = 0,
		clickedRowDetails,
	} = useSelector(state => ({
		loading: state.stock?.stockHistoryLoading,
		permissionData: state.permission?.permissions,
		loadingPermission: state.permission?.loading,
		selectedData: state.Items,
		drawerSalesQuery: state?.orders?.drawersalesquery,
		totalStockClick: state.stock?.totalStockClick,
		stockHistoryItems: state.stock?.stockHistoryItems?.rows,
		stockHistoryCount: state.stock?.stockHistoryItems?.count,
		clickedRowDetails: state.stock?.clickedRowDetails,
	}));

	const [openedSale, setOpenedSale] = useState({ opened: false, data: {} });

	const [editStockModal, setEditStockModal] = useState(false);
	const [transferStockModal, setTransferStockModal] = useState(false);
	const [stockHomeFilter, setStockHomeFilter] = useState(false);

	const COLUMNS = useMemo(() => {
		if (loadingPermission) return [];
		return genrateColumnConfig(permissionData?.stockHistory?.Table1 || []);
	}, [loadingPermission, permissionData?.stockHistory?.Table1]);

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

			if (totalStockClick) setSearchParams(gen);
		},
		[searchParams, setSearchParams, totalStockClick]
	);

	const showbutton = btn => {
		const obj = buttonCofig?.find(item => item.value === btn);
		return obj ? obj.enable : false;
	};

	const buttonCofig = useMemo(() => {
		return permissionData?.stockHistory?.topButtons;
	}, [permissionData?.stockHistory?.topButtons]);

	useEffect(() => {
		if (totalStockClick) {
			store.dispatch({
				type: "removeAll",
			});
			getAllStockHistory(drawerSalesQuery);
		}
	}, [searchParams.toString(), drawerSalesQuery]);

	useEffect(() => {
		setDrawerSalesQuery("");
	}, []);

	const excelData = data => {
		let mappableData =
			selectedData?.length > 0 ? selectedData : stockHistoryItems;
		if (data?.length > 0) {
			mappableData = data;
		}
		const array = mappableData?.map(obj => {
			const customerName = obj?.transactionMapper?.map(
				ele => ele?.transactionOrder?.customerName?.name
			);
			const orderNO = obj?.transactionMapper?.map(
				ele => ele?.transactionOrder?.orderno
			);
			const itemNo = obj?.transactionMapper?.map(
				ele => ele?.transcationItem?.itemno
			);
			return {
				Item: obj?.mpn,
				"Transaction Date": dayjs(obj?.createdAt).format("DD/MM/YYYY") ?? "NA",
				"Customer Name": customerName?.toString(",") ?? "NA",
				"OA Number": orderNO?.toString(",") ?? "NA",
				"Item Code": itemNo?.toString(",") ?? "NA",
				"TC No": obj?.tc_details?.tcno ?? "NA",
				"Quantity In": obj?.quantityIn ?? "NA",
				"Quantity Out": obj?.quantityOut ?? "NA",
				Actions: obj?.action ?? "NA",
				Operator: obj?.transactionsOperatorName?.username ?? "NA",
				Balance: obj?.balance ?? "NA",
				Comments:
					obj?.transaction_item_details?.allcomments?.[0]?.comments ?? "NA",
			};
		});
		return array;
	};

	const handleClick = async () => {
		const data = await getAllStockHistory(drawerSalesQuery, "ALL");
		return excelData(data);
		// return excelData();
	};

	return (
		<>
			<Container fluid py={12}>
				<div>
					<Drawer
						opened={totalStockClick}
						onClose={() => {
							store.dispatch({
								type: "CLOSE",
							});
							store.dispatch({
								type: "removeAll",
							});
							setSearchParams(stockHomeFilter ? { mpn: stockHomeFilter } : "");
							setDrawerSalesQuery("");
							setStockHomeFilter(false);
						}}
						title="Stock History"
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
							<Group
								position="apart"
								style={{ margin: "1rem", fontWeight: "bold" }}>
								<span
									style={{
										fontSize: "1.2rem",
									}}>
									{clickedRowDetails?.mpn}
								</span>
								<span
									style={{
										fontSize: "1.2rem",
									}}>
									Total Stock : {clickedRowDetails?.total_stock_quantity}
								</span>
							</Group>
							<Group position="right" spacing={4}>
								{showbutton("editStock") && (
									<Button onClick={() => setEditStockModal(true)}>
										Edit Stock
									</Button>
								)}
								{showbutton("transferStock") && (
									<Button onClick={() => setTransferStockModal(true)}>
										Transfer Stock
									</Button>
								)}
								<ExportAllToExcel handleClick={handleClick} />
								{showbutton("exportToExcel") && (
									// <Button style={{ backgroundColor: "lime", color: "black" }}>
									// 	{" "}
									// 	Export To Excel{" "}
									// </Button>
									<ExportToExcel data={excelData()} />
								)}
							</Group>
							<Modal
								radius={8}
								padding={0}
								styles={ModelStyleObj}
								size="auto"
								opened={editStockModal}
								onClose={() => {
									setEditStockModal(false);
								}}
								title="EDIT STOCK">
								<div>
									<EditStockForm
										data={clickedRowDetails || []}
										setEditStockModal={setEditStockModal}
									/>
								</div>
							</Modal>
							<Modal
								radius={8}
								padding={0}
								styles={ModelStyleObj}
								size="auto"
								opened={transferStockModal}
								onClose={() => {
									setTransferStockModal(false);
								}}
								title="TRANFER STOCK">
								<div>
									<TransferStockForm
										data={clickedRowDetails || []}
										setTransferStockModal={setTransferStockModal}
									/>
								</div>
							</Modal>
							{/* <div
								style={{
									display: "flex",
									justifyContent: "flex-end",
									gap: "1rem",
								}}>
								{ButtonJSX}
							</div> */}
							<ScrollArea style={{ height: "70vh" }}>
								<TableComponent
									from="salesitem"
									Data={stockHistoryItems || []}
									salesOrderItemsPageOpen={true}
									Columns={COLUMNS}
									sort={true}
									setSelected={setSelected}
									loading={loading}
									setOpenedDrawer={setOpenedSale}
									// rowClick={true}
									handleSelectRow={handleSelectRow}
									showFilter={true}
									itemClick={true}
									setPagnation={setPagnation}
									pagesize={100}
									dataCount={stockHistoryCount}
								/>
							</ScrollArea>
						</Container>
					</Drawer>
				</div>
			</Container>
		</>
	);
};

export default StockHistory;
