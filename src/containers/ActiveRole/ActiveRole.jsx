import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { sidebarConfig } from "../../configs/sidebarConfig";
// Icons
import { FaUserCircle } from "react-icons/fa";

// Mantine UI
import { Group, Popover, Stack, Text, Avatar, ScrollArea } from "@mantine/core";
import { activeRole } from "../../redux/user/actions";
import { getPermissions } from "../../services/permission";
import { homePageConfig } from "../../configs/sidebarConfig/homepage";
import {
	getAllSalesOrders,
	getAllSalesOrdersForProduction,
	getCount,
} from "../../services/salesOrder";
import { useHistory } from "react-router-dom";
import { MdPanoramaPhotosphereSelect } from "react-icons/md";

const ActiveRole = () => {
	const [opened, setOpened] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	let navigate = useNavigate();

	const { user = {} } = useSelector(state => ({
		user: state.user.user,
	}));
	let active_role = localStorage.getItem("active_role");

	if (active_role == "STOREKEEPER") {
		active_role = "RM STOREKEEPER";
	}

	const paramresetHandler = () => {
		for (const key of searchParams.keys()) {
			searchParams.delete(key);
		}
		setSearchParams(searchParams);
	};

	return (
		<Popover
			opened={opened}
			onClose={() => setOpened(false)}
			position="bottom"
			radius="md"
			shadow="lg"
			spacing={4}
			withArrow
			target={
				<Group
					px="lg"
					py={4}
					sx={theme => ({
						backgroundColor: theme.colors.orange[1],
						cursor: "pointer",
						borderRadius: theme.radius.md,
						minWidth: "12rem",
					})}
					onClick={() => setOpened(true)}>
					{user?.user_profile ? (
						<Avatar
							radius="xl"
							src={`data:${user?.user_profile[0]?.blob_mimetype};base64,${user?.user_profile[0]?.blob_data}`}
							alt="abc"
						/>
					) : (
						<FaUserCircle size={24} />
					)}

					<Stack spacing={0}>
						<Text size="sm" transform="capitalize" weight={500}>
							{user.firstName} {user.lastName}
						</Text>

						<Text color="gray" size="sm" transform="capitalize">
							{active_role}
						</Text>
					</Stack>
				</Group>
			}>
			<ScrollArea
				style={user.userroles?.length > 9 && { height: 510 }}
				scrollbarSize={6}>
				<div>
					{user.userroles?.map((item, index) => (
						<Group
							px="lg"
							py={4}
							sx={theme => ({
								cursor: "pointer",
								borderRadius: theme.radius.md,
								minWidth: "14rem",
								"&:hover": {
									backgroundColor: theme.colors.orange[1],
								},
							})}
							key={index}
							onClick={() => {
								paramresetHandler();
								localStorage.setItem("active_role", item.allroles?.slug);
								localStorage.setItem("active_roleid", item?.roleid);
								activeRole(localStorage.getItem("active_role"));
								getPermissions(item?.roleid);

								setOpened(false);
								const _active_role = localStorage
									.getItem("active_role")
									.toLowerCase();

								navigate(homePageConfig[_active_role]);
							}}>
							{user?.user_profile ? (
								<Avatar
									radius="xl"
									src={`data:${user?.user_profile[0]?.blob_mimetype};base64,${user?.user_profile[0]?.blob_data}`}
									alt="abc"
								/>
							) : (
								<FaUserCircle size={24} />
							)}

							<Stack spacing={0}>
								<Text size="sm" transform="capitalize" weight={500}>
									{user.firstName} {user.lastName}
								</Text>

								<Text color="gray" size="sm" transform="capitalize">
									{item.allroles.title}
								</Text>
							</Stack>
						</Group>
					))}
				</div>
			</ScrollArea>
		</Popover>
	);
};

export default ActiveRole;
