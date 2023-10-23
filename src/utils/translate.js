import React from "react";
import { Translation } from "react-i18next";
export const translate = text => {
	return <Translation>{(t, { i18n }) => t(text)}</Translation>;
};
