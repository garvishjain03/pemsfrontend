import {
	Collapse,
	Navbar,
	Paper,
	Popover,
	ScrollArea,
	Text,
	Tooltip,
} from "@mantine/core";
import React, { useEffect, useMemo, useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useSelector } from "react-redux";

import { itemShowOrNot, subMenugenrate } from "./helper";
import { getCount } from "../../services/salesOrder";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

import "./styles.css";

const Item = ({ item = {}, showText }) => {
	const [toolTipOpen, setToolTipPopOpen] = useState(false);
	const resolved = useResolvedPath(item.path);
	const { allcount } = useSelector(state => state.orders);
	const match = useMatch({
		path: resolved?.pathname,
		end: true,
	});

	let ShowpendingOrderCount = false;
	let orderCount = 0;

	let title = item?.title;
	//Issued TC and Work Orders
	// 	localStorage.getItem("active_role")
	// 'STOREKEEPER'
	const {
		AcceptRPendingCount = 0,
		recheckcount = 0,
		storeKeeperWorkOrderCount = 0,
		IssueTcStoreKeeperCount = 0,
		expiryCommitedDateCount = 0,
		dispatched_expiryCommitedDateCount = 0,
		acceptedBubbleCount = 0,
		active_count,
		dispatched_count,
		itemonhold_count,
		orderclosed_count,
		orderonhold_count,
		packingcompleted_count,
		pending_count,
		recheck_count,
	} = allcount ?? {};

	let allItemsCount =
		parseInt(active_count) +
		parseInt(dispatched_count) +
		parseInt(itemonhold_count) +
		parseInt(orderclosed_count) +
		parseInt(orderonhold_count) +
		parseInt(packingcompleted_count) +
		parseInt(pending_count) +
		parseInt(recheck_count);

	if (title === "Orders") {
		if (localStorage.getItem("active_role") == "PRODUCTIONPL") {
			ShowpendingOrderCount = true;
			orderCount = acceptedBubbleCount;
			if (acceptedBubbleCount <= 0) {
				ShowpendingOrderCount = false;
			}
		} else if (localStorage.getItem("active_role") === "PACKINGOP") {
			ShowpendingOrderCount = true;
			orderCount = expiryCommitedDateCount;
		} else if (localStorage.getItem("active_role") === "DISPATCHOP") {
			ShowpendingOrderCount = true;
			orderCount = dispatched_expiryCommitedDateCount;
		} else if (
			["ADMIN", "SUPERADMIN"].includes(localStorage.getItem("active_role"))
		) {
			ShowpendingOrderCount = false;
		} else {
			ShowpendingOrderCount = true;
			orderCount = [allItemsCount].includes(NaN) ? 0 : allItemsCount;
		}
	} else if (title === "Accepted Orders" || title === "Pending Orders") {
		ShowpendingOrderCount = true;
		orderCount = AcceptRPendingCount;
		if (AcceptRPendingCount <= 0) {
			ShowpendingOrderCount = false;
		}
	} else if (title === "Recheck Orders") {
		ShowpendingOrderCount = true;
		orderCount = recheckcount;
		if (recheckcount <= 0) {
			ShowpendingOrderCount = false;
		}
	} else if (
		title === "Issued TC" &&
		localStorage.getItem("active_role") === "STOREKEEPER"
	) {
		ShowpendingOrderCount = true;
		orderCount = IssueTcStoreKeeperCount;
		// if (recheckcount <= 0) {
		// 	ShowpendingOrderCount = false;
		// }
	} else if (
		title === "Work Orders" &&
		localStorage.getItem("active_role") === "STOREKEEPER"
	) {
		ShowpendingOrderCount = true;
		orderCount = storeKeeperWorkOrderCount;
		// if (recheckcount <= 0) {
		// 	ShowpendingOrderCount = false;
		// }
	}

	const GetCircleJSX = ({ length, orderCount }) => {
		return (
			<>
				{(length == 1 || length == 2) && (
					<span
						className="count_layoutOpen"
						style={{
							display: !showText && "none",
						}}>
						{orderCount}
					</span>
				)}

				{length == 3 && (
					<span
						className="count_layoutOpen count_layoutOpen_3"
						style={{
							display: !showText && "none",
						}}>
						{orderCount}
					</span>
				)}

				{length == 4 && (
					<span
						className="count_layoutOpen count_layoutOpen_4"
						style={{
							display: !showText && "none",
						}}>
						{orderCount}
					</span>
				)}

				{length == 5 && (
					<span
						className="count_layoutOpen count_layoutOpen_5"
						style={{
							display: !showText && "none",
						}}>
						{orderCount}
					</span>
				)}
			</>
		);
	};
	const ClosedGetCircleJSX = ({ length, orderCount }) => {
		return (
			<>
				{(length == 1 || length == 2) && (
					<div
						style={{
							display: showText && "none",
						}}
						className="Sidebar_badge">
						{orderCount}
					</div>
				)}

				{length == 3 && (
					<div
						style={{
							display: showText && "none",
						}}
						className="Sidebar_badge Sidebar_badge_3">
						{orderCount}
					</div>
				)}

				{length == 4 && (
					<div
						style={{
							display: showText && "none",
						}}
						className="Sidebar_badge Sidebar_badge_4">
						{orderCount}
					</div>
				)}

				{length == 5 && (
					<div
						style={{
							display: showText && "none",
						}}
						className="Sidebar_badge Sidebar_badge_5">
						{orderCount}
					</div>
				)}
			</>
		);
	};
	return (
		<Tooltip
			color="#339AF0"
			style={{ width: "100%" }}
			label={`${item.title}`}
			opened={!showText && toolTipOpen}
			transition="scale-x"
			transitionDuration={300}
			transitionTimingFunction="ease"
			position="right"
			placement="center">
			<Paper
				sx={theme => ({
					backgroundColor: Boolean(match) ? theme.colors.blue[5] : "#FFF",

					"&:hover": {
						backgroundColor: theme.colors.gray[5],
					},
				})}
				style={{
					position: "relative",
				}}>
				{orderCount !== 0 &&
					ShowpendingOrderCount &&
					localStorage.getItem("active_role") !== "PACKINGOP" && (
						<ClosedGetCircleJSX
							length={String(orderCount).length}
							orderCount={orderCount}
						/>
					)}

				<Text
					size="md"
					align="center"
					color={Boolean(match) ? "#FFF" : "#000"}
					mt="xs"
					p="sm"
					sx={() => ({
						textDecoration: "none",
						"&:hover": {
							color: "#FFF",
						},
					})}
					onMouseEnter={() => {
						setToolTipPopOpen(true);
					}}
					onMouseLeave={() => {
						setToolTipPopOpen(false);
					}}
					style={{}}
					component={Link}
					to={item.path}>
					{item.icon ? React.createElement(item.icon, { size: 20 }) : null}

					<span
						style={{
							display: showText ? "block" : "none",
							textOverflow: "ellipsis",
							overflow: "hidden",
							whiteSpace: "nowrap",
							verticalAlign: "middle",
							textAlign: "right",
						}}>
						{" "}
						<span
							style={{
								whiteSpace: "nowrap",
							}}>
							{" "}
							{item.title}{" "}
						</span>
						{orderCount !== 0 && ShowpendingOrderCount && (
							<GetCircleJSX
								length={String(orderCount).length}
								orderCount={orderCount}
							/>
						)}
						{/* {orderCount !== 0 && ShowpendingOrderCount && (
              <Badge> {orderCount}</Badge>
              )} */}
					</span>
				</Text>
			</Paper>
		</Tooltip>
	);
};
const InnerSubMenu = ({ showText, item }) => {
	const [subMenuExpand, setSubMenuExpand] = useState(false);
	const [popOpen, setPopOpen] = useState(false);
	const [toolTipOpen, setToolTipPopOpen] = useState(false);

	const match = item.subMenu.some(item => {
		return item.path === window.location.pathname;
	});

	return (
		<>
			<Popover
				opened={!showText && popOpen}
				onClose={() => setSubMenuExpand(false)}
				style={{ width: "100%" }}
				target={
					<Paper
						sx={theme => ({
							backgroundColor: Boolean(match) ? theme.colors.blue[5] : "#FFF",

							"&:hover": {
								backgroundColor: theme.colors.gray[5],
							},
						})}>
						<Text
							size="md"
							mt="xs"
							align="center"
							color={Boolean(match) ? "#FFF" : "#000"}
							p="sm"
							onMouseEnter={() => {
								setPopOpen(true);
								setToolTipPopOpen(true);
							}}
							onMouseLeave={() => {
								setPopOpen(false);
								setToolTipPopOpen(false);
							}}
							sx={() => ({
								textDecoration: "none",
								"&:hover": {
									color: "#FFF",
								},
							})}
							onClick={() => {
								setSubMenuExpand(!subMenuExpand);
								setPopOpen(true);
							}}
							component={Link}
							to={"#"}>
							<Text style={{ display: "inline " }}>{item.title}</Text>
							{showText ? (
								subMenuExpand ? (
									<MdExpandLess size={25} />
								) : (
									<MdExpandMore size={25} />
								)
							) : null}
						</Text>
					</Paper>
				}
				radius="lg"
				position="right"
				placement="start"
				gutter={3}
				width={200}
				withArrow
				transition="scale-x"
				transitionDuration={300}
				transitionTimingFunction="ease">
				{!showText ? (
					<Tooltip
						color="#339AF0"
						style={{ width: "100%" }}
						label={`${item.title}`}
						opened={!showText && toolTipOpen}
						transition="scale-x"
						transitionDuration={300}
						transitionTimingFunction="ease"
						position="top"
						placement="start"
						gutter={20}>
						<ScrollArea
							onMouseEnter={() => setPopOpen(true)}
							onMouseLeave={() => setPopOpen(false)}
							style={{
								height:
									item?.subMenu?.length > 5
										? "295px"
										: `${30 + item?.subMenu?.length * 20}px`,
								maxHeight: "295px",
								minHeight: "100px",
							}}>
							{item.subMenu.map(item => {
								return <Item showText={true} key={item.key} item={item} />;
							})}
						</ScrollArea>
					</Tooltip>
				) : null}
			</Popover>

			{showText ? (
				<Collapse
					in={subMenuExpand}
					transition="scale-y"
					transitionDuration={300}
					transitionTimingFunction="ease">
					<ScrollArea
						ml={20}
						mt={10}
						mb={30}
						px={showText ? "xs" : 0}
						style={{
							borderLeft: "0.25px gray solid",
							height:
								item?.subMenu?.length > 5
									? "295px"
									: `${60 + item?.subMenu?.length * 20}px`,
							maxHeight: "295px",
							minHeight: "100px",
						}}>
						{item.subMenu.map(item => {
							return (
								<Item
									showText={true}
									key={item.key}
									item={item}
									size={14}
									innerSubMenu={true}
								/>
							);
						})}
					</ScrollArea>
				</Collapse>
			) : null}
		</>
	);
};

