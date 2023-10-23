import { Text } from "@mantine/core";
import React from "react";

const SalesOrderNotificationCell = ({ row }) => {
	const pendingCount = row?.original?.itemsCount?.pending_count;
	const acceptedCount = row?.original?.itemsCount?.accepted_count;
	const recheckCount = row?.original?.itemsCount?.recheck_count;
	const commit_expiry_count = row?.original?.itemsCount?.commit_expiry_count;
	const commit_dispatch_exp_count =
		row?.original?.itemsCount?.commit_dispatch_exp_count;
	const showExpireBubble = ["PACKINGOP", "DISPATCHOP"].includes(
		localStorage.getItem("active_role")
	);
	const showAcceptedBubble = ["PRODUCTIONPL"].includes(
		localStorage.getItem("active_role")
	);
	return (
		<Text
			style={{
				textAlign: "center",
				display: "flex",
				justifyContent: "flex-start",
				gap: "1rem",
			}}
			className="statusOrder">
			{showExpireBubble ? (
				localStorage.getItem("active_role") === "DISPATCHOP" ? (
					<span className="orderCountBubble">
						{commit_dispatch_exp_count > 0 && (
							<div
								style={{
									background: "red",
									borderColor: "red",
								}}
								className="pplaner_count pplaner_recheck_count">
								{commit_dispatch_exp_count}
							</div>
						)}
					</span>
				) : (
					<span className="orderCountBubble">
						{commit_expiry_count > 0 && (
							<div
								style={{
									background: "red",
									borderColor: "red",
								}}
								className="pplaner_count pplaner_recheck_count">
								{commit_expiry_count}
							</div>
						)}
					</span>
				)
			) : showAcceptedBubble ? (
				<span className="orderCountBubble">
					{acceptedCount > 0 && (
						<div
							style={{
								background: "green",
								borderColor: "green",
							}}
							className="pplaner_count pplaner_recheck_count">
							{acceptedCount}
						</div>
					)}
				</span>
			) : (
				<span className="orderCountBubble">
					{pendingCount > 0 && (
						<div
							style={{
								background: "#1864ab",
								borderColor: "#1864ab",
							}}
							className="pplaner_count pplaner_accept_count">
							{pendingCount}
						</div>
					)}
					{recheckCount > 0 &&
						localStorage.getItem("active_role") !== "PRODUCTIONPL" && (
							<div
								style={{
									background: "#ff922b",
									borderColor: "#ff922b",
								}}
								className="pplaner_count pplaner_recheck_count">
								{recheckCount}
							</div>
						)}
				</span>
			)}
		</Text>
	);
};
export default SalesOrderNotificationCell;
