import { store } from "../../../store";

const disableFiltersUsers = key => {
	const { user } = store.getState();

	return !user?.userConfig?.roles[
		localStorage.getItem("active_role")
	].userPage?.usersTable?.filters?.includes(key);
};

export const disableFiltersUserProfile = () => {
	return disableFiltersUsers("profile");
};

export const disableFiltersUserName = () => {
	return disableFiltersUsers("name");
};

export const disableFiltersUserUserName = () => {
	return disableFiltersUsers("username");
};

export const disableFiltersUserRoles = () => {
	return disableFiltersUsers("Roles");
};

export const disableFiltersUserDefaultRole = () => {
	return disableFiltersUsers("defaultRole");
};

export const disableFiltersUserAction = () => {
	return disableFiltersUsers("action");
};
export const disableFiltersUserStatus = () => {
	return disableFiltersUsers("userStatus");
};
