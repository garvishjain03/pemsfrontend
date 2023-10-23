import dayjs from "dayjs";

export const shapeUsernameAccessors = row => row["shape"]?.username;
export const shapeCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const shapeUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
