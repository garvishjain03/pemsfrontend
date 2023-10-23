import { Center, Text } from "@mantine/core";
import dayjs from "dayjs";
import React, { useState } from "react";
import CommentOnItems from "../../../containers/salesOrder/SaleItemCell/CommentOnItems";
import CommentPopup from "../../../containers/salesOrder/SaleItemCell/CommentPopup";
// import PackingNotificationCell from "../../../containers/salesOrder/PackingNotificationCell";
import SalesAction from "../../../containers/salesOrder/SaleOrderTableRows/SalesAction";
// import SalesOrderNotificationCell from "../../../containers/salesOrder/SaleOrderTableRows/SalesOrderNotificationCell";
// import WorkOrderNotificationCell from "../../../containers/salesOrder/workOrder/WorkOrderNotificationCell";

export const reportTcNoCell = ({ row }) => {
	return row?.original?.tc_details?.tcno || "NA";
};
export const submitCloseDateCell = ({ row }) => {
	return dayjs(row?.original?.shift_date).format("DD/MM/YYYY") || "NA";
};

export const reportSectionCell = ({ row }) => {
	return row?.original?.shift_status || "NA";
};

export const reportCategoryCell = ({ row }) => {
	return row?.original?.machine_details?.WindingProcess;
};
export const reportSubCategoryCell = ({ row }) => {
	return <></>;
};
export const reportShiftCell = ({ row }) => {
	return row?.original?.shift_type || "NA";
};
export const reportMachineCell = ({ row }) => {
	return row?.original?.machine_details?.name || "NA";
};
export const reportCoreSizeCell = ({ row }) => {
	return (
		row?.original?.tc_details?.tcMapper?.[0]?.issueTcItem?.coresizeItem
			?.label || "NA"
	);
};
export const reportOhmsCell = ({ row }) => {
	return (
		row?.original?.tc_details?.tcMapper?.[0]?.issueTcItem?.ohms +
		" " +
		(row?.original?.tc_details?.tcMapper?.[0]?.issueTcItem?.unit || "NA")
	);
};
export const reportQuantityCell = ({ row }) => {
	return row?.original?.total_shift_quantity?.toLocaleString("en-IN") || "NA";
};
export const reportOperatorCell = ({ row }) => {
	return row?.original?.user_details?.username || "NA";
};
export const reportRemarkCell = ({ row }) => {
	return "NA";
};

export const ReportActionCell = ({ row, column }) => {
	const [commentModel, setcommentModel] = useState(false);

	const { id, itemStatus, mpn, orderType } = row.original;

	return (
		<>
			<Center>
				<CommentOnItems
					commentModel={commentModel}
					setcommentModel={setcommentModel}
				/>
				<CommentPopup
					row={row}
					setcommentModel={setcommentModel}
					commentModel={commentModel}
				/>
			</Center>
		</>
	);
};
