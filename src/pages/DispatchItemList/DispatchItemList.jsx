import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import TableComponent from "../../component/table/table";
import { genrateColumnConfig } from "../../helpers/columns";
import { setDrawerSalesQuery } from "../../redux/order/actions";
import { generateQuery } from "../../services/generateQuery";
import { getAllDispatchItems } from "../../services/salesOrder";
import { store } from "../../store";
import {
	Button,
	Container,
	Group,
	Modal,
	ScrollArea,
	Text,
} from "@mantine/core";
import { alertTitle, ModelAlertStyleObj } from "../../component/TcCancel";
import {
	errorTitle,
	ModelErrorStyleObj,
	ModelStyleObj,
} from "../../containers/salesOrder/SalesOrderItem";
import ReturnForm from "../../containers/salesOrder/Forms/ReturnForm";
import DispatchForm from "../../containers/salesOrder/Forms/DispatchForm";
import { getUsers } from "../../services/user";

const DispatchItemList = () => {
	const [showFilter, setShowFilter] = useState(true);

	const [selected, setSelected] = useState([]);

	const [searchParams, setSearchParams] = useSearchParams();

	const [dispatchItem, setDispatchItem] = useState(false);
	const [returnItem, setReturnItem] = useState(false);
	const [returnError, setReturnError] = useState(false);

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

	const {
		items = [],
		itemCount = 0,
		loading = false,
		loadingPermission = true,
		drawerSalesQuery = "",
		permissionData = {},
		selectedItem,
	} = useSelector(state => ({
		items: state.orders?.dispatchItems?.rows,
		itemCount: state.orders?.dispatchItems?.count,
		loading: state.orders?.dispatchItemLoading,
		loadingPermission: state.permission?.loading,
		drawerSalesQuery: state?.orders?.drawersalesquery,
		permissionData: state.permission?.permissions,
		selectedItem: state.Items,
	}));

	useEffect(() => {
		getAllDispatchItems(drawerSalesQuery);
	}, [searchParams.toString(), drawerSalesQuery]);

	useEffect(() => {
		setDrawerSalesQuery("");
		getUsers("string");
	}, []);

	const buttonCofig = useMemo(() => {
		return permissionData?.dispatchItemList?.topButtons;
	}, [permissionData?.dispatchItemList?.topButtons]);

	const showbutton = btn => {
		const obj = buttonCofig?.find(item => item.value === btn);
		return obj ? obj.enable : false;
	};

	const handleSelectRow = row => {
		store.dispatch({
			type: "new",
			payload: {
				id: row.id,
				row,
			},
		});
	};

	const COLUMNS = useMemo(() => {
		if (loadingPermission) return [];
		return genrateColumnConfig(permissionData?.dispatchItemList?.Table1 || []);
	}, [loadingPermission, permissionData?.dispatchItemList?.Table1]);

	const tableData = useMemo(() => items, [items]);

	return (
		<Container fluid>
			<Group position="apart">
				<Text>Dispatch Item List</Text>
				<Group position="right" spacing={4}>
					{showbutton("dispatch") && (
						<Button
							disabled={selectedItem.length > 0 ? false : true}
							onClick={() => {
								store.dispatch({
									type: "INDIVIDUAL_ITEM",
									payload: false,
								});
								setDispatchItem(true);
							}}>
							Dispatch
						</Button>
					)}
					{showbutton("return") && (
						<Button
							disabled={selectedItem.length > 0 ? false : true}
							onClick={() => {
								store.dispatch({
									type: "INDIVIDUAL_ITEM",
									payload: false,
								});
								let returnRestrict = false;
								selectedItem.forEach(({ itemStatus, dispatchedDetails }) => {
									if (
										!["PARTIALLYDISPATCHED", "DISPATCHED"].includes(
											itemStatus
										) &&
										dispatchedDetails?.[0]?.totaldispatchqty <= 0
									) {
										returnRestrict = true;
									}
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
							<DispatchForm setDispatchItem={setDispatchItem} />
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
							<ReturnForm setReturnItem={setReturnItem} />
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
									!["PARTIALLYDISPATCHED", "DISPATCHED"].includes(
										obj.itemStatus
									)
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
				</Group>
			</Group>
			<ScrollArea style={{ height: "80vh" }}>
				<TableComponent
					Data={tableData || []}
					salesOrderItemsPageOpen={true}
					Columns={COLUMNS}
					sort={true}
					globleSearch={true}
					rowClick={true}
					itemClick={true}
					hideColumCLick={true}
					setSelected={() => {}}
					loading={loading}
					showFilter={showFilter}
					setPagnation={setPagnation}
					dataCount={itemCount}
					handleSelectRow={handleSelectRow}
				/>
			</ScrollArea>
		</Container>
	);
};

export default DispatchItemList;
