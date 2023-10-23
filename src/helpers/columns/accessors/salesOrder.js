import { Group, Menu, Text } from "@mantine/core";
import dayjs from "dayjs";
export const SalesCustomerNameAccesor = row => {
	// return row?.customerName?.name.slice(0, 20);
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
				{row?.customerName?.name.slice(0, 20)}
			</Text>
			<span style={{ display: "inline" }}>
				{row?.customerName?.name?.length > 20 ? (
					<Menu trigger="hover">
						<Menu.Item>
							<Text>{row?.customerName?.name}</Text>
						</Menu.Item>
					</Menu>
				) : (
					""
				)}
			</span>
		</Group>
	);
};
export const WorkOrderNoAccesor = row => {
	return row.workorderno;
};
export const WorkOrderCustomerAccesor = row => {
	return 1111;
};
export const IssueQuantityAccesor = row => {
	return parseInt(row.qty).toLocaleString("en-IN");
};
export const deliveryDateAccesor = row => {
	// return row.workorder_item.commitedDate.slice(0, 10);
	return dayjs(row.workorder_item.commitedDate).format("DD/MM/YYYY");
};
export const CompletedQuantityAccesor = row => {
	return row.qty;
};
export const statusAccesor = row => {
	return row.status;
};
export const OperatorAccesor = row => {
	return row.operator.username;
};

export const ActionWorkOrderAccesor = row => {
	return <>ff</>;
};

export const CustomerAccesor = row => {
	// return row.workorder_salesorder?.customerName.name;
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
				{row.workorder_salesorder?.customerName.name.slice(0, 20)}
			</Text>
			<span style={{ display: "inline" }}>
				{row.workorder_salesorder?.customerName.name?.length > 20 ? (
					<Menu trigger="hover">
						<Menu.Item>
							<Text>{row.workorder_salesorder?.customerName.name}</Text>
						</Menu.Item>
					</Menu>
				) : (
					""
				)}
			</span>
		</Group>
	);
};
export const CustomerAccesorPPlanner = row => {
	return row.workorder_salesorder?.customerName.name;
	// return 111;
};
export const WorkOrderNumberrAccesor = row => {
	return row.workorderno;
};
export const PartNumberAccesor = row => {
	return row.workorder_item.mpn;
};

export const StoreKeeperIssueQuantityAccesor = row => {
	return row.qty;
};

export const StoreKepperdeliverydateAccesor = row => {
	return dayjs(row.workorder_item.commitedDate).format("DD/MM/YYYY");
};

export const IssueDateAccesorPPlaner = row => {
	return dayjs(row.createdAt).format("DD/MM/YYYY");
};
export const IssueDateAccesorStoreKeeper = row => {
	return dayjs(row.createdAt).format("DD/MM/YYYY");
};

export const WorkOrderPPCustomerAccesor = row => {
	return row.workorder_salesorder?.customerName.name;
};

export const WorkOrdreMPNAccesor = row => {
	return row.workorder_item.mpn;
};
