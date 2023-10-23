import { AiFillEdit } from "react-icons/ai";
import React, { useState } from "react";
import { ActionIcon, Modal } from "@mantine/core";
import UpdateContexForm from "./updateContexForm";

import { schema } from "./schema";
import { getURL } from "../../utils/apiURL";
import useFetch from "../../hooks/useFetch";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";
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

const Update = ({ defaultValues, id, context, path }) => {
	const [updateContext] = useFetch();
	const [opened, setOpened] = useState(false);

	const defaultValue = {
		label: defaultValues.label,
		value: defaultValues.value,
		code: defaultValues.code,
		visible: defaultValues.visible,
		createdAt: defaultValues.createdAt,
		updatedAt: defaultValues.updatedAt,
		userprofile: defaultValues[context]?.user_profile,
		username: defaultValues[context]?.username,
	};

	const onSubmit = async value => {
		const res = await updateContext(getURL(`${path}/${id}`), {
			method: "PUT",
			body: JSON.stringify({
				label: value.label,
				visible: value.visible,
				code: value.code,
				value: value.label,
			}),
		});
		if (res && res.status === 200) {
			setOpened(false);
			message.success({
				message: translate(`Update${path}SuccessMessage`),
			});
			switch (context) {
				case "delay_reason":
					getDelayReasons();
					break;

				case "characteristic":
					getCharacteristics();
					break;

				case "type":
					getTypes();
					break;

				case "all_wattages":
					getWattages();
					break;

				case "core_size":
					getCoreSizes();
					break;

				case "form_type":
					getFormTypes();
					break;

				case "hold_reason":
					getHoldReasons();
					break;

				case "lead_dia":
					getLeadDias();
					break;

				case "lead_length":
					getLeadLengths();
					break;

				case "mpn_suffix_list":
					getMpnSuffixLists();
					break;

				case "shape":
					getShapes();
					break;

				case "tcr":
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
		<>
			<Modal
				radius={8}
				padding={0}
				styles={{
					close: {
						color: "#ffff",
						"&:hover": {
							color: "red",
						},
					},
					title: { color: "#ffff", fontWeight: "600" },
					header: {
						padding: "20px",
						backgroundColor: "#228BE6",
						marginRight: "0px",
						borderRadius: "8px 8px 0px 0px",
					},
				}}
				size="xl"
				opened={opened}
				onClose={() => setOpened(false)}
				title="Update ">
				<UpdateContexForm
					defaultValues={defaultValue}
					onSubmit={onSubmit}
					schema={schema}
				/>
			</Modal>

			<ActionIcon
				color="blue"
				variant="transparent"
				onClick={() => setOpened(true)}>
				<AiFillEdit size={22} />
			</ActionIcon>
		</>
	);
};
export default Update;
