import dayjs from "dayjs";

export const mappingLeadLengthAccessor = row => row.allleadlength?.label;
export const mappingCoresizeAccessor = row => row.allcoresize?.label;
export const mappingLeadDiaAccessor = row => row.allleaddia?.label;
export const mappingCreatedByAccessor = row => row?.created_by?.username;
export const mappingCreatedAtAccessor = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const mappingupdatedAtAccessor = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
