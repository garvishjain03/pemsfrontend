import dayjs from "dayjs";

export const warehouseUsernameAccessors = row => row["ware_house"]?.username;
export const warehouseCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const warehouseUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
