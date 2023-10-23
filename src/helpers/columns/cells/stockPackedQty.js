import { Group, Menu, Text } from "@mantine/core";

export const stockPackedQtyCustomerCell = ({ row }) => {
	const customer =
		row?.original?.PackedItemDetails?.allItems?.customerName?.name;
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

export const stockPackedQtyOaNumberCell = ({ row }) => {
	const oaNumber = row?.original?.PackedItemDetails?.allItems?.orderno;
	return <>{oaNumber}</>;
};

export const stockPackedQtyMpnCell = ({ row }) => {
	return <>{row?.original?.mpn}</>;
};

export const stockPackedQtyItemSiNoCell = ({ row }) => {
	const itemSiNo = row?.original?.PackedItemDetails?.itemno;

	return <>{itemSiNo}</>;
};

export const stockPackedQtyPackedQtyCell = ({ row }) => {
	return <>{row?.original?.packedQuantity}</>;
};
