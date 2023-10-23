import React from "react";

import {
	Button,
	Container,
	Center,
	Text,
	Space,
	Group,
	Badge,
} from "@mantine/core";

const DeleteMappingUiPopup = ({ row, setOpenedDelete, onDelete }) => {
	return (
		<Container>
			<Center>
				<Text size="xl">Are you sure you want to Delete?</Text>
			</Center>
			<Space h="lg" />

			<Text weight={500} align="center">
				{row.original.label}-{" "}
				{row?.original?.all_wattages_core?.map(item => {
					return (
						<Badge color={"dark"}>{item?.wattage_to_coresizes?.label}</Badge>
					);
				})}
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
