import {
	Button,
	Container,
	Group,
	Modal,
	ScrollArea,
	Text,
} from "@mantine/core";
import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ReturnHistory from "../../component/ReturnHistory";
import StockHistory from "../../component/StockHistory";
import StockPackedQty from "../../component/StockPackedQty";
// import StockHistory from "../../component/StockHistory";
import TableComponent from "../../component/table/table";
import AddItemsForm from "../../containers/salesOrder/Forms/AddItemsForm";
import {
	ModelSize,
	ModelStyleObj,
} from "../../containers/salesOrder/SalesOrderItem";
import { genrateColumnConfig } from "../../helpers/columns";
import { setDrawerSalesQuery } from "../../redux/order/actions";
import { generateQuery } from "../../services/generateQuery";
import {
	getAllMpn,
	getAllSalesOrders,
	getAllStock,
} from "../../services/stock";
import { store } from "../../store";
import ExportAllToExcel from "../../utils/exportAllToExcel";
import ExportToExcel from "../../utils/exportToExcel";

const StockHome = () => {
	const [showFilter, setShowFilter] = useState(true);
	const [selected, setSelected] = useState([]);

	const [searchParams, setSearchParams] = useSearchParams();

	const [addNewItemsModal, setAddNewItemsModal] = useState(false);

	const setPagnation = useCallback(
		async ({ pageNumber, pageSize }) => {
			const limit = searchParams.get("limit")
				? parseInt(searchParams.get("limit"))
				: 100;

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
		totalStockClick,
		totalReturnsClick,
		totalPackedStockClick,
		selectedData,
	} = useSelector(state => ({
		items: state.stock?.stockHomeItems?.rows,
		itemCount: state.stock?.stockHomeItems?.count,
		loading: state.stock?.stockHomeLoading,
		loadingPermission: state.permission?.loading,
		permissionData: state.permission?.permissions,
		drawerSalesQuery: state?.orders?.drawersalesquery,
		selectedData: state.Items,
		totalStockClick: state.stock?.totalStockClick,
		totalReturnsClick: state.stock?.totalReturnsClick,
		totalPackedStockClick: state.stock?.totalPackedStockClick,
	}));

	useEffect(() => {
		if (!totalStockClick && !totalReturnsClick && !totalPackedStockClick) {
			getAllStock();
		}
	}, [searchParams.toString()]);

	useEffect(() => {
		store.dispatch({
			type: "removeAll",
		});
		setDrawerSalesQuery("");
	}, []);

	const COLUMNS = useMemo(() => {
		if (loadingPermission) return [];
		return genrateColumnConfig(permissionData?.stockHome?.Table1 || []);
	}, [loadingPermission, permissionData?.stockHome?.Table1]);

	const tableData = useMemo(() => items, [items]);
	const showbutton = btn => {
		const obj = buttonCofig?.find(item => item.value === btn);
		return obj ? obj.enable : false;
	};

	const buttonCofig = useMemo(() => {
		return permissionData?.stockHome?.topButtons;
	}, [permissionData?.stockHome?.topButtons]);

	const handleSelectRow = row => {
		store.dispatch({
			type: "new",
			payload: {
				id: row.id,
				row,
			},
		});
	};

	const excelData = data => {
		let mappableData = selectedData?.length > 0 ? selectedData : tableData;
		if (data?.length > 0) {
			mappableData = data;
		}
		const array = mappableData?.map(obj => {
			return {
				Item: obj?.mpn,
				"Total Stock Quantity": obj?.total_stock_quantity,
				"Total Packed Quantity": obj?.packed_quantity,
				"Total Returns": obj?.return_quantity,
				"Total Quantity": obj?.total_quantity ?? 0,
			};
		});
		return array;
	};

	const handleClick = async () => {
		const data = await getAllStock("ALL");
		return excelData(data);
		// return excelData();
	};

	return (
		<Container fluid>
			<Group position="apart">
				<Text>Stock Home</Text>
				<Group position="right" spacing={4}>
					{showbutton("addNewItems") && (
						<Button
							// disabled={selectedItem.length > 0 ? false : true}
							onClick={() => {
								setAddNewItemsModal(true);
							}}>
							Add New Items
						</Button>
					)}
					<Group spacing={4}>
						<ExportAllToExcel handleClick={handleClick} />
					</Group>
					{showbutton("exportToExcel") && (
						// <Button
						// 	// disabled={selectedItem.length > 0 ? false : true}
						// 	style={{ backgroundColor: "lime", color: "black" }}>
						// 	{" "}
						// 	Export To Excel{" "}
						// </Button>
						<ExportToExcel data={excelData()} />
					)}
				</Group>
			</Group>
			<Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				size="auto"
				opened={addNewItemsModal}
				onClose={() => {
					setAddNewItemsModal(false);
				}}
				title="ADD NEW ITEMS">
				<div>
					<AddItemsForm
						data={items}
						setAddNewItemsModal={setAddNewItemsModal}
					/>
				</div>
			</Modal>
			{/* <ScrollArea style={{ height: "80vh" }}> */}
			<TableComponent
				Data={tableData || []}
				Columns={COLUMNS}
				salesOrderItemsPageOpen={true}
				// rowClick={true}
				// itemClick={true}
				hideColumCLick={true}
				handleSelectRow={handleSelectRow}
				sort={true}
				globleSearch={true}
				setSelected={() => {}}
				loading={loading}
				showFilter={showFilter}
				setPagnation={setPagnation}
				dataCount={itemCount}
				pagesize={100}
				from="stockhome"
			/>
			<StockHistory data={items} />
			<ReturnHistory data={items} />
			<StockPackedQty data={items} />
			{/* </ScrollArea> */}
		</Container>
	);
};

export default StockHome;
