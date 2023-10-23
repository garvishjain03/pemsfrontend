import { Button, Group, Modal, NumberInput, Select, Text } from "@mantine/core";
import React, { useMemo, useState } from "react";
import Form from "./FormV2";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getCuttingTc } from "../services/issuedTc";
import { message } from "../utils/message";
import { translate } from "../utils/translate";
import useFetch from "../hooks/useFetch";
import { getURL } from "../utils/apiURL";

const reworkFormSchema = yup.object().shape({
	tolerance: yup.string().required("tolerance required"),
	unit: yup.string().required("unit required"),
	ohmsvalue: yup.number().required("ohms required"),
	quantity: yup.number().required("quantity required"),
});

export const ReworkForm = ({
	data,
	setOpened,
	setEnterQuantityModal,
	setReworkSubmit,
}) => {
	const [submitRework] = useFetch([]);
	const [reworkModal, setReworkModal] = useState(false);
	const defaultValues = {
		tolerance: data?.tcMapper?.[0]?.issueTcItem?.tolerance,
		ohmsvalue: data?.tcMapper?.[0]?.issueTcItem?.ohms,
		unit: data?.tcMapper?.[0]?.issueTcItem?.unit,
		quantity: null,
	};

	const form = useForm({
		resolver: yupResolver(reworkFormSchema),
		defaultValues,
	});

	const { control, reset, handleSubmit } = form;

	const { tolerance } = useSelector(state => ({
		tolerance: state.context.tolerances?.rows,
	}));

	const toleranceDropDown = useMemo(
		() =>
			tolerance
				?.filter(item => item.visible)
				?.map(item => {
					return { label: item.label, value: item.id };
				}),
		[tolerance]
	);

	const submitHandler = async value => {
		const res = await submitRework(getURL(`actions/tc/rework/${data.id}`), {
			method: "PUT",
			body: JSON.stringify(value),
		});

		if (res && res.status === 201) {
			setReworkModal(false);
			setOpened(false);
			setEnterQuantityModal(false);
			setReworkSubmit(false);
			getCuttingTc();

			message.success({ message: translate("Tc sent for rework ") });
		}
	};

	return (
		<>
			{data?.isAccepted === "YES" &&
				localStorage.getItem("active_role") === "COATINGOP" && (
					<Button
						color={"green"}
						onClick={() => {
							setReworkModal(true);
						}}>
						TC Rework
					</Button>
				)}
			<Modal
				radius={8}
				padding={0}
				styles={{
					close: {
						color: "#ffff",
						"&:hover": {
							color: "red",
						},
					},

					title: { color: "#ffff", fontWeight: "600" },
					header: {
						padding: "20px",
						backgroundColor: "#228BE6",

						marginRight: "0px",
						borderRadius: "8px 8px 0px 0px",
					},
					body: {
						padding: "16px",
					},
				}}
				size={"lg"}
				opened={reworkModal}
				onClose={() => setReworkModal(false)}
				title={
					<Group direction="row">
						<Text>Rework Form</Text>
					</Group>
				}>
				<>
					<Form form={form} onSubmit={handleSubmit(submitHandler)}>
						<Form.Group grid={3}>
							<Form.Item
								name="tolerance"
								label="Tolerance"
								required={true}
								mb="sm">
								<Select
									searchable
									placeholder="Pick one"
									data={toleranceDropDown}
									required
								/>
							</Form.Item>

							<Form.Item name="ohmsvalue" label="Ohms" required={true} mb="sm">
								<NumberInput precision={2} placeholder="Enter Value" required />
							</Form.Item>
							<Form.Item name="unit" label="Unit" required={true} mb="sm">
								<Select
									searchable
									allowDeselect={true}
									placeholder="Pick one"
									data={["R", "K", "M"]}
									required
								/>
							</Form.Item>
						</Form.Group>
						<Form.Item name="quantity" label="Quantity" required={true} mb="sm">
							<NumberInput placeholder="Enter Value" required />
						</Form.Item>
						<Button type="submit">Submit</Button>
					</Form>
				</>
			</Modal>
		</>
	);
};
