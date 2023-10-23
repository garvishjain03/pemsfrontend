import React from "react";
import { translate } from "../utils/translate";
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

const DeleteUsersPopup = ({
	selected,
	setOpenedDelete,
	handleChangeBulkDelete,
}) => {
	return (
		<Container>
			<Center>
				<Text size="xl"> {translate("DeletePopupTitle")}</Text>
			</Center>
			<Space h="lg" />
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
				<Button onClick={() => setOpenedDelete(false)}>Cancel</Button>
				<Button color="red" onClick={() => handleChangeBulkDelete(selected)}>
					Delete All
				</Button>
			</Group>
		</Container>
	);
};

export default DeleteUsersPopup;
