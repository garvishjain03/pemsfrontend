import {
	Button,
	Container,
	Group,
	Modal,
	Radio,
	RadioGroup,
	ScrollArea,
	Text,
} from "@mantine/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getCoatingProduction } from "../../services/coatingProductionChart";
////component
import TableComponent from "../../component/table/table";
import {
	generateQuery,
	generateSalesQuery,
} from "../../services/generateQuery";
import { genrateColumnConfig } from "../../helpers/columns";
import { element } from "prop-types";
import { DatePicker, DateRangePicker } from "@mantine/dates";
import { setDrawerSalesQuery } from "../../redux/order/actions";
import PlanningChartDrawer from "../../component/PlanningChartDrawer";
import dayjs from "dayjs";
import ExportToExcel from "../../utils/exportToExcel";
import { store } from "../../store";
import ExportAllToExcel from "../../utils/exportAllToExcel";
import { todayDateStyle } from "../../utils/todayDateBg";
import { getDateWithoutTime } from "../../utils/getDateWithoutTime";

const CoatingProductionChart = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [allTcId, setAllTcId] = useState([]);
	const [opened, setOpened] = useState(false);
	const [drawerData, setDrawerData] = useState({});
	const [data, setData] = useState([]);
	const [radioValue, setRadioValue] = useState("coatingDate");
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
		tableData: state.coatingProduction.coatingproduction,
		dataCount: state.coatingProduction.count,
		loading: state.coatingproductionloading,
		loadingPermission: state.permission?.loading,
		permissionData: state.permission?.permissions,
		drawerSalesQuery: state?.orders?.drawersalesquery,
		selectedData: state.Items,
	}));

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
	const COLUMNS = useMemo(() => {
		return genrateColumnConfig(
			permissionData?.coatingProductionPage?.Table1 || []
		);
	}, [loadingPermission]);

	const handleSelectRow = row => {
		store.dispatch({
			type: "new",
			payload: {
				id: row.id,
				row,
			},
		});
	};

	//
	//

	// const getAllTcIds = () => {
	// 	const allTcIds = [];
	// 	tableData?.forEach(element => {
	// 		if (!allTcIds.includes(element.tcid)) {
	// 			allTcIds.push(element.tcid);
	// 		}
	// 	});
	// 	setAllTcId(allTcIds);
	// };
	// const getFormattedData = () => {
	// 	const formattedData = [];
	// 	allTcId.forEach(element => {
	// 		let obj = {};
	// 		tableData?.forEach(ele => {
	// 			if (element == ele.tcid) {
	// 				obj = { ...obj, [ele?.shift_status]: ele };
	// 			}
	// 		});
	// 		formattedData.push(obj);
	// 	});
	// 	setData(formattedData);
	// };

	const formatData = allData => {
		let dataArray = [];
		let mappableData = allData?.length > 0 ? allData : tableData;
		mappableData?.forEach(element => {
			const tcshift_detail =
				element?.tcshift_detail?.tcMapper?.[0]?.tcMapper?.tcshift_detail;
			let obj = {};
			tcshift_detail?.forEach(ele => {
				if (obj?.[ele?.shift_status]) {
					obj = {
						...obj,
						[ele?.shift_status]: {
							...obj?.[ele?.shift_status],
							shift_quantity:
								ele?.shift_quantity + obj?.[ele?.shift_status]?.shift_quantity,
							total_shift_qua:
								ele?.total_shift_qua +
								obj?.[ele?.shift_status]?.total_shift_qua,
						},
					};
				} else {
					obj = { ...obj, [ele?.shift_status]: ele };
				}
			});
			dataArray.push({ ...element, ...obj });
		});
		if (allData?.length > 0) return dataArray;
		setData(dataArray);
	};

	useEffect(() => {
		if (searchParams.toString()) {
			getCoatingProduction(drawerSalesQuery);
		}
	}, [searchParams.toString(), drawerSalesQuery, radioValue]);

	useEffect(() => {
		store.dispatch({
			type: "removeAll",
		});
		setSearchParams("");
		let gen = generateQuery([
			{
				[radioValue]: `${getDateWithoutTime(
					new Date(new Date().valueOf() - 1000 * 60 * 60 * 24)
				).toISOString()},${getDateWithoutTime(new Date()).toISOString()}`,
				limit: 100,
			},
		]);
		setSearchParams(gen);
	}, []);

	useEffect(() => {
		if (tableData.length > 0) {
			formatData();
		} else {
			setData([]);
		}
	}, [tableData]);

	const excelData = allData => {
		let mappableData = selectedData?.length > 0 ? selectedData : data;
		// mappableData = data ? data : mappableData;
		if (allData?.length > 0) {
			mappableData = allData;
		}
		const array = mappableData?.map(row => {
			const shift = row?.shift_type?.split("T");
			const coatingRejectionCalculation =
				(row?.CUTTING?.shift_quantity ?? row?.WINDING?.total_shift_qua) -
				row?.COATING?.shift_quantity;
			const totalRejectionPercentageCoatingCalculation =
				(((row?.CUTTING?.shift_quantity ?? row?.WINDING?.total_shift_qua) -
					row?.COATING?.shift_quantity) *
					100) /
				(row?.CUTTING?.shift_quantity ?? row?.WINDING?.total_shift_qua);
			const weldingRejectionCoatingCalculation =
				(row?.CUTTING?.shift_quantity ?? row?.WINDING?.total_shift_qua) -
				row?.WELDING?.shift_quantity;
			const finalRejectionPercentageCoatingCalculation =
				(((row?.CUTTING?.shift_quantity ?? row?.WINDING?.total_shift_qua) -
					row?.QUALITY?.shift_quantity) *
					100) /
				(row?.CUTTING?.shift_quantity ?? row?.WINDING?.total_shift_qua);
			return {
				"TC no": row?.tcshift_detail?.tcno ?? "NA",
				"Part Number":
					row?.tcshift_detail?.tcMapper?.[0]?.issueTcItem?.mpn ?? "NA",
				"Coating Date": dayjs(row?.shift_date).format("DD-MM-YYYY") ?? "NA",
				"TC Completion Date": row?.qc_pass
					? dayjs(row?.QUALITY?.createdAt).format("DD-MM-YYYY") ?? "NA"
					: "NA",
				"Winding Total":
					row?.submitCount === 1 ? row?.WINDING?.total_shift_qua ?? "NA" : "NA",
				"Cutting Total":
					row?.submitCount === 1 ? row?.CUTTING?.shift_quantity ?? "NA" : "NA",
				"Laser Cut": row?.tcshift_detail?.isLaserCut ?? "NA",
				"Welding Total":
					row?.submitCount === 1 ? row?.WELDING?.shift_quantity ?? "NA" : "NA",
				"Coating Total": row?.shift_quantity ?? "NA",
				Shift: shift?.[shift.length - 1] ?? "NA",
				"Coating Machine": row?.machine_details?.name ?? "NA",
				"Total Rejection Coating":
					row?.tc_action === "MARKCLOSE" ? coatingRejectionCalculation : "NA",
				"Total Rejection Coating%":
					row?.tc_action === "MARKCLOSE"
						? totalRejectionPercentageCoatingCalculation.toFixed(2)
						: "NA",
				"Welding Rejection":
					row?.submitCount === 1 && row?.WELDING?.shift_quantity
						? weldingRejectionCoatingCalculation
						: "NA",
				"Checking Total": row?.qc_pass
					? row?.QUALITY?.shift_quantity ?? "NA"
					: "NA",
				"Final Rejection %": row?.qc_pass
					? finalRejectionPercentageCoatingCalculation.toFixed(2)
					: "NA",
			};
		});
		return array;
	};

	const handleClick = async () => {
		const data = await getCoatingProduction(drawerSalesQuery, "ALL");
		const formattedData = formatData(data);
		return excelData(formattedData);
		// return excelData();
	};

	// useEffect(() => {
	// 	if (tableData) {
	// 		getAllTcIds();
	// 	}
	// }, [tableData]);

	// useEffect(() => {
	// 	if (allTcId.length > 0) {
	// 		getFormattedData();
	// 	}
	// }, [allTcId]);

	// const filteredData=tableData.map((item)=>{
	// TCno
	// part number
	// Coating Date
	// Tc completion date
	// Winding Total
	// Cutting Total
	// Laser Cut
	// Welding Total
	// Coating Total
	// Coating Machine
	// Total Rejection Coating
	// Total Coating Rejection %
	// Total Rejection Welding
	// Total Checking
	// Final Rejection %
	// Remark
	// shift
	//   return({
	//     "TC no":"",
	//     "part number"
	//     "Coating Date"
	//     "Tc completion date"
	//     "Winding Total"
	//     "Cutting Total"
	//     "Laser Cut"
	//     "Welding Total"
	//     "Coating Total"
	//     "shift"
	//     "Coating Machine"
	//     "Total Rejection Coating"
	//     "Total Coating Rejection %"
	//     "Total Rejection Welding"
	//     "Total Checking"
	//     "Final Rejection %"
	//     "Remark"

	//   })
	// })

	return (
		<Container fluid>
			<Group position="apart">
				<RadioGroup
					value={radioValue}
					label="Select Date Type"
					onChange={e => {
						setRadioValue(e);
						let date = searchParams.get(
							e === "coatingDate" ? "tcCompletionDate" : "coatingDate"
						);
						searchParams.delete(
							e === "coatingDate" ? "tcCompletionDate" : "coatingDate"
						);
						searchParams.set(e, date);
						setSearchParams(searchParams.toString());
					}}>
					<Radio value="coatingDate" label="Coating Date" />
					<Radio value="tcCompletionDate" label="TC Completion Date" />
				</RadioGroup>
				<Group position="left">
					<Text>Date : </Text>
					<DatePicker
						dayStyle={date => todayDateStyle(date)}
						// value={date}
						defaultValue={new Date(new Date().valueOf() - 1000 * 60 * 60 * 24)}
						inputFormat="DD/MM/YYYY"
						placeholder="Pick date"
						size="md"
						style={{ maxWidth: "10rem" }}
						onChange={value => {
							if (value) {
								let obj = {};
								obj[radioValue] = `${value.toISOString()}`;
								let gen = generateQuery([obj]);
								setSearchParams(gen);
							} else {
								let obj = {};
								obj[radioValue] = `${new Date(
									new Date().valueOf() - 1000 * 60 * 60 * 24
								).toISOString()}`;
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

			<ScrollArea
				style={{ height: "79vh", marginTop: "1rem", paddingBottom: "1rem" }}>
				<TableComponent
					Data={data || []}
					Columns={COLUMNS}
					sort={true}
					globleSearch={true}
					rowClick={true}
					planningChartClick={true}
					// hideColumCLick={true}
					setSelected={setSelected}
					setOpened={setOpened}
					loading={false}
					showFilter={true}
					setPagnation={setPagnation}
					dataCount={dataCount}
					pagesize={100}
					setDrawerData={setDrawerData}
					handleSelectRow={handleSelectRow}
				/>
				<PlanningChartDrawer
					opened={opened}
					setOpened={setOpened}
					data={drawerData}
					workorderView={true}
				/>
			</ScrollArea>
		</Container>
	);
};
export default CoatingProductionChart;
