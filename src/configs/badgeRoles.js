import * as ROLES from "./roles";

export const badgeRolesColor = (role = "") => {
	return colors[role.toLowerCase()] || "dark";
};

const colors = {
	[ROLES.SUPER_ADMIN]: "red",
	[ROLES.ADMIN]: "violet",
	[ROLES.SALES]: "green",
	[ROLES.WELDINGOP]: "cyan",
	[ROLES.CHECKINGOP]: "yellow",
	[ROLES.COATINGOP]: "lime",
	[ROLES.CUTTINGOP]: "teal",
	[ROLES.DISPATCHOP]: "grape",
	[ROLES.PACKINGOP]: "pink",
	[ROLES.STOREKEEPER]: "gray",
	[ROLES.SUPERVISOR]: "blue",
	[ROLES.PRODUCTIONPL]: "orange",
	[ROLES.WINDINGOP]: "indigo",
	[ROLES.SYSTEMUSER]: "black",
};
