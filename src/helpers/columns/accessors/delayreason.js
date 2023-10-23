import dayjs from "dayjs";

export const usernameAccessors = row => row["delay_reason"]?.username;
export const createdAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const updatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
