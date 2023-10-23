import { ActionIcon, Center, Tooltip } from "@mantine/core";

import React from "react";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../configs/routes";
import { store } from "../../../store";
import CloseTheOrder from "../Forms/CloseTheOrder";
import { IoIosDoneAll } from "react-icons/io";
import { GrRevert } from "react-icons/gr";
import CommentPopup from "../SaleItemCell/CommentPopup";
import CommentOnItems from "../SaleItemCell/CommentOnItems";
import CommentFeature from "../../../helpers/columns/cells/CommentFeature";
import { auto } from "@popperjs/core";
import RevertClose from "../Forms/RevertClose";

const SalesAction = ({ row }) => {
	const [modal, setModal] = useState(false);
	const [revert, setRevert] = useState(false);
	const [commentModel, setcommentModel] = useState(false);
	const { id, itemStatus } = row.original;
	const {
		accepted_count,
		cancelled_count,
		dispatched_count,
		infgstore_count,
		inproduction_count,
		itemonhold_count,
		packingcompleted_count,
		partiallydispatched_count,
		partiallypacked_count,
		pending_count,
		procurement_count,
		recheck_count,
	} = row?.original?.itemsCount ? row?.original?.itemsCount : {};
	let showEditIcon;
	let allItemsCount =
		accepted_count +
		cancelled_count +
		dispatched_count +
		infgstore_count +
		inproduction_count +
		itemonhold_count +
		packingcompleted_count +
		partiallydispatched_count +
		partiallypacked_count +
		pending_count +
		procurement_count +
		recheck_count;
	showEditIcon = allItemsCount === pending_count ? true : false;
	const showEdit = ["PRODUCTIONPL", "DISPATCHOP", "SUPERADMIN"].includes(
		localStorage.getItem("active_role")
	)
		? false
		: true;
	const showComment = ["SUPERADMIN", "DISPATCHOP"].includes(
		localStorage.getItem("active_role")
	);
	const showRevertClose =
		localStorage.getItem("active_role") === "SUPERADMIN" ? true : false;
	const hideLink = ["SUPERADMIN", "DISPATCHOP"].includes(
		localStorage.getItem("active_role")
	);
	let showClose;
	showClose =
		localStorage.getItem("active_role") === "DISPATCHOP" ? true : false;
	return (
		<div
			style={{
				display: "flex",
			}}>
			<Center>
				{!hideLink && (
					<Link
						style={{
							padding: "0",
							margin: "0",
						}}
						target={"_blank"}
						to={{
							pathname: `${ROUTES.SALESITEMS}/${row?.original?.id}`,
						}}
						params={{ test: "hello" }}>
						<ActionIcon
							onClick={() => {
								localStorage.setItem("itemCode", row?.original?.orderno);
							}}>
							<GoLinkExternal size={24} color="#228be6" />
						</ActionIcon>
					</Link>
				)}{" "}
			</Center>{" "}
			<Center>
				{showEdit && showEditIcon && (
					<>
						<ActionIcon
							color="red"
							variant="transparent"
							onClick={() => {
								store.dispatch({
									type: "EditaddOrder",
									payload: { record: row.original, active: true },
								});
							}}>
							<AiFillEdit size={23} color="#339af0" />
						</ActionIcon>
					</>
				)}
			</Center>
			{showComment && (
				<Center>
					<CommentFeature row={row} type={"orderid"} />
				</Center>
			)}
			<Center style={{ paddingBottom: "8px" }}>
				{showClose && row?.original?.orderStatus == "DISPATCHED" && (
					<>
						<ActionIcon
							variant="transparent"
							onClick={() => {
								setModal(true);
								store.dispatch({
									type: "INDIVIDUAL_ITEM",
									payload: true,
								});
							}}>
							<Tooltip label="Close">
								<IoIosDoneAll size={40} color="green" />
							</Tooltip>
						</ActionIcon>
						{modal && (
							<CloseTheOrder
								data={row?.original}
								modalOpen={modal}
								setModalOpen={setModal}
							/>
						)}
					</>
				)}
			</Center>
			<Center style={{ paddingBottom: "8px" }}>
				{showRevertClose && row?.original?.orderStatus == "ORDERCLOSED" && (
					<>
						<ActionIcon
							variant="transparent"
							onClick={() => {
								setRevert(true);
								// store.dispatch({
								// 	type: "INDIVIDUAL_ITEM",
								// 	payload: true,
								// });
							}}>
							<Tooltip label="Revert Close">
								<GrRevert size={auto} color="green" />
							</Tooltip>
						</ActionIcon>
						<RevertClose
							revert={revert}
							setRevert={setRevert}
							data={row?.original}
						/>
					</>
				)}
			</Center>
		</div>
	);
};
export default SalesAction;
