import { ActionIcon, Button, Group, Modal, Text, Tooltip } from "@mantine/core";
import React from "react";
import { useState } from "react";
import { AiOutlineDropbox } from "react-icons/ai";
import { alertTitle, ModelAlertStyleObj } from "../../../component/TcCancel";
import { store } from "../../../store";
import PackingForm from "../Forms/PackingForm";
import { ModelStyleObj } from "../SalesOrderItem";
import ToolTipJSX from "./common/ToolTipJSX";

const PackOrder = ({ row }) => {
	const [packItem, setPackItem] = useState(false);
	const [warningModalOpened, setWarningModalOpened] = useState(false);
	const handlePacking = () => {
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
			<ToolTipJSX label="Pack">
				<ActionIcon
					variant="transparent"
					onClick={() => {
						handlePacking();
					}}>
					<AiOutlineDropbox size={22} color="#339af0" />
				</ActionIcon>
			</ToolTipJSX>
			<Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				size={"100%"}
				opened={packItem}
				onClose={() => {
					setPackItem(false);
				}}
				title="PACK THE ITEM">
				<div>
					<PackingForm
						setPackItem={setPackItem}
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
					<span style={{ color: "red", fontWeight: 600 }}>PACKING</span>
				</Text>
				<div>
					<Group position="right">
						<Button
							mt="md"
							color="red"
							onClick={() => {
								setWarningModalOpened(false);
								setPackItem(true);
							}}>
							Continue
						</Button>
					</Group>
				</div>
			</Modal>
		</>
	);
};

export default PackOrder;
