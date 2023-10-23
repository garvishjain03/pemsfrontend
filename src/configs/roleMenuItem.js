import { FiSettings } from "react-icons/fi";
export const MenuItem = {
	admin: [
		{
			text: "Dashboard",
			icon: <FiSettings />,
		},
		{
			text: "Orders",
			icon: <FiSettings />,
			items: [
				{
					text: "Completed",
					icon: <FiSettings />,
				},
				{
					text: "Pending",
					icon: <FiSettings />,
				},
			],
		},
		{
			text: "Users",
			icon: <FiSettings />,
		},
	],
};
