import { ActionIcon, Modal } from "@mantine/core";
import React, { useState } from "react";
import { BsHandIndexThumb } from "react-icons/bs";
import { alertTitle, ModelAlertStyleObj } from "../../../component/TcCancel";
import { getCommentsByItemId } from "../../../services/SaleItem";
import { store } from "../../../store";
import UnHoldItemsForm from "../Forms/UnHoldItemsForm";
import { ModelSize, ModelStyleObj } from "../SalesOrderItem";
import { Group, Button, Text } from "@mantine/core";
import ToolTipJSX from "./common/ToolTipJSX";

const UnHoldTheItem = ({ setcommentModel, row }) => {
	const { id } = row?.original ?? {};
	const [unHoldItemsFormBool, setUnHoldItemsFormBool] = useState(false);
	const [warningModalOpened, setWarningModalOpened] = useState(false);
	const handleTheItemUnHold = () => {
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
			<ToolTipJSX label="unhold">
				<ActionIcon
					variant="transparent"
					onClick={() => {
						handleTheItemUnHold();
					}}>
					<BsHandIndexThumb size={22} color="#339af0" />
				</ActionIcon>{" "}
			</ToolTipJSX>
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={ModelSize}
					opened={unHoldItemsFormBool}
					onClose={() => {
						setUnHoldItemsFormBool(false);
					}}
					title="PUT ITEMS ON UNHOLD">
					<div>
						<UnHoldItemsForm setUnHoldItemsFormBool={setUnHoldItemsFormBool} />
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
						Item No: <strong>{row?.original?.itemno}</strong> will be put on{" "}
						<span style={{ color: "red", fontWeight: 600 }}>UNHOLD</span>
					</Text>
					<div>
						<Group position="right">
							<Button
								mt="md"
								color="red"
								onClick={() => {
									setWarningModalOpened(false);
									setUnHoldItemsFormBool(true);
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
export default UnHoldTheItem;
