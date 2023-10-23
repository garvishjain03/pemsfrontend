import * as ROLES from "../roles";
import { adminSidebar } from "./adminSidebar";

import { salesSidebar } from "./salesSidebar";
import { superAdminSidebar } from "./superadminSidebar";
import { systemUserSidebar } from "./systemUserSideBar";
export const sidebarConfig = {
	[ROLES.SUPER_ADMIN]: systemUserSidebar,
	[ROLES.ADMIN]: systemUserSidebar,
	[ROLES.SALES]: systemUserSidebar,
	[ROLES.WINDINGOP]: systemUserSidebar,
	[ROLES.WELDINGOP]: systemUserSidebar,
	[ROLES.CHECKINGOP]: systemUserSidebar,
	[ROLES.COATINGOP]: systemUserSidebar,
	[ROLES.CUTTINGOP]: systemUserSidebar,
	[ROLES.DISPATCHOP]: systemUserSidebar,
	[ROLES.PACKINGOP]: systemUserSidebar,
	[ROLES.STOREKEEPER]: systemUserSidebar,
	[ROLES.SUPERVISOR]: systemUserSidebar,
	[ROLES.PRODUCTIONPL]: systemUserSidebar,
	[ROLES.CHECKINGOP]: systemUserSidebar,
	[ROLES.SYSTEMUSER]: systemUserSidebar,
};
