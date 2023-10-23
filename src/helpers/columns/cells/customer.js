import { Center, Group } from "@mantine/core";
import dayjs from "dayjs";
import Delete from "../../../containers/Customer/Delete";
import Update from "../../../containers/Customer/Update";
import Visible from "../../../containers/Customer/Visible";

export const createdAtCustomerCell = ({ row }) => {
	return (
		<span style={{ whiteSpace: "nowrap" }}>
			{dayjs(row.original?.createdAt).format("DD/MM/YYYY h:mm A")}
		</span>
	);
};
export const updatedAtCustomerCell = ({ row }) => {
	return (
		<span style={{ whiteSpace: "nowrap" }}>
			{dayjs(row.original?.updatedAt).format("DD/MM/YYYY h:mm A")}
		</span>
	);
};
export const visibleCustomerCell = ({ row }) => {
	return (
		<Center>
			<Visible status={row.original?.visible} id={row.original?.id} />
		</Center>
	);
};
export const ActionsCustomerCell = ({ row, column }) => {
	return (
		<Center>
			<Group spacing={4} style={{ width: "60px" }}>
				{column.showCellElements?.edit ? (
					<Update defaultValues={row.original} id={row.original?.id} />
				) : null}

				{column.showCellElements?.delete ? (
					<Delete row={row} id={row.original?.id} path={"customer"} />
				) : null}
			</Group>
		</Center>
	);
};
