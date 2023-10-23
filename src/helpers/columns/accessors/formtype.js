import dayjs from "dayjs";

export const formtypeUsernameAccessors = row => row["form_type"]?.username;
export const formtypeCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const formtypeUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
