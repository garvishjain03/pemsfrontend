import { ActionIcon, Button, Group, Modal, Text, Tooltip } from "@mantine/core";
import React, { useState } from "react";
import { BiError } from "react-icons/bi";
import { MdErrorOutline, MdSend } from "react-icons/md";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { getIssuedTc } from "../services/issuedTc";
import { getCount } from "../services/salesOrder";
import { getURL } from "../utils/apiURL";
import { message } from "../utils/message";
import { translate } from "../utils/translate";

const TcSend = ({ row }) => {
	const [tcModalOpened, setTcModalOpened] = useState(false);
	const [issueTC] = useFetch([]);

	const { types } = useSelector(state => ({
		types: state.context?.types?.rows,
	}));

	const typeIdToLabel = id => {
		let label = "";
		types?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};

	const sendTcHandeler = async id => {
		const res = await issueTC(getURL(`actions/tc/tcsend`), {
			method: "PUT",
			body: JSON.stringify({
				tcids: [id],
			}),
		});

		if (res && res.status === 200) {
			getIssuedTc();
			getCount();
			message.success({ message: translate("TC Send Successfull") });
		}
	};

	const alertTitle = (
		<div style={{ display: "flex", alignItems: "center" }}>
			<MdErrorOutline
				style={{ width: "20px", height: "20px", paddingRight: "4px" }}
			/>{" "}
			ALERT
		</div>
	);
	const ModelAlertStyleObj = {
		drawer: { background: "rgb(248, 249, 250)" },
		title: { color: "orange", fontWeight: "600" },
		header: {
			padding: "14px",
			marginRight: "0px",
			borderRadius: "8px 8px 0px 0px",
			borderBottom: "2px solid orange",
		},
		body: {
			padding: "4px 16px 16px 16px",
		},
	};

	const errorTitle = (
		<div style={{ display: "flex", alignItems: "center" }}>
			<BiError style={{ width: "20px", height: "20px", paddingRight: "4px" }} />{" "}
			ERROR
		</div>
	);

	const ModelErrorStyleObj = {
		drawer: { background: "rgb(248, 249, 250)" },
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

	return (
		<>
			<Tooltip label="Send Tc">
				<ActionIcon
					color="green"
					variant="transparent"
					onClick={() => {
						setTcModalOpened(true);
					}}>
					<MdSend size={23} />
				</ActionIcon>
			</Tooltip>
			<Modal
				radius={8}
				padding={0}
				styles={
					(row.windingtype && row.windingwire && row.wirediameter) ||
					(row.binno && row.batchno)
						? ModelAlertStyleObj
						: ModelErrorStyleObj
				}
				size="lg"
				opened={tcModalOpened}
				withCloseButton={false}
				title={
					(row.windingtype && row.windingwire && row.wirediameter) ||
					(row.binno && row.batchno)
						? alertTitle
						: errorTitle
				}>
				{(row.windingtype && row.windingwire && row.wirediameter) ||
				(row.binno && row.batchno) ? (
					typeIdToLabel(row?.tcMapper[0]?.issueTcItem?.type) !==
					"Wire Wound Resistor" ? (
						<div>
							<Group position="left" direction="column">
								<Text>
									{" "}
									Tc will be send for <strong>CUTTING</strong>
								</Text>
							</Group>
							<Group position="right">
								<Button
									onClick={() => {
										sendTcHandeler(row?.id);
									}}
									mt="md">
									Send
								</Button>
								<Button
									color="red"
									onClick={() => {
										setTcModalOpened(false);
									}}
									mt="md">
									Close
								</Button>
							</Group>
						</div>
					) : (
						<div>
							<Group position="left" direction="column">
								<Text>
									{" "}
									Tc will be send for <strong>WINDING</strong>
								</Text>
							</Group>
							<Group position="right">
								<Button
									onClick={() => {
										sendTcHandeler(row?.id);
									}}
									mt="md">
									Send
								</Button>
								<Button
									color="red"
									onClick={() => {
										setTcModalOpened(false);
									}}
									mt="md">
									Close
								</Button>
							</Group>
						</div>
					)
				) : typeIdToLabel(row?.tcMapper[0]?.issueTcItem?.type) !==
				  "Wire Wound Resistor" ? (
					<div>
						<Group position="left" direction="column">
							<Text color="red">Bin No and Batch No are required!</Text>
						</Group>
						<Group position="right" mt="md">
							<Button
								color="red"
								onClick={() => {
									setTcModalOpened(false);
								}}>
								Close
							</Button>
						</Group>
					</div>
				) : (
					<div>
						<Group position="left" direction="column">
							<Text color="red">
								Winding Type, Winding Wire, Wire Dia, Quantity are required
							</Text>
						</Group>
						<Group position="right" mt="md">
							<Button
								color="red"
								onClick={() => {
									setTcModalOpened(false);
								}}>
								Close
							</Button>
						</Group>
					</div>
				)}
			</Modal>
		</>
	);
};

export default TcSend;
