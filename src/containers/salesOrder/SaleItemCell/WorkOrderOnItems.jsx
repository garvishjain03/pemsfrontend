import { ActionIcon, Button, Group, Modal, Text } from "@mantine/core";
import React, { useState } from "react";
import { BiError } from "react-icons/bi";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { store } from "../../../store";
import WorkOrderForm from "../Forms/WorkOrderForm";
import { ModelStyleObjSaleItem } from "./common/ModelStyle";
import ToolTipJSX from "./common/ToolTipJSX";

const WorkOrderOnItem = ({ row }) => {
	const [WorkOrderFormBool, setWorkOrderFormBool] = useState(false);

	const [wordOrderErrorMessage, setwordOrderErrorMessage] = useState({
		bool: false,
		data: [],
		message: "",
	});
	const handleTheValidationOfWorkOrder = () => {
		const tradedItem = [row?.original].filter(
			({ mpn }) => mpn === "TradedGoods"
		);
		if (tradedItem.length > 0) {
			setwordOrderErrorMessage({
				bool: true,
				data: tradedItem,
				message: "work order",
			});
			return;
		}

		const acceptedItemStatusNotPresent = [row?.original].filter(
			({ itemStatus }) =>
				itemStatus === "ACCEPTED" ||
				itemStatus === "INPRODUCTION" ||
				itemStatus === "INFGSTORE" ||
				itemStatus === "PARTIALLYPACKED" ||
				itemStatus === "PARTIALLYDISPATCHED"
		);

		if (acceptedItemStatusNotPresent.length > 0) {
			setWorkOrderFormBool(true);
		} else {
			setwordOrderErrorMessage({
				bool: true,
				data: acceptedItemStatusNotPresent,
				message: "work order",
			});
			return;
		}
	};

	const ModelErrorStyleObj = {
		drawer: { background: "rgb(248, 249, 250)" },
		close: {
			color: "#ffff",
			"&:hover": {
				color: "red",
			},
		},

		title: { color: "red", fontWeight: "600" },
		header: {
			padding: "14px",
			marginRight: "0px",
			borderBottom: "2px solid red",
		},

		body: {
			padding: "4px 16px 16px 16px",
			color: "red",
		},
	};
	const errorTitle = (
		<div style={{ display: "flex", alignItems: "center" }}>
			<BiError style={{ width: "20px", height: "20px", paddingRight: "4px" }} />{" "}
			ERROR
		</div>
	);
	const issueWorkOrderFormTitle = <>MPN: {row?.original?.mpn}</>;
	return (
		<>
			{" "}
			<ToolTipJSX label="issue work order">
				<ActionIcon
					variant="transparent"
					onClick={() => {
						store.dispatch({
							type: "addAll",
							payload: [row?.original],
						});
						handleTheValidationOfWorkOrder();
					}}>
					<BsFillFileEarmarkTextFill size={22} color="#339af0" />
				</ActionIcon>{" "}
			</ToolTipJSX>
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					opened={wordOrderErrorMessage.bool}
					withCloseButton={false}
					title={errorTitle}>
					{wordOrderErrorMessage.data.map(
						({ itemno, orderType, mpn, customerPartNo }) => {
							if (orderType === "Manufacture") {
								return (
									<Group position="left" direction="column">
										<Text fz="sm">
											{wordOrderErrorMessage.message} cannot be issued for Item
											MPN : <strong>{mpn}</strong>
										</Text>
									</Group>
								);
							}
							if (orderType === "Traded") {
								return (
									<Group position="left" direction="column">
										<Text fz="sm">
											{wordOrderErrorMessage.message} cannot be issued for Item
											no : <strong>{customerPartNo}</strong>
										</Text>
									</Group>
								);
							}
						}
					)}

					<Group position="right" mt={"md"}>
						<Button
							color={"red"}
							onClick={() => {
								setwordOrderErrorMessage({
									bool: false,
									data: [],
								});
							}}>
							Close
						</Button>
					</Group>
				</Modal>
			</>{" "}
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObjSaleItem}
					size="90%"
					opened={WorkOrderFormBool}
					onClose={() => {
						setWorkOrderFormBool(false);
					}}
					title={issueWorkOrderFormTitle}>
					{" "}
					<div>
						<WorkOrderForm setWorkOrderFormBool={setWorkOrderFormBool} />
					</div>
				</Modal>
			</>
		</>
	);
};
export default WorkOrderOnItem;
