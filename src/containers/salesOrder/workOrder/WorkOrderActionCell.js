import {
	ActionIcon,
	Avatar,
	Badge,
	Button,
	Group,
	Modal,
	Paper,
	Text,
	Textarea,
	Timeline,
	Tooltip,
} from "@mantine/core";
import dayjs from "dayjs";
import TimeDiff from "js-time-diff";
import React, { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { useSelector } from "react-redux";
import AddMpnSuffix from "../../../component/AddMpnSuffix";
import IssueTCForm from "../../../component/IssueTCForm";
import TcIssueCompleted from "../../../component/TcIssueCompleted";
import WorkorderCancel from "../../../component/WorkorderCancel";
import { badgeRolesColor } from "../../../configs/badgeRoles";
import { commentStatusColorConfig } from "../../../configs/commentStatusColorConfig";
import {
	getCommentsByItemIdWorkOrder,
	saveCommentOnWorkOrderItem,
} from "../../../services/SaleItem";
// import { saveCommentOnWorkOrderItem } from "../../../services/salesOrder";
// saveCommentOnWorkOrderItem
import { store } from "../../../store";
import { message } from "../../../utils/message";
import { translate } from "../../../utils/translate";
import { ModelStyleObj } from "../modelCssObject/modelCssObject";

const WorkOrderActionCell = ({ row, column }) => {
	const [commentModel, setcommentModel] = useState(false);
	const [commentMsg, setcommentMsg] = useState("");

	const { ItemComments, roles } = useSelector(state => ({
		ItemComments: state.ItemComments,
		roles: state?.user?.data,
	}));

	const roleIdToRoleTitle = id => {
		let title = "";
		roles?.map(item => {
			if (item.id === id) {
				title = item.title;
			}
		});
		return title;
	};

	const roleIdToRoleSlug = id => {
		let slug = "";
		roles?.map(item => {
			if (item.id === id) {
				slug = item.slug;
			}
		});
		return slug;
	};

	const handleTheCommentForItem = () => {
		const { id: workorderid, itemid, orderid } = row.original;

		if (commentMsg === "") {
			message.error({
				message: translate(`FillTheBlank`),
			});
			return;
		}
		saveCommentOnWorkOrderItem(workorderid, orderid, itemid, commentMsg);

		setcommentModel(false);
		store.dispatch({
			type: "removeCommnets",
		});
	};
	let tcNo = [],
		status = [];
	const hasAcceptedTc = () => {
		const issueTcsStatus = row?.original?.issueTcWorkorder?.map(ele => {
			if (ele?.tcMapper?.isAccepted === "YES") {
				tcNo.push(ele?.tcMapper?.tcno);
				status.push(ele?.tcMapper?.status);
			}
			return ele?.tcMapper?.isAccepted === "YES";
		});
		return issueTcsStatus.some(i => i === true);
	};
	return (
		<>
			<div style={{ display: "flex" }}>
				{/* <Center> */}

				{localStorage.getItem("active_role") === "PRODUCTIONPL" &&
					row?.original?.status !== "ONHOLD" && (
						<WorkorderCancel
							data={row.original}
							hasAcceptedTc={hasAcceptedTc()}
							tcNo={tcNo}
							status={status}
						/>
					)}

				{column.showCellElements?.issueTc &&
					!["TCISSUEDCOMPLETED", "ONHOLD"].includes(row.original.status) && (
						<IssueTCForm data={row?.original} />
					)}

				{column.showCellElements?.addMpnsuffix &&
					row.original?.status == "PENDING" &&
					row.original?.workorderno?.slice(2, 4) == "01" && (
						<AddMpnSuffix data={row.original} />
					)}
				{column.showCellElements?.tcIssuedCompleted &&
					!["PENDING", "ONHOLD"].includes(row.original.status) && (
						<TcIssueCompleted data={row?.original} />
					)}
				{column.showCellElements?.comment && (
					<Tooltip label="comment">
						<ActionIcon
							color="#339af0"
							variant="transparent"
							onClick={() => {
								setcommentModel(true);
								getCommentsByItemIdWorkOrder(row.original.id);
							}}>
							<SiGooglemessages size={29} />
						</ActionIcon>
					</Tooltip>
				)}
				{/* {column.showCellElements?.comment && (
					<Tooltip label="comment" style={{ paddingBottom: "4px" }}>
						<ActionIcon
							variant="transparent"
							onClick={() => {
								setcommentModel(true);
								getCommentsByItemIdWorkOrder(row.original.id);
							}}>
							<SiGooglemessages size={29} color="#339af0" />
						</ActionIcon>{" "}
					</Tooltip>
				)} */}
			</div>
			<div>
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size={"100%"}
					centered
					opened={commentModel}
					onClose={() => {
						setcommentModel(false);
						store.dispatch({
							type: "removeCommnets",
						});
					}}
					title={
						<Group direction="row">
							<BiMessageDetail size="24px" />
							<Text>Comments</Text>
						</Group>
					}>
					<Badge mb={"sm"}>Work Order No:{row?.original?.workorderno}</Badge>
					<Paper
						shadow="sm"
						p="sm"
						withBorder
						mb="xl"
						style={{
							gap: "8px",
						}}>
						<Textarea
							placeholder="Your comment ..."
							withAsterisk
							style={{ width: "100%" }}
							onChange={e => {
								const value = e.target.value;
								setcommentMsg(value);
							}}
						/>
						<Button
							onClick={handleTheCommentForItem}
							mt={"sm"}
							style={{ display: "flex", justifySelf: "right" }}>
							Comment
						</Button>
					</Paper>
					<Timeline>
						{ItemComments.length > 0 ? (
							ItemComments?.map(Obj => {
								const {
									comments = "",
									events = "",
									createdAt = "",
									userdetails = {},
									roleid,
								} = Obj ?? {};
								const { username, defaultRole } = userdetails;
								return (
									<Timeline.Item
										active={true}
										lineActive={true}
										bulletSize={32}
										color={commentStatusColorConfig(events)}>
										<Paper
											shadow="sm"
											p="sm"
											withBorder
											mb="xl"
											style={{ background: "#FAF9F6" }}>
											<Group position="apart">
												<Badge size={"xs"}>{TimeDiff(createdAt)}</Badge>
												<Group style={{ gap: "0px" }}>
													<Avatar
														radius="xl"
														size={"md"}
														src={`data:image/jpeg;base64, ${userdetails?.user_profile[0]?.blob_data}`}
														alt="abc"
													/>
													<Group direction={"column"} style={{ gap: "0px" }}>
														<Text size="xs" ml={"sm"} color="dimmed">
															{username}
														</Text>

														<Badge
															size="sm"
															color={badgeRolesColor(roleIdToRoleSlug(roleid))}>
															{roleIdToRoleTitle(roleid)}
														</Badge>
													</Group>
												</Group>
											</Group>
											<Text color="gray" p={"sm"}>
												{comments}
											</Text>
											<Group position="apart">
												<Text color="dimmed" size="xs">
													{dayjs(createdAt).format("DD/MM/YYYY h:mm A")}
												</Text>
												<Text color="dimmed" size="xs">
													EVENT:
													<Badge
														size="sm"
														color={commentStatusColorConfig(events)}>
														{events ?? "COMMENT"}
													</Badge>
												</Text>
											</Group>
										</Paper>
									</Timeline.Item>
								);
							})
						) : (
							<div
								style={{
									textAlign: "center",
								}}>
								No Comments
							</div>
						)}
					</Timeline>
				</Modal>
			</div>
		</>
	);
};
export default WorkOrderActionCell;
