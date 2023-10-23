import { ActionIcon, Button, Group, Modal, Text, Tooltip } from "@mantine/core";
import React from "react";
import { useState } from "react";
import { GiBoxUnpacking } from "react-icons/gi";
import { alertTitle, ModelAlertStyleObj } from "../../../component/TcCancel";
import { store } from "../../../store";
import UnPackingForm from "../Forms/UnPackingForm";
import { ModelStyleObj } from "../SalesOrderItem";
import ToolTipJSX from "./common/ToolTipJSX";

const UnPackOrder = ({ row }) => {
	const [unPackItem, setUnPackItem] = useState(false);
	const [warningModalOpened, setWarningModalOpened] = useState(false);
	const handleUnPacking = () => {
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
			<ToolTipJSX label="Unpack">
				<ActionIcon
					color="red"
					variant="transparent"
					onClick={() => {
						handleUnPacking();
					}}>
					<GiBoxUnpacking size={22} />
				</ActionIcon>
			</ToolTipJSX>
			<Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				size={"100%"}
				opened={unPackItem}
				onClose={() => {
					setUnPackItem(false);
				}}
				title="PACK THE ITEM">
				<div>
					<UnPackingForm
						setUnPackItem={setUnPackItem}
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
					<span style={{ color: "red", fontWeight: 600 }}>UNPACKING</span>
				</Text>
				<div>
					<Group position="right">
						<Button
							mt="md"
							color="red"
							onClick={() => {
								setWarningModalOpened(false);
								setUnPackItem(true);
							}}>
							Continue
						</Button>
					</Group>
				</div>
			</Modal>
		</>
	);
};

export default UnPackOrder;
