import dayjs from "dayjs";

export const customerCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const customerUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
