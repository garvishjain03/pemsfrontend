import { Tooltip } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";

const PartNoTipToolMapper = ({ data }) => {
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

	const issueTcItemData = data?.tcMapper?.[0]?.issueTcItem;
	const checkingOpItemData = data?.itemDetails?.[0];
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
	const tooltip =
		localStorage.getItem("active_role") === "CHECKINGOP" ? (
			<div>
				{wattageIdToLabel(checkingOpItemData?.wattage)} |{" "}
				{typeIdToLabel(checkingOpItemData?.type)} |{" "}
				{toleranceIdToLabel(checkingOpItemData?.tolerance)} |{" "}
				{checkingOpItemData?.ohms}
				{checkingOpItemData?.unit} | {checkingOpItemData?.surge}KV
			</div>
		) : (
			<div>
				{wattageIdToLabel(issueTcItemData?.wattage)} |{" "}
				{typeIdToLabel(issueTcItemData?.type)} |{" "}
				{toleranceIdToLabel(issueTcItemData?.tolerance)} |{" "}
				{issueTcItemData?.ohms}
				{issueTcItemData?.unit} | {issueTcItemData?.surge}KV
			</div>
		);

	return localStorage.getItem("active_role") === "CHECKINGOP" ? (
		<Tooltip label={tooltip}>
			<span style={{ color: "#0B7285", fontWeight: 700 }}>
				{data?.partno?.[0]}
			</span>
		</Tooltip>
	) : (
		<Tooltip label={tooltip}>
			<span style={{ color: "#5F3DC4", fontWeight: 700 }}>
				{data?.tcMapper?.[0]?.issueTcItem?.mpn}
			</span>
		</Tooltip>
	);
};

export default PartNoTipToolMapper;
