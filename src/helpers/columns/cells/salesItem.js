import { Center, Text, Tooltip } from "@mantine/core";
import dayjs from "dayjs";
import React, { useMemo, useState } from "react";
import AddMpnSuffix from "../../../component/AddMpnSuffix";
import MpnTipToolMapper from "../../../component/MpnTipToolMapper";
import EditItem from "../../../containers/salesOrder/EditItem";
import AcceptTheItem from "../../../containers/salesOrder/SaleItemCell/AcceptTheItem.jsx";
import CancelTheItem from "../../../containers/salesOrder/SaleItemCell/CancelTheItem.jsx";
import CommentOnItems from "../../../containers/salesOrder/SaleItemCell/CommentOnItems.jsx";
import CommentPopup from "../../../containers/salesOrder/SaleItemCell/CommentPopup.jsx";
import DeliverySummary from "../../../containers/salesOrder/SaleItemCell/DeliverySummary";
import DispatchOrder from "../../../containers/salesOrder/SaleItemCell/DispatchOrder";
import HoldTheItem from "../../../containers/salesOrder/SaleItemCell/HoldTheItem.jsx";
import MarkAsAcceptTheItem from "../../../containers/salesOrder/SaleItemCell/MarkAsAcceptTheItem";
import PackOrder from "../../../containers/salesOrder/SaleItemCell/PackOrder";
import PPCommentOnItem from "../../../containers/salesOrder/SaleItemCell/PPCommentOnItem.jsx";
import ProcurementTheItem from "../../../containers/salesOrder/SaleItemCell/ProcurementTheItem.jsx";
import RecheckTheItem from "../../../containers/salesOrder/SaleItemCell/RecheckTheItem.jsx";
import ReturnOrder from "../../../containers/salesOrder/SaleItemCell/ReturnOrder";
import UnHoldTheItem from "../../../containers/salesOrder/SaleItemCell/UnHoldTheItem.jsx";
import UnPackOrder from "../../../containers/salesOrder/SaleItemCell/UnPackOrder";
import WorkOrderOnItem from "../../../containers/salesOrder/SaleItemCell/WorkOrderOnItems.jsx";
import "./salesItem.css";
import Logs from "../../../component/Logs";

export const SalesItemOrderDateCell = ({ row }) => {
	return dayjs(row.original?.orderDate).format("DD/MM/YYYY");
};

export const SalesItemScheduleDateCell = ({ row }) => {
	return dayjs(row.original?.scheduleDate).format("DD-MM-YYYY");
};

export const SalesItemCommitedDateCell = ({ row }) => {
	return row.original?.commitedDate
		? dayjs(row.original?.commitedDate).format("DD-MM-YYYY")
		: "";
};

export const SalesItemCreatedAtCell = ({ row }) => {
	return dayjs(row.original?.createdAt).format("DD-MM-YYYY");
};

export const SalesItemUpdatedAtCell = ({ row }) => {
	return dayjs(row.original?.updatedAt).format("DD-MM-YYYY");
};

export const SalesItemDelivarySummaryCell = ({ row }) => (
	<DeliverySummary row={row} />
);

export const itemMpnCell = ({ row }) => {
	const {
		mpn,
		orderType,
		partNo,
		wattage,
		type,
		tolerance,
		ohms,
		surge,
		unit,
	} = row.original;

	return (
		<MpnTipToolMapper
			orderType={orderType}
			partNo={partNo}
			mpn={mpn}
			wattage={wattage}
			type={type}
			tolerance={tolerance}
			ohms={ohms}
			surge={surge}
			unit={unit}
		/>
	);
};

