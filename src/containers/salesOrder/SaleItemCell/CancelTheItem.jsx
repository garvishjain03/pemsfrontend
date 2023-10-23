import { ActionIcon, Button, Group, Modal, Text } from "@mantine/core";
import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { alertTitle, ModelAlertStyleObj } from "../../../component/TcCancel";
import { CanceltemModelSingleItem } from "../Forms/CanceltemModel";
import { ModelSize, ModelStyleObjSaleItem } from "./common/ModelStyle";
import ToolTipJSX from "./common/ToolTipJSX";
import { ModelErrorStyleObj, errorTitle } from "../SalesOrderItem";

const CancelTheItem = ({ row, tcIsAccepted, status, tcNo }) => {
	const [CancelItemModeBool, setCancelItemModeBool] = useState(false);
	const [cancelWarn, setCancelWarn] = useState(false);
	const [tcError, setTcError] = useState(false);
	const [isWarnable, setIsWarnable] = useState(false);
	const [allWorkOrdersPending, setAllWorkOrderPending] = useState(true);
	const [allTcsPending, setAllTcsPending] = useState(true);

	const handleCancelItem = () => {
		let iswarnable = false;
		let allworkOrdersPending = true;
		let alltcsPending = true;

		if (tcIsAccepted) {
			setTcError(true);
		}
		// else if (row?.original?.itemStatus == "INPRODUCTION") {
		// 	iswarnable = true;
		// 	setIsWarnable(true);
		// 	row?.original?.workorder_item?.forEach(({ status }) => {
		// 		if (["INPROGRESS", "TCISSUEDCOMPLETED"].includes(status)) {
		// 			allworkOrdersPending = false;
		// 			setAllWorkOrderPending(false);
		// 		}
		// 	});
		// 	if (!allworkOrdersPending) {
		// 		row?.original?.issueTcItem?.forEach(({ tcMapper }) => {
		// 			if (tcMapper?.status !== "PENDING") {
		// 				alltcsPending = false;
		// 				setAllTcsPending(false);
		// 			}
		// 		});
		// 	}
		// 	setCancelWarn(true);
		// }
		else {
			setCancelItemModeBool(true);
		}
	};
	return (
		<>
			<ToolTipJSX label="Cancel">
				<ActionIcon
					color="red"
					variant="transparent"
					onClick={handleCancelItem}>
					<RiCloseCircleFill size={26} color="rgb(254, 39, 39)" />
				</ActionIcon>
			</ToolTipJSX>
			<>
				<Modal
					centered
					radius={8}
					padding={0}
					styles={ModelStyleObjSaleItem}
					size={ModelSize}
					opened={CancelItemModeBool}
					// opened={true}
					onClose={() => {
						setCancelItemModeBool(false);
					}}
					title={
						<Group>
							<Text>Cancel MPN: {row?.original?.mpn}</Text>
						</Group>
					}>
					<div>
						<CanceltemModelSingleItem
							selectedItem={[row?.original]}
							setAcceptItemModeBool={setCancelItemModeBool}
						/>
					</div>
				</Modal>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					title={errorTitle}
					transition="fade"
					transitionDuration={600}
					transitionTimingFunction="ease"
					withCloseButton={false}
					opened={tcError}>
					<>
						{tcNo.map((ele, index) => (
							<Text my={10}>
								TC No: <strong>{ele}</strong> is accepted by operator in
								section: <strong> {status?.[index]}</strong>.
							</Text>
						))}
					</>
					<Text>Item cannot be cancelled.</Text>
					<div
						style={{
							display: "flex",
							justifyContent: "right",
							alignItems: "right",
							marginTop: 20,
						}}>
						<Button color={"red"} onClick={() => setTcError(false)}>
							Close
						</Button>
					</div>
				</Modal>
				<Modal
					radius={8}
					padding={0}
					styles={ModelAlertStyleObj}
					size={"lg"}
					opened={cancelWarn}
					onClose={() => setCancelWarn(false)}
					title={alertTitle}>
					<>
						{allWorkOrdersPending ? (
							<Text my={10}>
								On Item No: <strong>{row?.original?.itemno}</strong> will be{" "}
								<span style={{ color: "red", fontWeight: 600 }}>CANCELLED</span>
							</Text>
						) : allTcsPending ? (
							<Text my={10}>
								On Item No: <strong>{row?.original?.itemno}</strong> TCs have
								been issued, please consult RM storekeeper before cancelling the
								item
							</Text>
						) : (
							<Text my={10}>
								On Item No: <strong>{row?.original?.itemno}</strong> There are
								TCs in production, please consult storekeeper before cancelling
								the item
							</Text>
						)}
					</>
					<div>
						<Group position="right">
							<Button
								mt="md"
								color="red"
								onClick={() => {
									setCancelWarn(false);
									setCancelItemModeBool(true);
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
export default CancelTheItem;
