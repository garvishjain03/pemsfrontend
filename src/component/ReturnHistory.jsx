import {
	Button,
	Center,
	Container,
	Drawer,
	Group,
	Modal,
	ScrollArea,
	Text,
} from "@mantine/core";
import dayjs from "dayjs";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import MoveToScrap from "../containers/salesOrder/Forms/MoveToScrap";
import TransferStockForm from "../containers/salesOrder/Forms/TransferStockForm";
import { ModelStyleObj } from "../containers/salesOrder/SalesOrderItem";
import { genrateColumnConfig } from "../helpers/columns";
import { setDrawerSalesQuery } from "../redux/order/actions";
import { generateQuery } from "../services/generateQuery";
import { getAllReturnHistory } from "../services/stock";
import { store } from "../store";
import ExportAllToExcel from "../utils/exportAllToExcel";
import ExportToExcel from "../utils/exportToExcel";
import TableComponent from "./table/table";

const ReturnHistory = ({ data }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [transferStockModal, setTransferStockModal] = useState(false);
	const [moveToScrapModal, setMoveToScrapModal] = useState(false);
	const [stockHomeFilter, setStockHomeFilter] = useState(false);

	const {
		permissionData,
		loadingPermission,
		selectedData,
		totalReturnsClick,
		returnHistoryItems,
		returnHistoryItemsCount = 0,
		clickedRowDetails,
		drawerSalesQuery,
		loading = false,
	} = useSelector(state => ({
		loading: state.stock?.stockHistoryLoading,
		permissionData: state.permission?.permissions,
		loadingPermission: state.permission?.loading,
		selectedData: state.Items,
		totalReturnsClick: state.stock?.totalReturnsClick,
		returnHistoryItems: state.stock?.returnHistoryItems?.rows,
		returnHistoryItemsCount: state.stock?.returnHistoryItemsCount?.count,
		clickedRowDetails: state.stock?.clickedRowDetails,
		drawerSalesQuery: state?.orders?.drawersalesquery,
	}));

	const [openedSale, setOpenedSale] = useState({ opened: false, data: {} });

	const COLUMNS = useMemo(() => {
		if (loadingPermission) return [];
		return genrateColumnConfig(permissionData?.returnHistory?.Table1 || []);
	}, [loadingPermission, permissionData?.returnHistory?.Table1]);

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

			if (totalReturnsClick) setSearchParams(gen);
		},
		[searchParams, setSearchParams, totalReturnsClick]
	);

	const showbutton = btn => {
		const obj = buttonCofig?.find(item => item.value === btn);
		return obj ? obj.enable : false;
	};

	const buttonCofig = useMemo(() => {
		return permissionData?.returnHistory?.topButtons;
	}, [permissionData?.returnHistory?.topButtons]);

	useEffect(() => {
		if (totalReturnsClick) {
			store.dispatch({
				type: "removeAll",
			});
			getAllReturnHistory(drawerSalesQuery);
		}
	}, [searchParams.toString(), drawerSalesQuery]);

	useEffect(() => {
		setDrawerSalesQuery("");
	}, []);

	const excelData = data => {
		let mappableData =
			selectedData?.length > 0 ? selectedData : returnHistoryItems;
		if (data?.length > 0) mappableData = data;
		const array = mappableData?.map(obj => {
			return {
				Item: obj?.mpn,
				"Transaction Date": dayjs(obj?.createdAt).format("DD/MM/YYYY") ?? "NA",
				Customer: obj?.ReturnItemDetails?.allItems?.customerName?.name ?? "NA",
				"OA Number": obj?.ReturnItemDetails?.allItems?.orderno ?? "NA",
				"Item Code": obj?.ReturnItemDetails?.itemno ?? "NA",
				Quantity: obj?.quantity ?? "NA",
				Operator: obj?.operatorName?.username ?? "NA",
				Comments: obj?.processReturnComment?.[0]?.comments ?? "NA",
			};
		});
		return array;
	};

	const handleClick = async () => {
		const data = await getAllReturnHistory(drawerSalesQuery, "ALL");
		return excelData(data);
		// return excelData();
	};

	return (
		<>
			<Container fluid py={12}>
				<div>
					<Drawer
						opened={totalReturnsClick}
						onClose={() => {
							store.dispatch({
								type: "CLOSE",
							});
							store.dispatch({
								type: "removeAll",
							});
							setSearchParams("");
							setSearchParams(stockHomeFilter ? { mpn: stockHomeFilter } : "");
							setStockHomeFilter(false);
						}}
						title="Returns History"
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
									RETURN HISTORY
								</span>
								<span
									style={{
										fontSize: "1.2rem",
									}}>
									Total Quantity : {clickedRowDetails?.return_quantity}
								</span>
							</Group>
							<Group position="right" spacing={4}>
								{showbutton("processReturns") && (
									<Button
										onClick={() => {
											setTransferStockModal(true);
										}}>
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
								size={"48%"}
								opened={transferStockModal}
								onClose={() => {
									setTransferStockModal(false);
								}}
								title="TRANSFER STOCK">
								<div>
									<TransferStockForm
										data={clickedRowDetails || []}
										from={"returnHistory"}
										setTransferStockModal={setTransferStockModal}
									/>
								</div>
							</Modal>
							<Modal
								radius={8}
								padding={0}
								styles={ModelStyleObj}
								size={"33%"}
								opened={moveToScrapModal}
								onClose={() => {
									setMoveToScrapModal(false);
								}}
								title="MOVE TO SCRAP">
								<div>
									<MoveToScrap
										data={returnHistoryItems}
										clickedRowDetails={clickedRowDetails}
										setMoveToScrapModal={setMoveToScrapModal}
									/>
								</div>
							</Modal>
							<ScrollArea style={{ height: "70vh" }}>
								<TableComponent
									from="salesitem"
									Data={returnHistoryItems || []}
									salesOrderItemsPageOpen={true}
									Columns={COLUMNS}
									sort={true}
									setSelected={setSelected}
									loading={false}
									setOpenedDrawer={setOpenedSale}
									// rowClick={true}
									handleSelectRow={handleSelectRow}
									showFilter={true}
									itemClick={true}
									setPagnation={setPagnation}
									pagesize={100}
									dataCount={returnHistoryItemsCount}
								/>
							</ScrollArea>
						</Container>
					</Drawer>
				</div>
			</Container>
		</>
	);
};

export default ReturnHistory;
