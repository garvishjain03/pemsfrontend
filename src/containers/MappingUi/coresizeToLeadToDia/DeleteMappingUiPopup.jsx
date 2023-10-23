import React from "react";

import { Button, Container, Center, Text, Space, Group } from "@mantine/core";

const DeleteMappingUiPopup = ({ row, setOpenedDelete, onDelete }) => {
	return (
		<Container>
			<Center>
				<Text size="xl">Are you sure you want to Delete?</Text>
			</Center>
			<Space h="lg" />

			<Text weight={500} align="center">
				{row.original.allcoresize?.label} - {row.original.allleadlength?.label}{" "}
				- {row.original.allleaddia?.label}
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

export default DeleteMappingUiPopup;
