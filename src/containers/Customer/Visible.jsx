import { useState } from "react";
import { Switch } from "@mantine/core";
import useFetch from "../../hooks/useFetch";
import { getURL } from "../../utils/apiURL";
import { translate } from "../../utils/translate";
import { message } from "../../utils/message";
import { getCustomers } from "../../services/contextGetCalls";

const Visible = ({ status, id }) => {
	const [updateVisible] = useFetch();
	const [checked, setChecked] = useState(status);

	const handleChange = async (id, event) => {
		const visible = event.currentTarget.checked;

		const res = await updateVisible(getURL(`customer/${id}`), {
			method: "PUT",
			body: JSON.stringify({ visible: visible }),
		});
		if (res && res.status === 200) {
			message.success({
				message: translate(`UpdateCustomerSuccessMessage`),
			});
			getCustomers();
		}
	};

	return (
		<Switch
			checked={checked}
			onChange={event => {
				setChecked(event.currentTarget.checked);
			}}
			onClick={event => handleChange(id, event)}
		/>
	);
};

export default Visible;
