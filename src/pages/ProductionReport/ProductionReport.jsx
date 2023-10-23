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
import { getProductionReport } from "../../services/productionReport";
import { getMachine } from "../../services/contextGetCalls";
import { DateRangePicker } from "@mantine/dates";
import dayjs from "dayjs";
import { store } from "../../store";
import ExportAllToExcel from "../../utils/exportAllToExcel";
import { todayDateStyle } from "../../utils/todayDateBg";
import { getDateWithoutTime } from "../../utils/getDateWithoutTime";

const ProductionReport = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [data, setData] = useState([]);
	const [flag, setFlag] = useState(false);
	const [columnName, setcolumnName] = useState({});
	const setSelected = () => {};

	useEffect(() => {
		if (searchParams.toString()) {
			getProductionReport();
		}
		getMachine("all");
	}, [searchParams.toString()]);

	useEffect(() => {
		store.dispatch({
			type: "removeAll",
		});
		setSearchParams("");
		let gen = generateQuery([
			{
				shiftDate: `${getDateWithoutTime(
					new Date(new Date().valueOf() - 1000 * 60 * 60 * 24)
				).toISOString()},${getDateWithoutTime(new Date()).toISOString()}`,
				limit: 100,
			},
		]);
		setSearchParams(gen);
	}, []);

	const {
		tableData = [],
		dataCount = 0,
		loading,
		loadingPermission = true,
		permissionData = {},
		selectedData,
	} = useSelector(state => ({
		tableData: state.productionReport?.productionReportData?.rows,
		dataCount: state.productionReport?.count,
		loading: state.productionReportLoading,
		loadingPermission: state.permission?.loading,
		permissionData: state.permission?.permissions,
		selectedData: state.Items,
	}));
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
		let permissiontable = permissionData?.productionReport?.Table1;
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

	const excelData = data => {
		let mappableData = selectedData?.length > 0 ? selectedData : tableData;
		if (data?.length > 0) mappableData = data;
		const array = mappableData?.map(row => {
			return {
				"TC no": row?.tc_details?.tcno ?? "NA",
				Date: dayjs(row?.shift_date).format("DD/MM/YYYY") || "NA",
				Section: row?.shift_status || "NA",
				Category: row?.machine_details?.WindingProcess ?? "NA",
				"Sub-Category": "NA",
				Shift: row?.shift_type || "NA",
				Machine: row?.machine_details?.name || "NA",
				"Core Size":
					row?.tc_details?.tcMapper?.[0]?.issueTcItem?.coresizeItem?.label ||
					"NA",
				Ohms:
					row?.tc_details?.tcMapper?.[0]?.issueTcItem?.ohms +
						" " +
						row?.tc_details?.tcMapper?.[0]?.issueTcItem?.unit || "NA",
				Quantity: row?.total_shift_quantity?.toLocaleString("en-IN") || "NA",
				Operator: row?.user_details?.username || "NA",
			};
		});
		return array;
	};

	const handleClick = async () => {
		const data = await getProductionReport("ALL");
		return excelData(data);
		// return excelData();
	};

	return (
		<Container fluid>
			<Group position="apart">
				<Group position="left">
					<Text>Date : </Text>
					<DateRangePicker
						dayStyle={date => todayDateStyle(date)}
						// value={date}
						defaultValue={[
							new Date(new Date().valueOf() - 1000 * 60 * 60 * 24),
							new Date(),
						]}
						inputFormat="DD/MM/YYYY"
						placeholder="Pick date"
						size="lg"
						allowSingleDateInRange
						style={{ minWidth: "10rem" }}
						onChange={value => {
							if (value[0] && value[1]) {
								let obj = {};
								obj[
									"shiftDate"
								] = `${value[0].toISOString()},${value[1].toISOString()}`;
								let gen = generateQuery([obj]);
								setSearchParams(gen);
							} else {
								let obj = {};
								obj["shiftDate"] = `${new Date(
									new Date().valueOf() - 1000 * 60 * 60 * 24
								).toISOString()},${new Date().toISOString()}`;
								let gen = generateQuery([obj]);
								setSearchParams(gen);
							}
						}}
					/>
				</Group>
				<Group position="right">
					<ExportToExcel data={excelData()} />
				</Group>
			</Group>
			<ScrollArea style={{ height: "79vh", paddingBottom: "1rem" }}>
				<TableComponent
					Data={tableData || []}
					Columns={COLUMNS}
					sort={true}
					globleSearch={true}
					rowClick={false}
					setSelected={setSelected}
					loading={false}
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
export default ProductionReport;
