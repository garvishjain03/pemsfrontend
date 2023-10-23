export const nameSortType = (rowA, rowB, id, desc) => {
	const a = rowA.values.Name;
	const b = rowB.values.Name;
	if (rowB.values.UserName === "superadmin") {
		return desc ? -1 : 1;
	}

	return a.localeCompare(b);
};

export const usernameSortType = (rowA, rowB, id, desc) => {
	const a = rowA.values.UserName;
	const b = rowB.values.UserName;
	if (rowB.values.UserName === "superadmin") {
		return desc ? -1 : 1;
	}

	return a.localeCompare(b);
};

export const defaultRoleSortType = (rowA, rowB, id, desc) => {
	const a = rowA.values.DefaultRole;
	const b = rowB.values.DefaultRole;
	if (rowB.values.UserName === "superadmin") {
		return desc ? -1 : 1;
	}

	return a.localeCompare(b);
};
export const rolesSortType = (rowA, rowB, id, desc) => {
	const a = rowA.values.Roles[0];
	const b = rowB.values.Roles[0];
	if (rowB.values.UserName === "superadmin") {
		return desc ? -1 : 1;
	}

	return a.localeCompare(b);
};

export const userStatusSortType = (rowA, rowB, id, desc) => {
	const a = rowA.values.Status;
	const b = rowB.values.Status;
	if (rowB.values.UserName === "superadmin") {
		return desc ? -1 : 1;
	}

	return a === 1 ? -1 : 1;
};
