import dayjs from "dayjs";

export const characteristicUsernameAccessors = row =>
	row["characteristic"]?.username;
export const characteristicCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const characteristicUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
