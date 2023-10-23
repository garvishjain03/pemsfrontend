import { Group, Menu, Text } from "@mantine/core";
import dayjs from "dayjs";

export const returnHistoryTransactionDateCell = ({ row }) => {
	return dayjs(row.original?.updatedAt).format("DD/MM/YYYY") ?? "NA";
};
export const returnHistoryCustomerNameCell = ({ row }) => {
	const customer =
		row.original?.ReturnItemDetails?.allItems?.customerName?.name;
	return (
		<Group
			direction="row"
			style={{ maxWidth: "250px", minWidth: "200px", gap: 0 }}>
			<Text
				size="sm"
				style={{
					maxHeight: "30px",
					overflow: "hidden",
					display: "inline",
				}}>
				{customer.slice(0, 20)}
			</Text>
			<span style={{ display: "inline" }}>
				{customer?.length > 20 ? (
					<Menu trigger="hover">
						<Menu.Item>
							<Text>{customer}</Text>
						</Menu.Item>
					</Menu>
				) : (
					""
				)}
			</span>
		</Group>
	);
};
export const returnHistoryOAnoCell = ({ row }) => {
	return row.original?.ReturnItemDetails?.allItems?.orderno ?? "NA";
};
export const returnHistoryItemCodeCell = ({ row }) => {
	return row.original?.ReturnItemDetails?.itemno ?? "NA";
};
export const returnHistoryQuantity = ({ row }) => {
	return row.original?.quantity ?? 0;
};
export const returnHistoryOperator = ({ row }) => {
	return row.original?.operatorName?.username ?? 0;
};
export const returnHistoryComments = ({ row }) => {
	return row.original?.processReturnComment?.[0]?.comments ?? "NA";
};
