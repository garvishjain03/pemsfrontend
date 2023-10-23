import dayjs from "dayjs";

export const machineCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const machineUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
export const machineCoresizeAccessor = row =>
	row?.all_machinemanage?.map(item => item.coresizeid);
