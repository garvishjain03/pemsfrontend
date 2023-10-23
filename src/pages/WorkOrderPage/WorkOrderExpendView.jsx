import { Badge, Card, Grid, Group, Text } from "@mantine/core";
import dayjs from "dayjs";
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import DispatchAndReturnInfoBlock from "../../component/DispatchAndReturnInfoBlock";
import PackAndUnPackInfoBlock from "../../component/PackAndUnPackInfoBlock";
import PlanningChartDrawer from "../../component/PlanningChartDrawer";
import TcView from "../../component/TcView";
import { commentStatusColorConfig } from "../../configs/commentStatusColorConfig";
import { getIssuedTc } from "../../services/issuedTc";
import {
	getWorkOrders,
	getWorkorderShiftcount,
} from "../../services/salesOrder";
import { getItemHistory } from "../../services/SaleItem";
import CommentFeature from "../../helpers/columns/cells/CommentFeature";
import WorkOrderAndTcComments from "../../component/WorkOrderAndTcComments";
import Logs from "../../component/Logs";

const WorkorderExpendView = ({ data, isExpend = true, itemDetail, row }) => {
	const {
		coresize,
		leadDia,
		leadLength,
		formType,
		shape,
		workorderShiftCount,
		issuedTcData = [],
		workorder = [],
		itemHistory,
	} = useSelector(state => ({
		shape: state.context?.shapes?.rows,
		coresize: state.context?.coresizes?.rows,
		leadDia: state.context?.leaddias?.rows,
		leadLength: state.context?.leadlengths?.rows,
		formType: state.context?.formtypes?.rows,
		workorderShiftCount: state.orders?.workorderShiftCount,
		issuedTcData: state.IssuedTc?.issuedTC?.rows,
		workorder: state.orders?.workorder?.rows,
		itemHistory: state.orders?.itemHistory,
	}));

	const completedShiftsQty = useMemo(() => {
		return data?.issueTcWorkorder?.[0]?.tcMapper?.tcshift_detail
			?.filter(item => item.shift_status === "QUALITY")
			.map(item => (item = item.total_shift_quantity));
	}, [data]);
	const totalCompletedQty = useMemo(() => {
		return completedShiftsQty?.reduce((total, qty) => {
			return total + qty;
		}, 0);
	}, [completedShiftsQty]);

	let filteredWorkOrder = workorder?.find(e => e?.id == data?.id);

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
	useEffect(() => {
		if (!isExpend) {
			if (
				[
					"PRODUCTIONPL",
					"SALES",
					"ADMIN",
					"SUPERADMIN",
					"PACKINGOP",
					"DISPATCHOP",
				].includes(localStorage.getItem("active_role"))
			) {
				getWorkOrders("salesItemView", data?.workorderno);
			}
			getIssuedTc(data?.id);
		}
		getWorkorderShiftcount(data?.id);
		if (window.location.pathname.includes("itemlist")) getItemHistory(data?.id);
	}, [data]);
	return (
		<>
			<Card
				shadow="sm"
				p="lg"
				radius="md"
				style={{ boxShadow: isExpend ? "inset 0 0 1.5px #000000" : "" }}
				withBorder>
				<Grid>
					<Grid.Col span={4}>
						<Text size="sm">
							Part No :{" "}
							{data?.workorder_item?.mpn ?? data?.partNo ?? itemDetail?.mpn}
						</Text>
					</Grid.Col>
					<Grid.Col span={4}>
						{" "}
						<Text size="sm">
							Issue Date : {dayjs(data?.createdAt).format("DD/MM/YYYY")}
						</Text>
					</Grid.Col>
					<Grid.Col span={4}>
						{" "}
						<Text size="sm">
							Deliver Date :{" "}
							{dayjs(data?.itemdeliverydate).format("DD/MM/YYYY")}
						</Text>
					</Grid.Col>
					<Grid.Col span={4}>
						{" "}
						<Text size="sm">
							Operator :{" "}
							{data?.operator?.username ?? data?.operatorDetails?.username}
						</Text>
					</Grid.Col>
					<Grid.Col span={4}>
						{" "}
						<Text size="sm">
							WorkOrder No :{" "}
							{data?.workorderno ?? data?.workorder_item?.[0]?.workorderno}
						</Text>
					</Grid.Col>
					<Grid.Col span={4}>
						<Text size="sm">
							Coresize :{" "}
							{coreSizeIdToLabel(
								isExpend
									? data?.workorder_item?.coresize ?? data?.coresize
									: itemDetail?.coresize
							)}
						</Text>
					</Grid.Col>
					{shapeIdToLabel(
						isExpend
							? data?.workorder_item?.shape ?? data?.shape
							: itemDetail?.shape
					) === "Standard Axial" ? (
						<>
							<Grid.Col span={4}>
								<Text size="sm">
									LeadDia :{" "}
									{leadDiaIdToLabel(
										isExpend
											? data?.workorder_item?.leaddia ?? data?.leaddia
											: itemDetail?.leaddia
									)}
								</Text>
							</Grid.Col>
							<Grid.Col span={4}>
								<Text size="sm">
									LeadLength :{" "}
									{leadLengthIdToLabel(
										isExpend
											? data?.workorder_item?.leadlength ?? data?.leadlength
											: itemDetail?.leadlength
									)}
								</Text>
							</Grid.Col>
							<Grid.Col span={4}>
								<Text size="sm">
									Delivery Date :
									{dayjs(data?.itemdeliverydate).format("DD/MM/YYYY")}
								</Text>
							</Grid.Col>
						</>
					) : (
						<Grid.Col span={4}>
							<Text size="sm">
								Formtype :{" "}
								{formTypeIdToLabel(
									isExpend
										? data?.workorder_item?.formType ?? data?.formType
										: itemDetail?.formType
								)}
							</Text>
						</Grid.Col>
					)}
					<Grid.Col span={4}>
						{" "}
						<Text size="sm">
							Issued Tc Quantity :{" "}
							{workorderShiftCount?.issuetcquantity
								? workorderShiftCount?.issuetcquantity.toLocaleString("en-IN")
								: 0}
							/{parseInt(data?.qty).toLocaleString("en-IN")}
						</Text>
					</Grid.Col>
					<Grid.Col span={4}>
						{" "}
						<Text size="sm">Quantity : {data?.qty ?? data?.orderquantity}</Text>
					</Grid.Col>
					<Grid.Col span={4}>
						{" "}
						<Text size="sm">
							Total Completed Quantity :{" "}
							{workorderShiftCount?.totalCompletedQuantity
								? workorderShiftCount?.totalCompletedQuantity.toLocaleString(
										"en-IN"
								  )
								: 0}
							/{parseInt(data?.qty).toLocaleString("en-IN")}
						</Text>
					</Grid.Col>
					<Grid.Col span={4}>
						{" "}
						<Text size="sm">
							Remark :{" "}
							{data?.allworkordercomments?.[0]?.comments ??
								data?.allcomments?.[0]?.comments}{" "}
						</Text>
					</Grid.Col>
				</Grid>

				{(data?.issueTcWorkorder?.length > 0 ||
					(!isExpend && filteredWorkOrder?.issueTcWorkorder?.length > 0)) && (
					<Card shadow="sm" radius="md" mt={8} withBorder>
						<Card.Section withBorder mx={0} mt={-4} mb={4}>
							<strong>Issued TC:</strong>
						</Card.Section>

						{isExpend
							? data?.issueTcWorkorder?.map(item => (
									<Group direction="row" position="apart" mb="sm">
										<div>
											<Text size="sm">
												<strong>TC No : </strong> {item?.tcMapper?.tcno}
											</Text>
										</div>
										<div>
											<Text size="sm">
												<strong>Quantity : </strong>
												{item?.tcMapper?.quantity}
											</Text>
										</div>
										<div>
											<Text size="sm">
												{" "}
												<strong>Created On :</strong>{" "}
												{item?.tcMapper?.createdAt
													? dayjs(item?.tcMapper?.createdAt).format(
															"DD/MM/YYYY"
													  )
													: ""}
											</Text>
										</div>

										{/* <div>
											<Text size="sm">
												<strong>operator : </strong>
												{item?.operator?.username}
											</Text>
										</div> */}
										<div style={{ gap: "16px" }}>
											<Badge
												color={commentStatusColorConfig(
													item?.tcMapper?.status
												)}>
												{item?.tcMapper?.status}
											</Badge>
										</div>
										<div style={{ gap: "16px" }}>
											<TcView expend={true} data={item} />
										</div>
										<div style={{ gap: "16px" }}>
											<Group>
												{/* <WorkOrderAndTcComments
													type="issuetcid"
													row={item}
													orderId={row?.original?.orderid}
													itemId={row?.original?.itemid ?? row?.original?.id}
												/> */}
												{/* <Logs
													id={item?.issuetcid}
													type="issuetcid"
													number={"TC-NO"}
												/> */}
											</Group>
										</div>
									</Group>
							  ))
							: filteredWorkOrder?.issueTcWorkorder?.map(item => (
									<Group direction="row" position="apart" mb="sm">
										<div>
											<Text size="sm">
												<strong>TC No : </strong> {item?.tcMapper?.tcno}
											</Text>
										</div>
										<div>
											<Text size="sm">
												<strong>Quantity : </strong>
												{item?.tcMapper?.quantity}
											</Text>
										</div>
										<div>
											<Text size="sm">
												{" "}
												<strong>Created On :</strong>{" "}
												{item?.tcMapper?.createdAt
													? dayjs(item?.createdAt).format("DD/MM/YYYY")
													: ""}
											</Text>
										</div>

										{/* <div>
											<Text size="sm">
												<strong>operator : </strong>
												{item?.operator?.username}
											</Text>
										</div> */}
										<div style={{ gap: "16px" }}>
											<Badge color={commentStatusColorConfig(item?.status)}>
												{item?.tcMapper?.status}
											</Badge>
										</div>
										<div style={{ gap: "16px" }}>
											<TcView data={item} expend={true} />
										</div>
										<div style={{ gap: "16px" }}>
											<Group>
												{/* <WorkOrderAndTcComments
													type="issuetcid"
													row={item}
													orderId={itemDetail?.orderid}
													itemId={itemDetail?.id}
												/> */}
												{/* <Logs
													id={item?.issuetcid}
													type="issuetcid"
													number={"TC-NO"}
												/> */}
											</Group>
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
		</>
	);
};

export default WorkorderExpendView;
