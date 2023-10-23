import React from "react";
import Form from "../../component/Form";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// Icons

import { TextInput, Button, Center, Container, Switch } from "@mantine/core";

const UpdateContexForm = ({ defaultValues, onSubmit, schema }) => {
	const form = useForm({ resolver: yupResolver(schema), defaultValues });
	return (
		<Container fluid px={24} py={12}>
			<Form form={form} onSubmit={onSubmit}>
				<Form.Group group>
					<Form.Item name="label" label="Label" required={false} mb="sm">
						<TextInput type="text" placeholder="Enter Lable Name" />
					</Form.Item>
					<Form.Item name="code" label="code" required={false} mb="sm">
						<TextInput type="text" placeholder="Enter Code" disabled />
					</Form.Item>
					<Form.Item name="visible">
						<Switch
							defaultChecked={defaultValues.visible}
							mt="32px"
							label="Show"
						/>
					</Form.Item>
				</Form.Group>

				{/* <Form.Group group>
					<Form.Item
						name="createdAt"
						label="Created At"
						required={false}
						mb="sm">
						<TextInput type="text" placeholder="Enter Value" disabled />
					</Form.Item>

					<Form.Item
						name="updatedAt"
						label="updated At"
						required={false}
						mb="sm">
						<TextInput type="text" placeholder="Enter Value" disabled />
					</Form.Item>
				</Form.Group> */}

				{/* <Group position="right">
					<Text>Created By:-</Text>

					{defaultValues.userprofile[0]?.blob_mimetype ? (
						<Avatar
							radius="xl"
							src={`data:${defaultValues.userprofile[0]?.blob_mimetype};base64,${defaultValues.userprofile[0]?.blob_data}`}
							alt="abc"
						/>
					) : (
						<FaUserCircle size={24} />
					)}
					<Text>{defaultValues.username}</Text>
				</Group> */}

				<Center mt={24}>
					<Button type="submit">Update </Button>
				</Center>
			</Form>
		</Container>
	);
};

export default UpdateContexForm;
