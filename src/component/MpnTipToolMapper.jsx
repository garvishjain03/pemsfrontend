import { Tooltip } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";

const MpnTipToolMapper = ({
	orderType,
	partNo,
	mpn,
	wattage,
	type,
	tolerance,
	ohms,
	surge,
	unit,
}) => {
	const {
		types,
		tolerances,
		warehouse,
		wattages,
		characteristic,
		coresize,
		leadDia,
		leadLength,
		formType,
		shape,
		tcr,
	} = useSelector(state => ({
		types: state.context?.types?.rows,
		wattages: state.context?.wattages?.rows,
		tolerances: state.context?.tolerances?.rows,
		warehouse: state.context?.warehouse?.rows,
		characteristic: state.context?.characteristics?.rows,
		shape: state.context?.shapes?.rows,
		coresize: state.context?.coresizes?.rows,
		leadDia: state.context?.leaddias?.rows,
		leadLength: state.context?.leadlengths?.rows,
		formType: state.context?.formtypes?.rows,
		tcr: state.context?.tcrs?.rows,
	}));

	const wattageIdToLabel = id => {
		let label = "";
		wattages?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};

	const typeIdToLabel = id => {
		let label = "";
		types?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};

	const toleranceIdToLabel = id => {
		let label = "";
		tolerances?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};
	const tooltip = (
		<div>
			{wattageIdToLabel(wattage)} | {typeIdToLabel(type)} |{" "}
			{toleranceIdToLabel(tolerance)} | {ohms}
			{unit} | {surge}KV
		</div>
	);

	return (
		<>
			{orderType === "Traded" ? (
				<span style={{ color: "#0B7285", fontWeight: 700 }}> {partNo}</span>
			) : (
				<Tooltip label={tooltip}>
					<span style={{ color: "#5F3DC4", fontWeight: 700 }}> {mpn}</span>{" "}
				</Tooltip>
			)}
		</>
	);
};

export default MpnTipToolMapper;
