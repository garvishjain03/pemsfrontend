import React from "react";
import Form from "../../../component/Form";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Center, Container, Select } from "@mantine/core";
import { useSelector } from "react-redux";

const CreateCoresizeToLeadToDia = ({
	defaultValues,
	onSubmit,
	schema,
	buttonTitle = "Create",
}) => {
	const leadLength = useSelector(state => state.context.leadlengths);
	const leadLengthDropDown = leadLength?.rows?.map(item => {
		return { label: item.label, value: item.id };
	});

	const leadDia = useSelector(state => state.context.leaddias);
	const leadDiaDropDown = leadDia?.rows?.map(item => {
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
					<Form.Item name="coresize" label="Coresize" required={true} mb="sm">
						<Select
							searchable
							allowDeselect={true}
							placeholder="Pick one"
							data={coresizeDropDown || []}
						/>
					</Form.Item>

					<Form.Item
						name="leadlength"
						label="Lead Length"
						required={true}
						mb="sm">
						<Select
							searchable
							allowDeselect={true}
							placeholder="Pick one"
							data={leadLengthDropDown || []}
						/>
					</Form.Item>

					<Form.Item name="leaddia" label="Lead Dia" required={true} mb="sm">
						<Select
							searchable
							allowDeselect={true}
							placeholder="Pick one"
							data={leadDiaDropDown || []}
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

export default CreateCoresizeToLeadToDia;
