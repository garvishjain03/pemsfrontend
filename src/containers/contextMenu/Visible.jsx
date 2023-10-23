import { useState } from "react";
import { Switch } from "@mantine/core";
import useFetch from "../../hooks/useFetch";
import { getURL } from "../../utils/apiURL";
import { translate } from "../../utils/translate";
import { message } from "../../utils/message";
import {
	getCoreSizes,
	getFormTypes,
	getHoldReasons,
	getLeadDias,
	getLeadLengths,
	getMpnSuffixLists,
	getShapes,
	getTcrs,
	getTolerances,
	getWareHouse,
	getCharacteristics,
	getDelayReasons,
	getTypes,
	getWattages,
} from "../../services/contextGetCalls";

const Visible = ({ status, id, path }) => {
	const [updateVisible] = useFetch();
	const [checked, setChecked] = useState(status);

	const handleChange = async (id, event) => {
		const visible = event.currentTarget.checked;

		const res = await updateVisible(getURL(`${path}/${id}`), {
			method: "PUT",
			body: JSON.stringify({ visible: visible }),
		});
		if (res && res.status === 200) {
			message.success({
				message: translate(`Update${path}SuccessMessage`),
			});
			switch (path) {
				case "delayreasons":
					getDelayReasons();
					break;

				case "characteristics":
					getCharacteristics();
					break;

				case "types":
					getTypes();
					break;
				case "wattages":
					getWattages();
					break;
				case "coresizes":
					getCoreSizes();
					break;

				case "formtypes":
					getFormTypes();
					break;

				case "holdreasons":
					getHoldReasons();
					break;

				case "leaddias":
					getLeadDias();
					break;

				case "leadlengths":
					getLeadLengths();
					break;

				case "mpnsuffixlists":
					getMpnSuffixLists();
					break;

				case "shapes":
					getShapes();
					break;

				case "tcrs":
					getTcrs();
					break;

				case "tolerances":
					getTolerances();
					break;

				case "warehouse":
					getWareHouse();
					break;

				default:
					break;
			}
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
