import React, { useEffect } from "react";
import Form from "../../../component/Form";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Center, Container, MultiSelect, Select } from "@mantine/core";
import { useSelector } from "react-redux";
import { getCoreSizes, getWattages } from "../../../services/contextGetCalls";

const CreateWattagetoCoresize = ({
	defaultValues,
	onSubmit,
	schema,
	buttonTitle = "Create",
}) => {
	const wattages = useSelector(state => state.context.wattages);
	const wattageDropDown = wattages?.rows?.map(item => {
		return { label: item.label, value: item.id };
	});

	const coreSizes = useSelector(state => state.context.coresizes);
	const coresizeDropDown = coreSizes?.rows?.map(item => {
		return { label: item.label, value: item.id };
	});

	const form = useForm({ resolver: yupResolver(schema), defaultValues });

	const { loading } = useSelector(state => state.orders);

	// useEffect(() => {
	// 	getWattages();
	// 	getCoreSizes();
	// }, []);
	return (
		<Container fluid px={24} py={12}>
			<Form form={form} onSubmit={onSubmit}>
				<Form.Group group>
					<Form.Item name="wattage" label="Wattage" required={true} mb="sm">
						<Select
							searchable
							allowDeselect={true}
							placeholder="Pick one"
							data={wattageDropDown || []}
						/>
					</Form.Item>
					<Form.Item name="coresize" label="Coresize" required={true} mb="sm">
						<MultiSelect
							searchable
							allowDeselect={true}
							placeholder="Pick one"
							data={coresizeDropDown || []}
						/>
					</Form.Item>
				</Form.Group>

				<Center mt={24}>
					<Button type="submit" loading={loading}>
						{buttonTitle}
					</Button>
				</Center>
			</Form>
		</Container>
	);
};

export default CreateWattagetoCoresize;
