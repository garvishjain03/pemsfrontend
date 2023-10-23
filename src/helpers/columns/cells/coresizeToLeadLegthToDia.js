import { Avatar, Center, Group } from "@mantine/core";
import dayjs from "dayjs";
import { FaUserCircle } from "react-icons/fa";
import Update from "../../../containers/MappingUi/coresizeToLeadToDia/Update";
import Delete from "../../../containers/MappingUi/coresizeToLeadToDia/Delete";

export const createdByCoresizeToLeadLengthToDiaCell = ({ row }) => {
	return (
		<Group style={{ minWidth: "120px" }}>
			{row.original.created_by?.user_profile[0]?.blob_mimetype ? (
				<Avatar
					radius="xl"
					src={`data:${row.original.created_by?.user_profile[0]?.blob_mimetype};base64,${row.original.created_by?.user_profile[0]?.blob_data}`}
					alt="abc"
				/>
			) : (
				<FaUserCircle size={20} />
			)}
			{row.original.created_by?.username}
		</Group>
	);
};

export const createdAtCoresizeToLeadLengthToDiaCell = ({ row }) => {
	return (
		<span style={{ whiteSpace: "nowrap" }}>
			{dayjs(row.original?.createdAt).format("DD/MM/YYYY h:mm A")}
		</span>
	);
};
export const updatedAtCoresizeToLeadLengthToDiaCell = ({ row }) => {
	return (
		<span style={{ whiteSpace: "nowrap" }}>
			{dayjs(row.original?.updatedAt).format("DD/MM/YYYY h:mm A")}
		</span>
	);
};

export const ActionsCoresizeToLeadLengthToDiaCell = ({ row, column }) => {
	return (
		<Center>
			{column.showCellElements?.delete ? (
				<Delete id={row.original?.id} row={row} />
			) : null}
			{column.showCellElements?.edit ? (
				<Update defaultValues={row.original} id={row.original?.id} />
			) : null}
		</Center>
	);
};
