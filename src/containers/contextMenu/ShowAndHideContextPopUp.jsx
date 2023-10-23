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

const ShowAndHideContextPopup = ({
	selected,
	setOpenedPopup,
	handleChangeBulkHideShowAll,
	visible,
	heading,
}) => {
	return (
		<Container>
			<Center style={{ marginBottom: 18 }}>
				<Text size="lg">{heading}</Text>
			</Center>
			<ScrollArea style={{ height: 250 }}>
				<List spacing="xs" size="sm" listStyleType={"none"} center>
					{selected.map(row => {
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
				<Button onClick={() => setOpenedPopup(false)}>Cancel</Button>
				<Button
					color={visible ? "green" : "red"}
					onClick={() => handleChangeBulkHideShowAll(selected, visible)}>
					{visible ? "Show All" : "Hide All"}
				</Button>
			</Group>
		</Container>
	);
};

export default ShowAndHideContextPopup;
