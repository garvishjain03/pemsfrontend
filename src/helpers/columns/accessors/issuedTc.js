import { Badge, Group, Menu, Text } from "@mantine/core";
import dayjs from "dayjs";
import WorkOrderPartNoTiptoolMapper from "../../../component/WorkOrderPartNoTiptoolMapper";

export const issuedTcCustomerNameAccesor = row => {
	return localStorage.getItem("active_role") === "CHECKINGOP" ? (
		<Group
			direction="row"
			style={{ maxWidth: "250px", minWidth: "200px", gap: 0 }}>
			<span
				style={{
					maxHeight: "30px",
					maxWidth: "163px",
					overflow: "hidden",
					display: "inline",
				}}>
				{row?.customer?.[0]?.slice(0, 20)}
			</span>
			<span style={{ display: "inline" }}>
				<Menu trigger="hover" size={"xl"}>
					{row?.customer?.map((ele, index) => (
						<Menu.Item>
							<Text key={index}>{ele}</Text>
						</Menu.Item>
					))}
				</Menu>
			</span>
		</Group>
	) : row?.tcMapper?.length > 1 ? (
		<Group style={{ maxWidth: "250px", minWidth: "200px", gap: 0 }}>
			<Text
				size="sm"
				style={{
					maxHeight: "28px",
					overflow: "hidden",
					display: "inline",
				}}>
				{row?.tcMapper?.[0]?.issueTcOrder?.customerName?.name.slice(0, 20)}
			</Text>
			<Menu trigger="hover" size={"xl"}>
				{row?.tcMapper?.map(item => (
					<Menu.Item>
						<Text>{item?.issueTcOrder?.customerName?.name}</Text>
					</Menu.Item>
				))}
			</Menu>
		</Group>
	) : (
		row?.tcMapper?.map((item, index) => (
			// <Text key={index}>{item?.issueTcOrder?.customerName?.name}</Text>
			<Group
				direction="row"
				style={{ maxWidth: "250px", minWidth: "200px", gap: 0 }}>
				<Text
					size="sm"
					style={{
						maxHeight: "30px",
						overflow: "hidden",
						display: "inline",
					}}>
					{item?.issueTcOrder?.customerName?.name.slice(0, 20)}
				</Text>
				<span style={{ display: "inline" }}>
					{item?.issueTcOrder?.customerName?.name.length > 20 ? (
						<Menu trigger="hover">
							<Menu.Item>
								<Text>{item?.issueTcOrder?.customerName?.name}</Text>
							</Menu.Item>
						</Menu>
					) : (
						""
					)}
				</span>
			</Group>
		))
	);
};
export const issuedTcWorkOrderNoAccesor = row =>
	row?.tcMapper?.length > 1 ? (
		<Group style={{ maxWidth: "250px", minWidth: "200px", gap: 0 }}>
			<Text size="sm">{row?.tcMapper?.[0]?.issueTcWorkorder?.workorderno}</Text>
			<Menu trigger="hover" size={"lg"}>
				{row?.tcMapper?.map((item, index) => (
					<Menu.Item key={index}>
						<Text>{item?.issueTcWorkorder?.workorderno}</Text>
					</Menu.Item>
				))}
			</Menu>
		</Group>
	) : (
		row?.tcMapper?.map((item, index) => (
			<Text>{row?.tcMapper?.[0]?.issueTcWorkorder?.workorderno}</Text>
		))
	);

export const issuedTcMpnNoAccesor = row => {
	return localStorage.getItem("active_role") === "CHECKINGOP" ? (
		<WorkOrderPartNoTiptoolMapper data={row?.itemDetails?.[0]} />
	) : (
		<WorkOrderPartNoTiptoolMapper data={row?.tcMapper[0]?.issueTcItem} />
	);
};

export const issuedTcNoAccesor = row =>
	localStorage.getItem("active_role") === "CHECKINGOP"
		? row?.tcDetails.tcno
		: row?.tcno;
export const issuedTcQuantityAccesor = row =>
	row?.quantity?.toLocaleString("en-IN");
export const issuedTCDateAccesor = row =>
	dayjs(row?.createdAt).format("DD/MM/YYYY");
export const issuedTCDeliveryDateAccesor = row =>
	dayjs(row.tcMapper[0]?.issueTcItem?.commitedDate).format("DD/MM/YYYY");

export const issuedTcstatusAccesor = row => row?.status;
export const tcCoresizeAccessors = row => {
	return row.tcMapper[0]?.issueTcItem?.coresize;
};
export const tcBinnoAccessors = row => row?.binno;
export const OrderQuantityAccesor = row =>
	row?.quantity?.toLocaleString("en-IN");
export const productionQuantityAccesor = row => {
	let count = 0;
	row?.tcshift_detail?.map(item => {
		count = count + item?.total_shift_quantity;
	});

	return count.toLocaleString("en-IN");
};

export const plannigChartWindingTypeAccesor = row => {
	return row?.windingtype ? row?.windingtype : "NA";
};
export const coatingQuantityAccesor = row =>
	row?.status_counts?.COATING ? row?.status_counts?.COATING : "NA";
export const cuttingQuantityAccesor = row =>
	row?.status_counts?.CUTTING ? row?.status_counts?.CUTTING : "NA";
export const weldingQuantityAccesor = row =>
	row?.status_counts?.WELDING ? row?.status_counts?.WELDING : "NA";
export const windingQuantityAccesor = row =>
	row?.status_counts?.WINDING ? row?.status_counts?.WINDING : "NA";
export const tcMachineAccesor = row =>
	row?.machines_used?.map((item, index) => (
		<Badge key={index} color="dark">
			{item}
		</Badge>
	));

export const laserCutAccesor = row => row?.isLaserCut ?? "NA";
