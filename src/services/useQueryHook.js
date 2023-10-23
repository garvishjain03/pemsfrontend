import React from "react";
import { useLocation } from "react-router-dom";
import { getUser } from "./user";

export const useQuery = () => {
	const { search } = useLocation();

	return React.useMemo(() => new URLSearchParams(search), [search]);
};
