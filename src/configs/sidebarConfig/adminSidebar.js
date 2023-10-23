import * as ROUTES from "../routes";

import { FaUserFriends } from "react-icons/fa";

export const adminSidebar = [
	{
		title: "User",
		key: "user",
		path: ROUTES.USERS,
		icon: FaUserFriends,
	},
];
