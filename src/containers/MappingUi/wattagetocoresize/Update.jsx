import { AiFillEdit } from "react-icons/ai";
import React, { useState } from "react";
import { ActionIcon, Modal } from "@mantine/core";

import { schema } from "./schema";

import CreateWattagetoCoresize from "./createWattagetoCoresize";
import { getWattageToCoresizes } from "../../../services/contextGetCalls";
import { getURL } from "../../../utils/apiURL";
import { message } from "../../../utils/message";
import { translate } from "../../../utils/translate";
import useFetch from "../../../hooks/useFetch";

const Update = ({ defaultValues, id }) => {
	const [updateMapping] = useFetch();
	const [opened, setOpened] = useState(false);
	const defaultCoresizes = defaultValues?.all_wattages_core?.map(
		item => item.coresizeid
	);

	const defaultValue = {
		wattage: defaultValues.id,
		coresize: defaultCoresizes,
	};

	const onSubmit = async value => {
		const res = await updateMapping(getURL(`wattage-to-coresizes/${id}`), {
			method: "PUT",
			body: JSON.stringify({
				wattageid: value.wattage,
				coresizeid: value.coresize,
			}),
		});
		if (res && res.status === 201) {
			setOpened(false);
			message.success({
				message: translate(`UpdateWattageToCoresizeSuccessMessage`),
			});
			getWattageToCoresizes();
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
				size="md"
				opened={opened}
				onClose={() => setOpened(false)}
				title="Update ">
				<CreateWattagetoCoresize
					defaultValues={defaultValue}
					onSubmit={onSubmit}
					schema={schema}
					buttonTitle={"Update"}
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
