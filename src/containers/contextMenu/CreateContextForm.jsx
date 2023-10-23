import React from "react";
import Form from "../../component/Form";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextInput, Button, Center, Container } from "@mantine/core";
import { useSelector } from "react-redux";

const CreateContext = ({ defaultValues, onSubmit, schema }) => {
	const form = useForm({ resolver: yupResolver(schema), defaultValues });
	const { loading } = useSelector(state => state.orders);
	return (
		<Container fluid px={24} py={12}>
			<Form form={form} onSubmit={onSubmit}>
				<Form.Item name="label" label="Label" required={true} mb="sm">
					<TextInput type="text" placeholder="Enter Lable Name" />
				</Form.Item>
				<Form.Item name="code" label="Code" required={true} mb="sm">
					<TextInput type="text" placeholder="Enter Value" />
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

export default CreateContext;
