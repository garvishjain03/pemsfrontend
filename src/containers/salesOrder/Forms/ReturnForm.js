import {
	ActionIcon,
	Button,
	Checkbox,
	Group,
	Input,
	Modal,
	MultiSelect,
	Select,
	Table,
	Text,
	TextInput,
	Tooltip,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RowCheckboxHeader } from "../../../component/table/selectRowCheckboxHeader";
import { alertTitle, ModelAlertStyleObj } from "../../../component/TcCancel";
import { packApi, ReturnApi } from "../../../services/SaleItem";
import { getAllSalesOrders } from "../../../services/salesOrder";
import UnversialRemark, { SingleRemark } from "./RemarkTextArea";

const ReturnForm = ({ setReturnItem, orderid }) => {
	// let orderid = null;
	const [GlobalRemark, setGlobalRemark] = useState("");
	const [remarkError, setRemarkError] = useState("");
	const [input, setInput] = useState([]);
	const [returnQuantityError, setReturnQuantityError] = useState(false);
	const [invoiceError, setInvoiceError] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [warning, setWarning] = useState(false);
	const {
		selectedItem,
		individualItem,
		itemDetails,
		tabledata,
		drawerSalesQuery,
	} = useSelector(state => ({
		selectedItem: state.Items,
		individualItem: state.orders?.individualItem,
		itemDetails: state.orders?.individualItemDetails,
		tabledata: state.orders?.allitems?.rows,
		drawerSalesQuery: state?.orders?.drawersalesquery,
	}));

	const styelObj = {
		// width: "2rem",
		border: "2px solid #4c4c4c",
		background: "rgb(231 245 255)",
		display: "flex",
		"justify-content": " center",
		"align-content": " center",
	};

	// if (tabledata?.length > 0) {
	// 	orderid = tabledata[0]?.orderid;
	// }

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

	const getInvoiceDropDownValues = dispatchinvoice => {
		let array = [];
		dispatchinvoice?.map(data => {
			array.push({ label: data.invoiceNo, value: data.id });
		});
		return array;
	};

	useEffect(() => {
		let mappingItem = individualItem ? itemDetails : selectedItem;
		if (window.location.pathname == "/dispatchitemlist") {
			const newObj = mappingItem.map(({ id, orderid }) => {
				return {
					id,
					orderid,
					remarks: null,
					returnQuantity: null,
					invoice: null,
				};
			});
			setInput(newObj);
		} else {
			const newObj = mappingItem.map(({ id }) => {
				return {
					id,
					remarks: null,
					returnQuantity: null,
					invoice: null,
				};
			});
			setInput(newObj);
		}
	}, []);

	useEffect(() => {
		if (individualItem) {
			const toReturnQuantity = input[0]?.returnQuantity;
			const invoiceNumber = input[0]?.invoice;
			const remarks = input[0]?.remarks;
			if (remarks == null || remarks == "") {
				setRemarkError("remark");
			} else {
				setRemarkError("");
			}
			if (toReturnQuantity == null || toReturnQuantity == NaN) {
				setReturnQuantityError(true);
			} else {
				setReturnQuantityError(false);
			}
			if (invoiceNumber == null || invoiceNumber?.length == 0) {
				setInvoiceError(true);
			} else {
				setInvoiceError(false);
			}
		} else {
			let batchReturnQuantity = [];
			let returnQuantityExist = [];
			let batchRemarks = [];
			let batchInvoiceNumber = [];
			let invoiceNumberExist = [];
			input.forEach(({ remarks, returnQuantity, invoice }) => {
				batchRemarks.push(remarks);
				batchReturnQuantity.push(returnQuantity);
				batchInvoiceNumber.push(invoice);
			});

			// for (let [i, data] of batchReturnQuantity.entries()) {
			// 	if (data == null || data == NaN) {
			// 		returnQuantityExist.push(false);
			// 	} else {
			// 		returnQuantityExist.push(true);
			// 	}
			// }

			for (let [i, data] of batchInvoiceNumber.entries()) {
				if (data == null || data.length == 0) {
					invoiceNumberExist.push(false);
				} else {
					invoiceNumberExist.push(true);
				}
			}

			if (invoiceNumberExist.includes(false)) {
				setInvoiceError(true);
			} else {
				setInvoiceError(false);
			}

			if (
				batchReturnQuantity.includes(null) ||
				batchReturnQuantity.includes(NaN)
			) {
				setReturnQuantityError(true);
			} else {
				setReturnQuantityError(false);
			}

			if (batchRemarks.includes(null) || batchRemarks.includes("")) {
				if (GlobalRemark) {
					setRemarkError("");
				} else {
					setRemarkError("global");
				}
			} else {
				setRemarkError("");
			}
		}
	}, [GlobalRemark, input]);

	const handlTheSubmit = () => {
		if (!remarkError && !returnQuantityError && !invoiceError) {
			let body = { items: input, universalRemark: GlobalRemark };
			ReturnApi(orderid, body, drawerSalesQuery);
			setReturnItem(false);
			setHasError(false);
		} else {
			setHasError(true);
		}
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
				packingDetails,
				dispatchedDetails,
				dispatchinvoice,
				mpn,
				partNo,
				orderType,
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
					<td>{dispatchedDetails?.[0]?.totaldispatchqty ?? 0}</td>
					<td>
						<MultiSelect
							placeholder="Invoice"
							onChange={e => {
								const updateObj = input.map((obj, i) => {
									if (index === i) {
										return { ...obj, invoice: e };
									}
									return obj;
								});
								setInput(updateObj);
							}}
							searchable
							nothingFound="No options"
							data={getInvoiceDropDownValues(dispatchinvoice)}
						/>
						{invoiceError && hasError && (
							<Text size="sm" color="red">
								invoice required!
							</Text>
						)}
					</td>
					<td>
						<div
							style={
								{
									// width: "5rem",
								}
							}>
							<Input
								type="number"
								min={1}
								// value={quantityArray?.packingquantity}
								onChange={e => {
									const value = parseInt(e.target.value);
									const updateObj = input.map((obj, i) => {
										if (index === i) {
											return { ...obj, returnQuantity: value };
										}
										return obj;
									});
									setInput(updateObj);
								}}
							/>
							{returnQuantityError && hasError && (
								<Text size="sm" color="red">
									quantity required!
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
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
					// marginBottom: "1rem",
					width: "100%",
				}}
				className="Packing_header">
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
			<div>
				<Table>
					<thead>
						<tr>
							<th>Item</th>
							<th>MPN</th>
							<th>Quantity</th>
							<th>Already Dispatched</th>
							<th>Invoice #</th>
							<th>Quantity Returned</th>
							<th>Comments</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</Table>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
					marginTop: "1.6rem",
				}}>
				<Button onClick={handlTheSubmit}>RETURN</Button>
			</div>
		</div>
	);
};

export default ReturnForm;
