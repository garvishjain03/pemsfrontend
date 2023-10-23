import { AiFillEdit } from "react-icons/ai";
import React, { useState } from "react";
import { ActionIcon, Modal } from "@mantine/core";

import { schema } from "./schema";
import { getURL } from "../../utils/apiURL";
import useFetch from "../../hooks/useFetch";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";
import { getCustomers } from "../../services/contextGetCalls";
import CreateCustomer from "./customerForm";

const Update = ({ defaultValues, id }) => {
	const [updateCustomer] = useFetch();
	const [opened, setOpened] = useState(false);

	const defaultValue = {
		name: defaultValues.name,
		value: defaultValues.value,
		visible: defaultValues.visible,
	};

	const onSubmit = async value => {
		const res = await updateCustomer(getURL(`customer/${id}`), {
			method: "PUT",
			body: JSON.stringify({
				name: value.name,
				value: value.name,
				visible: value.visible,
			}),
		});
		if (res && res.status === 200) {
			setOpened(false);
			message.success({
				message: translate(`UpdateCustomerSuccessMessage`),
			});
			getCustomers();
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
				<CreateCustomer
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
