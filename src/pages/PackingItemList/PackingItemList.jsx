import {
	ActionIcon,
	Button,
	Container,
	Group,
	Modal,
	ScrollArea,
	Text,
} from "@mantine/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AiOutlineDropbox } from "react-icons/ai";
import { GiBoxUnpacking } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import TableComponent from "../../component/table/table";
import { alertTitle, ModelAlertStyleObj } from "../../component/TcCancel";
import PackingForm from "../../containers/salesOrder/Forms/PackingForm";
import UnPackingForm from "../../containers/salesOrder/Forms/UnPackingForm";
import PackOrder from "../../containers/salesOrder/SaleItemCell/PackOrder";
import UnPackOrder from "../../containers/salesOrder/SaleItemCell/UnPackOrder";
import {
	errorTitle,
	ModelErrorStyleObj,
	ModelStyleObj,
} from "../../containers/salesOrder/SalesOrderItem";
import { genrateColumnConfig } from "../../helpers/columns";
import { setDrawerSalesQuery } from "../../redux/order/actions";
import { generateQuery } from "../../services/generateQuery";
import { getAllPackingItems } from "../../services/salesOrder";
import { getUsers } from "../../services/user";
import { store } from "../../store";

const PackingItemList = () => {
	const [showFilter, setShowFilter] = useState(true);

	const [selected, setSelected] = useState([]);

	const [searchParams, setSearchParams] = useSearchParams();

	const [packItem, setPackItem] = useState(false);
	const [unPackItem, setUnPackItem] = useState(false);
	const [packError, setPackError] = useState(false);
	const [unpackError, setUnpackError] = useState(false);

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
		permissionData = {},
		drawerSalesQuery = "",
		selectedItem,
	} = useSelector(state => ({
		items: state.orders?.packingItems?.rows,
		itemCount: state.orders?.packingItems?.count,
		loading: state.orders?.packingItemLoading,
		loadingPermission: state.permission?.loading,
		permissionData: state.permission?.permissions,
		drawerSalesQuery: state?.orders?.drawersalesquery,
		selectedItem: state.Items,
	}));

	useEffect(() => {
		getAllPackingItems(drawerSalesQuery);
	}, [searchParams.toString(), drawerSalesQuery]);

	useEffect(() => {
		setDrawerSalesQuery("");
		getUsers("string");
	}, []);

	const COLUMNS = useMemo(() => {
		if (loadingPermission) return [];
		return genrateColumnConfig(permissionData?.packingItemList?.Table1 || []);
	}, [loadingPermission, permissionData?.packingItemList?.Table1]);

	const tableData = useMemo(() => items, [items]);

	const buttonCofig = useMemo(() => {
		return permissionData?.packingItemList?.topButtons;
	}, [permissionData?.packingItemList?.topButtons]);

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

	return (
		<Container fluid>
			<Group position="apart">
				<Text>Packing Item List</Text>
				<Group position="right" spacing={4}>
					{showbutton("pack") && (
						<Button
							disabled={selectedItem.length > 0 ? false : true}
							// style={{ backgroundColor: "red" }}
							onClick={() => {
								store.dispatch({
									type: "INDIVIDUAL_ITEM",
									payload: false,
								});
								let packRestrict = false;
								selectedItem.forEach(({ itemStatus }) => {
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
							disabled={selectedItem.length > 0 ? false : true}
							onClick={() => {
								store.dispatch({
									type: "INDIVIDUAL_ITEM",
									payload: false,
								});
								let unpackRestrict = false;
								selectedItem.forEach(({ itemStatus, packingDetails }) => {
									if (!(packingDetails?.[0]?.packingquantity > 0)) {
										unpackRestrict = true;
									}
								});
								if (unpackRestrict) {
									setUnpackError(true);
								} else {
									setUnPackItem(true);
								}
							}}>
							{" "}
							UnPack{" "}
						</Button>
					)}
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
							<PackingForm setPackItem={setPackItem} />
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
							<UnPackingForm setUnPackItem={setUnPackItem} />
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
											Item no: <strong>{obj.mpn}</strong> can not be put for
											PACK
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
				</Group>
			</Group>
			<ScrollArea style={{ height: "80vh" }}>
				<TableComponent
					Data={tableData || []}
					Columns={COLUMNS}
					salesOrderItemsPageOpen={true}
					rowClick={true}
					itemClick={true}
					hideColumCLick={true}
					handleSelectRow={handleSelectRow}
					sort={true}
					globleSearch={true}
					setSelected={() => {}}
					loading={loading}
					showFilter={showFilter}
					setPagnation={setPagnation}
					dataCount={itemCount}
				/>
			</ScrollArea>
		</Container>
	);
};

export default PackingItemList;
