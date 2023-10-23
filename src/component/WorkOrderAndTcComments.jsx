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
import { useEffect } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { useSelector } from "react-redux";
import { fetchRequest } from "../utils/fetchRequest";
import { getURL } from "../utils/apiURL";
import { message } from "../utils/message";
import { translate } from "../utils/translate";
import { getComment } from "../services/comment";
import { ModelStyleObj } from "../containers/salesOrder/SalesOrderItem";
import { commentStatusColorConfig } from "../configs/commentStatusColorConfig";
import { badgeRolesColor } from "../configs/badgeRoles";

const WorkOrderAndTcComments = ({ row, type, orderId, itemId }) => {
	const rowData = row?.original;
	const [commentModel, setcommentModel] = useState(false);
	const [commentMsg, setcommentMsg] = useState("");
	const {
		comments = [],
		roles,
		dummycomment,
	} = useSelector(state => ({
		comments: state.comment?.comments,
		roles: state?.user?.data,
		dummycomment: state.comment,
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
	const addCommentHandler = async () => {
		let url = `comments`;
		let body;
		if (type === "issuetcid") {
			body = {
				orderid: orderId,
				itemid: itemId,
				issuetcid: row?.issuetcid,
				workorderid: row?.workorderid,
				comments: commentMsg,
				issuedTcPageOpen: true,
				roleid: localStorage.getItem("active_roleid"),
			};
		} else {
			body = {
				orderid: orderId,
				itemid: itemId,
				workorderid: row?.id,
				comments: commentMsg,
				workOrderPageOpen: true,
				roleid: localStorage.getItem("active_roleid"),
			};
		}
		const _res = await fetchRequest(getURL(url), {
			method: "POST",
			body: JSON.stringify(body),
		});
		if (_res && _res.status === 201) {
			setcommentMsg("");
			if (type === "issuetcid") getComment(`${type}=${row?.issuetcid}`);
			else {
				getComment(`workorderid/${row?.id}`, "workordercomments");
			}
			message.success({
				message: translate(`Comment Added`),
			});
		}
	};

	return (
		<div>
			{" "}
			<Tooltip label="comment">
				<ActionIcon
					style={{ marginBottom: "8px" }}
					variant="transparent"
					onClick={() => {
						setcommentModel(true);
						if (type === "issuetcid") getComment(`${type}=${row?.issuetcid}`);
						else {
							getComment(`workorderid/${row?.id}`, "workordercomments");
						}
					}}>
					<SiGooglemessages size={29} color="#339af0" />
				</ActionIcon>{" "}
			</Tooltip>
			<Modal
				radius={8}
				padding={0}
				size={"100%"}
				styles={ModelStyleObj}
				centered
				opened={commentModel}
				onClose={() => {
					setcommentModel(false);
				}}
				title={
					<Group direction="row">
						<BiMessageDetail size="24px" />
						<Text>Comments</Text>
					</Group>
				}>
				{type === "issuetcid" ? (
					<Badge mb={"sm"}>
						TC No : {row?.original?.tcno ?? row?.tcMapper?.tcno}
					</Badge>
				) : (
					<Badge mb={"sm"}>WorkOrder No : {row?.workorderno}</Badge>
				)}
				<Paper
					shadow="sm"
					p="sm"
					withBorder
					mb="xl"
					style={{
						gap: "8px",
					}}>
					<Textarea
						value={commentMsg}
						placeholder="Your comment ..."
						withAsterisk
						style={{ width: "100%" }}
						onChange={e => {
							const value = e.target.value;
							setcommentMsg(value);
						}}
					/>
					<Button
						onClick={() => {
							addCommentHandler();
						}}
						mt={"sm"}
						style={{ display: "flex", justifySelf: "right" }}>
						Comment
					</Button>
				</Paper>
				<Timeline>
					{comments.length > 0 ? (
						comments?.map(Obj => {
							const {
								comments = "",
								events = "",
								createdAt = "",
								userdetails = {},
								roleid = "",
							} = Obj ?? {};
							const { username } = userdetails;
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
													//	src={`data:image/jpeg;base64, ${userdetails?.user_profile[0]?.blob_data}`}
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
	);
};

export default WorkOrderAndTcComments;
