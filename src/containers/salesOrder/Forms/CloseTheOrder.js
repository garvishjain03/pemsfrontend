import { yupResolver } from "@hookform/resolvers/yup";
import {
	ActionIcon,
	Button,
	Group,
	Modal,
	Table,
	Text,
	Textarea,
	Tooltip,
} from "@mantine/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdCancel, MdErrorOutline } from "react-icons/md";
import * as yup from "yup";
import useFetch from "../../../hooks/useFetch";
import {
	getAllDispatchItems,
	getAllSalesOrders,
	getCount,
	getWorkOrders,
} from "../../../services/salesOrder";
import { getURL } from "../../../utils/apiURL";
import { message } from "../../../utils/message";
import { translate } from "../../../utils/translate";
import Form from "../../../component/FormV2";
import { IoIosDoneAll } from "react-icons/io";
import { useSelector } from "react-redux";
import UnversialRemark, { SingleRemark } from "./RemarkTextArea";
import { useEffect } from "react";

const CloseTheOrder = ({ data, modalOpen = false, setModalOpen }) => {
	const [closeWorkorder] = useFetch([]);
	const [Input, setInput] = useState([]);
	const [gloablRemark, setgloablRemark] = useState("");

	const { selectedItem, individualItem } = useSelector(state => ({
		selectedItem: state.Items,
		individualItem: state.orders?.individualItem,
	}));

	const markClosehandler = async () => {
		const res = await closeWorkorder(getURL(`salesorder/close`), {
			method: "PUT",
			body: JSON.stringify({
				orders: Input,
				universalRemark: gloablRemark,
			}),
		});
		if (res && res.status === 200) {
			setModalOpen(false);
			getAllSalesOrders();
			getCount();
			message.success({
				message: translate("Order mark close Succesful"),
			});
		} else {
			setModalOpen(false);
			message.info({
				message: translate("Order mark close Failed"),
			});
		}
	};

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
		title: { color: "black", fontWeight: "600" },
		header: {
			padding: "14px",
			marginRight: "0px",
			borderRadius: "8px 8px 0px 0px",
			borderBottom: "2px solid orange",
			backgroundColor: "orange",
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

	const handleTheInputChange = (value, argId) => {
		const newObj = Input.map(obj => {
			if (argId === obj.id) {
				return {
					...obj,
					remarks: value,
				};
			}
			return obj;
		});

		setInput(newObj);
	};

	const rows = selectedItem?.map(
		({ customerOrderNumber, orderno, id }, index) => (
			<tr key={index}>
				<td>{customerOrderNumber}</td>
				<td>{orderno}</td>

				<td>
					<SingleRemark
						onChange={e => {
							handleTheInputChange(e.target.value, id);
						}}
					/>
				</td>
			</tr>
		)
	);

	useEffect(() => {
		let mappingItem = individualItem ? [data] : selectedItem;
		const newObj = mappingItem?.map(({ id }) => {
			return {
				id,
				remarks: null,
			};
		});
		setInput(newObj);
	}, []);

	return (
		<>
			<Modal
				radius={8}
				padding={0}
				styles={ModelAlertStyleObj}
				size={individualItem ? "lg" : "68%"}
				opened={modalOpen}
				onClose={() => setModalOpen(false)}
				title={alertTitle}>
				{individualItem ? (
					<>
						<Text my={10}>
							Order No : <strong> {data?.orderno}</strong> will be marked as{" "}
							<span style={{ color: "red", fontWeight: 600 }}>CLOSED</span>
						</Text>
						<div>
							<Textarea
								type="text"
								label="Remark"
								placeholder="Enter Remark ..."
								my={5}
								onChange={e => {
									handleTheInputChange(e.target.value, data.id);
								}}
							/>
							<Group position="right">
								<Button mt="md" color="red" onClick={markClosehandler}>
									Mark Close
								</Button>
							</Group>
						</div>
					</>
				) : (
					<div>
						<div
							style={{
								display: "flex",
								justifyContent: "flex-end",
							}}
							className="RecheckItemsForm_header">
							<div className="AIHeader_item"></div>
							<div className="AIHeader_item"></div>
							<div
								style={{
									width: "100%",
									display: "flex",
									justifyContent: "flex-end",
									marginRight: "2rem",
								}}
								className="AIHeader_item">
								<div
									style={{
										width: "100%",
									}}>
									{!individualItem && (
										<UnversialRemark
											onChange={e => {
												const value = e.target.value;
												setgloablRemark(value);
											}}
										/>
									)}
								</div>
							</div>
						</div>
						<div>
							<Table>
								<thead>
									<tr>
										<th> Item </th>
										<th>Item code</th>
										<th>Remark</th>
									</tr>
								</thead>
								<tbody>{rows}</tbody>
							</Table>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "flex-end",
							}}>
							<Button onClick={markClosehandler}>MARK CLOSE</Button>
						</div>
					</div>
				)}
			</Modal>
		</>
	);
};

export default CloseTheOrder;
