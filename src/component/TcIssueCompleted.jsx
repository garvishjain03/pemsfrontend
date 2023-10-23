import { ActionIcon, Button, Group, Modal, Text, Tooltip } from "@mantine/core";
import React, { useMemo, useState } from "react";
import { BsFillCollectionFill } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import useFetch from "../hooks/useFetch";
import { getCount, getWorkOrders } from "../services/salesOrder";
import { getURL } from "../utils/apiURL";
import { message } from "../utils/message";
import { translate } from "../utils/translate";

const TcIssueCompleted = ({ data }) => {
	const [tcModalOpened, setTcModalOpened] = useState(false);
	const [statusMark] = useFetch([]);

	const issuedQuantity = useMemo(() => {
		let count = 0;
		data?.issueTcWorkorder?.map(item => {
			count = count + item?.tcMapper?.quantity;
		});
		return count;
	}, [data]);

	const submitHandler = async () => {
		const res = await statusMark(
			getURL(`actions/wo/${data.id}/tcIssuedCompleted`),
			{
				method: "PUT",

				//	body: JSON.stringify({}),
			}
		);

		if (res && res.status === 200) {
			setTcModalOpened(false);
			message.success({
				message: translate(`Status updated successfull`),
			});
			getWorkOrders();
			getCount();
		}
	};

	const alertTitle = (
		<div style={{ display: "flex", alignItems: "center" }}>
			<MdErrorOutline
				style={{ width: "20px", height: "20px", paddingRight: "4px" }}
			/>{" "}
			ALERT
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

	return (
		<div>
			<Tooltip style={{ paddingBottom: "4px" }} label="TC Issue Completed">
				<ActionIcon
					disabled={["CANCELLED", "TCISSUEDCOMPLETED"].includes(data.status)}
					variant="transparent"
					color="#339af0"
					onClick={() => {
						setTcModalOpened(true);
					}}>
					<BsFillCollectionFill
						size={24}
						color={
							["CANCELLED", "TCISSUEDCOMPLETED"].includes(data.status)
								? ""
								: "#339af0"
						}
					/>
				</ActionIcon>
			</Tooltip>
			<Modal
				radius={8}
				padding={0}
				opened={tcModalOpened}
				styles={ModelAlertStyleObj}
				size="auto"
				title={alertTitle}
				onClose={() => setTcModalOpened(false)}>
				<Text>
					Work Order No: <strong>{data?.workorderno}</strong> will be marked as{" "}
					<span style={{ color: "green", fontWeight: 700 }}>
						TC ISSUE COMPLETED
					</span>
				</Text>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: 20,
					}}>
					{" "}
					<Text mt={16}>
						{" "}
						{issuedQuantity < data?.qty ? (
							<div
								style={{
									display: "flex",
									alignItems: "center",
								}}>
								<FiAlertCircle size={18} color="orange" />
								<Text fz="sm" color="orange" pl={4} mt={-4}>
									Issued quantity is not equal to workorder quantity
								</Text>
							</div>
						) : (
							""
						)}
					</Text>
					<Group position="right" mt={"md"}>
						<Button onClick={() => submitHandler()}>Submit</Button>
					</Group>
				</div>
			</Modal>
		</div>
	);
};

export default TcIssueCompleted;
