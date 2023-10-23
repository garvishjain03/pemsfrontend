import {
	ActionIcon,
	Avatar,
	Badge,
	Divider,
	Group,
	Modal,
	Paper,
	Text,
	Tooltip,
} from "@mantine/core";
import dayjs from "dayjs";
import TimeDiff from "js-time-diff";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ModelStyleObj } from "../containers/salesOrder/SalesOrderItem";
import { commentStatusColorConfig } from "../configs/commentStatusColorConfig";
import { badgeRolesColor } from "../configs/badgeRoles";
import { MdOutlineHistory } from "react-icons/md";
import { BsInfoLg } from "react-icons/bs";
import { getLogs } from "../services/logs";
import { store } from "../store";
import { logsType } from "../redux/logs/type";

const Logs = ({ id, type, number }) => {
	const [info, setInfo] = useState(false);
	const [logModel, setLogModel] = useState(false);

	const { roles, logs } = useSelector(state => ({
		roles: state?.user?.data,
		logs: state?.logs?.logs?.rows,
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

	useEffect(() => {
		if (logModel) getLogs(id, type);
	}, [logModel]);

	return (
		<div>
			{" "}
			<Tooltip label="Logs">
				<ActionIcon
					variant="transparent"
					onClick={() => {
						setLogModel(true);
					}}>
					<MdOutlineHistory size={29} color="#339af0" />
				</ActionIcon>{" "}
			</Tooltip>
			<Modal
				overflow="inside"
				radius={8}
				padding={0}
				size={"97%"}
				styles={ModelStyleObj}
				centered
				opened={logModel}
				onClose={() => {
					store.dispatch({
						type: logsType.CLEAR_LOGS,
					});
					setLogModel(false);
				}}
				title={
					<Group direction="row">
						<MdOutlineHistory size="24px" />
						<Text>Logs</Text>
					</Group>
				}>
				<Badge mb={"sm"}>
					{number} :{" "}
					{logs?.[0]?.logsItemDetails?.itemno ?? logs?.[0]?.logsTcDetails?.tcno}
				</Badge>
				{logs?.length > 0 ? (
					logs?.map((Obj, i) => {
						const {
							events = "",
							createdAt = "",
							logsUserDetails = {},
							logsItemDetails = {},
							roleid = "",
							logsDetails = [],
						} = Obj ?? {};
						return (
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
												{logsUserDetails?.firstName +
													" " +
													logsUserDetails?.lastName}
											</Text>

											<Badge
												size="sm"
												color={badgeRolesColor(roleIdToRoleSlug(roleid))}>
												{roleIdToRoleTitle(roleid)}
											</Badge>
										</Group>
									</Group>
								</Group>
								{logsDetails?.map((ele, index) => {
									const infoDescription = `${events}, ${
										ele?.field
									} changed from ${
										(ele?.field).toLowerCase()?.includes("date")
											? dayjs(ele?.from).format("DD/MM/YYYY")
											: ele?.from
									} to ${
										(ele?.field).toLowerCase()?.includes("date")
											? dayjs(ele?.to).format("DD/MM/YYYY")
											: ele?.to
									} by ${
										logsUserDetails?.firstName + " " + logsUserDetails?.lastName
									} on ${dayjs(createdAt).format("DD/MM/YYYY")}  `;
									return (
										<>
											<Group position="center" grow>
												<Text color="gray" m={"xs"} p={"xs"} weight={500}>
													{ele?.field}
												</Text>
												<div>
													<Text
														color="dimmed"
														m={"xs"}
														p={"xs"}
														style={{
															background: "#FFC9C9",
															textDecoration: "line-through",
															// width: "fit-content",
															borderRadius: "0.2rem",
														}}
														weight={500}>
														{(ele?.field).toLowerCase()?.includes("date")
															? dayjs(ele?.from).format("DD/MM/YYYY")
															: ele?.from}
													</Text>
												</div>
												<div>
													<Text
														color="gray"
														m={"xs"}
														p={"xs"}
														style={{
															background: "#B2F2BB",
															// width: "fit-content",
															borderRadius: "0.2rem",
														}}
														weight={500}>
														{(ele?.field).toLowerCase()?.includes("date")
															? dayjs(ele?.to).format("DD/MM/YYYY")
															: ele?.to}
													</Text>
												</div>
												<Tooltip
													position="top-start"
													wrapLines
													width={300}
													radius={"sm"}
													transition="fade"
													transitionDuration={200}
													label={infoDescription}
													opened={i === info[0] && index === info[1]}
													withArrow>
													<ActionIcon
														onClick={() =>
															setInfo(
																i === info[0] && index === info[1]
																	? false
																	: [i, index]
															)
														}>
														<BsInfoLg color="#339af0" />
													</ActionIcon>
												</Tooltip>
											</Group>
											{logsDetails?.length - 1 !== index && <Divider />}
										</>
									);
								})}
								<Group position="apart">
									<Text weight={700} color="dimmed" size="xs">
										{dayjs(createdAt).format("DD/MM/YYYY h:mm A")}
									</Text>
									<Text weight={700} color="dimmed" size="xs">
										EVENT:
										<Badge size="sm" color={commentStatusColorConfig(events)}>
											{events ?? "EDIT"}
										</Badge>
									</Text>
								</Group>
							</Paper>
						);
					})
				) : (
					<div
						style={{
							textAlign: "center",
						}}>
						<Text>No Logs Available</Text>
					</div>
				)}
			</Modal>
		</div>
	);
};

export default Logs;
