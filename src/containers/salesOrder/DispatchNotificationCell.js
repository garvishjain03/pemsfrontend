import { Text } from "@mantine/core";
import React from "react";

const DispatchNotificationCell = ({ row }) => {
	const commit_dispatch_exp_count =
		row?.original?.itemsCount?.commit_dispatch_exp_count;

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
				{commit_dispatch_exp_count > 0 && (
					<div className="pplaner_count">{commit_dispatch_exp_count}</div>
				)}
			</span>
		</Text>
	);
};

export default DispatchNotificationCell;