export const SalesItemActionCell = ({ row, column }) => {
	const [commentModel, setcommentModel] = useState(false);
	const { id, itemStatus, mpn, orderType } = row.original;

	const ToolTipJSX = props => {
		const [zIndex, setzIndex] = useState(1000);
		return (
			<div
				onMouseEnter={() => {
					setzIndex(1000);
				}}
				onClick={() => {
					setzIndex(100);
				}}
				onMouseLeave={() => {
					setzIndex(150);
				}}>
				<Tooltip zIndex={zIndex} color="dark" withArrow label={props.label}>
					{props.children}
				</Tooltip>
			</div>
		);
	};

	let allTcsPending = () => {
		let allPending = true;
		let unActiveWorkorder = true;
		row.original?.workorder_item?.forEach(data => {
			if (["INPROGRESS", "TCISSUEDCOMPLETED"].includes(data?.status)) {
				unActiveWorkorder = false;
			}
			if (data?.status != "PENDING") {
				allPending = false;
			}
		});
		if (allPending) return true;
		if (!unActiveWorkorder) {
			let unActiveTc = true;
			row.original?.issueTcItem?.forEach(ele => {
				if (ele?.tcMapper?.status != "PENDING") {
					unActiveTc = false;
				}
			});
			return unActiveTc;
		}
		return false;
	};

	let tcNo = [],
		status = [];
	const tcIsAccepted = () => {
		const issueTcsStatus = row.original?.issueTcItem?.map(item => {
			if (item?.tcMapper?.isAccepted === "YES") {
				if (!tcNo.includes(item?.tcMapper?.tcno)) {
					tcNo.push(item?.tcMapper?.tcno);
					status.push(item?.tcMapper?.status);
				}
			}
			return item?.tcMapper?.isAccepted === "YES";
		});
		return issueTcsStatus.some(i => i === true);
	};

	let jsx = null;

	if (localStorage.getItem("active_role") !== "PRODUCTIONPL") {
		jsx = (
			<>
				<div>
					{column.showCellElements?.addMpnsuffix &&
						(row.original?.itemStatus === "ACCEPTED" ||
							(row.original?.itemStatus === "INPRODUCTION" &&
								allTcsPending())) && <AddMpnSuffix data={row.original} />}
				</div>
				<div>
					{column.showCellElements?.comment && (
						<CommentOnItems id={id} setcommentModel={setcommentModel} />
					)}
				</div>
				<div>
					{column.showCellElements?.accept &&
						(itemStatus === "PENDING" || itemStatus === "RECHECK") && (
							<AcceptTheItem row={row} setcommentModel={setcommentModel} />
						)}
				</div>
				<div>
					{column.showCellElements?.cancel &&
						[
							"PENDING",
							"RECHECK",
							"ACCEPTED",
							"INPRODUCTION",
							"INFGSTORE",
						].includes(itemStatus) && (
							<CancelTheItem
								row={row}
								tcIsAccepted={tcIsAccepted()}
								status={status}
								tcNo={tcNo}
							/>
						)}
				</div>
			</>
		);
	} else if (localStorage.getItem("active_role") === "PRODUCTIONPL") {
		jsx = (
			<>
				<div>
					{column.showCellElements?.issueWorkorder &&
						[
							"ACCEPTED",
							"INPRODUCTION",
							"INFGSTORE",
							"PARTIALLYPACKED",
							"PARTIALLYDISPATCHED",
						].includes(itemStatus) &&
						orderType === "Manufacture" && <WorkOrderOnItem row={row} />}
				</div>
				<div>
					{column.showCellElements?.recheck && itemStatus === "ACCEPTED" && (
						<RecheckTheItem row={row} />
					)}
				</div>
				<div>
					{column.showCellElements?.hold &&
						(itemStatus === "ACCEPTED" ||
							itemStatus === "INPRODUCTION" ||
							itemStatus === "PACKINGCOMPLETED" ||
							itemStatus === "PARTIALLYPACKED" ||
							itemStatus === "PARTIALLYDISPATCHED" ||
							itemStatus === "INFGSTORE") && <HoldTheItem row={row} />}
				</div>
				<div>
					{column.showCellElements?.unhold && itemStatus === "ITEMONHOLD" && (
						<UnHoldTheItem setcommentModel={setcommentModel} row={row} />
					)}
				</div>
				<div>
					{column.showCellElements?.procurement &&
						["ACCEPTED", "PARTIALLYDISPATCHED"].includes(itemStatus) &&
						mpn === "TradedGoods" && (
							<ProcurementTheItem setcommentModel={setcommentModel} row={row} />
						)}
				</div>
				<div>
					{column.showCellElements?.markAsAccept &&
						itemStatus === "PROCUREMENT" && (
							<MarkAsAcceptTheItem
								setcommentModel={setcommentModel}
								row={row}
							/>
						)}
				</div>

				<div>
					{column.showCellElements?.comment && (
						<PPCommentOnItem setcommentModel={setcommentModel} row={row} />
					)}
				</div>
			</>
		);
	}
	return (
		<>
			<Center>
				{column.showCellElements?.pack &&
					[
						"ACCEPTED",
						"INPRODUCTION",
						"INFGSTORE",
						"PARTIALLYPACKED",
						"PARTIALLYDISPATCHED",
					].includes(itemStatus) && <PackOrder row={row} />}
				{column.showCellElements?.unpack &&
					// ["PARTIALLYPACKED", "PACKINGCOMPLETED",""].includes(itemStatus) &&
					row?.original?.packingDetails?.[0]?.packingquantity > 0 && (
						<UnPackOrder row={row} />
					)}
				{column.showCellElements?.dispatch &&
					[
						"PARTIALLYPACKED",
						"PACKINGCOMPLETED",
						"PARTIALLYDISPATCHED",
					].includes(itemStatus) && <DispatchOrder row={row} />}
				{column.showCellElements?.return &&
					(["PARTIALLYDISPATCHED", "DISPATCHED"].includes(itemStatus) ||
						row?.original?.dispatchedDetails?.[0]?.totaldispatchqty > 0) &&
					row?.original?.dispatchedDetails?.[0]?.totaldispatchqty !==
						row?.original?.returnDetails?.[0]?.returnquantity && (
						<ReturnOrder row={row} />
					)}
				<div className="saleItemIcons">
					{column.showCellElements?.edit &&
						!["CANCELLED", "ITEMONHOLD"].includes(itemStatus) && (
							<EditItem defaultValues={row?.original} />
						)}
					{jsx}
				</div>
				{/* <Logs id={row?.original?.id} type={"itemid"} number={"ITEMNO"} /> */}
				<CommentPopup
					row={row}
					setcommentModel={setcommentModel}
					commentModel={commentModel}
				/>
			</Center>
		</>
	);
};
