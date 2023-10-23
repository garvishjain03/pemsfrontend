import { Tooltip } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";

const WorkOrderPartNoTiptoolMapper = ({ data }) => {
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

	const itemData = data?.workorder_item || data;
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
			{wattageIdToLabel(itemData?.wattage)} | {typeIdToLabel(itemData?.type)} |{" "}
			{toleranceIdToLabel(itemData?.tolerance)} | {itemData?.ohms}
			{itemData?.unit} | {itemData?.surge}KV
		</div>
	);

	return (
		<Tooltip label={tooltip}>
			<span style={{ color: "#5F3DC4", fontWeight: 700 }}>
				{data?.workorder_item?.mpn || data?.mpn}
			</span>
		</Tooltip>
	);
};

export default WorkOrderPartNoTiptoolMapper;
