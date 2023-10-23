import { yupResolver } from "@hookform/resolvers/yup";
import {
	Button,
	Grid,
	Group,
	Modal,
	NumberInput,
	Text,
	Textarea,
} from "@mantine/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import useFetch from "../hooks/useFetch";
import { getCuttingTc } from "../services/issuedTc";
import { getURL } from "../utils/apiURL";
import { message } from "../utils/message";
import { translate } from "../utils/translate";
import Form from "./FormV2";

const QCPass = ({ data, setOpened }) => {
	const [qcModal, setQCModal] = useState(false);
	const [buttonDisable, setButtonDisable] = useState(false);
	const [qcPass] = useFetch([]);
	const schema = yup.object().shape({});
	const defaultValue = { remark: "" };

	const form = useForm({ resolver: yupResolver(schema), defaultValue });
	const { reset } = form;
	const qcPasshandler = async value => {
		setButtonDisable(true);
		const res = await qcPass(
			getURL(`actions/tc/close/${data?.tcDetails?.tcid}`),
			{
				method: "PUT",
				body: JSON.stringify(value),
			}
		);

		if (res && res.status === 200) {
			getCuttingTc();
			setQCModal(false);
			setOpened(false);

			message.success({ message: translate("Tc Submmited Succesfull") });
		} else {
			setButtonDisable(false);
		}
	};

	return (
		<>
			<Button
				onClick={() => {
					setQCModal(true);
				}}>
				QC Pass
			</Button>
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
				}}
				size={"xl"}
				opened={qcModal}
				onClose={() => setQCModal(false)}
				title={
					<Group direction="row">
						<Text>QC Pass</Text>
					</Group>
				}>
				<div style={{ padding: "16px" }}>
					<Grid mb="md">
						{data?.tcDetails?.windingtype ? (
							<Grid.Col span={4}>
								<Text size="sm">
									<strong>Winding Quantity: </strong>
									{data?.status_counts?.WINDING?.toLocaleString("en-IN")}
								</Text>
							</Grid.Col>
						) : (
							<Grid.Col span={4}>
								<Text size="sm">
									<strong>Cutting Quantity: </strong>
									{data?.status_counts?.CUTTING?.toLocaleString("en-IN")}
								</Text>
							</Grid.Col>
						)}
						{data?.tcDetails?.windingtype !== "Leaded" && (
							<Grid.Col span={4}>
								<Text size="sm">
									<strong>Welding Quantity: </strong>
									{data?.status_counts?.WELDING?.toLocaleString("en-IN")}
								</Text>
							</Grid.Col>
						)}
						<Grid.Col span={4}>
							<Text size="sm">
								<strong>Coating Quantity: </strong>
								{data?.status_counts?.COATING?.toLocaleString("en-IN")}
							</Text>
						</Grid.Col>
						{data?.tcDetails?.windingtype === "Leaded" && (
							<Grid.Col span={4}></Grid.Col>
						)}

						{data?.tcDetails?.windingtype !== "Leaded" && (
							<Grid.Col span={4}>
								<Text size="sm">
									<strong>Welding Rejection Nos: </strong>
									{data?.tcDetails?.windingtype === "Melf"
										? data?.status_counts?.WINDING -
										  data?.status_counts?.WELDING
										: data?.status_counts?.CUTTING -
										  data?.status_counts?.WELDING}
								</Text>
							</Grid.Col>
						)}
						<Grid.Col span={4}>
							<Text size="sm">
								<strong>Coating Rejection Nos: </strong>
								{data?.tcDetails?.windingtype === "Leaded"
									? data?.status_counts?.WINDING - data?.status_counts?.COATING
									: data?.status_counts?.CUTTING - data?.status_counts?.COATING}
							</Text>
						</Grid.Col>
						<Grid.Col span={4}></Grid.Col>
						{data?.tcDetails?.windingtype === "Leaded" && (
							<Grid.Col span={4}></Grid.Col>
						)}

						{data?.tcDetails?.windingtype !== "Leaded" && (
							<Grid.Col span={4}>
								<Text size="sm">
									<strong>Welding Rejection %: </strong>
									{data?.tcDetails?.windingtype === "Melf"
										? (
												((data?.status_counts?.WINDING -
													data?.status_counts?.WELDING) /
													data?.status_counts?.WINDING) *
												100
										  ).toFixed(2)
										: (
												((data?.status_counts?.CUTTING -
													data?.status_counts?.WELDING) /
													data?.status_counts?.CUTTING) *
												100
										  ).toFixed(2)}
								</Text>
							</Grid.Col>
						)}
						<Grid.Col span={4}>
							<Text size="sm">
								<strong>Coating Rejection %: </strong>
								{data?.tcDetails?.windingtype === "Leaded"
									? (
											((data?.status_counts?.WINDING -
												data?.status_counts?.COATING) /
												data?.status_counts?.WINDING) *
											100
									  ).toFixed(2)
									: (
											((data?.status_counts?.CUTTING -
												data?.status_counts?.COATING) /
												data?.status_counts?.CUTTING) *
											100
									  ).toFixed(2)}
							</Text>
						</Grid.Col>
					</Grid>

					<Form form={form} onSubmit={qcPasshandler}>
						<Form.Item
							name="quantity"
							label="Accepted Quantity By QC"
							required={true}>
							<NumberInput
								type="text"
								placeholder="Enter Quantity ..."
								required
							/>
						</Form.Item>
						<Form.Item name="remark" label="Remark">
							<Textarea type="text" placeholder="Enter Remark ..." />
						</Form.Item>

						<Group position="right" m={10} gap={10}>
							<Button type={"submit"} color="green" disabled={buttonDisable}>
								QC Pass Submit
							</Button>
							<Button
								onClick={() => {
									setQCModal(false);
									reset({});
								}}
								color="red">
								Close
							</Button>
						</Group>
					</Form>
				</div>
			</Modal>
		</>
	);
};

export default QCPass;
