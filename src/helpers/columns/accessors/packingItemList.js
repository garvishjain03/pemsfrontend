import { Group, Menu, Text } from "@mantine/core";

export const packingItemMpnAccessor = () => "";
export const packingCustomerNameAccesor = row => (
	// row.allItems?.customerName?.name;
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
			{row.allItems?.customerName?.name.slice(0, 20)}
		</Text>
		<span style={{ display: "inline" }}>
			{row.allItems?.customerName?.name?.length > 20 ? (
				<Menu trigger="hover">
					<Menu.Item>
						<Text>{row.allItems?.customerName?.name}</Text>
					</Menu.Item>
				</Menu>
			) : (
				""
			)}
		</span>
	</Group>
);
export const packingItemCodeAccesor = row => row?.itemno;
export const packingItemDelivarySummaryAccesor = () => "a";
