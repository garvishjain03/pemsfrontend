import { Group, ScrollArea, Text } from "@mantine/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CombineTCForm from "../../component/CombineTcIssue";
import TableComponent from "../../component/table/table";
import { genrateColumnConfig } from "../../helpers/columns";
import { generateQuery } from "../../services/generateQuery";
import { getWorkOrders } from "../../services/salesOrder";

const WorkOrderPage = () => {
	const [selected, setSelected] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	const { loading, permissionData, workorders, datacount, loadingPermission } =
		useSelector(state => ({
			loading: state.orders.workorderLoading,
			datacount: state.orders?.workorder?.count,
			workorders: state.orders?.workorder?.rows,
			permissionData: state.permission?.permissions,
			loadingPermission: state.permission?.loading,
		}));

	///tabel Column

	const COLUMNS = useMemo(() => {
		return genrateColumnConfig(permissionData?.workOrdersPage?.Table1 || []);
	}, [loadingPermission]);

	const tabledata = useMemo(() => workorders, [workorders]);
	const setPagnation = useCallback(async ({ pageNumber, pageSize }) => {
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
	});

	useEffect(() => {
		getWorkOrders();
	}, [searchParams.toString()]);

	const buttonCofig = useMemo(() => {
		return permissionData?.workOrdersPage?.topButtons;
	}, [permissionData?.workOrdersPage?.topButtons]);

	const showbutton = btn => {
		const obj = buttonCofig?.find(item => item.value === btn);
		return obj ? obj.enable : false;
	};

	return (
		<>
			<Group position="apart" spacing={4}>
				<Text>Work Orders</Text>
				<Group>
					{showbutton("combineTcIssue") && <CombineTCForm data={selected} />}
				</Group>
			</Group>
			<ScrollArea style={{ height: "80vh" }}>
				<TableComponent
					Data={tabledata || []}
					Columns={COLUMNS}
					sort={true}
					globleSearch={true}
					setSelected={setSelected}
					loading={loading}
					showFilter={true}
					rowClick={true}
					setPagnation={setPagnation}
					dataCount={datacount}
					hideColumCLick={true}
					itemClick={true}
					pagesize={100}
				/>
			</ScrollArea>
		</>
		// <SalesOrderContainer
		// 	textAlign="center"
		// 	Pagetitle="work Order "
		// 	leaded={leaded}
		// 	setLeadedFn={setLeadedFn}
		// 	setCoreSizeFn={setCoreSizeFn}
		// 	contextData={{
		// 		typesDropDown,
		// 		characteristicsDropDown,
		// 		toleranceDropDown,
		// 		tcrDropDown,
		// 		shapeDropDown,
		// 		warehouseDropDown,
		// 		customerDropDown,
		// 		wattagesDropDown,
		// 		coresizeDropDown,
		// 		leaddiaDropDown,
		// 		leadlengthDropDown,
		// 		formtypeDropDown,
		// 	}}
		// 	hideColumCLick={false}
		// 	tabledata={orders}
		// 	COLUMNS={COLUMNS}
		// 	defaultValues={defaultValues}
		// 	schema={schema}
		// 	onSubmit={onSubmit}
		// 	opened={opened}
		// 	setOpened={setOpened}
		// 	dataCount={orderCount}
		// 	loading={loadingOrders}
		// 	createLoading={createLoading}
		// 	rowClick={false}
		// 	permission={permissionData?.workOrdersPage}
		// />
	);
};

export default WorkOrderPage;
