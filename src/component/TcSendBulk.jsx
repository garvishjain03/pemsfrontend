import { Button, Group, Modal, Text } from "@mantine/core";
import React, { useState } from "react";
import { useMemo } from "react";
import { BiError } from "react-icons/bi";
import { MdErrorOutline, MdSend } from "react-icons/md";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { getIssuedTc } from "../services/issuedTc";
import { getCount } from "../services/salesOrder";
import { getURL } from "../utils/apiURL";
import { message } from "../utils/message";
import { translate } from "../utils/translate";

const TcSendBulk = ({ data }) => {
	const [tcModalOpened, setTcModalOpened] = useState(false);
	const [issueTC] = useFetch([]);

	const { types } = useSelector(state => ({
		types: state.context?.types?.rows,
	}));

	const typeIdToLabel = id => {
		let label = "";
		types?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};

	const sendTcHandeler = async args => {
		let ids = [];

		args.map(item => {
			ids.push(item.original.id);
		});

		const res = await issueTC(getURL(`actions/tc/tcsend`), {
			method: "PUT",
			body: JSON.stringify({
				tcids: ids,
			}),
		});

		if (res && res.status === 200) {
			getIssuedTc();
			setTcModalOpened(false);
			getCount();
			message.success({ message: translate("TC Send Successfull") });
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

	const errorTitle = (
		<div style={{ display: "flex", alignItems: "center" }}>
			<BiError style={{ width: "20px", height: "20px", paddingRight: "4px" }} />{" "}
			ERROR
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
	};

	const ModelErrorStyleObj = {
		drawer: { background: "rgb(248, 249, 250)" },
		title: { color: "red", fontWeight: "600" },
		header: {
			padding: "14px",
			marginRight: "0px",
			borderBottom: "2px solid red",
		},

		body: {
			padding: "4px 16px 16px 16px",
			color: "red",
		},
	};
	const sendableTC = useMemo(() => {
		const dataCheck = data?.map(item => {
			const row = item.original;
			return (row.windingtype && row.windingwire && row.wirediameter) ||
				(row.binno && row.batchno)
				? true
				: false;
		});
		return dataCheck?.every(value => value === true) ? true : false;
	}, [data]);

	return (
		<>
			<Button
				disabled={data.length < 1}
				onClick={() => {
					setTcModalOpened(true);
				}}>
				<MdSend size={23} mr={8} /> Send Bulk TC
			</Button>

			<Modal
				radius={8}
				padding={0}
				styles={ModelAlertStyleObj}
				size="lg"
				opened={tcModalOpened}
				withCloseButton={false}
				title={alertTitle}>
				{data?.map(item => {
					const row = item.original;

					return (row.windingtype && row.windingwire && row.wirediameter) ||
						(row.binno && row.batchno) ? (
						typeIdToLabel(row?.tcMapper[0]?.issueTcItem?.type) !==
						"Wire Wound Resistor" ? (
							<Group position="left" direction="column">
								{" "}
								<Text>
									{" "}
									TC No-<strong>{`${row.tcno}`}</strong> will be send for{" "}
									<strong>CUTTING</strong>
								</Text>
							</Group>
						) : (
							<Group position="left" direction="column">
								<Text>
									TC No-<strong>{`${row.tcno}`}</strong> will be send for{" "}
									<strong>WINDING</strong>
								</Text>
							</Group>
						)
					) : typeIdToLabel(row?.tcMapper[0]?.issueTcItem?.type) !==
					  "Wire Wound Resistor" ? (
						<Group position="left" direction="column">
							<Text color="red">
								Bin No and Batch No are required for TC No-
								<strong>{`${row.tcno} `}</strong>!
							</Text>
						</Group>
					) : (
						<Group position="left" direction="column">
							<Text color="red">
								Winding Type, Winding Wire, Wire Dia, Quantity are required for
								TC No-<strong>{`${row.tcno} `}</strong>!
							</Text>
						</Group>
					);
				})}

				<Group position="right">
					{sendableTC ? (
						<Button
							onClick={() => {
								sendTcHandeler(data);
							}}
							mt="md">
							Send
						</Button>
					) : (
						""
					)}
					<Button
						color="red"
						onClick={() => {
							setTcModalOpened(false);
						}}
						mt="md">
						Close
					</Button>
				</Group>
			</Modal>
		</>
	);
};

export default TcSendBulk;
