import * as ROLES from "../roles";

export const homePageConfig = {
	[ROLES.SUPER_ADMIN]: "/users",
	[ROLES.ADMIN]: "/users",
	[ROLES.SALES]: "/salesorder",
	[ROLES.WINDINGOP]: "/planningchart",
	[ROLES.WELDINGOP]: "/planningchart",
	[ROLES.CHECKINGOP]: "/dashboard",
	[ROLES.COATINGOP]: "/planningchart",
	[ROLES.CUTTINGOP]: "/planningchart",
	[ROLES.DISPATCHOP]: "/salesorder",
	[ROLES.PACKINGOP]: "/salesorder",
	[ROLES.STOREKEEPER]: "/issuedtc",
	[ROLES.SUPERVISOR]: "/dashboard",
	[ROLES.PRODUCTIONPL]: "/salesorder",
	[ROLES.CHECKINGOP]: "/planningchart",
	[ROLES.SYSTEMUSER]: "/permissions",
};
