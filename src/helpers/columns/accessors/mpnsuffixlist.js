import dayjs from "dayjs";

export const mpnSuffixListUsernameAccessors = row =>
	row["mpn_suffix_list"]?.username;
export const mpnSuffixListCreatedAtAccessors = row =>
	dayjs(row.createdAt).format("MMMM DD YYYY");
export const mpnSuffixListUpdatedAtAccessors = row =>
	dayjs(row.updatedAt).format("MMMM DD YYYY");
