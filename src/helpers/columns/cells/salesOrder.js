import { Text } from "@mantine/core";
import dayjs from "dayjs";
import React from "react";
import DispatchNotificationCell from "../../../containers/salesOrder/DispatchNotificationCell";
import PackingNotificationCell from "../../../containers/salesOrder/PackingNotificationCell";
import SalesAction from "../../../containers/salesOrder/SaleOrderTableRows/SalesAction";
import SalesOrderNotificationCell from "../../../containers/salesOrder/SaleOrderTableRows/SalesOrderNotificationCell";
import WorkOrderNotificationCell from "../../../containers/salesOrder/workOrder/WorkOrderNotificationCell";

export const SalesOaDateCell = ({ row }) => {
	return dayjs(row.original?.createdAt).format("DD/MM/YYYY");
};
export const SalesScheduleDateCell = ({ row }) => {
	return dayjs(row.original?.scheduleDate).format("DD/MM/YYYY");
};

export const SalesCommitedDateCell = ({ row }) => {
	return dayjs(row.original?.commitedDate).format("DD/MM/YYYY");
};

export const SalesCreatedAtCell = ({ row }) => {
	return dayjs(row.original?.createdAt).format("DD/MM/YYYY");
};
export const SalesOrderDateCell = ({ row }) => {
	return dayjs(row.original?.orderDate).format("DD/MM/YYYY");
};

export const SalesUpdatedAtCell = ({ row }) => {
	return dayjs(row.original?.updatedAt).format("DD/MM/YYYY");
};
export const NotificationCell = ({ row }) => (
	<WorkOrderNotificationCell row={row} />
);
export const NotificationCellForSales = ({ row }) => (
	<SalesOrderNotificationCell row={row} />
);
export const NotificationCellForPacking = ({ row }) => (
	<PackingNotificationCell row={row} />
);
export const NotificationCellForDispatch = ({ row }) => (
	<DispatchNotificationCell row={row} />
);
export const SalesStatusCell = ({ row }) => {
	return <Text className="statusOrder">{row.original?.orderStatus} </Text>;
};
export const SalesActionCell = ({ row }) => <SalesAction row={row} />;
export const PaymentTermCellForOrder = ({ row }) => {
	return row.original.paymentTerm;
};
export const orderQuantityCell = ({ row }) => {
	return row.original?.orderquantity?.toLocaleString("en-IN");
};
