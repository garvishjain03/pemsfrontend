import React from "react";

import {
	Button,
	Container,
	Center,
	Text,
	Avatar,
	List,
	Space,
	Group,
	ScrollArea,
} from "@mantine/core";

const DeleteBulkContext = ({
	selected,
	setOpenedDelete,
	handleChangeBulkDelete,
}) => {
	return (
		<Container>
			<Center>
				<Text size="xl"> Are You Sure You Want to delete all?</Text>
			</Center>
			<Space h="lg" />
			<ScrollArea style={{ height: 250 }}>
				<List spacing="xs" size="sm" listStyleType={"none"} center>
					{selected?.map(row => {
						return (
							<List.Item key={row.id}>
								<Text weight={500}>{row.label}</Text>
							</List.Item>
						);
					})}
				</List>
			</ScrollArea>
			<Space h="lg" />
			<Group position="center" spacing="xs">
				<Button onClick={() => setOpenedDelete(false)}>Cancel</Button>
				<Button color="red" onClick={() => handleChangeBulkDelete(selected)}>
					Delete All
				</Button>
			</Group>
		</Container>
	);
};

export default DeleteBulkContext;
