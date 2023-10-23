import { Badge, Center, Group } from "@mantine/core";
import dayjs from "dayjs";
import Delete from "../../../containers/machineManagement/Delete";
import Update from "../../../containers/machineManagement/Update";
import Visible from "../../../containers/machineManagement/Visible";

export const createdAtMachineCell = ({ row }) => {
	return (
		<span style={{ whiteSpace: "nowrap" }}>
			{dayjs(row.original?.createdAt).format("DD/MM/YYYY h:mm A")}
		</span>
	);
};

export const coreSizeMachineCell = ({ row }) => {
	return (
		<Group>
			{row.original?.all_machinemanage?.map(item => {
				return <Badge color={"dark"}>{item?.all_machinecoresize?.label}</Badge>;
			})}
		</Group>
	);
};
export const windingProcessMachineCell = ({ row }) => {
	return row.original?.WindingProcess === ""
		? "N/A"
		: row.original?.WindingProcess;
};

export const updatedAtMachineCell = ({ row }) => {
	return (
		<span style={{ whiteSpace: "nowrap" }}>
			{dayjs(row.original?.updatedAt).format("DD/MM/YYYY h:mm A")}
		</span>
	);
};
export const visibleMachineCell = ({ row }) => {
	return (
		<Center>
			<Visible status={row.original?.visible} id={row.original?.id} />
		</Center>
	);
};
export const actionsMachineCell = ({ row, column }) => {
	return (
		<Center>
			<Group spacing={4} style={{ width: "60px" }}>
				{column.showCellElements?.edit ? (
					<Update defaultValues={row.original} id={row.original?.id} />
				) : null}

				{column.showCellElements?.delete ? (
					<Delete row={row} id={row.original?.id} path={"machine"} />
				) : null}
			</Group>
		</Center>
	);
};
