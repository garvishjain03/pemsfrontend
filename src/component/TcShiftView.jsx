import {
	ActionIcon,
	Badge,
	Button,
	Card,
	Divider,
	Grid,
	Group,
	Modal,
	Text,
	TextInput,
	Tooltip,
} from "@mantine/core";
import dayjs from "dayjs";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdDeleteOutline, MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import AddShiftForm from "../containers/salesOrder/Forms/AddShiftForm";
import EditShiftDetailsForm from "../containers/salesOrder/Forms/EditShiftDetailsForm";
import { ModelStyleObj } from "../containers/salesOrder/SalesOrderItem";
import { deleteShiftDetails } from "../services/issuedTc";
import TemporaryShiftDetails from "./TemporaryShiftDetails";

const TcShiftView = ({ data, type, temporaryEntries }) => {
	const [opened, setOpened] = useState(false);
	const [addModal, setAddModal] = useState(false);
	const [shiftDetails, setShiftDetails] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
	const [editShift, setEditShift] = useState("");
	const [deleteComment, setDeleteComment] = useState("");
	const [deleteCommentError, setDeleteCommentError] = useState(false);
	const { tcShift = {} } = useSelector(state => ({
		tcShift: state.IssuedTc?.tcShift,
	}));

	const cuttingTotal = () => {
		let total = 0;

		tcShift?.CUTTING?.map(item => {
			total = total + item.quantity;
		});
		localStorage.getItem("active_role").includes("CUTTING") &&
			temporaryEntries?.machineArray?.map(ele => {
				total += ele.quantity;
			});
		return total;
	};
	const weldingTotal = () => {
		let total = 0;
		tcShift?.WELDING?.map(item => {
			total = total + item.quantity;
		});
		localStorage.getItem("active_role").includes("WELDING") &&
			temporaryEntries?.machineArray?.map(ele => {
				total += ele.quantity;
			});
		return total;
	};
	const windingTotal = () => {
		let total = 0;
		tcShift?.WINDING?.map(item => {
			total = total + item.quantity;
		});
		localStorage.getItem("active_role").includes("WINDING") &&
			temporaryEntries?.machineArray?.map(ele => {
				total += (ele.quantity ?? 0) + (ele?.shift_quantity_tape ?? 0);
			});
		return total;
	};
	const coatingTotal = () => {
		let total = 0;
		tcShift?.COATING?.map(item => {
			total = total + item.quantity;
		});
		localStorage.getItem("active_role").includes("COATING") &&
			temporaryEntries?.machineArray?.map(ele => {
				total += ele.quantity;
			});
		return total;
	};

	const handleClick = () => {
		if (!deleteComment) {
			setDeleteCommentError(true);
			return;
		}
		setDeleteCommentError(false);
		deleteShiftDetails(shiftDetails?.shiftid, data?.id, {
			deleteComment: deleteComment,
			tcid: data?.id,
			shiftStatus: data?.status,
		});
	};

	return (
		<>
			{(Object.keys(tcShift).length > 0 ||
				temporaryEntries?.machineArray?.length > 0) && (
				<Card withBorder>
					<Grid mb={"md"}>
						<Grid.Col span={data?.windingtype === "Leaded" ? 2 : 3}>
							<Text size="sm">
								<strong>Operator </strong>
							</Text>
						</Grid.Col>
						<Grid.Col span={2}>
							<Text size="sm">
								<strong>Date </strong>
							</Text>
						</Grid.Col>
						<Grid.Col span={data?.windingtype === "Leaded" ? 1 : 2}>
							<Text size="sm">
								<strong>Machine </strong>
							</Text>
						</Grid.Col>
						{data?.windingtype === "Leaded" && (
							<Grid.Col span={1}>
								<Text size="sm">
									<strong>Quantity Tape </strong>
								</Text>
							</Grid.Col>
						)}
						{data?.windingtype === "Leaded" && (
							<Grid.Col span={1}>
								<Text size="sm">
									<strong>Quantity Bulk </strong>
								</Text>
							</Grid.Col>
						)}
						<Grid.Col span={2}>
							<Text size="sm">
								<strong>Quantity Total</strong>
							</Text>
						</Grid.Col>
						<Grid.Col span={data?.windingtype === "Leaded" ? 1 : 2}>
							<Text size="sm">
								<strong>Shift </strong>
							</Text>
						</Grid.Col>
						<Grid.Col span={1}>
							<Text size="sm">
								<strong>Action </strong>
							</Text>
						</Grid.Col>
						{tcShift?.CUTTING && (
							<Grid.Col span={12}>
								<Divider />
							</Grid.Col>
						)}
						{tcShift?.CUTTING && (
							<Grid.Col span={12}>
								<Badge size="lg">CUTTING</Badge>
							</Grid.Col>
						)}
						{tcShift?.CUTTING &&
							tcShift?.CUTTING?.map(item => {
								return (
									<>
										<Grid.Col span={3}>
											<Text size="sm">{item.shift_operator}</Text>
										</Grid.Col>
										<Grid.Col span={2}>
											<Text size="sm">
												{dayjs(item?.shift_date).format("DD/MM/YYYY")}
											</Text>
										</Grid.Col>
										<Grid.Col span={2}>
											<Badge color={"dark"}>{item.machine}</Badge>
										</Grid.Col>
										<Grid.Col span={2}>
											<Text size="sm">{item.quantity}</Text>
										</Grid.Col>
										<Grid.Col span={2}>
											<Text size="sm">{item.shift_type}</Text>
										</Grid.Col>
										{type == "edit" && (
											<Grid.Col span={1}>
												<Tooltip label="Edit Tc">
													<ActionIcon
														color="#339af0"
														variant="transparent"
														onClick={() => {
															setEditShift(item);
															setEditModal(true);
														}}>
														<AiFillEdit size={23} />
													</ActionIcon>
												</Tooltip>
												<Tooltip label="Add Shift Details">
													<ActionIcon
														color="blue"
														variant="transparent"
														onClick={() => {
															setAddModal(true);
															setShiftDetails(item);
														}}>
														<BsFillPlusCircleFill size={23} />
													</ActionIcon>
												</Tooltip>
												{tcShift?.CUTTING?.length > 1 && (
													<Tooltip label="Delete Shift Details">
														<ActionIcon
															color="blue"
															variant="transparent"
															onClick={() => {
																setShiftDetails(item);
																setConfirmDeleteModal(true);
															}}>
															<MdDelete size={23} />
														</ActionIcon>
													</Tooltip>
												)}
											</Grid.Col>
										)}
									</>
								);
							})}
						<TemporaryShiftDetails
							temporaryEntries={temporaryEntries}
							tcShift={tcShift}
							data={data}
							type="CUTTING"
						/>
						{tcShift?.CUTTING && (
							<>
								<Grid.Col span={3}>
									<Text size="sm" weight={500}>
										Total
									</Text>
								</Grid.Col>
								<Grid.Col span={2}></Grid.Col>
								<Grid.Col span={2}></Grid.Col>

								<Grid.Col span={2}>
									<Text size="sm" weight={500}>
										{cuttingTotal()}
									</Text>
								</Grid.Col>
								<Grid.Col span={2}></Grid.Col>
							</>
						)}
						{tcShift?.WINDING && (
							<Grid.Col span={12}>
								<Divider />
							</Grid.Col>
						)}
						{tcShift?.WINDING && (
							<Grid.Col span={12}>
								<Badge size="lg" color={"teal"}>
									WINDING
								</Badge>
							</Grid.Col>
						)}
						{tcShift?.WINDING &&
							tcShift?.WINDING?.map(item => {
								return (
									<>
										<Grid.Col span={data?.windingtype === "Leaded" ? 2 : 3}>
											<Text size="sm">{item.shift_operator}</Text>
										</Grid.Col>
										<Grid.Col span={2}>
											<Text size="sm">
												{dayjs(item?.shift_date).format("DD/MM/YYYY")}
											</Text>
										</Grid.Col>
										<Grid.Col span={data?.windingtype === "Leaded" ? 1 : 2}>
											<Badge color={"dark"}>{item?.machine}</Badge>
										</Grid.Col>
										{data?.windingtype === "Leaded" && (
											<Grid.Col span={1}>
												<Text size="sm">{item?.shift_quantity_tape}</Text>
											</Grid.Col>
										)}
										{data?.windingtype === "Leaded" && (
											<Grid.Col span={1}>
												<Text size="sm">{item?.shift_quantity}</Text>
											</Grid.Col>
										)}
										<Grid.Col span={2}>
											<Text size="sm">{item?.quantity}</Text>
										</Grid.Col>
										<Grid.Col span={data?.windingtype === "Leaded" ? 1 : 2}>
											<Text size="sm">{item?.shift_type}</Text>
										</Grid.Col>
										<Grid.Col span={1}>
											{type == "edit" && (
												<>
													<Tooltip label="Edit Tc">
														<ActionIcon
															color="#339af0"
															variant="transparent"
															onClick={() => {
																setEditShift(item);
																setEditModal(true);
															}}>
															<AiFillEdit size={23} />
														</ActionIcon>
													</Tooltip>
													<Tooltip label="Add Shift Details">
														<ActionIcon
															color="blue"
															variant="transparent"
															onClick={() => {
																setAddModal(true);
																setShiftDetails(item);
															}}>
															<BsFillPlusCircleFill size={23} />
														</ActionIcon>
													</Tooltip>
													{tcShift?.WINDING?.length > 1 && (
														<Tooltip label="Delete Shift Details">
															<ActionIcon
																color="blue"
																variant="transparent"
																onClick={() => {
																	setShiftDetails(item);
																	setConfirmDeleteModal(true);
																}}>
																<MdDelete size={23} />
															</ActionIcon>
														</Tooltip>
													)}
												</>
											)}
										</Grid.Col>
									</>
								);
							})}
						<TemporaryShiftDetails
							temporaryEntries={temporaryEntries}
							tcShift={tcShift}
							data={data}
							type="WINDING"
						/>
						{tcShift?.WINDING && (
							<>
								<Grid.Col span={data?.windingtype === "Leaded" ? 2 : 3}>
									<Text size="sm" weight={500}>
										Total
									</Text>
								</Grid.Col>
								<Grid.Col span={2}></Grid.Col>
								<Grid.Col
									span={data?.windingtype === "Leaded" ? 1 : 2}></Grid.Col>
								{data?.windingtype === "Leaded" && (
									<Grid.Col span={2}></Grid.Col>
								)}
								{/* {data?.windingtype === "Leaded" && (
									<Grid.Col span={2}></Grid.Col>
								)} */}
								<Grid.Col span={2}>
									<Text size="sm" weight={500}>
										{windingTotal()}
									</Text>
								</Grid.Col>
								<Grid.Col
									span={data?.windingtype === "Leaded" ? 1 : 2}></Grid.Col>
							</>
						)}

						{tcShift?.WELDING && (
							<Grid.Col span={12}>
								<Divider />
							</Grid.Col>
						)}
						{tcShift?.WELDING && (
							<Grid.Col span={12}>
								<Badge size="lg" color={"indigo"}>
									WELDING
								</Badge>
							</Grid.Col>
						)}
						{tcShift?.WELDING &&
							tcShift?.WELDING?.map(item => {
								return (
									<>
										<Grid.Col span={3}>
											<Text size="sm">{item.shift_operator}</Text>
										</Grid.Col>
										<Grid.Col span={2}>
											<Text size="sm">
												{dayjs(item?.shift_date).format("DD/MM/YYYY")}
											</Text>
										</Grid.Col>
										<Grid.Col span={2}>
											<Badge color={"dark"}>{item.machine}</Badge>
										</Grid.Col>
										<Grid.Col span={2}>
											<Text size="sm">{item.quantity}</Text>
										</Grid.Col>
										<Grid.Col span={2}>
											<Text size="sm">{item.shift_type}</Text>
										</Grid.Col>
										{type == "edit" && (
											<Grid.Col span={1}>
												<Tooltip label="Edit Tc">
													<ActionIcon
														color="#339af0"
														variant="transparent"
														onClick={() => {
															setEditShift(item);
															setEditModal(true);
														}}>
														<AiFillEdit size={23} />
													</ActionIcon>
												</Tooltip>
												<Tooltip label="Add Shift Details">
													<ActionIcon
														color="blue"
														variant="transparent"
														onClick={() => {
															setAddModal(true);
															setShiftDetails(item);
														}}>
														<BsFillPlusCircleFill size={23} />
													</ActionIcon>
												</Tooltip>
												{tcShift?.WELDING?.length > 1 && (
													<Tooltip label="Delete Shift Details">
														<ActionIcon
															color="blue"
															variant="transparent"
															onClick={() => {
																setShiftDetails(item);
																setConfirmDeleteModal(true);
															}}>
															<MdDelete size={23} />
														</ActionIcon>
													</Tooltip>
												)}
											</Grid.Col>
										)}
									</>
								);
							})}

						<TemporaryShiftDetails
							temporaryEntries={temporaryEntries}
							tcShift={tcShift}
							data={data}
							type="WELDING"
						/>
						{tcShift?.WELDING && (
							<>
								<Grid.Col span={3}>
									<Text size="sm" weight={500}>
										Total
									</Text>
								</Grid.Col>
								<Grid.Col span={2}></Grid.Col>
								<Grid.Col span={2}></Grid.Col>
								<Grid.Col span={2}>
									<Text size="sm" weight={500}>
										{weldingTotal()}
									</Text>
								</Grid.Col>
								<Grid.Col span={2}></Grid.Col>
							</>
						)}

						{tcShift?.COATING && (
							<Grid.Col span={12}>
								<Divider />
							</Grid.Col>
						)}

						{tcShift?.COATING && (
							<Grid.Col span={12}>
								<Badge size="lg" color={"lime"}>
									COATING
								</Badge>
							</Grid.Col>
						)}
						{tcShift?.COATING &&
							tcShift?.COATING?.map(item => {
								return (
									<>
										<Grid.Col span={data?.windingtype === "Leaded" ? 2 : 3}>
											<Text size="sm">{item.shift_operator}</Text>
										</Grid.Col>
										<Grid.Col span={2}>
											<Text size="sm">
												{dayjs(item?.shift_date).format("DD/MM/YYYY")}
											</Text>
										</Grid.Col>
										<Grid.Col span={data?.windingtype === "Leaded" ? 1 : 2}>
											<Badge color={"dark"}>{item?.machine}</Badge>
										</Grid.Col>
										{data?.windingtype === "Leaded" && (
											<Grid.Col span={1}>
												<Text size="sm"></Text>
											</Grid.Col>
										)}
										{data?.windingtype === "Leaded" && (
											<Grid.Col span={1}>
												<Text size="sm"></Text>
											</Grid.Col>
										)}
										<Grid.Col span={2}>
											<Text size="sm">{item?.quantity}</Text>
										</Grid.Col>
										<Grid.Col span={data?.windingtype === "Leaded" ? 1 : 2}>
											<Text size="sm">{item?.shift_type}</Text>
										</Grid.Col>
										<Grid.Col span={1}>
											{type == "edit" && (
												<>
													<Tooltip label="Edit Tc">
														<ActionIcon
															color="#339af0"
															variant="transparent"
															onClick={() => {
																setEditShift(item);
																setEditModal(true);
															}}>
															<AiFillEdit size={23} />
														</ActionIcon>
													</Tooltip>
													<Tooltip label="Add Shift Details">
														<ActionIcon
															color="blue"
															variant="transparent"
															onClick={() => {
																setAddModal(true);
																setShiftDetails(item);
															}}>
															<BsFillPlusCircleFill size={23} />
														</ActionIcon>
													</Tooltip>
													{tcShift?.COATING?.length > 1 && (
														<Tooltip label="Delete Shift Details">
															<ActionIcon
																color="blue"
																variant="transparent"
																onClick={() => {
																	setShiftDetails(item);
																	setConfirmDeleteModal(true);
																}}>
																<MdDelete size={23} />
															</ActionIcon>
														</Tooltip>
													)}
												</>
											)}
										</Grid.Col>
									</>
								);
							})}

						<TemporaryShiftDetails
							temporaryEntries={temporaryEntries}
							tcShift={tcShift}
							data={data}
							type="COATING"
						/>

						{tcShift?.COATING && (
							<>
								<Grid.Col span={data?.windingtype === "Leaded" ? 2 : 3}>
									<Text size="sm" weight={500}>
										Total
									</Text>
								</Grid.Col>
								<Grid.Col span={2}></Grid.Col>
								<Grid.Col
									span={data?.windingtype === "Leaded" ? 1 : 2}></Grid.Col>
								{data?.windingtype === "Leaded" && (
									<Grid.Col span={2}></Grid.Col>
								)}
								{data?.windingtype === "Leaded" && (
									<Grid.Col span={2}></Grid.Col>
								)}
								<Grid.Col span={2}>
									<Text size="sm" weight={500}>
										{coatingTotal()}
									</Text>
								</Grid.Col>
								<Grid.Col
									span={data?.windingtype === "Leaded" ? 1 : 2}></Grid.Col>
							</>
						)}

						{tcShift?.QUALITY && (
							<Grid.Col span={12}>
								<Divider />
							</Grid.Col>
						)}

						{tcShift?.QUALITY && (
							<Grid.Col span={12}>
								<Badge size="lg" color={"green"}>
									QUALITY
								</Badge>
							</Grid.Col>
						)}
						{tcShift?.QUALITY && (
							<>
								<Grid.Col span={data?.windingtype === "Leaded" ? 2 : 3}>
									<Text size="sm">{tcShift?.QUALITY.shift_operator}</Text>
								</Grid.Col>
								<Grid.Col span={data?.windingtype === "Leaded" ? 4 : 2}>
									<Text size="sm">
										{dayjs(tcShift?.QUALITY?.shift_date).format("DD/MM/YYYY")}
									</Text>
								</Grid.Col>
								<Grid.Col
									span={data?.windingtype === "Leaded" ? 1 : 2}></Grid.Col>
								<Grid.Col span={2}>
									<Text size="sm">
										QC Pass Quantity : {tcShift?.QUALITY?.quatity}
									</Text>
								</Grid.Col>
								<Grid.Col span={data?.windingtype === "Leaded" ? 1 : 2}>
									<Text size="sm">{tcShift?.QUALITY?.shift_type}</Text>
								</Grid.Col>
								{type == "edit" && (
									<Grid.Col span={1}>
										<Tooltip label="Edit Tc">
											<ActionIcon
												color="#339af0"
												variant="transparent"
												onClick={() => {
													setEditShift(tcShift?.QUALITY);
													setEditModal(true);
												}}>
												<AiFillEdit size={23} />
											</ActionIcon>
										</Tooltip>
									</Grid.Col>
								)}
							</>
						)}
					</Grid>
					<Modal
						radius={8}
						padding={0}
						styles={ModelStyleObj}
						size="auto"
						opened={editModal}
						onClose={() => {
							setEditModal(false);
						}}
						title="EDIT SHIFT DETAILS">
						<EditShiftDetailsForm
							editShift={editShift}
							tcId={data?.id}
							setEditModal={setEditModal}
						/>
					</Modal>
					<Modal
						radius={8}
						padding={0}
						styles={ModelStyleObj}
						size="90%"
						opened={addModal}
						onClose={() => {
							setAddModal(false);
						}}
						title="ADD SHIFT DETAILS">
						<AddShiftForm
							shiftDetails={shiftDetails}
							tcId={data?.id}
							setAddModal={setAddModal}
						/>
					</Modal>
					<Modal
						radius={8}
						padding={0}
						styles={ModelStyleObj}
						size="auto"
						opened={confirmDeleteModal}
						onClose={() => {
							setConfirmDeleteModal(false);
						}}
						title="DELETE SHIFT DETAILS">
						<>
							<Text style={{ margin: "2rem" }}>
								Are you sure you want to{" "}
								<strong style={{ color: "red" }}>DELETE</strong> this shift
								details?
							</Text>
							<div style={{ paddingInline: "2rem" }}>
								<TextInput
									label="Comment"
									placeholder="Comment"
									onChange={e => setDeleteComment(e.target.value)}
								/>
								{deleteCommentError && (
									<Text size="sm" color="red">
										comment required!
									</Text>
								)}
							</div>
							<Group position="right" spacing="xl" style={{ margin: "1rem" }}>
								<Button onClick={handleClick}>Confirm</Button>
								<Button onClick={() => setConfirmDeleteModal(false)}>
									Cancel
								</Button>
							</Group>
						</>
					</Modal>
				</Card>
			)}
		</>
	);
};

export default TcShiftView;
