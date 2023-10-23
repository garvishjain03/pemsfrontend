import { Button, Container, Group, ScrollArea, Text } from "@mantine/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PlanningChartDrawer from "../../component/PlanningChartDrawer";
import TableComponent from "../../component/table/table";
import TcPrint from "../../component/TcPrint";
import { genrateColumnConfig } from "../../helpers/columns";
import { generateQuery } from "../../services/generateQuery";
import { getCuttingTc } from "../../services/issuedTc";

const PlanningChart = () => {
	const [selected, setSelected] = useState([]);
	const [showFilter, setShowFilter] = useState(true);
	const [opened, setOpened] = useState(false);
	const [drawerData, setDrawerData] = useState({});
	const [searchParams, setSearchParams] = useSearchParams();

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
		loadingPermission = true,
		permissionData = {},
		issuedTcData = [],
		issuedTCLoading = false,
		issuedTcCount,
	} = useSelector(state => ({
		loadingPermission: state.permission?.loading,
		permissionData: state.permission?.permissions,
		issuedTCLoading: state.IssuedTc?.issuedTCloading,
		issuedTcData:
			localStorage.getItem("active_role") === "CHECKINGOP"
				? state.IssuedTc?.issuedTC?.body
				: state.IssuedTc?.issuedTC?.rows,
		issuedTcCount: state.IssuedTc?.issuedTC?.count,
	}));

	useEffect(() => {
		getCuttingTc();
	}, [searchParams.toString(), localStorage.getItem("active_role")]);

	const COLUMNS = useMemo(() => {
		if (loadingPermission) return [];
		return genrateColumnConfig(permissionData?.planningChartPage?.Table1 || []);
	}, [loadingPermission, permissionData?.planningChartPage?.Table1]);

	const tableData = useMemo(() => issuedTcData, [issuedTcData]);

	//form default values

	const buttonCofig = useMemo(() => {
		return permissionData?.planningChartPage?.topButtons;
	}, [permissionData?.planningChartPage?.topButtons]);

	const showbutton = btn => {
		const obj = buttonCofig?.find(item => item.value === btn);
		return obj ? obj.enable : false;
	};

	return (
		<Container fluid>
			<Group position="apart">
				<Text>Planning Chart</Text>

				<Group position="right" spacing={4}>
					{showbutton("hidePrintTc") && (
						<TcPrint data={selected} isTop={true} />
					)}
					{showbutton("sendbulktc") && <Button>Send Bulk Tc</Button>}
					{showbutton("hideFiltersButton") && (
						<Button
							onClick={() => {
								setShowFilter(!showFilter);
							}}>
							{showFilter ? "Hide Filters" : "Show Filters"}
						</Button>
					)}
				</Group>
			</Group>
			<ScrollArea style={{ height: "80vh" }}>
				<TableComponent
					Data={tableData}
					Columns={COLUMNS}
					sort={true}
					globleSearch={true}
					setSelected={() => {}}
					rowClick={true}
					planningChartClick={true}
					loading={issuedTCLoading}
					showFilter={showFilter}
					setPagnation={setPagnation}
					setOpened={setOpened}
					setDrawerData={setDrawerData}
					dataCount={issuedTcCount}
				/>
			</ScrollArea>
			<PlanningChartDrawer
				opened={opened}
				setOpened={setOpened}
				data={drawerData}
			/>
		</Container>
	);
};
export default PlanningChart;
