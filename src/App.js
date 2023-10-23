// Mantine UI
import {
	AppShell,
	Burger,
	Button,
	Group,
	Header,
	MediaQuery,
	Modal,
	Navbar,
	Select,
	Text,
	useMantineTheme,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import DashBoardHeader from "./component/Header";
import Sidebar from "./component/sidebar/Sidebar";
import { LOGIN } from "./configs/routes";
import { sidebarConfig } from "./configs/sidebarConfig";
// Pages
import LoginPage from "./pages/Login";
import { activeRole } from "./redux/user/actions";
import Router from "./routes";
import {
	getCharacteristics,
	getCoreSizes,
	getCoresizesToLeadLengthandDia,
	getCustomers,
	getDelayReasons,
	getFormTypes,
	getHoldReasons,
	getLeadDias,
	getLeadLengths,
	getMpnSuffixLists,
	getShapes,
	getTcrs,
	getTolerances,
	getTypes,
	getWareHouse,
	getWattages,
	getWattageToCoresizes,
} from "./services/contextGetCalls";
import { getPermissions } from "./services/permission";
import { getAllRole } from "./services/role";
import { getUser } from "./services/user";
import HeaderForm from "./component/table/HeaderForm";
import { todayDateStyle } from "./utils/todayDateBg";

const App = () => {
	const [opened, setOpened] = useState(false);
	const [dateModalOpened, setDateModalOpened] = useState(false);
	const [navWidth, setNavWidth] = useState(275);
	const [expand, setExpand] = useState(true);
	const theme = useMantineTheme();

	const { active_role } = useSelector(state => ({
		active_role: state.user.active_role,
	}));
	useEffect(() => {
		setNavWidth(expand ? 275 : 75);
	}, [expand]);

	useEffect(() => {
		if (window.location.pathname === LOGIN) return;
		activeRole(localStorage.getItem("active_role"));

		getAllRole();
		getTypes();
		getCharacteristics();
		getTolerances();
		getTcrs();
		getShapes();
		getCoreSizes();
		getWareHouse();
		getCustomers("ALL");
		getWattageToCoresizes();
		getLeadLengths();
		getLeadDias();
		getFormTypes();
		getWattages();
		getCoresizesToLeadLengthandDia();
		getDelayReasons();
		getMpnSuffixLists();
		if (localStorage.getItem("active_role") === "PRODUCTIONPL") {
			getHoldReasons();
		}
		getPermissions(localStorage.getItem("active_roleid"));
	}, [active_role]);

	useEffect(() => {
		if (Cookies.get("USER_ID")) getUser(Cookies.get("USER_ID"));
		if (window.location.pathname === LOGIN) return;
		if (Cookies.get("ACCESS_TOKEN")) return;

		window.location.assign(LOGIN);
	}, []);

	const shiftDateMapper = role => {
		const status = {
			COATINGOP: true,
			CUTTINGOP: true,
			WELDINGOP: true,
			WINDINGOP: true,
		};
		return status[role];
	};

	useEffect(() => {
		const role = localStorage.getItem("active_role");
		shiftDateMapper(role)
			? setDateModalOpened(true)
			: setDateModalOpened(false);
	}, [localStorage.getItem("active_role")]);
	///
	useEffect(() => {
		const handleUnload = () => {
			localStorage.removeItem("itemCode");
			localStorage.removeItem("OANumber");
		};
		window.addEventListener("beforeunload", handleUnload);
		return () => {
			window.removeEventListener("beforeunload", handleUnload);
		};
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				{!Cookies.get("USER_ID") ? (
					<Route path={LOGIN} element={<LoginPage />} />
				) : (
					<Route
						path="*"
						element={
							<AppShell
								navbarOffsetBreakpoint="sm"
								fixed
								navbar={
									// <Transition
									// 	mounted={expand}
									// 	transition="scale-x"
									// 	duration={500}
									// 	timingFunction="ease">
									// 	{(style) => (
									<Navbar
										hiddenBreakpoint="xs"
										hidden={!opened}
										width={{ base: navWidth }}
										sx={theme => ({
											paddingLeft: expand ? theme.spacing.md : theme.spacing.xs,
											paddingRight: expand
												? theme.spacing.md
												: theme.spacing.xs,
											paddingTop: theme.spacing.md,
											borderRight: "8px solid #e9ecef",
										})}>
										<Sidebar
											config={
												sidebarConfig[
													localStorage.getItem("active_role").toLowerCase()
												]
											}
											expand={expand}
											setExpand={setExpand}
										/>
									</Navbar>
									// 	)}
									// </Transition>
								}
								header={
									<Header
										height={80}
										sx={theme => ({
											borderBottom: "8px solid #e9ecef ",
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											paddingLeft: theme.spacing.lg,
											paddingRight: theme.spacing.lg,
										})}>
										<MediaQuery largerThan="sm" styles={{ display: "none" }}>
											<Burger
												opened={opened}
												onClick={() => setOpened(curr => !curr)}
												size="sm"
												color={theme.colors.gray[6]}
												mr="xl"
											/>
										</MediaQuery>
										<DashBoardHeader />
									</Header>
								}>
								<Router />
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
							</AppShell>
						}
					/>
				)}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
