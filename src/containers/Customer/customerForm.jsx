import React from "react";
import Form from "../../component/Form";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextInput, Button, Center, Container, Switch } from "@mantine/core";
import { useSelector } from "react-redux";

const CreateCustomer = ({ defaultValues, onSubmit, schema }) => {
	const form = useForm({ resolver: yupResolver(schema), defaultValues });
	const { loading } = useSelector(state => state.orders);
	return (
		<Container fluid px={24} py={12}>
			<Form form={form} onSubmit={onSubmit}>
				<Form.Item name="name" label="Name" required={true} mb="sm">
					<TextInput type="text" placeholder="Enter Customer's Name" />
				</Form.Item>

				<Form.Item name="visible">
					<Switch
						defaultChecked={defaultValues.visible}
						mt="32px"
						label="Show"
					/>
				</Form.Item>

				<Center mt={24}>
					<Button type="submit" loading={loading}>
						Create
					</Button>
				</Center>
			</Form>
		</Container>
	);
};

export default CreateCustomer;
