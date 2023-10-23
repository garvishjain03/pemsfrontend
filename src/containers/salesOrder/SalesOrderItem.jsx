import {
	Button,
	Container,
	Drawer,
	Group,
	Modal,
	ScrollArea,
	Text,
} from "@mantine/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BiError } from "react-icons/bi";
import { FiAlertCircle } from "react-icons/fi";

import { useSelector } from "react-redux";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import TableComponent from "../../component/table/table";
import { alertTitle, ModelAlertStyleObj } from "../../component/TcCancel";
import { ACTIVEORDERS } from "../../configs/routes";
import { genrateColumnConfig } from "../../helpers/columns";
import { setDrawerSalesQuery } from "../../redux/order/actions";
import {
	getAllSalesItems,
	getAllSalesOrders,
	getAllSalesOrdersForProduction,
	getCount,
} from "../../services/salesOrder";
import { store } from "../../store";
import AcceptItemModel from "./AcceptItemModel";
import AddSalesItemForm from "./AddSalesItemForm";
import EditIndivialOrder from "./EditIndivialOrder";
import ExpendItemVIew from "./ExpendItemVIew";
import CanceltemModel from "./Forms/CanceltemModel";
import DispatchForm from "./Forms/DispatchForm";
import HoldItemsForm from "./Forms/HoldItemsForm";
import MarkAsAcceptedForm from "./Forms/MarkAsAcceptedForm";
import PackingForm from "./Forms/PackingForm";
import ProcurementForm from "./Forms/ProcurementForm";
import RecheckItemsForm from "./Forms/RecheckItemsForm";
import ReturnForm from "./Forms/ReturnForm";
import UnHoldItemsForm from "./Forms/UnHoldItemsForm";
import UnPackingForm from "./Forms/UnPackingForm";
import WorkOrderForm from "./Forms/WorkOrderForm";
import "./SalesOrderItem.css";
import { generateQuery } from "../../services/generateQuery";
import EditDatesForm from "./Forms/EditDatesForm";

export const ModelStyleObj = {
	drawer: { background: "rgb(248, 249, 250)" },
	closeButton: {
		color: "#ffff",
		"&:hover": {
			color: "red",
		},
	},

	close: {
		color: "#ffff",
		"&:hover": {
			color: "red",
		},
	},

	title: { color: "#ffff", fontWeight: "600" },
	header: {
		padding: "20px",
		backgroundColor: "#228BE6",
		marginRight: "0px",
		borderRadius: "8px 8px 0px 0px",
	},

	body: {
		paddingBottom: ".5rem",
		paddingLeft: ".5rem",
		paddingRight: ".5rem",
	},
};
export const ModelSize = "70%";

export const ModelErrorStyleObj = {
	drawer: { background: "rgb(248, 249, 250)" },
	close: {
		color: "#ffff",
		"&:hover": {
			color: "red",
		},
	},

	title: { color: "red", fontWeight: "600" },
	header: {
		padding: "14px",
		marginRight: "0px",
		borderRadius: "8px 8px 0px 0px",
		borderBottom: "2px solid red",
	},

	body: {
		padding: "4px 16px 16px 16px",
		color: "red",
	},
};

export const errorTitle = (
	<div style={{ display: "flex", alignItems: "center" }}>
		<BiError style={{ width: "20px", height: "20px", paddingRight: "4px" }} />{" "}
		ERROR
	</div>
);

