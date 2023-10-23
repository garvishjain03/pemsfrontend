import { Text } from "@mantine/core";
import React from "react";

const PackingNotificationCell = ({ row }) => {
	const commit_expiry_count = row?.original?.itemsCount?.commit_expiry_count;
	return (
		<Text
			style={{
				textAlign: "center",
				display: "flex",
				justifyContent: "flex-start",
				gap: "1rem",
			}}
			className="statusOrder">
			<span className="orderCountBubble">
				{commit_expiry_count > 0 && (
					<div className="pplaner_count">{commit_expiry_count}</div>
				)}
			</span>
		</Text>
	);
};

export default PackingNotificationCell;