const SubMenu = ({ showText, item }) => {
	const [subMenuExpand, setSubMenuExpand] = useState(false);
	const [popOpen, setPopOpen] = useState(false);
	const [toolTipOpen, setToolTipPopOpen] = useState(false);
	const match = item.subMenu.some(item => {
		if (item.subMenu) {
			return item.subMenu.some(subitem => {
				return subitem.path === window.location.pathname;
			});
		}
		return item.path === window.location.pathname;
	});

	return (
		<>
			<Popover
				opened={!showText && popOpen}
				onClose={() => setSubMenuExpand(false)}
				style={{ width: "100%" }}
				target={
					<Paper
						sx={theme => ({
							backgroundColor: Boolean(match) ? theme.colors.blue[5] : "#FFF",

							"&:hover": {
								backgroundColor: theme.colors.gray[5],
							},
						})}>
						<Text
							size="md"
							mt="xs"
							align="center"
							color={Boolean(match) ? "#FFF" : "#000"}
							p="sm"
							onMouseEnter={() => {
								setPopOpen(true);
								setToolTipPopOpen(true);
							}}
							onMouseLeave={() => {
								setPopOpen(false);
								setToolTipPopOpen(false);
							}}
							sx={() => ({
								textDecoration: "none",
								"&:hover": {
									color: "#FFF",
								},
							})}
							onClick={() => {
								setSubMenuExpand(!subMenuExpand);
								setPopOpen(true);
							}}
							component={Link}
							to={"#"}>
							{React.createElement(item.icon, { size: 20 })}

							{showText ? (
								<Text style={{ display: "inline " }}>{item.title}</Text>
							) : null}

							{showText ? (
								subMenuExpand ? (
									<MdExpandLess size={25} />
								) : (
									<MdExpandMore size={25} />
								)
							) : null}
						</Text>
					</Paper>
				}
				radius="lg"
				position="right"
				placement="start"
				gutter={3}
				width={200}
				withArrow
				transition="scale-x"
				transitionDuration={300}
				transitionTimingFunction="ease">
				{!showText ? (
					<Tooltip
						color="#339AF0"
						style={{ width: "100%" }}
						label={`${item.title}`}
						opened={!showText && toolTipOpen}
						transition="scale-x"
						transitionDuration={300}
						transitionTimingFunction="ease"
						position="top"
						placement="start"
						gutter={20}>
						<ScrollArea
							onMouseEnter={() => setPopOpen(true)}
							onMouseLeave={() => setPopOpen(false)}
							style={{ height: "300px" }}>
							{item.subMenu.map(item => {
								const _show = itemShowOrNot(item.subMenu);

								if (_show)
									return (
										<InnerSubMenu
											showText={showText}
											key={item.key}
											item={item}
										/>
									);

								if (item.subMenu) return null;
								return <Item showText={true} key={item.key} item={item} />;
							})}
						</ScrollArea>
					</Tooltip>
				) : null}
			</Popover>

			{showText ? (
				<Collapse
					in={subMenuExpand}
					transition="scale-y"
					transitionDuration={300}
					transitionTimingFunction="ease">
					<ScrollArea
						ml={20}
						mt={10}
						px={showText ? "xs" : 0}
						style={{ borderLeft: "0.25px gray solid", height: "295px" }}>
						{item.subMenu.map(item => {
							const _show = itemShowOrNot(item.subMenu);
							if (_show)
								return (
									<InnerSubMenu
										showText={showText}
										key={item.key}
										item={item}
									/>
								);

							if (item.subMenu) return null;
							return <Item showText={true} key={item.key} item={item} />;
						})}
					</ScrollArea>
				</Collapse>
			) : null}
		</>
	);
};

