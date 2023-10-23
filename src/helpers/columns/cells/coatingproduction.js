import { Center, Text } from "@mantine/core";
import dayjs from "dayjs";
import { element } from "prop-types";
import CommentFeature from "./CommentFeature";
import WorkOrderPartNoTiptoolMapper from "../../../component/WorkOrderPartNoTiptoolMapper";

export const tcnoCoatingCell = ({ row }) => {
	return row?.original?.tcshift_detail?.tcno ?? "NA";
};
export const customerNameCoatingCell = ({ row }) => {
	return (
		row?.original?.tcshift_detail?.tcMapper?.[0]?.issueTcOrder?.customerName
			?.name ?? "NA"
	);
};

export const partNumberCoatingCell = ({ row }) => {
	return (
		<WorkOrderPartNoTiptoolMapper
			data={row?.original?.tcshift_detail?.tcMapper?.[0]?.issueTcItem}
		/>
	);
};
export const coatingDateCoatingCell = ({ row }) => {
	return dayjs(row?.original?.shift_date).format("DD-MM-YYYY") ?? "NA";
};
export const tcCompletionDateCoatingCell = ({ row }) => {
	return row.original?.qc_pass
		? dayjs(row?.original?.QUALITY?.createdAt).format("DD-MM-YYYY") ?? "NA"
		: "NA";
};
export const windingTotalCoatingCell = ({ row }) => {
	return row.original?.submitCount === 1
		? row?.original?.WINDING?.total_shift_qua ?? "NA"
		: "NA";
};
export const cuttingTotalCoatingCell = ({ row }) => {
	return row.original?.submitCount === 1
		? row?.original?.CUTTING?.shift_quantity ?? "NA"
		: "NA";
};
export const laserCutCoatingCell = ({ row }) => {
	return row?.original?.tcshift_detail?.isLaserCut ?? "NA";
};
export const weldingTotalCoatingCell = ({ row }) => {
	return row.original?.submitCount === 1
		? row?.original?.WELDING?.shift_quantity ?? "NA"
		: "NA";
};
export const coatingTotalCoatingCell = ({ row }) => {
	return row?.original?.shift_quantity ?? "NA";
};
export const shiftCoatingCell = ({ row }) => {
	const shift = row?.original?.shift_type?.split("T");
	return shift?.[shift.length - 1] ?? "NA";
};
export const coatingMachineCoatingCell = ({ row }) => {
	return row?.original?.machine_details?.name ?? "NA";
};
export const totalRejectionCoatingCell = ({ row }) => {
	const calculation =
		(row?.original?.CUTTING?.shift_quantity ??
			row?.original?.WINDING?.total_shift_qua) -
		row?.original?.COATING?.shift_quantity;
	// let result = Math.sign(calculation) == 1 ? calculation : "NA";

	// return ![-1, NaN].includes(Math.sign(calculation)) ? calculation : "NA";

	return row.original?.tc_action === "MARKCLOSE" ? calculation : "NA";
};
export const totalRejectionPercentageCoatingCell = ({ row }) => {
	const calculation =
		(((row?.original?.CUTTING?.shift_quantity ??
			row?.original?.WINDING?.total_shift_qua) -
			row?.original?.COATING?.shift_quantity) *
			100) /
		(row?.original?.CUTTING?.shift_quantity ??
			row?.original?.WINDING?.total_shift_qua);
	return row.original?.tc_action === "MARKCLOSE"
		? calculation.toFixed(2)
		: "NA";
};
export const weldingRejectionCoatingCell = ({ row }) => {
	const calculation =
		(row?.original?.CUTTING?.shift_quantity ??
			row?.original?.WINDING?.total_shift_qua) -
		row?.original?.WELDING?.shift_quantity;
	return row.original?.submitCount === 1 &&
		row?.original?.WELDING?.shift_quantity
		? calculation
		: "NA";
};

export const checkingTotalCoatingCell = ({ row }) => {
	return row.original?.qc_pass
		? row?.original?.QUALITY?.shift_quantity ?? "NA"
		: "NA";
};
export const finalRejectionPercentageCoatingCell = ({ row }) => {
	const calculation =
		(((row?.original?.CUTTING?.shift_quantity ??
			row?.original?.WINDING?.total_shift_qua) -
			row?.original?.QUALITY?.shift_quantity) *
			100) /
		(row?.original?.CUTTING?.shift_quantity ??
			row?.original?.WINDING?.total_shift_qua);
	return row.original?.qc_pass ? calculation.toFixed(2) : "NA";
};

export const remarksCoatingCell = ({ row }) => {
	return <Text></Text>;
};
