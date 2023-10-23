import { Badge, Card, Grid, Group, Table, Text } from "@mantine/core";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DispatchAndReturnInfoBlock from "../../component/DispatchAndReturnInfoBlock";
import PackAndUnPackInfoBlock from "../../component/PackAndUnPackInfoBlock";
import { commentStatusColorConfig } from "../../configs/commentStatusColorConfig";
import WorkOrderViewButton from "./WorkOrderViewButton";
import {
	getItemHistory,
	getWorkOrderCompletedQty,
} from "../../services/SaleItem";
import CommentFeature from "../../helpers/columns/cells/CommentFeature";
import WorkOrderAndTcComments from "../../component/WorkOrderAndTcComments";

const ExpendItemVIew = ({ data, row }) => {
	const {
		types,
		tolerance,
		warehouse,
		wattages,
		characteristic,
		coresize,
		leadDia,
		leadLength,
		formType,
		shape,
		tcr,
		completeQty,
		itemHistory,
	} = useSelector(state => ({
		types: state.context?.types?.rows,
		wattages: state.context?.wattages?.rows,
		tolerance: state.context?.tolerances?.rows,
		warehouse: state.context?.warehouse?.rows,
		characteristic: state.context?.characteristics?.rows,
		shape: state.context?.shapes?.rows,
		coresize: state.context?.coresizes?.rows,
		leadDia: state.context?.leaddias?.rows,
		leadLength: state.context?.leadlengths?.rows,
		formType: state.context?.formtypes?.rows,
		tcr: state.context?.tcrs?.rows,
		completeQty: state.orders?.workOrderCompleteQty,
		itemHistory: state.orders?.itemHistory,
	}));
	const toleranceIdToLabel = id => {
		let label = "";
		tolerance?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};

	const warehouseIdToLabel = id => {
		let label = "";
		warehouse?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};

	const typeIdToLabel = id => {
		let label = "";
		types?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};

	const wattageIdToLabel = id => {
		let label = "";
		wattages?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};

	const characteristicIdToLabel = id => {
		let label = "";
		characteristic?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};

	const shapeIdToLabel = id => {
		let label = "";
		shape?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});

		return label;
	};

	const coreSizeIdToLabel = id => {
		let label = "";
		coresize?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});

		return label;
	};
	const formTypeIdToLabel = id => {
		let label = "";
		formType?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};
	const leadLengthIdToLabel = id => {
		let label = "";
		leadLength?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};
	const leadDiaIdToLabel = id => {
		let label = "";
		leadDia?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});

		return label;
	};

	const tcrIdToLabel = id => {
		let label = "";
		tcr?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});

		return label;
	};

	useEffect(() => {
		getWorkOrderCompletedQty(data?.id);
		getItemHistory(data?.id);
	}, []);

	return (
		<>
			{data?.orderType === "Traded" ? (
				<Card
					shadow="sm"
					p="lg"
					radius="md"
					style={{ boxShadow: "inset 0 0 1.5px #000000" }}
					withBorder>
					<Grid>
						<Grid.Col span={3}>
							<Text size="sm">
								Customer Order Date :{" "}
								{data?.orderDate
									? dayjs(data?.orderDate).format("DD-MM-YYYY")
									: ""}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								Order Creation Date :{" "}
								{data?.orderDate
									? dayjs(data?.orderDate).format("DD-MM-YYYY")
									: ""}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							{" "}
							<Text size="sm">Customer Part No : {data?.customerPartNo}</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							{" "}
							<Text size="sm">
								Warehouse : {warehouseIdToLabel(data?.warehouse)}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								Order Quantity : {data?.orderquantity.toLocaleString("en-IN")}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">Price/100p : {data?.price}</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								Customer Schedule Date :{" "}
								{data?.scheduleDate
									? dayjs(data?.scheduleDate).format("DD-MM-YYYY")
									: ""}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								Commited Date :{" "}
								{data?.commitedDate
									? dayjs(data?.commitedDate).format("DD-MM-YYYY")
									: ""}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								Created By : {data?.itemCreatedBy?.username}
							</Text>
						</Grid.Col>

						<Grid.Col span={3}>
							<Text size="sm">
								Accepted By : {data?.itemAcceptedBy?.username}
							</Text>
						</Grid.Col>

						<Grid.Col span={3}>
							<Text size="sm">
								Order Acceptance Date :{" "}
								{data?.itemAcceptanceDate
									? dayjs(data?.itemAcceptanceDate).format("DD-MM-YYYY")
									: "N/A"}
							</Text>
						</Grid.Col>

						<Grid.Col span={3}>
							<Text size="sm">
								{data?.holdDate
									? `Hold Date : ${dayjs(data?.holdDate).format("DD-MM-YYYY")}`
									: null}
							</Text>
						</Grid.Col>

						<Grid.Col span={3}>
							<Text size="sm">
								{data?.unholdDate
									? `UnHold Date : ${dayjs(data?.unholdDate).format(
											"DD-MM-YYYY"
									  )}`
									: null}
							</Text>
						</Grid.Col>

						<Grid.Col span={3}>
							<Text size="sm">
								{data?.procureAt
									? `Procure Date : ${dayjs(data?.procureAt).format(
											"DD-MM-YYYY"
									  )}`
									: null}
							</Text>
						</Grid.Col>

						<Grid.Col span={3}>
							<Text size="sm">
								{data?.procureItems?.length > 0
									? `Lead Time :
											${data?.procureItems?.[0]?.leadtime}`
									: null}
							</Text>
						</Grid.Col>

						<Grid.Col span={3}>
							<Text size="sm">
								{data?.procureItems?.length > 0
									? `Procure Quantity :
											${data?.procureItems?.[0]?.procurequantity}`
									: null}
							</Text>
						</Grid.Col>

						<Grid.Col span={3}>
							<Text size="sm">
								{data?.markAsAcceptedAt
									? `Mark As Accept Date : ${dayjs(
											data?.markAsAcceptedAt
									  ).format("DD-MM-YYYY")}`
									: null}
							</Text>
						</Grid.Col>

						<Grid.Col span={5}>
							<Text size="sm">
								{data?.itemholdReason?.length > 0
									? `Hold Reasons : ${data?.itemholdReason
											.slice(0, 2)
											.map(data => data.holdReason?.label + " ")}`
									: null}
							</Text>
						</Grid.Col>
					</Grid>
					{data?.packingDetails?.length > 0 && (
						<PackAndUnPackInfoBlock
							data={data}
							orderid={data?.orderid}
							row={row}
							itemHistory={itemHistory}
						/>
					)}
					{data?.dispatchedDetails?.length > 0 && (
						<DispatchAndReturnInfoBlock
							data={data}
							orderid={data?.orderid}
							row={row}
							itemHistory={itemHistory}
						/>
					)}
				</Card>
			) : (
				<Card
					shadow="sm"
					p="lg"
					style={{ boxShadow: "inset 0 0 1.5px #000000" }}
					radius="md"
					withBorder>
					<Grid>
						<Grid.Col span={3}>
							<Text size="sm">Type : {typeIdToLabel(data?.type)}</Text>
						</Grid.Col>

						<Grid.Col span={3}>
							<Text size="sm">
								Characteristic :{" "}
								{characteristicIdToLabel(data?.characteristics)}
							</Text>
						</Grid.Col>
						<Grid.Col span={2}>
							<Text size="sm">Wattage : {wattageIdToLabel(data?.wattage)}</Text>
						</Grid.Col>
						<Grid.Col span={2}>
							<Text size="sm">
								Tolerance : {toleranceIdToLabel(data?.tolerance)}
							</Text>
						</Grid.Col>
						<Grid.Col span={2}>
							<Text size="sm">TCR : {tcrIdToLabel(data?.tcr)}</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								Ohms : {data?.ohms} {data.unit}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								Coresize : {coreSizeIdToLabel(data?.coresize)}
							</Text>
						</Grid.Col>
						<Grid.Col span={2}>
							<Text size="sm">Shape : {shapeIdToLabel(data?.shape)}</Text>
						</Grid.Col>

						{shapeIdToLabel(data?.shape) === "Standard Axial" ? (
							<>
								<Grid.Col span={2}>
									<Text size="sm">
										LeadDia : {leadDiaIdToLabel(data?.leaddia)}
									</Text>
								</Grid.Col>
								<Grid.Col span={2}>
									<Text size="sm">
										LeadLength : {leadLengthIdToLabel(data?.leadlength)}
									</Text>
								</Grid.Col>
							</>
						) : (
							<Grid.Col span={4}>
								<Text size="sm">
									Formtype : {formTypeIdToLabel(data?.formType)}
								</Text>
							</Grid.Col>
						)}
						<Grid.Col span={3}>
							<Text size="sm">Surge : {data?.surge} KV</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">TC Type : {data?.tctype}</Text>
						</Grid.Col>
						<Grid.Col span={2}>
							<Text size="sm">
								Warehouse : {warehouseIdToLabel(data?.warehouse)}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								Order Quantity : {data?.orderquantity?.toLocaleString("en-IN")}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							{" "}
							<Text size="sm">Customer Part No : {data?.customerPartNo}</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								Order Date :{" "}
								{data?.orderDate
									? dayjs(data?.orderDate).format("DD-MM-YYYY")
									: ""}
							</Text>
						</Grid.Col>
						<Grid.Col span={2}>
							<Text size="sm">
								Schedule Date :{" "}
								{data?.scheduleDate
									? dayjs(data?.scheduleDate).format("DD-MM-YYYY")
									: ""}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								Order Acceptance Date :{" "}
								{data?.itemAcceptanceDate
									? dayjs(data?.itemAcceptanceDate).format("DD-MM-YYYY")
									: "N/A"}
							</Text>
						</Grid.Col>

						<Grid.Col span={3}>
							<Text size="sm">
								Committed Date :{" "}
								{data?.commitedDate
									? dayjs(data?.commitedDate).format("DD-MM-YYYY")
									: ""}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								{data?.itemCreatedBy?.username
									? `Created By : ${data?.itemCreatedBy?.username}`
									: null}
							</Text>
						</Grid.Col>

						<Grid.Col span={2}>
							<Text size="sm">
								{data?.itemAcceptedBy?.username
									? `Accepted By : ${data?.itemAcceptedBy?.username}`
									: null}
							</Text>
						</Grid.Col>

						<Grid.Col span={3}>
							<Text size="sm">Price/100p : {data?.price}</Text>
						</Grid.Col>

						<Grid.Col span={3}>
							<Text size="sm">
								{data?.holdDate
									? `Hold Date : ${dayjs(data?.holdDate).format("DD-MM-YYYY")}`
									: null}
							</Text>
						</Grid.Col>

						<Grid.Col span={3}>
							<Text size="sm">
								{data?.unholdDate
									? `UnHold Date : ${dayjs(data?.unholdDate).format(
											"DD-MM-YYYY"
									  )}`
									: null}
							</Text>
						</Grid.Col>

						<Grid.Col span={5}>
							<Text size="sm">
								{data?.itemholdReason?.length > 0
									? `Hold Reasons : ${data?.itemholdReason
											.slice(0, 2)
											.map(data => data.holdReason?.label + " ")}`
									: null}
							</Text>
						</Grid.Col>

						{/* <Grid.Col span={3}>
							<Text size="sm">Payment Days : {data?.customerPartNo}</Text>
						</Grid.Col> */}
					</Grid>

					{data?.workorder_item?.length > 0 && (
						<Card shadow="sm" radius="md" mt={8} withBorder>
							<Card.Section withBorder mx={0} mt={-4} mb={4}>
								<strong>Work Order :</strong>
							</Card.Section>
							{data?.workorder_item?.map((item, index) => (
								<Group direction="row" position="apart" mb="sm">
									<div>
										<Text size="sm">
											<strong>No : </strong> {item?.workorderno}
										</Text>
									</div>
									<div>
										<Text size="sm">
											<strong>Quantity : </strong>
											{item?.qty}
										</Text>
									</div>
									<div>
										<Text size="sm">
											{" "}
											<strong>Created On :</strong>{" "}
											{item?.createdAt
												? dayjs(item?.createdAt).format("DD/MM/YYYY")
												: ""}
										</Text>
									</div>
									<div>
										<Text size="sm">
											{" "}
											<strong>Completed Quantity : </strong>
											{completeQty?.[index]?.completedQty ?? 0}
										</Text>
									</div>
									<div>
										<Text size="sm">
											<strong>operator : </strong>
											{item?.operator?.username}
										</Text>
									</div>
									<div style={{ gap: "16px" }}>
										<Badge color={commentStatusColorConfig(item?.status)}>
											{item?.status}
										</Badge>
									</div>
									<div style={{ gap: "16px" }}>
										<WorkOrderViewButton data={item} itemDetail={data} />
									</div>
									<div style={{ gap: "16px" }}>
										{/* <WorkOrderAndTcComments
											row={item}
											orderId={row?.original?.orderid}
											itemId={row?.original?.id}
										/> */}
									</div>
								</Group>
							))}
						</Card>
					)}

					{data?.packingDetails?.length > 0 && (
						<PackAndUnPackInfoBlock
							itemHistory={itemHistory}
							data={data}
							orderid={data?.orderid}
							row={row}
						/>
					)}
					{data?.dispatchedDetails?.length > 0 && (
						<DispatchAndReturnInfoBlock
							itemHistory={itemHistory}
							data={data}
							orderid={data?.orderid}
							row={row}
						/>
					)}
				</Card>
			)}
		</>
	);
};

export default ExpendItemVIew;
