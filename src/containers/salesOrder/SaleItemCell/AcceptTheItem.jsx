import {
	ActionIcon,
	Badge,
	Button,
	Group,
	Modal,
	Paper,
	Text,
	Textarea,
} from "@mantine/core";
import React, { useState } from "react";
import { BiError, BiMessageDetail } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { getChangeStateItemStatusToAcceptSingle } from "../../../services/SaleItem";
import { store } from "../../../store";
import ToolTipJSX from "./common/ToolTipJSX";

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

const AcceptTheItem = ({ row, setcommentModel }) => {
	const { orderid, id } = row?.original ?? {};
	const [AddcommentModel, setAddcommentModel] = useState(false);
	const [ActiveRowSelectedError, setActiveRowSelectedError] = useState(false);
	const [commentTxt, setcommentTxt] = useState("");
	const HandleTheAcceptItem = () => {
		const ItemEligibilyForNextStep = [row?.original].filter(
			({ itemStatus }) => itemStatus === "PENDING" || itemStatus === "RECHECK"
		);
		const DataPresent = [row?.original].filter(
			({ scheduleDate, commitedDate }) => {
				return commitedDate === null || scheduleDate === null;
			}
		);

		if ([row?.original].length !== ItemEligibilyForNextStep.length) {
			setActiveRowSelectedError(true);
		} else if (DataPresent.length > 0) {
			setActiveRowSelectedError(true);
		} else {
			setAddcommentModel(true);
		}
	};
	const handleTheComment = () => {
		getChangeStateItemStatusToAcceptSingle(orderid, id, commentTxt);

		setcommentModel(false);
		store.dispatch({
			type: "removeCommnets",
		});
	};
	const itemNo = row?.original?.itemno.split("Q");
	return (
		<>
			<ToolTipJSX label="Accept">
				<ActionIcon
					variant="transparent"
					onClick={() => {
						HandleTheAcceptItem();
					}}>
					<BsFillCheckCircleFill size={22} color="#65bb65" />
				</ActionIcon>
			</ToolTipJSX>
			<Modal
				radius={8}
				padding={0}
				styles={ModelErrorStyleObj}
				size={"lg"}
				opened={ActiveRowSelectedError}
				title={errorTitle}
				withCloseButton={false}>
				{[row?.original]
					.filter(
						({ itemStatus }) =>
							itemStatus !== "RECHECK" || itemStatus !== "PENDING"
					)

					.filter(({ scheduleDate, commitedDate }) => {
						return commitedDate === null || scheduleDate === null;
					})
					.map(({ itemno, orderType, mpn, customerPartNo }) => {
						if (orderType === "Manufacture") {
							return (
								<Group position="left" direction="column">
									<Text fz="sm">
										Item MPN : <strong>{mpn}</strong> can not be Accepted
									</Text>
								</Group>
							);
						}
						if (orderType === "Traded") {
							return (
								<Group position="left" direction="column">
									<Text fz="sm">
										{" "}
										Item no : <strong>{customerPartNo}</strong> can not be
										Accepted
									</Text>
								</Group>
							);
						}
					})}
				<Group position="right" mt={"md"}>
					<Button
						color={"red"}
						onClick={() => setActiveRowSelectedError(false)}>
						Close
					</Button>
				</Group>
			</Modal>
			<div>
				<Modal
					radius={8}
					padding={0}
					styles={{
						close: {
							color: "#ffff",
							"&:hover": {
								color: "red",
							},
						},
						title: { color: "#ffff", fontWeight: "600" },
						header: {
							padding: "20px",
							backgroundColor: "#228BE6",
							marginRight: "0px",
							borderRadius: "8px 8px 0px 0px",
						},
						body: {
							padding: "1rem",
						},
					}}
					size="xl"
					// opened={true}
					opened={AddcommentModel}
					onClose={() => {
						store.dispatch({
							type: "removeCommnets",
						});
						setAddcommentModel(false);
					}}
					title={
						<Group direction="row" alignItems="center">
							<BiMessageDetail size="24px" />
							{/* <Text>Add Comment</Text> */}
							<Text align="center">MPN: {row?.original?.mpn}</Text>
						</Group>
					}>
					<Paper
						shadow="sm"
						p="sm"
						withBorder
						style={{
							gap: "8px",
						}}>
						<Badge mb={"sm"}>Item No: {itemNo[0]}</Badge>
						<Textarea
							onChange={e => {
								setcommentTxt(e.target.value);
							}}
							style={{
								height: "7rem",
							}}
							placeholder={"Your Comment"}
							className="textarea"
						/>
						<div style={{ display: "flex", justifyContent: "right" }}>
							<Button onClick={handleTheComment} mt={"sm"}>
								Accept
							</Button>
						</div>
					</Paper>
				</Modal>
			</div>
		</>
	);
};
export default AcceptTheItem;
