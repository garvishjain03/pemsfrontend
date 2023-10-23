import dayjs from "dayjs";

export const wattageAccessor = row => row?.label;
export const coresizeAccessor = row =>
	row.all_wattages_core?.map(item => {
		return item?.wattage_to_coresizes?.label;
	});
export const createdByAccessor = row => row?.created_by?.username;
export const createdAtAccessor = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const updatedAtAccessor = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
