import React from "react";
import Form from "../../component/Form";

import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
	TextInput,
	Button,
	Center,
	Container,
	MultiSelect,
	Select,
	Switch,
} from "@mantine/core";
import { useSelector } from "react-redux";

const CreateMachineMangement = ({
	defaultValues,
	onSubmit,
	schema,
	disableInputs = false,
}) => {
	const coreSizes = useSelector(state => state.context.coresizes);
	const coresizeDropDown = coreSizes?.rows?.map(item => {
		return { label: item.label, value: item.id };
	});

	const form = useForm({ resolver: yupResolver(schema), defaultValues });
	const { control } = form;

	const type = useWatch({
		control,
		name: "type",
	});
	const { loading } = useSelector(state => state.orders);

	return (
		<Container fluid px={24} py={12}>
			<Form form={form} onSubmit={onSubmit}>
				<Form.Item
					// customError="name must end with atleast 1 number"
					name="name"
					label="Name"
					required={true}
					mb="sm">
					<TextInput
						styles={{
							input: { textTransform: "uppercase" },
						}}
						disabled={disableInputs}
						type="text"
						placeholder="Enter Machine Name"
					/>
				</Form.Item>
				<Form.Item name="type" label="Section" required={true} mb="sm">
					<Select
						searchable
						placeholder="Pick one"
						data={["Coating", "Cutting", "Welding", "Winding"]}
						disabled={disableInputs}
					/>
				</Form.Item>

				{type === "Winding" ? (
					<Form.Item
						name="windingProcess"
						label="WindingProcess"
						required={true}
						mb="sm">
						<Select
							searchable
							placeholder="Pick one"
							data={["Melf", "Leaded"]}
						/>
					</Form.Item>
				) : null}

				<Form.Item name="coresize" label="Core Size" required={true} mb="sm">
					<MultiSelect placeholder="Pick" data={coresizeDropDown || []} />
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

export default CreateMachineMangement;
