import { Avatar, Badge, Center, Group } from "@mantine/core";
import dayjs from "dayjs";
import { FaUserCircle } from "react-icons/fa";
import Update from "../../../containers/MappingUi/wattagetocoresize/Update";
import Delete from "../../../containers/MappingUi/wattagetocoresize/Delete";

export const coresizeWattageToCoresizeCell = ({ row }) => {
	return (
		<Group style={{ maxWidth: "400px" }}>
			{row?.original?.all_wattages_core?.map(item => {
				return (
					<Badge color={"dark"}>{item?.wattage_to_coresizes?.label}</Badge>
				);
			})}
		</Group>
	);
};

export const createByWattageToCoresizeCell = ({ row }) => {
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

export const createdAtWattageToCoresizeCell = ({ row }) => {
	return (
		<span style={{ whiteSpace: "nowrap" }}>
			{dayjs(row.original?.createdAt).format("DD/MM/YYYY h:mm A")}
		</span>
	);
};
export const updatedAtWattageToCoresizeCell = ({ row }) => {
	return (
		<span style={{ whiteSpace: "nowrap" }}>
			{dayjs(row.original?.updatedAt).format("DD/MM/YYYY h:mm A")}
		</span>
	);
};

export const ActionsWattageToCoresizeCell = ({ row, column }) => {
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
