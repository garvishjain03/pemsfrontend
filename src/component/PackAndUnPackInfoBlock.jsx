import { ActionIcon, Card, Group, Modal, Table, Tooltip } from "@mantine/core";
import dayjs from "dayjs";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { SiGooglemessages } from "react-icons/si";
import PackingForm from "../containers/salesOrder/Forms/PackingForm";
import UnPackingForm from "../containers/salesOrder/Forms/UnPackingForm";
import {
	ModelSize,
	ModelStyleObj,
} from "../containers/salesOrder/SalesOrderItem";
import CommentFeature from "../helpers/columns/cells/CommentFeature";
import { store } from "../store";

const PackAndUnPackInfoBlock = ({ data, orderid, row, itemHistory }) => {
	const [editPackModal, setEditPackModal] = useState(false);
	const [editUnPackModal, setEditUnPackModal] = useState(false);
	const [id, setId] = useState(null);
	return (
		<>
			<Card shadow="sm" radius="md" mt={20} withBorder>
				<Card.Section withBorder mx={0} mt={-4} mb={8}>
					<center>
						<strong>Pack and Unpack Information Block</strong>
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
								<th>Operator</th>
							</tr>
						</thead>
						<tbody>
							{itemHistory?.PACKED?.map(element => {
								return (
									<tr>
										<td>Packed</td>
										<td>{element?.quantity ?? 0}</td>
										<td>{dayjs(element?.packingDate).format("DD-MM-YYYY")}</td>
										<td>{element?.user_details?.username}</td>
										{localStorage.getItem("active_role") == "SUPERADMIN" && (
											<td style={{ display: "flex" }}>
												{["PACKINGCOMPLETED", "DISPATCHED"].includes(
													data?.itemStatus
												) &&
													data?.allItems?.orderStatus != "ORDERCLOSED" && (
														<ActionIcon color="" variant="transparent">
															<AiFillEdit
																size={23}
																color="#339af0"
																onClick={() => {
																	setId(element.id);
																	store.dispatch({
																		type: "INDIVIDUAL_ITEM_DETAILS",
																		payload: row,
																	});
																	store.dispatch({
																		type: "INDIVIDUAL_ITEM",
																		payload: true,
																	});
																	setEditPackModal(true);
																}}
															/>
														</ActionIcon>
													)}
												<CommentFeature
													row={row}
													type={"salesitem"}
													historyId={element?.id}
												/>
											</td>
										)}
									</tr>
								);
							})}
							{itemHistory?.UNPACKED?.map(element => {
								return (
									<tr>
										<td>Unpacked</td>
										<td>{element?.quantity ?? 0}</td>
										<td>
											{element?.createdAt
												? dayjs(element?.createdAt).format("DD-MM-YYYY")
												: null}
										</td>
										<td>{element?.user_details?.username}</td>
										{localStorage.getItem("active_role") == "SUPERADMIN" && (
											<td style={{ display: "flex" }}>
												{/* ["PARTIALLYPACKED", "PACKINGCOMPLETED"].includes(
											data?.itemStatus
										) */}
												{["PACKINGCOMPLETED", "DISPATCHED"].includes(
													data?.itemStatus
												) &&
													data?.allItems?.orderStatus != "ORDERCLOSED" && (
														<ActionIcon
															color=""
															variant="transparent"
															onClick={() => {
																setId(element.id);
																store.dispatch({
																	type: "INDIVIDUAL_ITEM_DETAILS",
																	payload: row,
																});
																store.dispatch({
																	type: "INDIVIDUAL_ITEM",
																	payload: true,
																});
																setEditUnPackModal(true);
															}}>
															<AiFillEdit size={23} color="#339af0" />
														</ActionIcon>
													)}
												<CommentFeature row={row} type={"salesitem"} />
											</td>
										)}
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
				size="100%"
				opened={editPackModal}
				onClose={() => {
					setEditPackModal(false);
				}}
				title="EDIT PACK INFO">
				<div>
					<PackingForm
						setPackItem={setEditPackModal}
						orderid={orderid}
						type="edit"
						id={id}
					/>
					{/* <EditPackAndUnpackBlockForm
						data={data?.packingDetails?.[0]}
						setEditPackModal={setEditPackModal}
					/> */}
				</div>
			</Modal>
			<Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				size="100%"
				opened={editUnPackModal}
				onClose={() => {
					setEditUnPackModal(false);
				}}
				title="EDIT UNPACK INFO">
				<div>
					<UnPackingForm
						setUnPackItem={setEditUnPackModal}
						orderid={orderid}
						type="edit"
						id={id}
					/>
				</div>
			</Modal>
		</>
	);
};

export default PackAndUnPackInfoBlock;
