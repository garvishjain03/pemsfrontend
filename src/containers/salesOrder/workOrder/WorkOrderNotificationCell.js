import { Text } from "@mantine/core";
import React from "react";

const WorkOrderNotificationCell = ({ row }) => {
	const acceptedCount = row?.original?.itemsCount?.accepted_count;

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
				{acceptedCount > 0 && (
					<div className="pplaner_count">{acceptedCount}</div>
				)}
			</span>
		</Text>
	);
};
export default WorkOrderNotificationCell;
