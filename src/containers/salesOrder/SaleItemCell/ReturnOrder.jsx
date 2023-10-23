import { ActionIcon, Button, Group, Modal, Text, Tooltip } from "@mantine/core";
import { TiArrowBackOutline } from "react-icons/ti";
import React, { useState } from "react";
import { ModelSize, ModelStyleObj } from "../SalesOrderItem";
import { alertTitle, ModelAlertStyleObj } from "../../../component/TcCancel";
import { store } from "../../../store";
import ToolTipJSX from "./common/ToolTipJSX";
import ReturnForm from "../Forms/ReturnForm";

const ReturnOrder = ({ row }) => {
	const [returnItem, setReturnItem] = useState(false);
	const [warningModalOpened, setWarningModalOpened] = useState(false);
	const handleReturn = () => {
		store.dispatch({
			type: "INDIVIDUAL_ITEM_DETAILS",
			payload: row,
		});
		store.dispatch({
			type: "INDIVIDUAL_ITEM",
			payload: true,
		});
		setWarningModalOpened(true);
	};

	return (
		<>
			<ToolTipJSX label="Return">
				<ActionIcon
					color="red"
					variant="transparent"
					onClick={() => {
						handleReturn();
					}}>
					<TiArrowBackOutline size={22} />
				</ActionIcon>
			</ToolTipJSX>
			<Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				size={"100%"}
				opened={returnItem}
				onClose={() => {
					setReturnItem(false);
				}}
				title="RETURN THE ITEM">
				<div>
					<ReturnForm
						setReturnItem={setReturnItem}
						orderid={row?.original?.orderid}
					/>
				</div>
			</Modal>
			<Modal
				radius={8}
				padding={0}
				styles={ModelAlertStyleObj}
				size={"lg"}
				opened={warningModalOpened}
				onClose={() => setWarningModalOpened(false)}
				title={alertTitle}>
				<Text my={10}>
					Item No: <strong>{row?.original?.itemno}</strong> will be put to{" "}
					<span style={{ color: "red", fontWeight: 600 }}>RETURN</span>
				</Text>
				<div>
					<Group position="right">
						<Button
							mt="md"
							color="red"
							onClick={() => {
								setWarningModalOpened(false);
								setReturnItem(true);
							}}>
							Continue
						</Button>
					</Group>
				</div>
			</Modal>
		</>
	);
};

export default ReturnOrder;
