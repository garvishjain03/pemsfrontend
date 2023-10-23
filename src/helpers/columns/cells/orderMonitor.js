import dayjs from "dayjs";
import WorkOrderPartNoTiptoolMapper from "../../../component/WorkOrderPartNoTiptoolMapper";

export const orderMonitorMpnCell = ({ row }) => {
	return <WorkOrderPartNoTiptoolMapper data={row?.original} />;
};

export const orderMonitorOrderDate = ({ row }) => {
	return row.original?.orderDate
		? dayjs(row.original?.orderDate).format("DD-MM-YYYY") ?? ""
		: "";
};
export const orderMonitorDeliveryDate = ({ row }) => {
	return row.original?.commitedDate
		? dayjs(row.original?.commitedDate).format("DD-MM-YYYY") ?? ""
		: "";
};
export const orderMonitorPackedDate = ({ row }) => {
	return row.original?.packedDate
		? dayjs(row.original?.packedDate).format("DD-MM-YYYY") ?? ""
		: "";
};
export const orderMonitorInvoiceDate = ({ row }) => {
	return row.original?.invoiceDate && row.original?.invoiceDate !== "NA"
		? dayjs(row.original?.invoiceDate).format("DD-MM-YYYY") ?? ""
		: "";
};
export const orderMonitorRequestDeliveryDate = ({ row }) => {
	return row.original?.requestedDeliveryDate
		? dayjs(row.original?.requestedDeliveryDate).format("DD-MM-YYYY") ?? ""
		: "";
};
export const orderMonitorRevivedOn = ({ row }) => {
	return row.original?.reviewedOn && row.original?.reviewedOn !== "NA"
		? dayjs(row.original?.reviewedOn).format("DD-MM-YYYY") ?? ""
		: "";
};
export const orderMonitorDispatchedDate = ({ row }) => {
	return row.original?.dataofDispatched
		? dayjs(row.original?.dataofDispatched).format("DD-MM-YYYY") ?? ""
		: "";
};
export const orderMonitorOADate = ({ row }) => {
	return row.original?.OADate
		? dayjs(row.original?.OADate).format("DD-MM-YYYY") ?? ""
		: "";
};