const SalesOrderItem = ({ data, opened, setOpened, drawer = false }) => {
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();
	const { id } = useParams();
	const [showAddNewItemModel, setshowAddNewItemModel] = useState(false);
	const [editDate, setEditDate] = useState(false);
	const [editDatesError, setEditDatesError] = useState(false);
	const [AcceptItemModeBool, setAcceptItemModeBool] = useState(false);
	const [CancelItemModeBool, setCancelItemModeBool] = useState(false);
	const [openedSale, setOpenedSale] = useState({ opened: false, data: {} });
	const [WorkOrderFormBool, setWorkOrderFormBool] = useState(false);
	const [ProcurementFormBool, setProcurementFormBool] = useState(false);

	const [UnHoldItemsFormBool, setUnHoldItemsFormBool] = useState(false);
	const [RecheckItemsFormBool, setRecheckItemsFormBool] = useState(false);
	const [HoldItemsFormBool, setHoldItemsFormBool] = useState(false);
	const [markAsAcceptBool, setMarkAsAcceptBool] = useState(false);
	const [packItem, setPackItem] = useState(false);
	const [unPackItem, setUnPackItem] = useState(false);
	const [dispatchItem, setDispatchItem] = useState(false);
	const [returnItem, setReturnItem] = useState(false);

	const {
		loadingItem,
		tabledata,
		selectedItem,
		dataCount,
		drawerSalesQuery = "",
		permissionData,
		loadingPermission,
		selectedOrder,
		orders,
	} = useSelector(state => ({
		loadingItem: state.orders?.loadingItem,
		tabledata: state.orders?.allitems?.rows,
		dataCount: state.orders?.allitems?.count,
		drawerSalesQuery: state?.orders?.drawersalesquery,
		permissionData: state.permission?.permissions,
		loadingPermission: state.permission?.loading,
		selectedItem: state.Items,
		selectedOrder: state.EditOrder,
		orders: state.orders?.allorders?.rows,
	}));

	const [tableDataAllRow, settableDataAllRow] = useState([]);
	let orderid = null;
	const active_role = localStorage.getItem("active_role");

	let activeTcItems = [];
	let advancedProductionStagesItems = [];
	let issueTcItems = [];
	let workorderItems = [];
	let holdRestrict = false;
	let holdRestictedItems = [];
	let unholdRestrict = false;
	let unHoldRestictedItems = [];
	let procurementRestrict = false;
	let procureRestrictedItems = [];
	let markAsAcceptedRestrict = false;
	let markAsAcceptedRestrictedItem = [];
	let cancelRestrict = false;
	let cancelRestrictedItem = [];
	let cancelWarnedItem = [];
	let allPending = true;
	let workOrderNonPendingItems = [];
	let issueTcNonPendingItems = [];
	let isWarnable = false;
	let workOrderRestrict = false;
	let workOrderRestrictedItem = [];
	let returnRestrict = false;
	let packRestrict = false;
	let unpackRestrict = false;
	let dispatchRestrict = false;
	selectedItem?.forEach(
		(
			{
				issueTcItem,
				itemStatus,
				orderType,
				workorder_item,
				dispatchedDetails,
				packingDetails,
			},
			index
		) => {
			if (
				[
					"PENDING",
					"RECHECK",
					"PROCUREMENT",
					"DISPATCHED",
					"CANCELLED",
					"ITEMONHOLD",
				].includes(itemStatus)
			) {
				holdRestrict = true;
				holdRestictedItems.push(index);
				procurementRestrict = true;
				procureRestrictedItems.push(index);
				workOrderRestrict = true;
				workOrderRestrictedItem.push(index);
			}
			if (orderType != "Traded") {
				procurementRestrict = true;
				procureRestrictedItems.push(index);
			} else {
				workOrderRestrict = true;
				workOrderRestrictedItem.push(index);
			}
			if (itemStatus != "ITEMONHOLD") {
				unholdRestrict = true;
				unHoldRestictedItems.push(index);
			}
			if (!["PROCUREMENT"].includes(itemStatus)) {
				markAsAcceptedRestrict = true;
				markAsAcceptedRestrictedItem.push(index);
			}
			if (
				[
					"PROCUREMENT",
					"CANCELLED",
					"ITEMONHOLD",
					"DISPATCHED",
					"PARTIALLYPACKED",
					"PACKINGCOMPLETED",
					"PARTIALLYDISPATCHED",
				].includes(itemStatus)
			) {
				cancelRestrict = true;
				cancelRestrictedItem.push(index);
			}
			if (issueTcItem?.length > 0) {
				issueTcItems.push(issueTcItem);
			}
			if (workorder_item?.length > 0) {
				workorderItems.push(workorder_item);
			}
			if (
				!["PARTIALLYDISPATCHED", "DISPATCHED"].includes(itemStatus) &&
				dispatchedDetails?.[0]?.totaldispatchqty <= 0
			) {
				returnRestrict = true;
			}
			if (
				![
					"PARTIALLYDISPATCHED",
					"PARTIALLYPACKED",
					"PACKINGCOMPLETED",
				].includes(itemStatus)
			) {
				dispatchRestrict = true;
			}
			if (
				![
					"ACCEPTED",
					"INPRODUCTION",
					"INFGSTORE",
					"PARTIALLYPACKED",
					"PARTIALLYDISPATCHED",
				].includes(itemStatus)
			) {
				packRestrict = true;
			}
			if (
				// !["PARTIALLYPACKED", "PACKINGCOMPLETED"].includes(itemStatus)
				!(packingDetails?.[0]?.packingquantity > 0)
			) {
				unpackRestrict = true;
			}
			if (
				[
					"PARTIALLYPACKED",
					"PACKINGCOMPLETED",
					"PARTIALLYDISPATCHED",
					"DISPATCHED",
				].includes(itemStatus)
			) {
				workOrderRestrict = true;
				workOrderRestrictedItem.push(index);
			}
		}
	);
	// issueTcItems?.forEach(({ tcMapper }) => {
	// 	if (["PENDING", "CUTTING", "WINDING"].includes(tcMapper?.status)) {
	// 		activeTc = true;
	// 	}
	// 	if (
	// 		["WELDING", "COATING", "CHECKING", "QUALITY"].includes(tcMapper?.status)
	// 	) {
	// 		advancedProductionStages = true;
	// 	}
	// 	if (
	// 		[
	// 			"WELDING",
	// 			"COATING",
	// 			"CHECKING",
	// 			"QUALITY",
	// 			"CUTTING",
	// 			"WINDING",
	// 		].includes(tcMapper?.status)
	// 	) {
	// 		allPending = false;
	// 	}
	// });
	if (["SALES", "PRODUCTIONPL"].includes(localStorage.getItem("active_role"))) {
		issueTcItems?.forEach((data, index) => {
			if (data?.length > 1) {
				data?.forEach(({ tcMapper }) => {
					if (["PENDING", "CUTTING", "WINDING"].includes(tcMapper?.status)) {
						activeTcItems.push(index);
					}
					if (
						["WELDING", "COATING", "CHECKING", "QUALITY"].includes(
							tcMapper?.status
						)
					) {
						advancedProductionStagesItems.push(index);
					}
					if (
						[
							"WELDING",
							"COATING",
							"CHECKING",
							"QUALITY",
							"CUTTING",
							"WINDING",
						].includes(tcMapper?.status)
					) {
						allPending = false;
						issueTcNonPendingItems.push(index);
					}
				});
			} else {
				if (
					["PENDING", "CUTTING", "WINDING"].includes(
						data?.[0]?.tcMapper?.status
					)
				) {
					activeTcItems.push(index);
				}
				if (
					["WELDING", "COATING", "CHECKING", "QUALITY"].includes(
						data?.[0]?.tcMapper?.status
					)
				) {
					advancedProductionStagesItems.push(index);
				}
				if (
					[
						"WELDING",
						"COATING",
						"CHECKING",
						"QUALITY",
						"CUTTING",
						"WINDING",
					].includes(data?.[0]?.tcMapper?.status)
				) {
					allPending = false;
					issueTcNonPendingItems.push(index);
				}
			}
		});
	}

	if (localStorage.getItem("active_role") === "SALES") {
		workorderItems?.forEach((data, index) => {
			if (data?.length > 1) {
				data?.forEach(({ status }) => {
					if (["INPROGRESS", "TCISSUEDCOMPLETED"].includes(status)) {
						isWarnable = true;
						workOrderNonPendingItems.push(index);
					}
				});
			} else {
				if (["INPROGRESS", "TCISSUEDCOMPLETED"].includes(data?.[0]?.status)) {
					isWarnable = true;
					workOrderNonPendingItems.push(index);
				}
			}
		});
	}

	useEffect(() => {
		getCount();
	}, [active_role]);
	useEffect(() => {
		settableDataAllRow(tabledata);
	}, [tabledata]);
	useEffect(() => {
		// getAllSalesOrders();
		if (localStorage.getItem("itemCode")) {
			let orderNo = localStorage.getItem("itemCode")?.split("Q");
			getAllSalesOrders(`orderno=Q${orderNo?.[1]}`);
		}
		return () => {
			localStorage.removeItem("itemCode");
		};
	}, []);
	const setSelected = () => {};
	const [ActiveRowSelectedError, setActiveRowSelectedError] = useState(false);
	const [recheckFormError, setrecheckFormError] = useState(false);
	const [BulkRecheckError, setBulkRecheckError] = useState(false);
	const [workOrderError, setWorkOrderError] = useState(false);
	const [wordOrderErrorMessage, setwordOrderErrorMessage] = useState({
		bool: false,
		data: [],
		message: "",
	});
	const [holdError, setHoldError] = useState(false);
	const [unHoldError, setUnHoldError] = useState(false);
	const [procurementError, setProcurementError] = useState(false);
	const [markAsAcceptedError, setMarkAsAcceptedError] = useState(false);
	const [cancelError, setCancelError] = useState(false);
	const [cancelWarn, setCancelWarn] = useState(false);
	const [returnError, setReturnError] = useState(false);
	const [dispatchError, setDispatchError] = useState(false);
	const [packError, setPackError] = useState(false);
	const [unpackError, setUnpackError] = useState(false);

	const COLUMNS = useMemo(() => {
		if (loadingPermission) return [];
		return genrateColumnConfig(permissionData?.salesItemPage?.Table1 || []);
	}, [loadingPermission, permissionData?.salesItemPage?.Table1]);

	const COLUMNSORDER = useMemo(() => {
		return genrateColumnConfig(permissionData?.ordersPage?.Table2 || []);
	}, [loadingPermission]);

	if (tabledata?.length > 0) {
		orderid = tabledata[0]?.orderid;
	}
	// useEffect(() => {
	// 	if (
	// 		localStorage.getItem("active_role") === "PRODUCTIONPL" &&
	// 		location.pathname === ACTIVEORDERS
	// 	) {
	// 		if (id) getAllSalesItems(id, "itemStatus=accepted");
	// 		if (data?.id) getAllSalesItems(data?.id, "itemStatus=accepted");
	// 	} else {
	// 		if (id) getAllSalesItems(id);
	// 		if (data?.id) getAllSalesItems(data?.id);
	// 	}
	// }, [id, data]);

	useEffect(() => {
		if (
			localStorage.getItem("active_role") === "PRODUCTIONPL" &&
			location.pathname === ACTIVEORDERS
		) {
			if (id) getAllSalesItems(id, drawerSalesQuery + "&itemStatus=accepted");
			if (data?.id)
				getAllSalesItems(data?.id, drawerSalesQuery + "&itemStatus=accepted");
		} else {
			if (id) getAllSalesItems(id, drawerSalesQuery);
			if (data?.id) getAllSalesItems(data?.id, drawerSalesQuery);
		}
	}, [searchParams.toString(), drawerSalesQuery, id, data]);

	useEffect(() => {
		if (window.location.pathname.includes("/salesitem")) {
			setSearchParams({ limit: 50 });
		}
	}, []);

	let ButtonJSX = null;

	const [activeBtn, setactiveBtn] = useState(true);

	useEffect(() => {
		const acceptedItemStatusPresent = selectedItem.filter(
			({ itemStatus }) => itemStatus === "ACCEPTED"
		);

		if (tabledata?.length === selectedItem?.length) {
			if (selectedItem?.length > 0) setactiveBtn(false);
			else setactiveBtn(true);
		} else if (acceptedItemStatusPresent.length > 0) {
			setactiveBtn(false);
		} else if (selectedItem?.length > 0) {
			setactiveBtn(false);
		} else {
			setactiveBtn(true);
		}
	}, [tabledata, selectedItem]);
	const handleSelectRow = row => {
		store.dispatch({
			type: "new",
			payload: {
				id: row.id,
				row,
			},
		});
	};
	const selectAllRows = bool => {
		if (bool === "add") {
			store.dispatch({
				type: "addAll",
				payload: tableDataAllRow,
			});
		} else {
			store.dispatch({
				type: "removeAll",
			});
		}
	};

	const handleTheValidationOfWorkOrder = () => {
		const tradedItem = selectedItem.filter(({ mpn }) => mpn === "TradedGoods");
		if (tradedItem.length > 0) {
			setwordOrderErrorMessage({
				bool: true,
				data: tradedItem,
				message: "work order",
			});

			return;
		}
		const acceptedItemStatusNotPresent = selectedItem.filter(
			({ itemStatus }) =>
				itemStatus === "ACCEPTED" ||
				itemStatus === "INPRODUCTION" ||
				itemStatus === "INFGSTORE" ||
				itemStatus === "PARTIALLYPACKED" ||
				itemStatus === "PARTIALLYDISPATCHED"
		);

		if (acceptedItemStatusNotPresent.length > 0) {
			setWorkOrderFormBool(true);
		} else {
			setwordOrderErrorMessage({
				bool: true,
				data: acceptedItemStatusNotPresent,
				message: "work order",
			});

			return;
		}

		setWorkOrderFormBool(true);
	};
	const HandleTheValidationOfRecheck = () => {
		const acceptedItemStatusPresent = selectedItem.filter(
			({ itemStatus }) => itemStatus === "ACCEPTED"
		);
		if (acceptedItemStatusPresent.length !== selectedItem.length) {
			setrecheckFormError(true);
			return;
		}
		const CancelItemPresent = selectedItem.filter(
			({ itemStatus }) => itemStatus === "CANCELLED"
		);

		if (CancelItemPresent.length > 0) {
			setwordOrderErrorMessage({
				bool: true,
				data: CancelItemPresent,
				message: "recheck",
			});

			return;
		}

		setRecheckItemsFormBool(true);
	};
	const buttonCofig = permissionData?.salesItemPage?.topButtons;
	const showbutton = btn => {
		const obj = buttonCofig?.find(item => item.value === btn);
		return obj ? obj.enable : false;
	};

	if (localStorage.getItem("active_role") === "PRODUCTIONPL") {
		ButtonJSX = (
			<>
				{showbutton("issueWorkOrder") && (
					<Button
						disabled={activeBtn}
						onClick={() => {
							// handleTheValidationOfWorkOrder();
							if (workOrderRestrict) {
								setWorkOrderError(true);
							} else {
								setWorkOrderFormBool(true);
							}
						}}>
						Issue WorkOrder
					</Button>
				)}

				{showbutton("recheck") && (
					<Button
						color="orange"
						disabled={activeBtn}
						onClick={() => {
							HandleTheValidationOfRecheck();
						}}>
						Recheck
					</Button>
				)}

				{showbutton("hold") && (
					<Button
						disabled={activeBtn}
						onClick={() => {
							store.dispatch({
								type: "INDIVIDUAL_ITEM",
								payload: false,
							});
							if (holdRestrict) {
								setHoldError(true);
							} else {
								setHoldItemsFormBool(true);
							}
						}}>
						Hold
					</Button>
				)}

				{showbutton("unHold") && (
					<Button
						disabled={activeBtn}
						onClick={() => {
							store.dispatch({
								type: "INDIVIDUAL_ITEM",
								payload: false,
							});
							if (unholdRestrict) {
								setUnHoldError(true);
							} else {
								setUnHoldItemsFormBool(true);
							}
						}}>
						UnHold
					</Button>
				)}

				{showbutton("procurement") && (
					<Button
						disabled={activeBtn}
						onClick={() => {
							store.dispatch({
								type: "INDIVIDUAL_ITEM",
								payload: false,
							});
							if (procurementRestrict) {
								setProcurementError(true);
							} else {
								setProcurementFormBool(true);
							}
						}}>
						Procurement
					</Button>
				)}

				{showbutton("markAsAccepted") && (
					<Button
						disabled={activeBtn}
						onClick={() => {
							store.dispatch({
								type: "INDIVIDUAL_ITEM",
								payload: false,
							});
							if (markAsAcceptedRestrict) {
								setMarkAsAcceptedError(true);
							} else {
								setMarkAsAcceptBool(true);
							}
						}}>
						Mark As Accepted
					</Button>
				)}
				{/* <Button disabled={activeBtn} onClick={() => {}}>
        Comment
        </Button> */}
			</>
		);
	} else {
		ButtonJSX = (
			<>
				{showbutton("pack") && (
					<Button
						disabled={activeBtn}
						onClick={() => {
							store.dispatch({
								type: "INDIVIDUAL_ITEM",
								payload: false,
							});
							if (packRestrict) {
								setPackError(true);
							} else {
								setPackItem(true);
							}
						}}>
						Pack
					</Button>
				)}
				{showbutton("unpack") && (
					<Button
						disabled={activeBtn}
						onClick={() => {
							store.dispatch({
								type: "INDIVIDUAL_ITEM",
								payload: false,
							});
							if (unpackRestrict) {
								setUnpackError(true);
							} else {
								setUnPackItem(true);
							}
						}}>
						Unpack
					</Button>
				)}
				{showbutton("dispatch") && (
					<Button
						disabled={activeBtn}
						onClick={() => {
							store.dispatch({
								type: "INDIVIDUAL_ITEM",
								payload: false,
							});
							if (dispatchRestrict) {
								setDispatchError(true);
							} else {
								setDispatchItem(true);
							}
						}}>
						Dispatch
					</Button>
				)}
				{showbutton("return") && (
					<Button
						disabled={activeBtn}
						onClick={() => {
							store.dispatch({
								type: "INDIVIDUAL_ITEM",
								payload: false,
							});
							if (returnRestrict) {
								setReturnError(true);
							} else {
								setReturnItem(true);
							}
						}}>
						Return
					</Button>
				)}
				{showbutton("addItems") && (
					<Button
						onClick={() => {
							setshowAddNewItemModel(true);
						}}>
						Add Items
					</Button>
				)}

				{/* {localStorage.getItem("active_role") === "SALES" && (
					<Button
						disabled={!selectedItem.length}
						onClick={() => {
							if (
								selectedItem.filter(ele =>
									["PENDING", "ACCEPTED", "RECHECK", "PROCUREMENT"].includes(
										ele?.itemStatus
									)
								)?.length === selectedItem.length
							) {
								setEditDate(true);
							} else {
								setEditDatesError(true);
							}
						}}>
						Edit Dates
					</Button>
				)} */}

				{showbutton("accept") && (
					<Button
						style={{
							background: `${!activeBtn ? "#65bb65" : "#e9ecef"}`,
							color: `${!activeBtn ? "white" : " #adb5bd"}`,
							fontWeight: 600,
						}}
						disabled={activeBtn}
						onClick={() => {
							const ItemEligibilyForNextStep = selectedItem.filter(
								({ itemStatus }) =>
									itemStatus === "PENDING" || itemStatus === "RECHECK"
							);

							const DataPresent = selectedItem.filter(
								({ scheduleDate, commitedDate }) => {
									return commitedDate === null || scheduleDate === null;
								}
							);

							if (selectedItem.length !== ItemEligibilyForNextStep.length) {
								setActiveRowSelectedError(true);
							} else if (DataPresent.length > 0) {
								setActiveRowSelectedError(true);
							} else {
								setAcceptItemModeBool(true);
							}
						}}>
						Accept
					</Button>
				)}

				{/*
        {/* color: #adb5bd; */}
				{showbutton("cancel") && (
					<Button
						style={{
							background: `${!activeBtn ? "#fe2727" : "#e9ecef"}`,
							color: `${!activeBtn ? "white" : " #adb5bd"}`,
							opacity: "0.8",
							fontWeight: 600,
						}}
						disabled={activeBtn}
						onClick={() => {
							if (cancelRestrict) {
								setCancelError(true);
							}
							// else if (isWarnable) {
							// 	setCancelWarn(true);
							// }
							else {
								setCancelItemModeBool(true);
							}
						}}>
						Cancel
					</Button>
				)}
			</>
		);
	}

	const setPagnation = useCallback(
		async ({ pageNumber, pageSize }) => {
			const limit = searchParams.get("limit")
				? parseInt(searchParams.get("limit"))
				: 50;

			let gen = generateQuery([
				{
					limit: parseInt(pageSize),
					offset: parseInt(limit * (pageNumber - 1)),
				},
			]);

			setSearchParams(gen);
		},
		[searchParams, setSearchParams]
	);

	return (
		<>
			<Container fluid py={12}>
				{drawer ? (
					<div>
						<Drawer
							opened={opened}
							onClose={() => {
								setOpened({ opened: false, data: {} });
								setDrawerSalesQuery("");
								let updatedParams = searchParams
									.toString()
									.replace(/[?&](limit|offset)=\d+/gi, "");
								setSearchParams(updatedParams);
								store.dispatch({
									type: "removeAll",
								});

								getCount();

								getAllSalesOrdersForProduction(
									"salesorder?orderPageType=accepted"
								);

								getAllSalesOrders();
							}}
							title="Sales Item"
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
								<div className="orderHeaderInItem">
									<TableComponent
										Data={orders?.filter(({ id }) => id === orderid) || []}
										Columns={COLUMNSORDER}
										sort={true}
										globleSearch={true}
										setSelected={setSelected}
										showFilter={false}
										rowClick={false}
										setOpenedDrawer={setOpenedSale}
										dataCount={dataCount}
										showPagination={false}
									/>
								</div>
								<div
									style={{
										display: "flex",
										justifyContent: "flex-end",
										gap: "1rem",
									}}>
									{ButtonJSX}
								</div>
								<ScrollArea style={{ height: "70vh" }}>
									<TableComponent
										from="salesitem"
										Data={tabledata || []}
										salesOrderItemsPageOpen={true}
										Columns={COLUMNS}
										sort={true}
										setSelected={setSelected}
										loading={loadingItem}
										setOpenedDrawer={setOpenedSale}
										rowClick={true}
										handleSelectRow={handleSelectRow}
										showFilter={true}
										itemClick={true}
										setPagnation={setPagnation}
										ExpandItemView={ExpendItemVIew}
										dataCount={dataCount}
									/>
								</ScrollArea>
							</Container>
						</Drawer>
					</div>
				) : (
					<div
						style={{
							transform: "translateY(-2.4rem)",
						}}>
						{" "}
						<div>
							<TableComponent
								Data={orders?.filter(({ id }) => id === orderid) || []}
								Columns={COLUMNSORDER}
								sort={true}
								globleSearch={true}
								setSelected={setSelected}
								showFilter={false}
								rowClick={false}
								setOpenedDrawer={setOpenedSale}
								dataCount={dataCount}
								showPagination={false}
							/>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "flex-end",
								gap: "1rem",
							}}>
							{ButtonJSX}
						</div>
						<TableComponent
							rowClick={true}
							Data={tabledata || []}
							Columns={COLUMNS}
							sort={true}
							setSelected={setSelected}
							loading={loadingItem}
							showFilter={true}
							itemClick={true}
							ExpandItemView={ExpendItemVIew}
							dataCount={dataCount}
							selectAllRows={selectAllRows}
							handleSelectRow={handleSelectRow}
							setPagnation={setPagnation}
						/>
					</div>
				)}

				<Modal
					radius={8}
					padding={0}
					opened={ActiveRowSelectedError}
					styles={ModelErrorStyleObj}
					size="lg"
					title={errorTitle}
					transition="fade"
					transitionDuration={500}
					transitionTimingFunction="ease"
					withCloseButton={false}>
					{selectedItem
						.filter(
							({ scheduleDate, commitedDate, itemStatus }) =>
								!["RECHECK", "PENDING"].includes(itemStatus) && commitedDate
						)
						.map(({ orderType, mpn, customerPartNo }) => {
							if (orderType === "Manufacture") {
								return (
									<Group position="left" direction="column">
										<Text fz="sm">
											{" "}
											Item MPN : <strong>{mpn}</strong> can not be Accepted!
										</Text>
									</Group>
								);
							}
							if (orderType === "Traded") {
								return (
									<Group position="left" direction="column">
										<Text fz="sm">
											{" "}
											Item no : <strong>{customerPartNo} </strong> can not be
											Accepted!
										</Text>
									</Group>
								);
							}
						})}
					<Group position="right" mt={"md"}>
						<Button
							color={"red"}
							onClick={() => setActiveRowSelectedError(false)}>
							Close
						</Button>
					</Group>
				</Modal>

				<Modal
					styles={{
						drawer: { background: "rgb(248, 249, 250)" },
						closeButton: {
							color: "#ffff",
							"&:hover": {
								color: "red",
							},
						},

						title: { color: "#ffff", fontWeight: "600" },
					}}
					opened={BulkRecheckError}
					onClose={() => setBulkRecheckError(false)}>
					<h4>
						{" "}
						please select the item which are not traded and must be in Accept{" "}
					</h4>{" "}
					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
						}}>
						<Button onClick={() => setBulkRecheckError(false)}>Cancel</Button>
					</div>
				</Modal>
				<Drawer
					opened={openedSale.opened}
					onClose={() => {
						setOpenedSale(prev => ({
							...prev,
							opened: false,
						}));
					}}
					title="Sample Drawer"
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
						},
					}}
					size="full">
					<Container fluid>
						<h1>Sample Drawer</h1>
					</Container>
				</Drawer>
			</Container>
			<>
				<Modal
					opened={showAddNewItemModel}
					onClose={() => {
						setshowAddNewItemModel(false);
					}}
					title="Add New Items"
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={"100%"}>
					<div>
						<AddSalesItemForm
							orderid={orderid}
							setshowAddNewItemModel={setshowAddNewItemModel}
						/>
					</div>
				</Modal>
			</>
			<>
				<Modal
					opened={editDate}
					onClose={() => {
						setEditDate(false);
					}}
					title="Edit Dates"
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={"60%"}>
					<div>
						<EditDatesForm setEditDate={setEditDate} />
					</div>
				</Modal>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					title={errorTitle}
					transition="fade"
					transitionDuration={600}
					transitionTimingFunction="ease"
					withCloseButton={false}
					opened={editDatesError}>
					{selectedItem &&
						selectedItem.length > 0 &&
						selectedItem
							.filter(ele => ele?.itemStatus !== "PENDING")
							?.map(({ itemno, itemStatus }, index) => (
								<>
									{
										<Text my={10} style={{ color: "red" }}>
											Item No: <strong>{itemno}</strong> cannot be{" "}
											<span style={{ color: "red", fontWeight: 600 }}>
												EDITED
											</span>{" "}
											because item is Accepted
										</Text>
									}
								</>
							))}
					<Group position="right" mt={"md"}>
						<Button
							color={"red"}
							onClick={() => {
								setEditDatesError(false);
							}}>
							Close
						</Button>
					</Group>
				</Modal>
			</>
			<>
				<Modal
					opened={selectedOrder?.active}
					onClose={() => {
						store.dispatch({
							type: "EditremoveOrder",
						});
					}}
					title="Edit Customer"
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={"90%"}>
					<div>
						<EditIndivialOrder orderid={orderid} />
					</div>
				</Modal>
			</>
			<>
				<Modal
					centered
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={ModelSize}
					opened={AcceptItemModeBool}
					onClose={() => {
						setAcceptItemModeBool(false);
					}}
					title="Accept Items">
					<div>
						<AcceptItemModel setAcceptItemModeBool={setAcceptItemModeBool} />
					</div>
				</Modal>
			</>
			<>
				<Modal
					centered
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={ModelSize}
					opened={CancelItemModeBool}
					onClose={() => {
						setCancelItemModeBool(false);
					}}
					title="Cancel Items">
					<div>
						<CanceltemModel setAcceptItemModeBool={setCancelItemModeBool} />
					</div>
				</Modal>
			</>

			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size="90%"
					opened={WorkOrderFormBool}
					onClose={() => {
						setWorkOrderFormBool(false);
					}}
					title={<>MPN: {data?.mpn}</>}>
					<div>
						<WorkOrderForm setWorkOrderFormBool={setWorkOrderFormBool} />
					</div>
				</Modal>
			</>
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					title={errorTitle}
					transition="fade"
					transitionDuration={600}
					transitionTimingFunction="ease"
					withCloseButton={false}
					opened={workOrderError}>
					{/* {wordOrderErrorMessage.data.map(
						({ orderType, mpn, customerPartNo }) => {
							if (orderType === "Manufacture") {
								return (
									<Group position="left" direction="column">
										<Text fz="sm">
											{" "}
											{wordOrderErrorMessage.message} can not be issued for Item
											MPN : <strong>{mpn}</strong>
										</Text>
									</Group>
								);
							}
							if (orderType === "Traded") {
								return (
									<Group position="left" direction="column">
										<Text fz="sm">
											{wordOrderErrorMessage.message} can not be issued for Item
											no : <strong>{customerPartNo}</strong>
										</Text>
									</Group>
								);
							}
						}
					)} */}
					{selectedItem &&
						selectedItem.length > 0 &&
						selectedItem.map(({ itemno, itemStatus }, index) => (
							<>
								{workOrderRestrictedItem.includes(index) ? (
									<Text my={10} style={{ color: "red" }}>
										Item No: <strong>{itemno}</strong> cannot be put to{" "}
										<span style={{ color: "red", fontWeight: 600 }}>
											ISSUE WORK ORDER
										</span>
									</Text>
								) : null}
							</>
						))}

					<Group position="right" mt={"md"}>
						<Button
							color={"red"}
							onClick={() => {
								// setwordOrderErrorMessage({
								// 	bool: false,
								// 	data: [],
								// });
								setWorkOrderError(false);
							}}>
							Close
						</Button>
					</Group>
				</Modal>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					title={errorTitle}
					transition="fade"
					transitionDuration={600}
					transitionTimingFunction="ease"
					withCloseButton={false}
					opened={holdError}>
					{selectedItem &&
						selectedItem.length > 0 &&
						selectedItem.map(({ itemno, itemStatus }, index) => (
							<>
								{holdRestictedItems.includes(index) ? (
									<Text my={10} style={{ color: "red" }}>
										Item No: <strong>{itemno}</strong> cannot be put on{" "}
										<span style={{ color: "red", fontWeight: 600 }}>HOLD</span>
									</Text>
								) : null}
							</>
						))}
					<Group position="right" mt={"md"}>
						<Button
							color={"red"}
							onClick={() => {
								setHoldError(false);
							}}>
							Close
						</Button>
					</Group>
				</Modal>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					title={errorTitle}
					transition="fade"
					transitionDuration={600}
					transitionTimingFunction="ease"
					withCloseButton={false}
					opened={unHoldError}>
					{selectedItem &&
						selectedItem.length > 0 &&
						selectedItem.map(({ itemno, itemStatus }, index) => (
							<>
								{unHoldRestictedItems.includes(index) ? (
									<Text my={10} style={{ color: "red" }}>
										Item No: <strong>{itemno}</strong> cannot be put on{" "}
										<span style={{ color: "red", fontWeight: 600 }}>
											UNHOLD
										</span>
									</Text>
								) : null}
							</>
						))}
					<Group position="right" mt={"md"}>
						<Button
							color={"red"}
							onClick={() => {
								setUnHoldError(false);
							}}>
							Close
						</Button>
					</Group>
				</Modal>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					title={errorTitle}
					transition="fade"
					transitionDuration={600}
					transitionTimingFunction="ease"
					withCloseButton={false}
					opened={procurementError}>
					{selectedItem &&
						selectedItem.length > 0 &&
						selectedItem.map(({ itemno, itemStatus }, index) => (
							<>
								{procureRestrictedItems.includes(index) ? (
									<Text my={10} style={{ color: "red" }}>
										Item No: <strong>{itemno}</strong> cannot be put on{" "}
										<span style={{ color: "red", fontWeight: 600 }}>
											PROCUREMENT
										</span>
									</Text>
								) : null}
							</>
						))}
					<Group position="right" mt={"md"}>
						<Button
							color={"red"}
							onClick={() => {
								setProcurementError(false);
							}}>
							Close
						</Button>
					</Group>
				</Modal>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					title={errorTitle}
					transition="fade"
					transitionDuration={600}
					transitionTimingFunction="ease"
					withCloseButton={false}
					opened={markAsAcceptedError}>
					{selectedItem &&
						selectedItem.length > 0 &&
						selectedItem.map(({ itemno, itemStatus }, index) => (
							<>
								{markAsAcceptedRestrictedItem.includes(index) ? (
									<Text my={10} style={{ color: "red" }}>
										Item No: <strong>{itemno}</strong> cannot be put on{" "}
										<span style={{ color: "red", fontWeight: 600 }}>
											MARK AS ACCEPTED
										</span>
									</Text>
								) : null}
							</>
						))}
					<Group position="right" mt={"md"}>
						<Button
							color={"red"}
							onClick={() => {
								setMarkAsAcceptedError(false);
							}}>
							Close
						</Button>
					</Group>
				</Modal>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					title={errorTitle}
					transition="fade"
					transitionDuration={600}
					transitionTimingFunction="ease"
					withCloseButton={false}
					opened={cancelError}>
					{selectedItem &&
						selectedItem.length > 0 &&
						selectedItem.map(({ itemno, itemStatus }, index) => (
							<>
								{cancelRestrictedItem.includes(index) ? (
									<Text my={10} style={{ color: "red" }}>
										Item No: <strong>{itemno}</strong> cannot be{" "}
										<span style={{ color: "red", fontWeight: 600 }}>
											CANCELED
										</span>
									</Text>
								) : null}
							</>
						))}
					<Group position="right" mt={"md"}>
						<Button
							color={"red"}
							onClick={() => {
								setCancelError(false);
							}}>
							Close
						</Button>
					</Group>
				</Modal>
			</>
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={"90%"}
					opened={ProcurementFormBool}
					onClose={() => {
						setProcurementFormBool(false);
					}}
					title="PROCURE ITEMS">
					<div>
						<ProcurementForm setProcurementFormBool={setProcurementFormBool} />
					</div>
				</Modal>
			</>
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={ModelSize}
					opened={UnHoldItemsFormBool}
					onClose={() => {
						setUnHoldItemsFormBool(false);
					}}
					title="PUT ITEMS ON UNHOLD">
					<div>
						<UnHoldItemsForm setUnHoldItemsFormBool={setUnHoldItemsFormBool} />
					</div>
				</Modal>
			</>
			<Modal
				radius={8}
				padding={0}
				styles={ModelAlertStyleObj}
				size={"lg"}
				opened={cancelWarn}
				onClose={() => setCancelWarn(false)}
				title={alertTitle}>
				{selectedItem &&
					selectedItem.length > 0 &&
					selectedItem.map(({ itemno }, index) => (
						<>
							{cancelWarnedItem.includes(index) &&
							workOrderNonPendingItems.includes(index) ? (
								allPending || !issueTcNonPendingItems.includes(index) ? (
									<Text my={10}>
										On Item No: <strong>{itemno}</strong> TCs have been issued,
										please consult RM storekeeper before cancelling the item
									</Text>
								) : (
									<Text my={10}>
										On Item No: <strong>{itemno}</strong> There are TCs in
										production, please consult storekeeper before cancelling the
										item
									</Text>
								)
							) : (
								<Text my={10}>
									On Item No: <strong>{itemno}</strong> will be{" "}
									<span style={{ color: "red", fontWeight: 600 }}>
										CANCELLED
									</span>
								</Text>
							)}
						</>
					))}
				<div>
					<Group position="right">
						<Button
							mt="md"
							color="red"
							onClick={() => {
								setCancelWarn(false);
								setCancelItemModeBool(true);
							}}>
							Continue
						</Button>
					</Group>
				</div>
			</Modal>
			<Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				size={"100%"}
				opened={packItem}
				onClose={() => {
					setPackItem(false);
				}}
				title="PACK THE ITEM">
				<div>
					<PackingForm
						setPackItem={setPackItem}
						orderid={selectedItem?.[0]?.orderid}
					/>
				</div>
			</Modal>
			<Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				size={"100%"}
				opened={unPackItem}
				onClose={() => {
					setUnPackItem(false);
				}}
				title="UNPACK THE ITEM">
				<div>
					<UnPackingForm
						setUnPackItem={setUnPackItem}
						orderid={selectedItem?.[0]?.orderid}
					/>
				</div>
			</Modal>
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={ModelSize}
					opened={HoldItemsFormBool}
					onClose={() => {
						setHoldItemsFormBool(false);
					}}
					title="PUT ITEMS ON HOLD">
					<div>
						<HoldItemsForm setHoldItems={setHoldItemsFormBool} />
					</div>
				</Modal>
			</>
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={ModelSize}
					opened={RecheckItemsFormBool}
					onClose={() => {
						setRecheckItemsFormBool(false);
					}}
					title="RECHECK ITEMS">
					<div>
						<RecheckItemsForm
							setRecheckItemsFormBool={setRecheckItemsFormBool}
						/>
					</div>
				</Modal>
			</>
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					title={errorTitle}
					transition="fade"
					transitionDuration={600}
					transitionTimingFunction="ease"
					withCloseButton={false}
					opened={recheckFormError}>
					{selectedItem
						.filter(obj => obj.itemStatus !== "ACCEPTED")
						.map(obj => {
							return (
								<Group position="left" direction="column">
									<Text fz="sm">
										Item no: <strong>{obj.mpn}</strong> can not be put for
										RECHECK
									</Text>
								</Group>
							);
						})}

					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 20,
						}}>
						<div
							style={{
								display: "flex",
								alignItems: "center",
							}}>
							<FiAlertCircle size={18} color="orange" />
							<p
								style={{
									color: "orange",
									paddingLeft: "4px",
								}}>
								Please select the items with status: <strong>"Accepted"</strong>
							</p>
						</div>
						<Button color={"red"} onClick={() => setrecheckFormError(false)}>
							Close
						</Button>
					</div>
				</Modal>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					title={errorTitle}
					transition="fade"
					transitionDuration={600}
					transitionTimingFunction="ease"
					withCloseButton={false}
					opened={packError}>
					{selectedItem
						.filter(
							obj =>
								![
									"ACCEPTED",
									"INPRODUCTION",
									"INFGSTORE",
									"PARTIALLYPACKED",
									"PARTIALLYDISPATCHED",
								].includes(obj.itemStatus)
						)
						.map(obj => {
							return (
								<Group position="left" direction="column">
									<Text fz="sm">
										Item no: <strong>{obj.mpn}</strong> can not be put for PACK
									</Text>
								</Group>
							);
						})}

					<div
						style={{
							display: "flex",
							justifyContent: "right",
							alignItems: "right",
							marginTop: 20,
						}}>
						<Button color={"red"} onClick={() => setPackError(false)}>
							Close
						</Button>
					</div>
				</Modal>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					title={errorTitle}
					transition="fade"
					transitionDuration={600}
					transitionTimingFunction="ease"
					withCloseButton={false}
					opened={unpackError}>
					{selectedItem
						.filter(obj => !(obj?.packingDetails?.[0]?.packingquantity > 0))
						.map(obj => {
							return (
								<Group position="left" direction="column">
									<Text fz="sm">
										Item no: <strong>{obj.mpn}</strong> can not be put for
										UNPACK
									</Text>
								</Group>
							);
						})}

					<div
						style={{
							display: "flex",
							justifyContent: "right",
							alignItems: "right",
							marginTop: 20,
						}}>
						<Button color={"red"} onClick={() => setUnpackError(false)}>
							Close
						</Button>
					</div>
				</Modal>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					title={errorTitle}
					transition="fade"
					transitionDuration={600}
					transitionTimingFunction="ease"
					withCloseButton={false}
					opened={dispatchError}>
					{selectedItem
						.filter(
							obj =>
								![
									"PARTIALLYDISPATCHED",
									"PARTIALLYPACKED",
									"PACKINGCOMPLETED",
								].includes(obj.itemStatus)
						)
						.map(obj => {
							return (
								<Group position="left" direction="column">
									<Text fz="sm">
										Item no: <strong>{obj.mpn}</strong> can not be put for
										DISPATCH
									</Text>
								</Group>
							);
						})}

					<div
						style={{
							display: "flex",
							justifyContent: "right",
							alignItems: "right",
							marginTop: 20,
						}}>
						<Button color={"red"} onClick={() => setDispatchError(false)}>
							Close
						</Button>
					</div>
				</Modal>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					title={errorTitle}
					transition="fade"
					transitionDuration={600}
					transitionTimingFunction="ease"
					withCloseButton={false}
					opened={returnError}>
					{selectedItem
						.filter(
							obj =>
								!["PARTIALLYDISPATCHED", "DISPATCHED"].includes(obj.itemStatus)
						)
						.map(obj => {
							return (
								<Group position="left" direction="column">
									<Text fz="sm">
										Item no: <strong>{obj.mpn}</strong> can not be put for
										RETURN
									</Text>
								</Group>
							);
						})}

					<div
						style={{
							display: "flex",
							justifyContent: "right",
							alignItems: "right",
							marginTop: 20,
						}}>
						<Button color={"red"} onClick={() => setReturnError(false)}>
							Close
						</Button>
					</div>
				</Modal>
			</>
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={ModelSize}
					opened={markAsAcceptBool}
					onClose={() => {
						setMarkAsAcceptBool(false);
					}}
					title="Mark As Accept">
					<div>
						<MarkAsAcceptedForm setMarkAsAcceptBool={setMarkAsAcceptBool} />
					</div>
				</Modal>
			</>
			<Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				size={"100%"}
				opened={dispatchItem}
				onClose={() => {
					setDispatchItem(false);
				}}
				title="PUT ITEMS TO DISPATCH">
				<div>
					<DispatchForm
						setDispatchItem={setDispatchItem}
						orderid={selectedItem?.[0]?.orderid}
					/>
				</div>
			</Modal>
			<Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				size={"100%"}
				opened={returnItem}
				onClose={() => {
					setReturnItem(false);
				}}
				title="PUT ITEMS TO DISPATCH">
				<div>
					<ReturnForm
						setReturnItem={setReturnItem}
						orderid={selectedItem?.[0]?.orderid}
					/>
				</div>
			</Modal>
		</>
	);
};

export default SalesOrderItem;
