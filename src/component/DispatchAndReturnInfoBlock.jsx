import {
	ActionIcon,
	Card,
	Group,
	Modal,
	Table,
	Text,
	Tooltip,
} from "@mantine/core";
import dayjs from "dayjs";
import React from "react";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { SiGooglemessages } from "react-icons/si";
import EditDispatchAndReturnBlockForm from "../containers/salesOrder/Forms/EditDispatchAndReturnBlockForm";
import { ModelStyleObj } from "../containers/salesOrder/SalesOrderItem";
import CommentFeature from "../helpers/columns/cells/CommentFeature";

const DispatchAndReturnInfoBlock = ({ row, data, orderid, itemHistory }) => {
	function findDifferenceBetweenDates(commitedDate, dispatchDate) {
		const diff = dayjs(dispatchDate).diff(dayjs(commitedDate), "day");
		return Math.max(diff, 0);
	}
	const [dispatchModal, setDispatchModal] = useState(false);
	const [returnModal, setReturnModal] = useState(false);
	const [history, setHistory] = useState(null);
	return (
		<>
			<Card shadow="sm" radius="md" mt={8} withBorder>
				<Card.Section withBorder mx={0} mt={-4} mb={8}>
					<center>
						<strong>Dispatch and Return Information Block</strong>
					</center>
				</Card.Section>
				{/* {data?.packingDetails?.map(item => ( */}
				<Group direction="row" position="apart" mb="sm">
					{/* <div>
    <Text size="sm">
      <strong>Qunatity : </strong> {item?.packingquantity}
    </Text>
  </div> */}
					<Table horizontalSpacing="xl">
						<thead>
							<tr>
								<th>Action</th>
								<th>Quantity</th>
								<th>Date</th>
								<th>Invoice No</th>
								<th>Invoice Date</th>
								<th>Operator</th>
								<th>Delay</th>
								<th>Delay Reasons</th>
							</tr>
						</thead>
						<tbody>
							{itemHistory?.DISPATCHED?.map(element => {
								return (
									<tr>
										<td>Dispatched</td>
										<td>{element?.quantity ?? 0}</td>
										<td>{dayjs(element?.dispatchDate).format("DD-MM-YYYY")}</td>
										<td>{element?.invoiceNo}</td>
										<td>{dayjs(element?.invoiceDate).format("DD-MM-YYYY")}</td>
										<td>{element?.user_details?.username}</td>
										<td>
											{findDifferenceBetweenDates(
												data?.commitedDate,
												element?.dispatchDate
											)}
										</td>
										<td>
											{element?.itemhistorydelayreason
												?.slice(0, 2)
												?.map(obj => (
													<Text>{obj?.delayreasondata?.label}</Text>
												))}
										</td>
										{localStorage.getItem("active_role") == "SUPERADMIN" &&
											data?.allItems?.orderStatus != "ORDERCLOSED" &&
											["DISPATCHED", "PARTIALLYDISPATCHED"].includes(
												data.itemStatus
											) && (
												<td style={{ display: "flex" }}>
													<ActionIcon
														color=""
														variant="transparent"
														onClick={() => {
															setHistory(element);
															setDispatchModal(true);
														}}>
														<AiFillEdit size={23} color="#339af0" />
													</ActionIcon>
													<CommentFeature row={row} type={"salesitem"} />
												</td>
											)}
									</tr>
								);
							})}
							{itemHistory?.RETURN?.map(element => {
								return (
									<tr>
										<td>Returned</td>
										<td>{element?.quantity ?? 0}</td>
										<td>{dayjs(element?.createdAt).format("DD-MM-YYYY")}</td>
										<td>{element?.invoiceNo}</td>
										<td>NA</td>
										<td>{element?.user_details?.username}</td>
										<td></td>
										<td>NA</td>
										{/* {localStorage.getItem("active_role") == "SUPERADMIN" && (
									<td style={{ display: "flex" }}>
										<ActionIcon
											color=""
											variant="transparent"
											onClick={() => {
												// setReturnModal(true);
											}}>
											<AiFillEdit size={23} color="#339af0" />
										</ActionIcon>
										<Tooltip label="comment">
											<ActionIcon color="#339af0" variant="transparent">
												<SiGooglemessages size={29} />
											</ActionIcon>
										</Tooltip>
									</td>
								)} */}
									</tr>
								);
							})}
						</tbody>
					</Table>
				</Group>
				{/* ))} */}
			</Card>
			<Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				size="auto"
				opened={dispatchModal}
				onClose={() => {
					setDispatchModal(false);
				}}
				title="EDIT DISPATCH INFO">
				<div>
					<EditDispatchAndReturnBlockForm
						type="edit"
						setModal={setDispatchModal}
						data={{
							dispatchDate: history?.dispatchDate,
							invoiceNo: history?.invoiceNo,
							dispatchQty: history?.quantity,
							invoiceDate: history?.invoiceDate,
							status: data?.itemStatus,
							orderquantity: data?.orderquantity,
							workorderItem: data?.workorder_item,
						}}
						id={data?.id}
						orderid={orderid}
						historyId={history?.id}
					/>
				</div>
			</Modal>
			{/* <Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				size="auto"
				opened={returnModal}
				onClose={() => {
					setReturnModal(false);
				}}
				title="EDIT RETURN INFO">
				<div>
					<EditDispatchAndReturnBlockForm
						type="return"
						setModal={setReturnModal}
						data={{
							returnDetails: data?.returnDetails?.[0],
							returniteminvoice: data?.returniteminvoice?.[0],
						}}
						orderid={orderid}
					/>
				</div>
			</Modal> */}
		</>
	);
};

export default DispatchAndReturnInfoBlock;
