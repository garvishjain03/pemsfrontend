import dayjs from "dayjs";

export const tcrUsernameAccessors = row => row["tcr"]?.username;
export const tcrCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const tcrUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
