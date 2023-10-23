import dayjs from "dayjs";

export const holdreasonUsernameAccessors = row => row["hold_reason"]?.username;
export const holdreasonCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const holdreasonUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
