import { store } from "../../../store";

const disableFiltersContext = key => {
	const { user } = store.getState();

	return !user?.userConfig?.roles[
		localStorage.getItem("active_role")
	].contextPage?.contextTable?.filters?.includes(key);
};

export const disableFiltersValue = () => {
	return disableFiltersContext("value");
};

export const disableFiltersCode = () => {
	return disableFiltersContext("code");
};

export const disableFiltersLabel = () => {
	return disableFiltersContext("label");
};

export const disableFiltersCreatedAt = () => {
	return disableFiltersContext("createdat");
};

export const disableFiltersCreatedBy = () => {
	return disableFiltersContext("createdby");
};
export const disableFiltersUpdatedAt = () => {
	return disableFiltersContext("lastupdatedat");
};

export const disableFiltersVisible = () => {
	return disableFiltersContext("visible");
};
export const disableFiltersAction = () => {
	return disableFiltersContext("action");
};
