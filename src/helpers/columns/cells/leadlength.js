import { Avatar, Center, Group } from "@mantine/core";
import dayjs from "dayjs";
import { FaUserCircle } from "react-icons/fa";
import Delete from "../../../containers/contextMenu/Delete";
import { LEADLENGTHS } from "../../../containers/contextMenu/routes";
import Update from "../../../containers/contextMenu/Update";
import Visible from "../../../containers/contextMenu/Visible";
export const leadlengthCreatedByCell = ({ row }) => {
	return (
		<Group style={{ minWidth: "120px" }}>
			{row.original["lead_length"]?.user_profile[0]?.blob_mimetype ? (
				<Avatar
					radius="xl"
					src={`data:${row.original["lead_length"]?.user_profile[0]?.blob_mimetype};base64,${row.original["lead_length"]?.user_profile[0]?.blob_data}`}
					alt="abc"
				/>
			) : (
				<FaUserCircle size={20} />
			)}
			{row.original["lead_length"]?.username}
		</Group>
	);
};
export const leadlengthCreatedAtCell = ({ row }) => {
	return (
		<span style={{ whiteSpace: "nowrap" }}>
			{dayjs(row.original?.createdAt).format("DD/MM/YYYY h:mm A")}
		</span>
	);
};
export const leadlengthUpdatedAtCell = ({ row }) => {
	return (
		<span style={{ whiteSpace: "nowrap" }}>
			{dayjs(row.original?.updatedAt).format("DD/MM/YYYY h:mm A")}
		</span>
	);
};
export const leadlengthVisibleCell = ({ row }) => {
	return (
		<Center>
			<Visible
				status={row.original?.visible}
				id={row.original?.id}
				path={LEADLENGTHS}
			/>
		</Center>
	);
};
export const leadlengthActionsCell = ({ row, column }) => {
	return (
		<Center>
			<Group spacing={4} style={{ width: "60px" }}>
				{column.showCellElements?.edit ? (
					<Update
						defaultValues={row.original}
						id={row.original?.id}
						context={"lead_length"}
						path={LEADLENGTHS}
					/>
				) : null}
				{column.showCellElements?.delete ? (
					<Delete row={row} id={row.original?.id} path={LEADLENGTHS} />
				) : null}
			</Group>
		</Center>
	);
};
