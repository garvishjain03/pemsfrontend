import { AiFillEdit } from "react-icons/ai";
import React, { useState } from "react";
import { ActionIcon, Modal } from "@mantine/core";

import { schema } from "./schema";

import { getCoresizesToLeadLengthandDia } from "../../../services/contextGetCalls";
import { getURL } from "../../../utils/apiURL";
import { message } from "../../../utils/message";
import { translate } from "../../../utils/translate";
import useFetch from "../../../hooks/useFetch";
import CreateCoresizeToLeadToDia from "./createCoresizeToLeadToDia";

const Update = ({ defaultValues, id }) => {
	const [updateMapping] = useFetch();
	const [opened, setOpened] = useState(false);

	const defaultValue = {
		leadlength: defaultValues.allleadlength?.id,
		coresize: defaultValues.allcoresize?.id,
		leaddia: defaultValues.allleaddia?.id,
	};

	const onSubmit = async value => {
		const res = await updateMapping(
			getURL(`coresize-to-leadlength-and-leaddia/${id}`),
			{
				method: "PUT",
				body: JSON.stringify({
					coresizeid: value.coresize,
					leadlengthid: value.leadlength,
					leaddiaid: value.leaddia,
				}),
			}
		);
		if (res && res.status === 412) {
			if (res.data?.code === "0022") {
				message.error({
					message: translate("Mapping already exist"),
				});
			}
		}
		if (res && res.status === 200) {
			setOpened(false);
			message.success({
				message: translate(`UpdateCoresizeToLeadToDiaSuccessMessage`),
			});
			getCoresizesToLeadLengthandDia();
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
				<CreateCoresizeToLeadToDia
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
