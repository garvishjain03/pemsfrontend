import dayjs from "dayjs";

export const tolerancesUsernameAccessors = row => row["tolerances"]?.username;
export const tolerancesCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const tolerancesUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
