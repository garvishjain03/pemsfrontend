// Mantine UI
import { Button, Group, Image, Modal, Select, Text } from "@mantine/core";
import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { LOGIN } from "../configs/routes";
import ActiveRole from "../containers/ActiveRole";
import { message } from "../utils/message";
import { translate } from "../utils/translate";
import dayjs from "dayjs";
import { DatePicker } from "@mantine/dates";
import HeaderForm from "./table/HeaderForm";

const Header = () => {
	const [dateModalOpened, setDateModalOpened] = useState(false);
	const handleLogout = () => {
		Cookies.remove("ACCESS_TOKEN");
		Cookies.remove("USER_ID");

		message.success({
			id: "logout",
			loading: true,
			title: "Logout",
			message: translate("LogoutSucessMessage"),
			disallowClose: true,
			onClose: () => {
				window.location.assign(LOGIN);
			},
		});
	};

	return (
		<>
			<Image
				width={129}
				height={46}
				src={require("../assets/MicrosoftTeams-image.png")}
				alt="Logo"
			/>
			<Group position="right">
				{["WINDINGOP", "CUTTINGOP", "WELDINGOP", "COATINGOP"].includes(
					localStorage.getItem("active_role")
				) && (
					<div
						onClick={() => setDateModalOpened(true)}
						style={{ cursor: "pointer" }}>
						<Text color="blue" weight={"bold"}>
							Date :{" "}
							{dayjs(localStorage.getItem("shift_date")).format("DD/MM/YYYY")}
						</Text>
						<Text color="blue" weight={"bold"}>
							Shift : {localStorage.getItem("shift")}
						</Text>
					</div>
				)}
				<div style={{ display: "flex", gap: 10 }}>
					<ActiveRole />
					<Button size={20} variant="subtle" onClick={() => handleLogout()}>
						<RiLogoutCircleRLine color="#E03131" />
					</Button>
				</div>
			</Group>
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
						padding: "4px 16px 16px 16px",
						color: "red",
						backgroundColor: "#DBE2E9",
						borderRadius: 8,
					},
				}}
				size={"sm"}
				opened={dateModalOpened}
				withCloseButton={false}>
				<HeaderForm setDateModalOpened={setDateModalOpened} />
			</Modal>
		</>
	);
};

export default Header;
