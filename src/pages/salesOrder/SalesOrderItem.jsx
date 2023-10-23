import { Button } from "@mantine/core";
import React from "react";
import { useNavigate, useLocation } from "react-router";

const SalesOrderItem = () => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div>
			SalesOrderItem
			<Button
				onClick={() => {
					navigate(-1);
				}}> 
				Back To Orders
			</Button>
		</div>
	);
};

export default SalesOrderItem;
