import * as ROLES from "./roles";

export const commentStatusColorConfig = status => {
	return colors[status?.toLowerCase()] || "dark";
};

const colors = {
	["accepted"]: "green",
	["recheck"]: "yellow",
	// [ROLES.COATINGOP]: "lime",,
	["inproduction"]: "indigo",
	["rejected"]: "red",
	["pending"]: "teal",
	// [ROLES.WELDINGOP]: "cyan",
	// [ROLES.CHECKINGOP]: "yellow",
	// [ROLES.COATINGOP]: "lime",
	// [ROLES.CUTTINGOP]: "teal",
	// [ROLES.DISPATCHOP]: "grape",
	// [ROLES.PACKINGOP]: "pink",
	// [ROLES.STOREKEEPER]: "gray",
	// [ROLES.SUPERVISOR]: "blue",
	// [ROLES.PRODUCTIONPL]: "orange",
	// [ROLES.WINDINGOP]: "indigo",
	// [ROLES.SYSTEMUSER]: "black",
};
