import React, { useEffect, useState } from "react";

import {
	ActionIcon,
	Button,
	Group,
	Input,
	Modal,
	Table,
	Text,
} from "@mantine/core";
import { AiOutlineRight } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { useSelector } from "react-redux";
import {
	getStockQuantity,
	saveBulkWorkOrderItemStatus,
} from "../../../services/SaleItem";
import UnversialRemark, { SingleRemark } from "./RemarkTextArea";

const AcceptItemTable = ({ selectedRow, setselectedRow, stockQuantity }) => {
	const styelObj = {
		width: "2rem",
		border: "2px solid #4c4c4c",
		background: "rgb(231 245 255)",
		display: "flex",
		justifyContent: " center",
		alignContent: " center",
	};

	const rows = selectedRow.map(
		(
			{
				itemno,
				customerPartNo,
				id,
				price,
				orderquantity,
				qty,
				remark,
				mpn,
				orderType,
				partNo,
			},
			index
		) => {
			const trimItemCode = itemno.split("Q")?.[0];
			const stockQty = () => stockQuantity?.filter(ele => ele.mpn == mpn);
			return (
				<tr key={index}>
					{" "}
					{/* <td>
          <Checkbox disabled checked={true} />
          </td> */}
					<td>{trimItemCode}</td>
					<td>{orderType == "Traded" ? partNo : mpn}</td>
					<td>{stockQty()?.[0]?.total_stock_quantity ?? 0}</td>
					<td>{orderquantity}</td>
					<td>
						{" "}
						<div style={styelObj}>
							<ActionIcon
								variant="transparent"
								onClick={() => {
									const updateObj = selectedRow.map((obj, i) => {
										if (index === i) {
											return { ...obj, qty: obj.orderquantity };
										}
										return obj;
									});
									setselectedRow(updateObj);
								}}>
								<AiOutlineRight size={20} color="#339af0" />
							</ActionIcon>
						</div>
					</td>
					<td>
						<div
							style={{
								width: "7rem",
							}}>
							<Input
								type="number"
								min={1}
								value={qty}
								onChange={e => {
									const value = e.target.value;

									const updateObj = selectedRow.map((obj, i) => {
										if (index === i) {
											return { ...obj, qty: value };
										}
										return obj;
									});
									setselectedRow(updateObj);
								}}
							/>
						</div>
					</td>
					<td>
						<SingleRemark
							value={remark}
							onChange={e => {
								const value = e.target.value;

								const updateObj = selectedRow.map((obj, i) => {
									if (index === i) {
										return { ...obj, remark: value };
									}
									return obj;
								});
								setselectedRow(updateObj);
							}}
						/>
					</td>
				</tr>
			);
		}
	);

	return (
		<div>
			<Table>
				<thead>
					<tr>
						<th>Item</th>
						<th>MPN</th>
						<th>Available in stock</th>
						<th>Order Quantity</th>
						<th>
							<div style={styelObj}>
								<ActionIcon
									variant="transparent"
									onClick={() => {
										const updateObj = selectedRow.map(obj => {
											return { ...obj, qty: obj.orderquantity };
										});
										setselectedRow(updateObj);
									}}>
									<AiOutlineRight size={20} color="#339af0" />
								</ActionIcon>
							</div>
						</th>
						<th>Enter Quantity</th>
						<th style={{ width: "30%" }}>Remark</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</div>
	);
};
const WorkOrderForm = ({ setWorkOrderFormBool }) => {
	const [GlobalRemark, setGlobalRemark] = useState("");

	const [wordOrderErrorMessage, setwordOrderErrorMessage] = useState({
		bool: false,
		data: [],
	});

	const { selectedItem, stockQuantity = [] } = useSelector(state => ({
		selectedItem: state.Items,
		stockQuantity: state.stock?.stockQuantity,
	}));

	const ModifiledselectedItem = selectedItem.map(obj => ({
		...obj,
		qty: 0,
		remark: "",
	}));

	const [selectedRow, setselectedRow] = useState(ModifiledselectedItem);

	const handlTheSubmit = () => {
		const item = selectedRow.map(({ id, remark, qty }) => ({
			itemid: id,
			remark,
			qty,
		}));
		const IsQuantityIsZero = selectedRow.filter(({ qty }) => Number(qty) == 0);
		if (IsQuantityIsZero.length > 0) {
			setwordOrderErrorMessage({
				bool: true,
				data: IsQuantityIsZero,
			});

			return;
		}

		const { orderid } = selectedItem[0];
		const obj = {
			orderid,
			item,
			universalRemark: GlobalRemark,
			roleid: localStorage.getItem("active_roleid"),
		};

		saveBulkWorkOrderItemStatus(orderid, obj);
		setWorkOrderFormBool(false);
	};
	const ModelStyleObj = {
		drawer: { background: "rgb(248, 249, 250)" },
		closeButton: {
			color: "#ffff",
			"&:hover": {
				color: "red",
			},
		},

		close: {
			color: "#ffff",
			"&:hover": {
				color: "red",
			},
		},

		title: { color: "#ffff", fontWeight: "600" },
		header: {
			padding: "20px",
			backgroundColor: "#228BE",
			marginRight: "0px",
			borderRadius: "8px 8px 0px 0px",
		},

		body: {
			paddingBottom: ".5rem",
			paddingLeft: ".5rem",
			paddingRight: ".5rem",
		},
	};

	const errorTitle = (
		<div style={{ display: "flex", alignItems: "center" }}>
			<BiError style={{ width: "20px", height: "20px", paddingRight: "4px" }} />{" "}
			ERROR
		</div>
	);

	const ModelErrorStyleObj = {
		drawer: { background: "rgb(248, 249, 250)" },
		closeButton: {
			color: "#ffff",
			"&:hover": {
				color: "red",
			},
		},

		close: {
			color: "#ffff",
			"&:hover": {
				color: "red",
			},
		},

		title: { color: "red", fontWeight: "600" },
		header: {
			padding: "14px",
			marginRight: "0px",
			borderRadius: "8px 8px 0px 0px",
			borderBottom: "2px solid red",
		},

		body: {
			padding: "4px 16px 16px 16px",
			color: "red",
		},
	};

	useEffect(() => {
		getStockQuantity(selectedItem.map(data => data.mpn));
	}, []);

	return (
		<div>
			<>
				{selectedItem.length > 1 && (
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							marginBottom: "2rem",
							width: "100%",
						}}
						className="WorkOrderForm_header">
						<div
							style={{
								width: "100%",
							}}
							className="AIHeader_item">
							<UnversialRemark
								onChange={e => {
									const value = e.target.value;
									setGlobalRemark(value);
								}}
							/>
						</div>
					</div>
				)}
				<div className="AcceptItemTable">
					<AcceptItemTable
						selectedRow={selectedRow}
						setselectedRow={setselectedRow}
						stockQuantity={stockQuantity}
					/>
				</div>{" "}
				<div
					style={{
						display: "flex",
						justifyContent: "flex-end",
					}}>
					<Button onClick={handlTheSubmit}>ISSUE WORK ORDER</Button>
				</div>
			</>
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelErrorStyleObj}
					size="lg"
					opened={wordOrderErrorMessage.bool}
					title={errorTitle}
					transition="fade"
					transitionDuration={600}
					transitionTimingFunction="ease"
					withCloseButton={false}>
					{wordOrderErrorMessage.data.map(({ mpn, itemno }) => (
						<Group position="left" direction="column">
							<Text fz="sm">
								{mpn ? (
									<span>
										Item quantity can not be zero for item MPN :{" "}
										<strong>{mpn}</strong>
									</span>
								) : (
									<span>
										Order Quantity can not be zero <strong>{itemno}</strong>{" "}
									</span>
								)}
							</Text>
						</Group>
					))}

					<Group position="right" mt={"md"}>
						<Button
							color={"red"}
							onClick={() => {
								setwordOrderErrorMessage({
									bool: false,
									data: [],
								});
							}}>
							Close
						</Button>
					</Group>
				</Modal>
			</>
		</div>
	);
};
export default WorkOrderForm;
