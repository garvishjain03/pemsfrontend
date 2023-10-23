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
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { MdCancel, MdErrorOutline } from "react-icons/md";
import * as yup from "yup";
import useFetch from "../hooks/useFetch";
import { getCount, getWorkOrders } from "../services/salesOrder";
import { getURL } from "../utils/apiURL";
import { message } from "../utils/message";
import { translate } from "../utils/translate";
import Form from "./FormV2";
import {
	ModelErrorStyleObj,
	errorTitle,
} from "../containers/salesOrder/SalesOrderItem";

const WorkorderCancel = ({ data, hasAcceptedTc, tcNo, status }) => {
	const [tcModalOpened, setTcModalOpened] = useState(false);
	const [tcError, setTcError] = useState(false);
	const [cancelWorkorder] = useFetch([]);

	const markCancelhandler = async value => {
		const res = await cancelWorkorder(getURL(`actions/workorder/cancel`), {
			method: "PUT",
			body: JSON.stringify({
				workorders: [
					{
						id: data?.id,
						remark: value.remark,
					},
				],
				roleId: localStorage.getItem("active_roleid"),
			}),
		});

		if (res && res.status === 200) {
			setTcModalOpened(false);

			getWorkOrders();
			getCount();
			message.success({
				message: translate("Workorder mark cancel Succesfull"),
			});
		}
	};

	const schema = yup.object().shape({
		remark: yup.string().required("remark required"),
	});
	const defaultValue = { remark: "" };

	const form = useForm({ resolver: yupResolver(schema), defaultValue });

	const alertTitle = (
		<div style={{ display: "flex", alignItems: "center" }}>
			<MdErrorOutline
				style={{ width: "20px", height: "20px", paddingRight: "4px" }}
			/>{" "}
			WARNING
		</div>
	);
	const ModelAlertStyleObj = {
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

	const tcStatus = data?.issueTcWorkorder?.map(item => item?.tcMapper?.status);

	const isTcIssued =
		data?.status === "TCISSUEDCOMPLETED" || data?.status === "INPROGRESS";

	const conditionCheck = useMemo(() => {
		return (
			tcStatus.includes("CUTTING") ||
			tcStatus.includes("WINDING") ||
			tcStatus.includes("PENDING") ||
			tcStatus.includes("COATING") ||
			tcStatus.includes("COMPLETED") ||
			tcStatus.includes("WELDING") ||
			tcStatus.includes("QUALITY")
		);
	}, [tcStatus]);

	return (
		<div>
			{data?.status === "CANCELLED" || data?.status === "COMPLETED" ? (
				""
			) : (
				<Tooltip label="Cancel Workorder">
					<ActionIcon
						color="red"
						variant="transparent"
						onClick={() => {
							if (hasAcceptedTc) {
								setTcError(true);
							} else {
								setTcModalOpened(true);
							}
						}}>
						<MdCancel size={23} />
					</ActionIcon>
				</Tooltip>
			)}
			<Modal
				radius={8}
				padding={0}
				styles={ModelErrorStyleObj}
				size="lg"
				title={errorTitle}
				transition="fade"
				transitionDuration={600}
				transitionTimingFunction="ease"
				withCloseButton={false}
				opened={tcError}>
				<>
					{tcNo.map((ele, index) => (
						<Text my={10}>
							TC No: <strong>{ele}</strong> is accepted by operator in section:{" "}
							<strong> {status?.[index]}</strong>.
						</Text>
					))}
				</>
				<Text>Workorder cannot be cancelled.</Text>
				<div
					style={{
						display: "flex",
						justifyContent: "right",
						alignItems: "right",
						marginTop: 20,
					}}>
					<Button color={"red"} onClick={() => setTcError(false)}>
						Close
					</Button>
				</div>
			</Modal>
			<Modal
				radius={8}
				padding={0}
				styles={ModelAlertStyleObj}
				size="lg"
				opened={tcModalOpened}
				onClose={() => setTcModalOpened(false)}
				title={alertTitle}>
				{conditionCheck && isTcIssued ? (
					<Text my={10}>
						TCs have been issued for Work Order No:{" "}
						<strong> {data?.workorderno}</strong>.<br /> Please contact RM
						Storekeeper before cancelling the workorder!
					</Text>
				) : (
					<Text my={10}>
						Work Order No: <strong> {data?.workorderno}</strong> will be marked
						as <span style={{ color: "red", fontWeight: 600 }}>CANCELLED</span>
					</Text>
				)}{" "}
				<div>
					<Form form={form} onSubmit={markCancelhandler}>
						<Form.Item name="remark" label=" Remark" required={true}>
							<Textarea
								type="text"
								placeholder="Enter Remark ..."
								required
								my={5}
							/>
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

export default WorkorderCancel;
