import dayjs from "dayjs";

export const coresizeUsernameAccessors = row => row["core_size"]?.username;
export const coresizeCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const coresizeUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
