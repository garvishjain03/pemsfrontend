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
} from "@mantine/core";

const DeleteUserPopup = ({ row, setOpenedDelete, onDelete }) => {
	return (
		<Container>
			<Center>
				<Text size="xl">{translate("DeleteUserPopupTitle")}</Text>
			</Center>
			<Space h="lg" />

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

export default DeleteUserPopup;
