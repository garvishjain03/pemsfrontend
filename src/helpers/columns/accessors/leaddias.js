import dayjs from "dayjs";

export const leaddiaUsernameAccessors = row => row["lead_dia"]?.username;
export const leaddiaCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const leaddiaUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
