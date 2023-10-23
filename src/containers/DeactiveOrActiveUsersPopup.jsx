import React from "react";
import {
	Button,
	Container,
	Center,
	Text,
	Avatar,
	List,
	Group,
	Space,
	ScrollArea,
} from "@mantine/core";

const DeactiveOrActiveUsersPopup = ({
	selected,
	setOpenedPopup,
	handleChangeBulkStatus,
	status,
	heading,
}) => {
	return (
		<Container>
			<Center style={{ marginBottom: 18 }}>
				<Text size="lg">{heading}</Text>
			</Center>
			<ScrollArea style={{ height: 250 }}>
				<List spacing="xs" size="sm" center>
					{selected.map(row => {
						return (
							<List.Item
								icon={
									<Avatar
										src={`data:${row.original.user_profile[0]?.blob_mimetype};base64,${row.original.user_profile[0]?.blob_data}`}
										size={28}
										radius="xl"
									/>
								}>
								<Text weight={500}>
									{row.original.firstName} {row.original.lastName}
								</Text>
							</List.Item>
						);
					})}
				</List>
			</ScrollArea>
			<Space h="lg" />
			<Group position="center" spacing="xs">
				<Button onClick={() => setOpenedPopup(false)}>Cancel</Button>
				<Button
					color={status ? "green" : "red"}
					onClick={() => handleChangeBulkStatus(selected, status)}>
					{status ? "Activate" : "Deactivate"}
				</Button>
			</Group>
		</Container>
	);
};

export default DeactiveOrActiveUsersPopup;
