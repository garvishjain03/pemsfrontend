import { Group, Menu, Text } from "@mantine/core";

export const customerName = row => {
	// return row?.customerName;
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
				{row?.customerName?.slice(0, 20)}
			</Text>
			<span style={{ display: "inline" }}>
				{row?.customerName?.length > 20 ? (
					<Menu trigger="hover">
						<Menu.Item>
							<Text>{row?.customerName}</Text>
						</Menu.Item>
					</Menu>
				) : (
					""
				)}
			</span>
		</Group>
	);
};
