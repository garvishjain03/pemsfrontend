import {
	Button,
	Container,
	Group,
	Modal,
	ScrollArea,
	Text,
} from "@mantine/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getorderMonitor } from "../../services/ordermonitor";
////component
import TableComponent from "../../component/table/table";
import { generateQuery } from "../../services/generateQuery";
import { genrateColumnConfig } from "../../helpers/columns";
import ExportToExcel from "../../component/excelDownload";
import { setDrawerSalesQuery } from "../../redux/order/actions";
import dayjs from "dayjs";
import { store } from "../../store";
import ExportAllToExcel from "../../utils/exportAllToExcel";
import { getPermissions } from "../../services/permission";

const OrderMonitor = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [data, setData] = useState([]);
	const [flag, setFlag] = useState(false);
	const [columnName, setcolumnName] = useState({});
	const setSelected = () => {};

	const {
		tableData = [],
		dataCount = 0,
		loading,
		loadingPermission = true,
		permissionData = {},
		drawerSalesQuery,
		selectedData,
	} = useSelector(state => ({
		tableData: state.OrderMonitor.ordermonitor,
		dataCount: state.OrderMonitor.count,
		loading: state.OrderMonitor.ordermonitorloading,
		loadingPermission: state.permission?.loading,
		permissionData: state.permission?.permissions,
		drawerSalesQuery: state?.orders?.drawersalesquery,
		selectedData: state.Items,
	}));

	let limit = searchParams.get("limit");
	let offset = searchParams.get("offset");

	useEffect(() => {
		if (searchParams.toString()) {
			getorderMonitor(drawerSalesQuery, "", limit, offset);
		}
	}, [searchParams.toString(), drawerSalesQuery]);

	useEffect(() => {
		store.dispatch({
			type: "removeAll",
		});
		setSearchParams("");
		setSearchParams({ limit: 100 });
		setDrawerSalesQuery("");
	}, []);

	const setPagnation = useCallback(async ({ pageNumber, pageSize }) => {
		const limit = searchParams.get("limit")
			? parseInt(searchParams.get("limit"))
			: 100;
		let gen = generateQuery([
			{ limit: parseInt(pageSize), offset: parseInt(limit * (pageNumber - 1)) },
		]);
		setSearchParams(gen);
	});
	const COLUMNS = useMemo(() => {
		let permissiontable = permissionData?.orderMonitorPage?.Table1;

		permissiontable?.forEach(element => {
			data.forEach(item => {
				if (element?.id === item) {
					element.display = flag ? true : false;
				}
			});
		});

		return genrateColumnConfig(permissiontable || []);
	}, [loadingPermission, data, flag]);

	const handleSelectRow = row => {
		store.dispatch({
			type: "new",
			payload: {
				id: row.id,
				row,
			},
		});
	};

	const excelData = allData => {
		let mappableData = selectedData?.length > 0 ? selectedData : tableData;
		mappableData = allData?.length > 0 ? allData : mappableData;
		const array = mappableData?.map(ele => {
			return {
				Customer: ele?.customerName,
				"Customer Order No.": ele?.customerOrderNumber,
				"Order Date":
					ele?.orderDate !== "NA" && ele?.orderDate
						? dayjs(ele?.orderDate).format("DD/MM/YYYY")
						: "NA",
				"Scheduled Delivery Date":
					ele?.scheduleDate !== "NA" && ele?.scheduleDate
						? dayjs(ele?.scheduleDate).format("DD/MM/YYYY")
						: "NA",
				"OA Number": ele?.OANumber,
				"Item Number": ele?.itemCode,
				"OA Date":
					ele?.OADate !== "NA" && ele?.OADate
						? dayjs(ele?.OADate).format("DD/MM/YYYY")
						: "NA",
				"Committed Delivery Date":
					ele?.commitedDate !== "NA" && ele?.commitedDate
						? dayjs(ele?.commitedDate).format("DD/MM/YYYY")
						: "NA",
				"Reviewed By": ele?.reviewedBy,
				"Reviewed On":
					ele?.reviewedOn !== "NA" && ele?.reviewedOn
						? dayjs(ele?.reviewedOn).format("DD/MM/YYYY")
						: "NA",
				"Customer Part Number": ele?.customerPartNo,
				"Part Number": ele?.mpn,
				"Order Quantity": ele?.orderquantity,
				"Price/100pcs": ele?.price,
				Warehouse: ele?.warehouse,
				"Item Status": ele?.orderStatus,
				"Packed Quantity": ele?.packedquantity,
				"Date of Packing":
					ele?.packedDate !== "NA" && ele?.packedDate
						? dayjs(ele?.packedDate).format("DD/MM/YYYY")
						: "NA",
				"Invoice No.": ele?.invoiceNumber,
				"Invoice Date":
					ele?.invoiceDate !== "NA" && ele?.invoiceDate
						? dayjs(ele?.invoiceDate).format("DD/MM/YYYY")
						: "NA",
				"Dispatched Quantity": ele?.dispatchedQuantity,
				"Balance Quantity": ele?.Balanceqty,
				"Date of Dispatch":
					ele?.dataofDispatched !== "NA" && ele?.dataofDispatched
						? dayjs(ele?.dataofDispatched).format("DD/MM/YYYY")
						: "NA",
				"Delay Reasons Catagory": ele?.delayreasoncatagory,
				Delay: ele?.delay,
			};
		});
		return array;
	};

	const handleClick = async () => {
		const data = await getorderMonitor(drawerSalesQuery, "ALL");
		return excelData(data?.length > 400 ? data.slice(0, 400) : data);
		// return excelData();
	};

	useEffect(() => {
		return () => {
			getPermissions(localStorage.getItem("active_roleid"));
		};
	}, []);

	return (
		<Container fluid>
			<Group position="right">
				<ExportToExcel data={excelData() || []} />
			</Group>
			<ScrollArea style={{ height: "79vh", paddingBottom: "1rem" }}>
				<TableComponent
					Data={
						// paginatedTableData.length === 0
						// 	? tableData
						// 	:
						tableData || []
					}
					Columns={COLUMNS}
					sort={true}
					globleSearch={true}
					rowClick={true}
					setSelected={setSelected}
					loading={loading}
					showFilter={true}
					setPagnation={setPagnation}
					dataCount={dataCount}
					setData={setData}
					setFlag={setFlag}
					flag={flag}
					setcolumnName={setcolumnName}
					columnName={columnName}
					pagesize={100}
					handleSelectRow={handleSelectRow}
				/>
			</ScrollArea>
		</Container>
	);
};
export default OrderMonitor;
