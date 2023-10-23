import React from "react";
import Form from "../component/Form";
import * as yup from "yup";
import {
	TextInput,
	Button,
	Container,
	Center,
	Select,
	MultiSelect,
} from "@mantine/core";

let schema = yup.object().shape({});

const UpdateForm = ({ defaultValues, onSubmit, buttonLabel }) => {
	return (
		<Container fluid px={24} py={12}>
			<Form defaultValues={defaultValues} onSubmit={onSubmit} schema={schema}>
				<Form.Item name="firstName" label="First Name" required={false} mb="sm">
					<TextInput type="text" placeholder="Enter First Name" />
				</Form.Item>

				<Form.Item name="lastName" label="LastName" required={false} mb="sm">
					<TextInput type="text" placeholder="Enter Last Name" />
				</Form.Item>

				<Form.Item name="email" label="Email" required={true} mb="sm">
					<TextInput type="text" placeholder="Enter Email" />
				</Form.Item>

				<Form.Item name="phone" label="Phone Number" required={true} mb="sm">
					<TextInput type="text" placeholder="Enter PhoneNumber" />
				</Form.Item>

				<Form.Item
					name="defaultRole"
					label="defaultRole"
					mb="sm"
					required={true}>
					<Select
						allowDeselect={true}
						placeholder="Pick one"
						data={[
							{
								value: "749ce9ea-1284-40b8-9ec5-e2b759857720",
								label: "SuperAdmin",
							},
							{
								value: "3f45b9f1-aa83-4ec7-8874-162062662ea6",
								label: "Admin",
							},
							{
								value: "3cefc4fb-1d2f-4d4b-a984-b98bfbf26e21",
								label: "Sales",
							},
							{
								value: "8ffe0da4-1ba5-4b15-9ee5-11e03d81d360",
								label: "Welder",
							},
						]}
					/>
				</Form.Item>

				<Form.Item name="role" label="Role" mb="sm" required={true}>
					<MultiSelect
						zIndex={10}
						placeholder="Pick"
						data={[
							{
								value: "749ce9ea-1284-40b8-9ec5-e2b759857720",
								label: "SuperAdmin",
							},
							{
								value: "3f45b9f1-aa83-4ec7-8874-162062662ea6",
								label: "Admin",
							},
							{
								value: "3cefc4fb-1d2f-4d4b-a984-b98bfbf26e21",
								label: "Sales",
							},
							{
								value: "8ffe0da4-1ba5-4b15-9ee5-11e03d81d360",
								label: "Welder",
							},
						]}
					/>
				</Form.Item>

				<Center mt={24}>
					<Button type="submit">{buttonLabel}</Button>
				</Center>
			</Form>
		</Container>
	);
};

export default UpdateForm;
