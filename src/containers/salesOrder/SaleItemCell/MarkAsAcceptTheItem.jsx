import { ActionIcon, Button, Group, Modal, Text } from "@mantine/core";
import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { alertTitle, ModelAlertStyleObj } from "../../../component/TcCancel";
import { store } from "../../../store";
import MarkAsAcceptedForm from "../Forms/MarkAsAcceptedForm";
import { ModelSize, ModelStyleObj } from "../SalesOrderItem";
import ToolTipJSX from "./common/ToolTipJSX";

const MarkAsAcceptTheItem = ({ row }) => {
	const [markAsAcceptBool, setMarkAsAcceptBool] = useState(false);
	const [warningModalOpened, setWarningModalOpened] = useState(false);
	const handleMarkAsAccept = () => {
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
			<ToolTipJSX label="markAsAccept">
				<ActionIcon
					variant="transparent"
					onClick={() => {
						handleMarkAsAccept();
					}}>
					<BsFillCheckCircleFill size={22} color="#65bb65" />
				</ActionIcon>{" "}
			</ToolTipJSX>
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={ModelSize}
					opened={markAsAcceptBool}
					onClose={() => {
						setMarkAsAcceptBool(false);
					}}
					title="MARK AS ACCEPT THE PROCURE ITEM">
					<div>
						<MarkAsAcceptedForm setMarkAsAcceptBool={setMarkAsAcceptBool} />
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
						Item No: <strong>{row?.original?.itemno}</strong> will be{" "}
						<span style={{ color: "red", fontWeight: 600 }}>
							MARKED AS ACCEPTED
						</span>
					</Text>
					<div>
						<Group position="right">
							<Button
								mt="md"
								color="red"
								onClick={() => {
									setWarningModalOpened(false);
									setMarkAsAcceptBool(true);
								}}>
								Continue
							</Button>
						</Group>
					</div>
				</Modal>
			</>
		</>
	);
};

export default MarkAsAcceptTheItem;
