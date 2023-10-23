import { yupResolver } from "@hookform/resolvers/yup";
import {
	ActionIcon,
	Button,
	Group,
	Modal,
	Text,
	Textarea,
	Tooltip,
} from "@mantine/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdCancel, MdErrorOutline } from "react-icons/md";
import * as yup from "yup";
import { tcIssuedActionConfig } from "../configs/issueTcActionConfig";
import useFetch from "../hooks/useFetch";
import { getIssuedTc } from "../services/issuedTc";
import { getCount } from "../services/salesOrder";
import { getURL } from "../utils/apiURL";
import { message } from "../utils/message";
import { translate } from "../utils/translate";
import Form from "./FormV2";

export const ModelAlertStyleObj = {
	drawer: { background: "rgb(248, 249, 250)" },
	title: { color: "orange", fontWeight: "600" },
	header: {
		padding: "14px",
		marginRight: "0px",
		borderRadius: "8px 8px 0px 0px",
		borderBottom: "2px solid orange",
	},
	body: {
		padding: "4px 16px 16px 16px",
	},
	close: {
		"&:hover": {
			color: "red",
		},
	},
};

export const alertTitle = (
	<div style={{ display: "flex", alignItems: "center" }}>
		<MdErrorOutline
			style={{ width: "20px", height: "20px", paddingRight: "4px" }}
		/>{" "}
		WARNING
	</div>
);

const CancelTC = ({ data }) => {
	const [tcModalOpened, setTcModalOpened] = useState(false);
	const [issueTC] = useFetch([]);

	const markCancelhandler = async value => {
		const res = await issueTC(
			getURL(`/actions/tc/${data?.id}/tcIssuedCancelled`),
			{
				method: "PUT",
				body: JSON.stringify({
					remark: value.remark,
				}),
			}
		);

		if (res && res.status === 200) {
			setTcModalOpened(false);

			getIssuedTc();
			getCount();
			message.success({ message: translate("IssueTC Update Succesfull") });
		}
	};

	const schema = yup.object().shape({
		remark: yup.string().required("remark required"),
	});
	const defaultValue = { remark: "" };

	const form = useForm({ resolver: yupResolver(schema), defaultValue });
	const { reset, setValue } = form;

	return (
		<div>
			{!(!tcIssuedActionConfig(data?.status) || data?.isAccepted === "YES") && (
				<Tooltip label="Cancel Tc">
					<ActionIcon
						color="red"
						variant="transparent"
						onClick={() => {
							setTcModalOpened(true);
						}}>
						<MdCancel size={23} />
					</ActionIcon>
				</Tooltip>
			)}
			<Modal
				radius={8}
				padding={0}
				styles={ModelAlertStyleObj}
				size={"lg"}
				opened={tcModalOpened}
				onClose={() => setTcModalOpened(false)}
				title={alertTitle}>
				<Text my={10}>
					TC No: <strong>{data?.tcno}</strong> will be marked as{" "}
					<span style={{ color: "red", fontWeight: 600 }}>CANCELLED</span>
				</Text>
				<div>
					<Form form={form} onSubmit={markCancelhandler}>
						<Form.Item name="remark" label="Remark" required={true}>
							<Textarea type="text" placeholder="Enter Remark ..." required />
						</Form.Item>
						<Group position="right">
							<Button mt="md" color="red" type={"submit"}>
								Mark Cancel
							</Button>
						</Group>
					</Form>
				</div>
			</Modal>
		</div>
	);
};

export default CancelTC;
