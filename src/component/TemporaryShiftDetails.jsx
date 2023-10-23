import { Badge, Divider, Grid, Text } from "@mantine/core";
import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";

const TemporaryShiftDetails = ({ temporaryEntries, tcShift, data, type }) => {
	const { user, machine } = useSelector(state => ({
		user: state?.user?.user,
		machine: state?.context?.machine?.rows,
	}));
	const totalQuantity = () => {
		let total = 0;
		tcShift?.[type]?.map(item => {
			total = total + item.quantity;
		});
		temporaryEntries?.machineArray?.map(ele => {
			total += ele.quantity;
		});
		return total;
	};
	return (
		<>
			{/* <Grid mb={"md"}> */}
			{!tcShift?.[type] &&
				localStorage.getItem("active_role")?.includes(type) &&
				temporaryEntries?.machineArray?.length > 0 && (
					<Grid.Col span={12}>
						<Divider />
					</Grid.Col>
				)}
			{!tcShift?.[type] &&
				localStorage.getItem("active_role")?.includes(type) &&
				temporaryEntries?.machineArray?.length > 0 && (
					<Grid.Col span={12}>
						<Badge size="lg" color={"lime"}>
							{type}
						</Badge>
					</Grid.Col>
				)}
			{localStorage.getItem("active_role")?.includes(type) &&
				temporaryEntries?.machineArray?.map(item => {
					return (
						<>
							<Grid.Col span={data?.windingtype === "Leaded" ? 2 : 3}>
								<Text size="sm" style={{ background: "yellow" }}>
									{user?.firstName + user?.lastName}
								</Text>
							</Grid.Col>
							<Grid.Col span={2}>
								<Text size="sm" style={{ background: "yellow" }}>
									{dayjs(localStorage.getItem("shift_date")).format(
										"DD/MM/YYYY"
									)}
								</Text>
							</Grid.Col>
							<Grid.Col span={data?.windingtype === "Leaded" ? 1 : 2}>
								<Badge color={"dark"} style={{ background: "yellow" }}>
									{machine?.find(ele => ele?.id === item?.machine)?.name}
								</Badge>
							</Grid.Col>
							{data?.windingtype === "Leaded" && (
								<Grid.Col span={1}>
									<Text size="sm" style={{ background: "yellow" }}>
										{item?.shift_quantity_tape}
									</Text>
								</Grid.Col>
							)}
							{data?.windingtype === "Leaded" && (
								<Grid.Col span={1}>
									<Text size="sm" style={{ background: "yellow" }}>
										{item?.quantity}
									</Text>
								</Grid.Col>
							)}
							<Grid.Col span={2}>
								<Text size="sm" style={{ background: "yellow" }}>
									{data?.windingtype === "Leaded"
										? item?.quantity + item?.shift_quantity_tape
										: item?.shift_quantity_tape}
								</Text>
							</Grid.Col>
							<Grid.Col span={data?.windingtype === "Leaded" ? 1 : 2}>
								<Text size="sm" style={{ background: "yellow" }}>
									{localStorage.getItem("shift")}
								</Text>
							</Grid.Col>
							<Grid.Col span={1}></Grid.Col>
						</>
					);
				})}
			{!tcShift?.[type] &&
				localStorage.getItem("active_role")?.includes(type) &&
				temporaryEntries?.machineArray?.length > 0 && (
					<>
						<Grid.Col span={data?.windingtype === "Leaded" ? 2 : 3}>
							<Text size="sm" weight={500}>
								Total
							</Text>
						</Grid.Col>
						<Grid.Col span={2}></Grid.Col>
						<Grid.Col span={data?.windingtype === "Leaded" ? 1 : 2}></Grid.Col>
						{data?.windingtype === "Leaded" && <Grid.Col span={2}></Grid.Col>}
						<Grid.Col span={2}>
							<Text size="sm" weight={500}>
								{totalQuantity()}
							</Text>
						</Grid.Col>
						<Grid.Col span={data?.windingtype === "Leaded" ? 1 : 2}></Grid.Col>
					</>
				)}
			{/* </Grid> */}
		</>
	);
};

export default TemporaryShiftDetails;
