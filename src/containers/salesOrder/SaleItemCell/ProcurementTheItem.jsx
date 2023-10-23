import { ActionIcon, Button, Group, Modal, Text } from "@mantine/core";
import React, { useState } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { alertTitle, ModelAlertStyleObj } from "../../../component/TcCancel";
import { getCommentsByItemId } from "../../../services/SaleItem";
import { store } from "../../../store";
import ProcurementForm from "../Forms/ProcurementForm";
import { ModelSize, ModelStyleObj } from "../SalesOrderItem";
import ToolTipJSX from "./common/ToolTipJSX";

const ProcurementTheItem = ({ setcommentModel, row }) => {
	const [ProcurementFormBool, setProcurementFormBool] = useState(false);
	const [warningModalOpened, setWarningModalOpened] = useState(false);
	const { id } = row?.original ?? {};

	const handleTheItemProcurement = () => {
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
			<ToolTipJSX label="procurement">
				<ActionIcon
					variant="transparent"
					onClick={() => {
						handleTheItemProcurement();
					}}>
					<BsCartPlusFill size={22} color="#339af0" />
				</ActionIcon>{" "}
			</ToolTipJSX>
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={ModelSize}
					opened={ProcurementFormBool}
					onClose={() => {
						setProcurementFormBool(false);
					}}
					title="PUT ITEMS ON PROCUREMENT">
					<div>
						<ProcurementForm setProcurementFormBool={setProcurementFormBool} />
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
						<span style={{ color: "red", fontWeight: 600 }}>PROCUREMENT</span>
					</Text>
					<div>
						<Group position="right">
							<Button
								mt="md"
								color="red"
								onClick={() => {
									setWarningModalOpened(false);
									setProcurementFormBool(true);
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
export default ProcurementTheItem;
