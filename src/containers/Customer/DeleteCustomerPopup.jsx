import React from "react";
import { translate } from "../../utils/translate";
import { Button, Container, Center, Text, Space, Group } from "@mantine/core";

const DeleteCustomerPopup = ({ row, title, setOpenedDelete, onDelete }) => {
	return (
		<Container>
			<Center>
				<Text size="xl"> {translate(`Delete${title}PopupTitle`)}</Text>
			</Center>
			<Space h="lg" />

			<Text weight={500} align="center">
				{row.original.name}
			</Text>

			<Space h="lg" />
			<Group position="center" spacing="xs">
				<Button onClick={() => setOpenedDelete(false)}>Cancel</Button>
				<Button color="red" onClick={() => onDelete(row.original?.id)}>
					Delete
				</Button>
			</Group>
		</Container>
	);
};

export default DeleteCustomerPopup;
