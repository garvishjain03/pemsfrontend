import React, { useEffect, useState } from "react";
import { ActionIcon, Button, TextInput, Input, Text } from "@mantine/core";
import { Table } from "@mantine/core";
import { AiOutlineRight } from "react-icons/ai";
import UnversialRemark, { SingleRemark } from "./RemarkTextArea";
import { useSelector } from "react-redux";
import { queryAllByTestId } from "@testing-library/react";
import { procureItemApi } from "../../../services/SaleItem";

const AcceptItemTable = ({
	setInput,
	input,
	remarkError,
	hasError,
	leadtimeError,
	procurequantityError,
}) => {
	const styelObj = {
		width: "2rem",
		border: "2px solid #4c4c4c",
		background: "rgb(231 245 255)",
		display: "flex",
		"justify-content": " center",
		"align-content": " center",
	};

	const {
		selectedItem,
		itemDetails = [],
		individualItem,
	} = useSelector(state => ({
		selectedItem: state.Items,
		itemDetails: state.orders?.individualItemDetails,
		individualItem: state.orders?.individualItem,
	}));

	const handleTheInputChange = (value, argId) => {
		const newObj = input.map(obj => {
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

	let mappingItem = individualItem ? itemDetails : selectedItem;

	const rows = mappingItem.map(
		(
			{
				itemno,
				customerPartNo,
				id,
				orderquantity,
				remark,
				mpn,
				orderType,
				partNo,
			},
			index
		) => {
			const quantityArray = input.find(data => data.id == id);
			const trimItemCode = itemno.split("Q")?.[0];
			return (
				<tr key={index}>
					<td>{trimItemCode}</td>
					<td>{orderType == "Traded" ? partNo : mpn}</td>
					<td>{orderquantity}</td>
					<td>
						{" "}
						<div style={styelObj}>
							<ActionIcon
								variant="transparent"
								onClick={() => {
									const newObj = input.map(obj => {
										if (id === obj.id) {
											return {
												...obj,
												procurequantity: orderquantity,
											};
										}
										return obj;
									});
									setInput(newObj);
								}}>
								<AiOutlineRight size={20} color="#339af0" />
							</ActionIcon>
						</div>
					</td>
					<td>
						<div
							style={{
								width: "9rem",
							}}>
							<Input
								type="number"
								min={1}
								value={quantityArray?.procurequantity}
								placeholder={"Enter Quantity"}
								onChange={e => {
									const value = e.target.value;
									const updateObj = input.map((obj, i) => {
										if (index === i) {
											return { ...obj, procurequantity: value };
										}
										return obj;
									});
									setInput(updateObj);
								}}
							/>
							{procurequantityError && hasError && (
								<Text size="sm" color="red">
									quantity required!
								</Text>
							)}
						</div>
					</td>
					<td>
						<div
							style={{
								width: "10rem",
							}}>
							<TextInput
								placeholder="Enter Lead Time"
								withAsterisk
								onChange={e => {
									const value = e.target.value;
									const updateObj = input.map((obj, i) => {
										if (index === i) {
											return { ...obj, leadtime: value };
										}
										return obj;
									});
									setInput(updateObj);
								}}
							/>
							{leadtimeError && hasError && (
								<Text size="sm" color="red">
									leadtime required!
								</Text>
							)}
						</div>
					</td>
					<td>
						<SingleRemark
							value={remark}
							onChange={e => {
								handleTheInputChange(e.target.value, id);
							}}
						/>
						{remarkError == "remark" && hasError && (
							<Text size="sm" color="red">
								remark required!
							</Text>
						)}
					</td>
				</tr>
			);
		}
	);

	return (
		<Table>
			<thead>
				<tr>
					<th>Item</th>
					<th>MPN</th>
					<th>Order Quantity</th>
					<th>
						<div style={styelObj}>
							<ActionIcon
								variant="transparent"
								onClick={() => {
									const newObj = input.map((obj, index) => {
										return {
											...obj,
											procurequantity: mappingItem[index]?.orderquantity,
										};

										return obj;
									});
									setInput(newObj);
								}}>
								<AiOutlineRight size={20} color="#339af0" />
							</ActionIcon>
						</div>
					</th>
					<th>Quantity to Procure</th>
					<th> Lead Time</th>
					<th>Remark</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
};
const ProcurementForm = ({ setProcurementFormBool }) => {
	let orderid = null;
	const [GlobalRemark, setGlobalRemark] = useState("");
	const [input, setInput] = useState([]);
	const [remarkError, setRemarkError] = useState("");
	const [leadtimeError, setLeadtimeError] = useState(false);
	const [procurequantityError, setProcurequantityError] = useState(false);
	const [hasError, setHasError] = useState(false);

	const { selectedItem, individualItem, itemDetails, tabledata } = useSelector(
		state => ({
			selectedItem: state.Items,
			individualItem: state.orders?.individualItem,
			itemDetails: state.orders?.individualItemDetails,
			tabledata: state.orders?.allitems?.rows,
		})
	);

	if (tabledata?.length > 0) {
		orderid = tabledata[0]?.orderid;
	}

	const handlTheSubmit = () => {
		if (!remarkError && !leadtimeError && !procurequantityError) {
			let body = {
				items: input,
				universalRemark: GlobalRemark,
				roleid: localStorage.getItem("active_roleid"),
			};
			procureItemApi(orderid, body);
			setProcurementFormBool(false);
			setHasError(false);
		} else {
			setHasError(true);
		}
	};
	useEffect(() => {
		let mappingItem = individualItem ? itemDetails : selectedItem;
		const newObj = mappingItem.map(({ id }) => {
			return {
				id,
				remarks: null,
				procurequantity: null,
				leadtime: null,
			};
		});
		setInput(newObj);
	}, []);

	useEffect(() => {
		if (individualItem) {
			const remarks = input[0]?.remarks;
			const leadtime = input[0]?.leadtime;
			const procurequantity = input[0]?.procurequantity;
			if (remarks == null || remarks == "") {
				setRemarkError("remark");
			} else {
				setRemarkError("");
			}
			if (leadtime == null || leadtime == "") {
				setLeadtimeError(true);
			} else {
				setLeadtimeError(false);
			}
			if ([null, "", 0, "0"].includes(procurequantity)) {
				setProcurequantityError(true);
			} else {
				setProcurequantityError(false);
			}
		} else {
			let batchRemarks = [];
			let batchLeadTime = [];
			let batchProcureQuantity = [];
			input.forEach(({ remarks, leadtime, procurequantity }) => {
				batchRemarks.push(remarks);
				batchLeadTime.push(leadtime);
				batchProcureQuantity.push(procurequantity);
			});

			if (batchRemarks.includes(null) || batchRemarks.includes("")) {
				if (GlobalRemark) {
					setRemarkError("");
				} else {
					setRemarkError("global");
				}
			} else {
				setRemarkError("");
			}
			if (batchLeadTime.includes(null) || batchLeadTime.includes("")) {
				setLeadtimeError(true);
			} else {
				setLeadtimeError(false);
			}
			if (
				batchProcureQuantity.includes(null) ||
				batchProcureQuantity.includes(0) ||
				batchProcureQuantity.includes("") ||
				batchProcureQuantity.includes("0")
			) {
				setProcurequantityError(true);
			} else {
				setProcurequantityError(false);
			}
		}
	}, [GlobalRemark, input]);
	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
					marginBottom: "2rem",
					width: "100%",
				}}
				className="Procurement_header">
				<div
					style={{
						width: "80%",
						marginRight: "3rem",
					}}
					className="AIHeader_item">
					{!individualItem && (
						<UnversialRemark
							onChange={e => {
								const value = e.target.value;
								setGlobalRemark(value);
							}}
						/>
					)}
					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
						}}>
						{remarkError == "global" && hasError && (
							<Text size="sm" color="red">
								remark required!
							</Text>
						)}
					</div>
				</div>
			</div>
			<div className="AcceptItemTable">
				<AcceptItemTable
					setInput={setInput}
					input={input}
					remarkError={remarkError}
					leadtimeError={leadtimeError}
					procurequantityError={procurequantityError}
					hasError={hasError}
				/>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
					marginTop: "1.6rem",
				}}>
				<Button onClick={handlTheSubmit}>PROCUREMENT</Button>
			</div>
		</div>
	);
};
export default ProcurementForm;
