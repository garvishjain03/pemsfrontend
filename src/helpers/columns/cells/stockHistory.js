import { Group, Menu, Text } from "@mantine/core";
import dayjs from "dayjs";
import { RiDoubleQuotesL } from "react-icons/ri";

export const stockHistoryTransactionDateCell = ({ row }) => {
	return dayjs(row.original?.createdAt).format("DD/MM/YYYY") ?? "NA";
};
export const stockHistoryCustomerNameCell = ({ row }) => {
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
				{row.original?.transactionMapper?.[0]?.transactionOrder?.customerName?.name.slice(
					0,
					20
				)}
			</Text>
			<span style={{ display: "inline" }}>
				<Menu trigger="hover" size={"xl"}>
					{row.original?.transactionMapper?.map((ele, index) => (
						<Menu.Item>
							<Text key={index}>
								{ele?.transactionOrder?.customerName?.name}
							</Text>
						</Menu.Item>
					))}
				</Menu>
			</span>
		</Group>
	);
};
export const stockHistoryOAnoCell = ({ row }) => {
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
				{row.original?.transactionMapper?.[0]?.transactionOrder?.orderno}
			</Text>
			<span style={{ display: "inline" }}>
				<Menu trigger="hover" size={"md"}>
					{row.original?.transactionMapper?.map((ele, index) => (
						<Menu.Item>
							<Text key={index}>{ele?.transactionOrder?.orderno}</Text>
						</Menu.Item>
					))}
				</Menu>
			</span>
		</Group>
	);
};
export const stockHistoryItemCodeCell = ({ row }) => {
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
				{row.original?.transactionMapper?.[0]?.transcationItem?.itemno}
			</Text>
			<span style={{ display: "inline" }}>
				<Menu trigger="hover" size={"md"}>
					{row.original?.transactionMapper?.map((ele, index) => (
						<Menu.Item>
							<Text key={index}>{ele?.transcationItem?.itemno}</Text>
						</Menu.Item>
					))}
				</Menu>
			</span>
		</Group>
	);
};
export const stockHistoryTCno = ({ row }) => {
	return row.original?.tc_details?.tcno ?? "NA";
};
export const stockHistoryQuantityIn = ({ row }) => {
	return row.original?.quantityIn ?? "NA";
};
export const stockHistoryQuantityOut = ({ row }) => {
	return row.original?.quantityOut ?? "NA";
};
export const stockHistoryAction = ({ row }) => {
	return row.original?.action ?? "NA";
};
export const stockHistoryOperator = ({ row }) => {
	return row.original?.transactionsOperatorName?.username ?? "NA";
};
export const stockHistoryComments = ({ row }) => {
	return ["Edit", "Transfer from stock"].includes(row.original?.action)
		? row.original?.allTrasactionsComments?.[0]?.comments ?? "NA"
		: row.original?.allTrasactionsComments?.[0]?.comments ?? "NA";
};
export const stockHistoryBalance = ({ row }) => {
	return row.original?.balance ?? "NA";
};
