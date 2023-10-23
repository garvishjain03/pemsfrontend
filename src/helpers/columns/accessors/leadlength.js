import dayjs from "dayjs";

export const leadlengthUsernameAccessors = row => row["lead_length"]?.username;
export const leadlengthCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const leadlengthUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
