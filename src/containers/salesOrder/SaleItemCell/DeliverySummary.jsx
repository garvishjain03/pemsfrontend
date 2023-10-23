import { Text } from "@mantine/core";
import React from "react";

const DeliverySummary = ({ row }) => {
	return (
		<>
			<Text>
				{/* {row.original?.packingDetails?.[0]?.packingquantity
					? `Packed : ${(row.original?.packingDetails?.[0]?.packingquantity).toLocaleString(
							"en-IN"
					  )}`
					: ""} */}
				{row.original?.packingDetails?.[0]?.packingquantity
					? `Packed : ${row.original?.packingDetails?.[0]?.packingquantity}`
					: ""}
			</Text>
			<Text>
				{/* {row.original?.dispatchedDetails?.[0]?.totaldispatchqty
					? `Dispatched : ${(row.original?.dispatchedDetails?.[0]?.totaldispatchqty).toLocaleString(
							"en-IN"
					  )}`
					: ""} */}
				{row.original?.dispatchedDetails?.[0]?.totaldispatchqty
					? `Dispatched : ${row.original?.dispatchedDetails?.[0]?.totaldispatchqty}`
					: ""}
			</Text>
			<Text>
				{/* {row.original?.returnDetails?.[0]?.returnquantity
					? `Return : ${(row.original?.returnDetails?.[0]?.returnquantity).toLocaleString(
							"en-IN"
					  )}`
					: ""} */}
				{row.original?.returnDetails?.[0]?.returnquantity
					? `Return : ${row.original?.returnDetails?.[0]?.returnquantity}`
					: ""}
			</Text>
		</>
	);
};

export default DeliverySummary;
