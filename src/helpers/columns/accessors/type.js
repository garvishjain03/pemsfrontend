import dayjs from "dayjs";

export const typeUsernameAccessors = row => row["type"]?.username;
export const typeCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const typeUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
