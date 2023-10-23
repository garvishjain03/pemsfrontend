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
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import TableComponent from "../../component/table/table";
import { generateQuery } from "../../services/generateQuery";
import { getUsers } from "../../services/user";
import { store } from "../../store";
import CustomerOrderDetailForm from "./CustomerOrderDetailForm";
import CloseTheOrder from "./Forms/CloseTheOrder";
import SalesOrderItem, {
	ModelErrorStyleObj,
	errorTitle,
} from "./SalesOrderItem";

const SalesOrderContainer = ({
	leaded,
	setLeadedFn,
	setCoreSizeFn,
	contextData,
	schema,
	defaultValues,
	COLUMNS,
	tabledata = [],
	dataCount,
	loading,
	onSubmit,
	opened,
	setOpened,
	permission,
	createLoading,
	Pagetitle = "Sales Order",
	hideColumCLick = true,
	textAlign = "left",
	rowClick = false,
}) => {
	const [openedSale, setOpenedSale] = useState({ opened: false, data: {} });
	const [searchParams, setSearchParams] = useSearchParams();
	const [selected, setSelected] = useState([]);
	const [modal, setModal] = useState(false);
	const [closeError, setCloseError] = useState(false);
	// const [tableDataAllRow, settableDataAllRow] = useState([]);

	useEffect(() => {
		store.dispatch({
			type: "removeAll",
		});
		store.dispatch({
			type: "DRAWER_STATUS",
			payload: openedSale,
		});
	}, [openedSale]);

	const selectedData = useSelector(state => state.Items);

	// useEffect(() => {
	// 	settableDataAllRow(tabledata);
	// }, [tabledata]);

	useEffect(() => {
		if (
			["PACKINGOP", "DISPATCHOP"].includes(localStorage.getItem("active_role"))
		)
			getUsers("string");
	}, []);

	useEffect(() => {
		if (openedSale.opened) {
			store.dispatch({
				type: "DRAWER_OPENED",
			});
		} else {
			store.dispatch({
				type: "DRAWER_CLOSED",
			});
		}
	}, [openedSale.opened]);

	const setPagnation = useCallback(async ({ pageNumber, pageSize }) => {
		const limit = searchParams.get("limit")
			? parseInt(searchParams.get("limit"))
			: 50;
		let gen = generateQuery([
			{ limit: parseInt(pageSize), offset: parseInt(limit * (pageNumber - 1)) },
		]);
		setSearchParams(gen);
	});

	const buttonCofig = useMemo(() => {
		return permission?.topButtons;
	}, [permission?.topButtons]);

	const showbutton = btn => {
		const obj = buttonCofig?.find(item => item.value === btn);
		return obj ? obj.enable : false;
	};

	const [DataPickerPopover, setDataPickerPopover] = useState([
		false,
		false,
		false,
	]);

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
				payload: tabledata,
			});
		} else {
			store.dispatch({
				type: "removeAll",
			});
		}
	};

	const handleClick = () => {
		store.dispatch({
			type: "INDIVIDUAL_ITEM",
			payload: false,
		});
		let closedOrders = [];
		selectedData?.forEach((element, index) => {
			if (element.orderStatus == "DISPATCHED") closedOrders.push(index);
		});
		if (closedOrders?.length != selectedData?.length)
			return setCloseError(true);
		setModal(true);
	};

	return (
		<div
			onClick={() => {
				if (
					DataPickerPopover[0] ||
					DataPickerPopover[1] ||
					DataPickerPopover[2]
				)
					setDataPickerPopover([false, false, false]);
			}}>
			<Container fluid>
				<Drawer
					opened={opened}
					onClose={() => {
						store.dispatch({
							type: "removeAll",
						});
						setOpened(false);
						// getCount();

						// if (localStorage.getItem("active_role") === "PRODUCTIONPL") {
						// 	getAllSalesOrdersForProduction( );
						// } else {

						// }
					}}
					title={"Order Details"}
					styles={{
						drawer: { background: "rgb(248, 249, 250)" },
						closeButton: {
							color: "#ffff",
							"&:hover": {
								color: "red",
							},
						},
						title: {
							color: "#ffff",
							fontWeight: "600",
							width: "100%",
							textAlign,
						},
						header: {
							padding: "10px",
							backgroundColor: "#228BE6",
							marginRight: "0px",
							zIndex: "1000 !important",
						},
					}}
					size="full">
					<ScrollArea style={{ height: "82vh" }}>
						<CustomerOrderDetailForm
							onSubmit={onSubmit}
							schema={schema}
							defaultValues={defaultValues}
							leaded={leaded}
							setLeadedFn={setLeadedFn}
							setCoreSizeFn={setCoreSizeFn}
							contextData={contextData}
							createLoading={createLoading}
							DataPickerPopover={DataPickerPopover}
							setDataPickerPopover={setDataPickerPopover}
						/>
					</ScrollArea>
				</Drawer>
				<Group position="apart" spacing={4}>
					<Text> {Pagetitle} </Text>
					<Group>
						{showbutton("addButton") && (
							<Button onClick={() => setOpened(true)}>
								+ Create New Order
							</Button>
						)}
						{showbutton("close") && (
							<Button
								disabled={selectedData.length > 0 ? false : true}
								onClick={handleClick}>
								Close
							</Button>
						)}
					</Group>
				</Group>
				<>
					{modal && <CloseTheOrder modalOpen={modal} setModalOpen={setModal} />}
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
						opened={closeError}>
						{selectedData
							?.filter(obj => obj.orderStatus != "DISPATCHED")
							.map(obj => {
								return (
									<Group position="left" direction="column">
										<Text fz="sm">
											Order no: <strong>{obj.orderno}</strong> can not be CLOSED
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
							<Button color={"red"} onClick={() => setCloseError(false)}>
								Close
							</Button>
						</div>
					</Modal>
				</>
				<TableComponent
					Data={tabledata || []}
					Columns={COLUMNS}
					sort={true}
					globleSearch={true}
					setSelected={() => {}}
					handleSelectRow={handleSelectRow}
					selectAllRows={selectAllRows}
					loading={loading}
					showFilter={true}
					setOpenedDrawer={setOpenedSale}
					opened={openedSale.opened}
					rowClick={true}
					setPagnation={setPagnation}
					dataCount={dataCount}
					hideColumCLick={true}
				/>
				<SalesOrderItem
					drawer={true}
					data={openedSale.data}
					opened={openedSale.opened}
					setOpened={setOpenedSale}
				/>
			</Container>
		</div>
	);
};

export default SalesOrderContainer;
