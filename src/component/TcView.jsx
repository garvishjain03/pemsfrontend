import { Button } from "@mantine/core";
import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getIssuedTcById, getShiftDetails } from "../services/issuedTc";
import PlanningChartDrawer from "./PlanningChartDrawer";

const TcView = ({ data, expend = false }) => {
	const [opened, setOpened] = useState(false);

	const { issuedTcData = [], issuedTCLoading = false } = useSelector(state => ({
		issuedTCLoading: state.IssuedTc?.issuedTCloading,
		issuedTcData: state.IssuedTc?.issuedTCById?.rows,
	}));

	const tcData = useMemo(
		() => (issuedTcData.length > 0 ? issuedTcData[0] : {}),
		[issuedTcData]
	);

	useEffect(() => {
		if (opened && expend) {
			getIssuedTcById(data?.issuetcid);
			getShiftDetails(data?.issuetcid);
		}
	}, [opened]);

	return (
		<div>
			{" "}
			<Button
				onClick={() => {
					setOpened(true);
				}}>
				View
			</Button>
			<PlanningChartDrawer
				opened={opened}
				setOpened={setOpened}
				data={expend ? tcData : data}
				workorderView={true}
			/>
		</div>
	);
};

export default TcView;
