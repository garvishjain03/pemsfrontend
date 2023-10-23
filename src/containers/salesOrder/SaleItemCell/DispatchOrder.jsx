import { ActionIcon, Button, Group, Modal, Text, Tooltip } from "@mantine/core";
import { FaShippingFast } from "react-icons/fa";
import React, { useState } from "react";
import { ModelStyleObj } from "../SalesOrderItem";
import { alertTitle, ModelAlertStyleObj } from "../../../component/TcCancel";
import { store } from "../../../store";
import ToolTipJSX from "./common/ToolTipJSX";
import DispatchForm from "../Forms/DispatchForm";

const DispatchOrder = ({ row }) => {
	const [dispatchItem, setDispatchItem] = useState(false);
	const [warningModalOpened, setWarningModalOpened] = useState(false);
	const handleDispatch = () => {
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
			<ToolTipJSX label="Dispatch">
				<ActionIcon
					color="blue"
					variant="transparent"
					onClick={() => {
						handleDispatch();
					}}>
					<FaShippingFast size={22} />
				</ActionIcon>
			</ToolTipJSX>
			<Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				size={"100%"}
				opened={dispatchItem}
				onClose={() => {
					setDispatchItem(false);
				}}
				title="DISPATCH THE ITEM">
				<div>
					<DispatchForm
						setDispatchItem={setDispatchItem}
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
					<span style={{ color: "red", fontWeight: 600 }}>DISPATCH</span>
				</Text>
				<div>
					<Group position="right">
						<Button
							mt="md"
							color="red"
							onClick={() => {
								setWarningModalOpened(false);
								setDispatchItem(true);
							}}>
							Continue
						</Button>
					</Group>
				</div>
			</Modal>
		</>
	);
};

export default DispatchOrder;