const Sidebar = ({ config = [], expand, setExpand }) => {
	const { permissionData = {} } = useSelector(state => ({
		permissionData: state.permission?.permissions,
	}));

	useEffect(() => {
		getCount();
	}, []);
	const updatedConfig = useMemo(() => {
		if (!config) return [];
		if (!permissionData) return [];

		const _config = config;

		const result = subMenugenrate(_config, permissionData);

		if (!Array.isArray(result)) return [];
		return result;
	}, [config, permissionData]);

	return (
		<>
			<div>
				<HiChevronLeft
					onClick={() => setExpand(curr => !curr)}
					className={expand ? "expandopen" : "expandopen expandclose"}
				/>
			</div>

			<Navbar.Section grow mt="md">
				{updatedConfig?.map(item => {
					const _show = itemShowOrNot(item.subMenu);

					if (_show)
						return <SubMenu showText={expand} key={item.key} item={item} />;
					if (item.subMenu) return null;
					return <Item showText={expand} key={item.key} item={item} />;
				})}
			</Navbar.Section>

			<Navbar.Section mb="md">
				{/* <SidebarItem
          showText={expand}
          item={{
          	title: "Settings",
          	key: "settings",
          	path: "/settings",
          	icon: <FiSettings />,
          }}
          /> */}
			</Navbar.Section>
		</>
	);
};

export default Sidebar;
