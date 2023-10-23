import dayjs from "dayjs";

export const wattagesUsernameAccessors = row => row["all_wattages"]?.username;
export const wattagesCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const wattagesUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
