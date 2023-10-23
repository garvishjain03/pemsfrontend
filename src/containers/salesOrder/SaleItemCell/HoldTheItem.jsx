import { ActionIcon } from "@mantine/core";
import React from "react";
import { MdOutlinePauseCircleFilled } from "react-icons/md";
import { saveHoldTheItem } from "../../../services/SaleItem";
import ToolTipJSX from "./common/ToolTipJSX";
import useFetch from "../../../hooks/useFetch";
import { getURL } from "../../../utils/apiURL";
import { message } from "../../../utils/message";
import { translate } from "../../../utils/translate";
import { Modal } from "@mantine/core";
import { ModelStyleObj, ModelSize } from "../SalesOrderItem";
import { useState } from "react";
import HoldItemsForm from "../Forms/HoldItemsForm";
import { store } from "../../../store";
import { ModelAlertStyleObj, alertTitle } from "../../../component/TcCancel";
import { Group, Button, Text } from "@mantine/core";

const HoldTheItem = ({ row }) => {
	const [HoldItems, setHoldItems] = useState(false);
	const [warningModalOpened, setWarningModalOpened] = useState(false);
	const { orderid, id } = row?.original ?? {};
	const handleTheItemOnHold = () => {
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
	let activeTc = false;
	let advancedProductionStages = false;
	row.original?.issueTcItem?.forEach(({ tcMapper }) => {
		if (["PENDING", "CUTTING", "WINDING"].includes(tcMapper?.status)) {
			activeTc = true;
		}
		if (
			["WELDING", "COATING", "CHECKING", "QUALITY"].includes(tcMapper?.status)
		) {
			advancedProductionStages = true;
		}
	});
	return (
		<>
			<ToolTipJSX label="hold">
				<ActionIcon
					variant="transparent"
					// disabled={!holdItemBool}
					onClick={() => {
						handleTheItemOnHold();
					}}>
					<MdOutlinePauseCircleFilled size={22} color="#339af0" />
				</ActionIcon>
			</ToolTipJSX>
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={ModelSize}
					opened={HoldItems}
					onClose={() => {
						setHoldItems(false);
					}}
					title="PUT ITEMS ON HOLD">
					<div>
						<HoldItemsForm setHoldItems={setHoldItems} />
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
					{advancedProductionStages ? (
						<Text my={10}>
							One or more active TCs in advance production stages, Contact RM
							Storekeeper before putting item on hold.
						</Text>
					) : activeTc ? (
						<Text my={10}>
							The Item contains active TCs. Please contact RM storekeeper before
							putting item on hold.
						</Text>
					) : (
						<Text my={10}>
							Item No: <strong>{row?.original?.itemno}</strong> will be put on{" "}
							<span style={{ color: "red", fontWeight: 600 }}>HOLD</span>
						</Text>
					)}
					<div>
						<Group position="right">
							<Button
								mt="md"
								color="red"
								onClick={() => {
									setWarningModalOpened(false);
									setHoldItems(true);
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
export default HoldTheItem;
