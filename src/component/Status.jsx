import { useState, useMemo } from "react";
import { Switch } from "@mantine/core";
import useFetch from "../hooks/useFetch";
import { getURL } from "../utils/apiURL";
import { getUsers } from "../services/user";
import { message } from "../utils/message";
import { translate } from "../utils/translate";
import { useSelector } from "react-redux";

const Status = ({ userStatus, id, row }) => {  

	const [updateStatus] = useFetch();
	const intialStatus = userStatus === 1 ? true : false;
	const [checked, setChecked] = useState(intialStatus);
	const user = useSelector(state => state.user.user);

	const handleChange = async (id, event) => {
		const status = event.currentTarget.checked ? 1 : 0;

		const res = await updateStatus(getURL("users/changestatus"), {
			method: "PUT",
			body: JSON.stringify({ userid: id, userStatus: status }),
		});
		if (res.status === 200) {
			message.success({ message: translate("UpdateStatusSuccessMessage") });
			getUsers();
		}
	};

	const disabled = useMemo(() => {
		if (localStorage.getItem("active_role") !== "SYSTEMUSER") {
			return row.original.email === "superadmin@gmail.com";
		} else {
			return id === user.id;
		}
	}, [id, row.original.email, user.id]);

	return (
		<Switch
			checked={checked}
			disabled={disabled}
			onChange={event => {
				setChecked(event.currentTarget.checked);
			}}
			onClick={event => handleChange(id, event)}
		/>
	);
};

export default Status;
