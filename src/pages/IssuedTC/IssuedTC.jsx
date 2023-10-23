import { Button, Container, Group, ScrollArea, Text } from "@mantine/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PlanningChartDrawer from "../../component/PlanningChartDrawer";
import TableComponent from "../../component/table/table";
import TcPrint from "../../component/TcPrint";
import TcSendBulk from "../../component/TcSendBulk";
import { genrateColumnConfig } from "../../helpers/columns";
import { generateQuery } from "../../services/generateQuery";
import { getIssuedTc } from "../../services/issuedTc";

const IssuedTC = () => {
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
		issuedTcData: state.IssuedTc?.issuedTC?.rows,
		issuedTcCount: state.IssuedTc?.issuedTC?.count,
	}));

	useEffect(() => {
		getIssuedTc();
	}, [searchParams.toString()]);

	const COLUMNS = useMemo(() => {
		if (loadingPermission) return [];
		return genrateColumnConfig(permissionData?.issuedTcPage?.Table1 || []);
	}, [loadingPermission, permissionData?.issuedTcPage?.Table1]);

	const tableData = useMemo(() => issuedTcData, [issuedTcData]);

	//form default values

	const buttonCofig = useMemo(() => {
		return permissionData?.issuedTcPage?.topButtons;
	}, [permissionData?.issuedTcPage?.topButtons]);

	const showbutton = btn => {
		const obj = buttonCofig?.find(item => item.value === btn);
		return obj ? obj.enable : false;
	};

	return (
		<Container fluid>
			<Group position="apart">
				<Text>Issued TC</Text>

				<Group position="right" spacing={4}>
					{showbutton("hidePrintTc") && (
						<TcPrint data={selected} isTop={true} />
					)}
					{showbutton("sendbulktc") && <TcSendBulk data={selected} />}
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
			<ScrollArea style={{ height: "79vh", paddingBottom: "1rem" }}>
				<TableComponent
					Data={tableData}
					Columns={COLUMNS}
					sort={true}
					globleSearch={true}
					rowClick={true}
					planningChartClick={true}
					setSelected={setSelected}
					loading={issuedTCLoading}
					showFilter={showFilter}
					setPagnation={setPagnation}
					dataCount={issuedTcCount}
					setOpened={setOpened}
					setDrawerData={setDrawerData}
				/>
			</ScrollArea>
			<PlanningChartDrawer
				opened={opened}
				setOpened={setOpened}
				data={drawerData}
				workorderView={true}
			/>
		</Container>
	);
};
export default IssuedTC;
