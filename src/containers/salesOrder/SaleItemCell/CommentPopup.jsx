import {
	Avatar,
	Badge,
	Button,
	Group,
	Modal,
	Paper,
	Text,
	Textarea,
	Timeline,
} from "@mantine/core";
import dayjs from "dayjs";
import TimeDiff from "js-time-diff";
import React, { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { useSelector } from "react-redux";
import { badgeRolesColor } from "../../../configs/badgeRoles";
import { commentStatusColorConfig } from "../../../configs/commentStatusColorConfig";
import { getCommentOnItem } from "../../../services/SaleItem";
import { store } from "../../../store";
import { message } from "../../../utils/message";
import { translate } from "../../../utils/translate";
import { ModelStyleObjSaleItem } from "./common/ModelStyle";

const CommentPopup = ({ row, setcommentModel, commentModel }) => {
	const { ItemComments, roles } = useSelector(state => ({
		ItemComments: state.ItemComments,
		roles: state?.user?.data,
	}));
	const { orderid, id } = row?.original ?? {};
	const [commentMsg, setcommentMsg] = useState("");
	const handleTheCommentForItem = () => {
		if (commentMsg === "") {
			message.error({
				message: translate(`FillTheBlank`),
			});
			return;
		}
		getCommentOnItem(orderid, id, commentMsg);

		setcommentModel(false);
		store.dispatch({
			type: "removeCommnets",
		});
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
	const roleIdToRoleTitle = id => {
		let title = "";
		roles?.map(item => {
			if (item.id === id) {
				title = item.title;
			}
		});

		return title;
	};
	const trimItemNo = row?.original?.itemno?.split("Q");
	return (
		<div>
			<Modal
				radius={8}
				padding={0}
				styles={ModelStyleObjSaleItem}
				size={"100%"}
				centered
				overflow={"inside"}
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
						<Text>MPN: {row?.original?.mpn}</Text>
					</Group>
				}>
				<Badge mb={"sm"}>Item No : {trimItemNo?.[0]}</Badge>
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
								roleid = "",
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
	);
};
export default CommentPopup;
