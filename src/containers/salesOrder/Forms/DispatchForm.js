import {
	ActionIcon,
	Button,
	Checkbox,
	Group,
	Input,
	Modal,
	MultiSelect,
	Table,
	Text,
	Textarea,
	TextInput,
	Tooltip,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RowCheckboxHeader } from "../../../component/table/selectRowCheckboxHeader";
import { alertTitle, ModelAlertStyleObj } from "../../../component/TcCancel";
import { DispatchApi, packApi } from "../../../services/SaleItem";
import { getAllSalesOrders } from "../../../services/salesOrder";
import { errorTitle, ModelErrorStyleObj } from "../SalesOrderItem";
import UnversialRemark, { SingleRemark } from "./RemarkTextArea";
import { store } from "../../../store";
import { todayDateStyle } from "../../../utils/todayDateBg";

const DispatchForm = ({ setDispatchItem, orderid }) => {
	// let orderid = null;
	const [invoiceNumber, setInvoiceNumber] = useState("");
	const [invoiceDate, setInvoiceDate] = useState("");
	const [dispatchDate, setDispatchDate] = useState("");
	const [GlobalRemark, setGlobalRemark] = useState("");
	const [input, setInput] = useState([]);
	const [dispatchquantityError, setDispatchQuantityError] = useState(false);
	const [greaterDispatchQuantityError, setGreaterDispatchQuantityError] =
		useState(false);
	const [
		greaterTotalDispatchQuantityError,
		setGreaterTotalDispatchQuantityError,
	] = useState(false);
	const [checkBoxDisable, setCheckBoxDisable] = useState([]);
	const [confirmed, setConfirmed] = useState(false);
	const [warning, setWarning] = useState(false);
	const [errorModal, setErrorModal] = useState(false);
	const [invoiceNumberError, setInvoiceNumberError] = useState(false);
	const [invoiceDateError, setInvoiceDateError] = useState(false);
	const [dispatchDateError, setDispatchDateError] = useState(false);
	const [remarkError, setRemarkError] = useState("");
	const [reasonError, setReasonError] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [delayedItems, setDelayedItems] = useState([]);
	const {
		selectedItem,
		individualItem,
		itemDetails,
		tabledata,
		reasons = [],
		drawerSalesQuery = "",
		users = [],
		loading,
	} = useSelector(state => ({
		selectedItem: state.Items,
		individualItem: state.orders?.individualItem,
		itemDetails: state.orders?.individualItemDetails,
		tabledata: state.orders?.allitems?.rows,
		reasons: state.context?.delayReason?.rows,
		drawerSalesQuery: state?.orders?.drawersalesquery,
		users: state.user.users?.data,
		loading: state.orders?.loading,
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

	const getReasonsDropDownValues = () => {
		let array = [];
		reasons?.map(data => {
			array.push({ label: data.label, value: data.id });
		});
		return array;
	};

	function findDifferenceBetweenDates(commitedDate, dispatchDate) {
		if (dispatchDate) {
			const diff = dayjs(dispatchDate).diff(dayjs(commitedDate), "day");
			return Math.max(diff, 0);
		} else {
			return "NA";
		}
	}

	useEffect(() => {
		let mappingItem = individualItem ? itemDetails : selectedItem;
		if (window.location.pathname == "/dispatchitemlist") {
			const newObj = mappingItem.map(({ id, orderid, commitedDate }, index) => {
				return {
					id,
					orderid,
					remarks: null,
					dispatchquantity: null,
					markasdispatched: false,
					delayreason: [],
				};
			});
			setInput(newObj);
		} else {
			const newObj = mappingItem.map(({ id, commitedDate }, index) => {
				return {
					id,
					remarks: null,
					dispatchquantity: null,
					markasdispatched: false,
					delayreason: [],
				};
			});
			setInput(newObj);
		}
	}, []);

	useEffect(() => {
		if (individualItem) {
			// const { remarks, holdreason } = Input[0];
			const toDispatchQuantity = input[0]?.dispatchquantity;
			const delayreason = input[0]?.delayreason;
			let packedQuantity =
				mappingItem?.[0]?.packingDetails?.[0]?.packingquantity ?? 0;
			let dispatchQuantity =
				mappingItem?.[0]?.dispatchedDetails?.[0]?.totaldispatchqty ?? 0;
			let orderQuantity = mappingItem?.[0]?.orderquantity ?? 0;
			let currentlyPackedQuantity = packedQuantity;
			if (toDispatchQuantity == null || toDispatchQuantity == NaN) {
				setDispatchQuantityError(true);
			} else {
				setDispatchQuantityError(false);
			}
			if (
				(delayreason == null || delayreason.length == 0) &&
				delayedItems.includes(0)
			) {
				setReasonError(true);
			} else {
				setReasonError(false);
			}
			if (toDispatchQuantity > packedQuantity) {
				setGreaterDispatchQuantityError(true);
			} else {
				setGreaterDispatchQuantityError(false);
			}
			if (toDispatchQuantity + dispatchQuantity > orderQuantity) {
				setGreaterTotalDispatchQuantityError(true);
			} else {
				setGreaterTotalDispatchQuantityError(false);
			}
			if (mappingItem?.[0]?.packingCompleted) {
				setCheckBoxDisable([]);
			} else {
				setCheckBoxDisable([0]);
			}
			// if (![currentlyPackedQuantity, 0].includes(toDispatchQuantity)) {
			// 	setCheckBoxDisable([0]);
			// } else {
			// 	toDispatchQuantity == 0
			// 		? mappingItem?.[0]?.packingCompleted
			// 			? setCheckBoxDisable([])
			// 			: setCheckBoxDisable([0])
			// 		: setCheckBoxDisable([]);
			// }
		} else {
			let batchReasons = [];
			let reasonExists = false;
			let batchDispatchQuantity = [];
			let dispatchQuantityExist = [];
			let greaterDispatchQuantityExist = [];
			let greaterTotalDispatchQuantityExist = [];
			let checkBoxDisableIndexes = [];
			input.forEach(({ remarks, delayreason, dispatchquantity }) => {
				batchReasons.push(delayreason);
				batchDispatchQuantity.push(dispatchquantity);
			});
			for (let [i, data] of batchReasons.entries()) {
				if ((data == null || data.length == 0) && delayedItems.includes(i)) {
					reasonExists = false;
				} else {
					reasonExists = true;
				}
				if (!reasonExists) break;
			}
			if (!reasonExists) {
				setReasonError(true);
			} else {
				setReasonError(false);
			}
			for (let [i, data] of batchDispatchQuantity.entries()) {
				let packedQuantity =
					mappingItem?.[i]?.packingDetails?.[0]?.packingquantity ?? 0;
				let dispatchQuantity =
					mappingItem?.[i]?.dispatchedDetails?.[0]?.totaldispatchqty ?? 0;
				let orderQuantity = mappingItem?.[i]?.orderquantity ?? 0;
				let currentlyPackedQuantity = packedQuantity;
				if (data == null || data == NaN) {
					dispatchQuantityExist.push(false);
				} else {
					dispatchQuantityExist.push(true);
				}
				if (data > packedQuantity) {
					greaterDispatchQuantityExist.push(true);
				} else {
					greaterDispatchQuantityExist.push(false);
				}
				if (data + dispatchQuantity > orderQuantity) {
					greaterTotalDispatchQuantityExist.push(true);
				} else {
					greaterTotalDispatchQuantityExist.push(false);
				}
				if (!mappingItem?.[i]?.packingCompleted) {
					checkBoxDisableIndexes.push(i);
				}
			}
			setCheckBoxDisable([...checkBoxDisableIndexes]);
			// for (let data of batchDispatchQuantity) {
			// 	if (data == null || data == NaN) {
			// 		dispatchQuantityExist = false;
			// 	} else {
			// 		dispatchQuantityExist = true;
			// 	}
			// 	if (!dispatchQuantityExist) break;
			// }
			// for (let [i, data] of batchDispatchQuantity.entries()) {
			// 	let packedQuantity =
			// 		mappingItem?.[i]?.packingDetails?.[0]?.packingquantity ?? 0;
			// 	if (data > packedQuantity) {
			// 		greaterDispatchQuantityExist = true;
			// 	} else {
			// 		greaterDispatchQuantityExist = false;
			// 	}
			// 	if (greaterDispatchQuantityExist) break;
			// }
			// for (let [i, data] of batchDispatchQuantity.entries()) {
			// 	let orderQuantity = mappingItem?.[i]?.orderquantity ?? 0;
			// 	if (data + 0 > orderQuantity) {
			// 		greaterTotalDispatchQuantityExist = true;
			// 	} else {
			// 		greaterTotalDispatchQuantityExist = false;
			// 	}
			// 	if (greaterTotalDispatchQuantityExist) break;
			// }
			if (dispatchQuantityExist.includes(false)) {
				setDispatchQuantityError(true);
			} else {
				setDispatchQuantityError(false);
			}
			if (greaterDispatchQuantityExist.includes(true)) {
				setGreaterDispatchQuantityError(true);
			} else {
				setGreaterDispatchQuantityError(false);
			}
			if (greaterTotalDispatchQuantityExist.includes(true)) {
				setGreaterTotalDispatchQuantityError(true);
			} else {
				setGreaterTotalDispatchQuantityError(false);
			}
		}
	}, [GlobalRemark, input, delayedItems]);

	useEffect(() => {
		if ([null, ""].includes(invoiceNumber)) {
			setInvoiceNumberError(true);
		} else {
			setInvoiceNumberError(false);
		}
		if ([null, ""].includes(invoiceDate)) {
			setInvoiceDateError(true);
		} else {
			setInvoiceDateError(false);
		}
	}, [invoiceNumber, invoiceDate]);

	useEffect(() => {
		if ([null, ""].includes(dispatchDate)) {
			setDispatchDateError(true);
		} else {
			setDispatchDateError(false);
			const delayedDaysArray = [];
			mappingItem?.forEach(({ commitedDate }, index) => {
				const diff = dayjs(dispatchDate).diff(dayjs(commitedDate), "day");
				if (Math.max(diff, 0)) {
					delayedDaysArray.push(index);
				}
			});
			setDelayedItems(delayedDaysArray);
		}
	}, [dispatchDate]);

	const handlTheSubmit = () => {
		if (
			!dispatchquantityError &&
			!reasonError &&
			!greaterDispatchQuantityError &&
			(!greaterTotalDispatchQuantityError || confirmed) &&
			!invoiceNumberError &&
			!invoiceDateError &&
			!dispatchDateError
		) {
			let Input = input.map((data, i) =>
				checkBoxDisable.includes(i)
					? { ...data, markasdispatched: false }
					: data
			);
			let body = {
				items: Input,
				universalRemark: GlobalRemark,
				invoice: invoiceNumber,
				invoiceDate: invoiceDate,
				dispatchDate: dispatchDate,
			};
			DispatchApi(orderid, body, drawerSalesQuery);
			setDispatchItem(false);
			setHasError(false);
		} else {
			setHasError(true);
			greaterDispatchQuantityError ? setErrorModal(true) : setErrorModal(false);
			greaterTotalDispatchQuantityError && !confirmed
				? setWarning(true)
				: setWarning(false);
		}
		// if ((!greaterPackQuantityError && !packquantityError) || confirmed) {
		// 	// if (confirmed) {
		// 	let body = { items: input, universalRemark: GlobalRemark };
		// 	packApi(orderid, body);
		// 	setPackItem(false);
		// 	setHasError(false);
		// 	// }
		// } else {
		// 	setHasError(true);
		// 	greaterPackQuantityError ? setWarning(true) : setWarning(false);
		// }
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
				commitedDate,
				mpn,
				partNo,
				orderType,
			},
			index
		) => {
			const quantityArray = input.find(data => data.id == id);
			const currentlyPacked = packingDetails?.[0]?.packingquantity ?? 0;
			const balanceToDispatch =
				orderquantity - (dispatchedDetails?.[0]?.totaldispatchqty ?? 0);
			const trimItemCode = itemno.split("Q")?.[0];

			return (
				<tr key={index}>
					<td>{trimItemCode}</td>
					<td>{orderType == "Traded" ? partNo : mpn}</td>
					<td>{orderquantity}</td>
					<td>{dispatchedDetails?.[0]?.totaldispatchqty ?? 0}</td>
					<td>{balanceToDispatch}</td>
					<td>{findDifferenceBetweenDates(commitedDate, dispatchDate)}</td>
					<td>{currentlyPacked}</td>
					<td>
						<div style={styelObj}>
							<ActionIcon
								variant="transparent"
								onClick={() => {
									const newObj = input.map(obj => {
										if (id === obj.id) {
											return {
												...obj,
												dispatchquantity: currentlyPacked,
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
								width: "5rem",
							}}>
							<Input
								type="number"
								min={1}
								value={quantityArray?.dispatchquantity}
								onChange={e => {
									const value = parseInt(e.target.value);
									const updateObj = input.map((obj, i) => {
										if (index === i) {
											return { ...obj, dispatchquantity: value };
										}
										return obj;
									});
									setInput(updateObj);
								}}
							/>
							{dispatchquantityError && hasError && (
								<Text size="sm" color="red">
									required!
								</Text>
							)}
						</div>
					</td>
					<td>
						<div
							style={{
								// display: "flex",
								// justifyContent: "center",
								paddingInline: "1rem",
							}}>
							<Checkbox
								disabled={checkBoxDisable.includes(index)}
								onChange={e => {
									const value = e.currentTarget.checked;
									const updateObj = input.map((obj, i) => {
										if (index === i) {
											return { ...obj, markasdispatched: value };
										}
										return obj;
									});
									setInput(updateObj);
								}}
							/>
						</div>
					</td>
					<td
						style={{
							width: "9rem",
						}}>
						<MultiSelect
							onChange={e => {
								const updateObj = input.map((obj, i) => {
									if (index === i) {
										return {
											...obj,
											delayreason: e,
										};
									}
									return obj;
								});
								setInput(updateObj);
							}}
							data={getReasonsDropDownValues()}
							placeholder="Delay Reason"
						/>
						{reasonError && hasError && delayedItems.includes(index) && (
							<Text size="sm" color="red">
								reason required!
							</Text>
						)}
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
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
						gap: "1rem",
						width: "100%",
						margin: "1rem 0",
					}}>
					<div style={{ display: "flex" }}>
						<div style={{ paddingInline: "1rem", width: "auto" }}>
							<TextInput
								label="Invoice Number"
								placeholder="Invoice Number"
								autosize
								minRows={1}
								onChange={e => {
									setInvoiceNumber(e.target.value);
								}}
								// onChange={onChange}
								required
							/>
							{invoiceNumberError && hasError && (
								<Text align="left" size="sm" color="red">
									required!
								</Text>
							)}
						</div>
						<div style={{ paddingInline: "1rem", width: "auto" }}>
							{" "}
							<DatePicker
								dayStyle={date => todayDateStyle(date)}
								label="Invoice Date"
								inputFormat="DD/MM/YYYY"
								placeholder="Pick date"
								required
								style={{ minWidth: "115px" }}
								onChange={e => {
									setInvoiceDate(e?.toISOString());
								}}
							/>
							{invoiceDateError && hasError && (
								<Text align="left" size="sm" color="red">
									required!
								</Text>
							)}
						</div>
						<div style={{ paddingInline: "1rem", width: "auto" }}>
							<DatePicker
								dayStyle={date => todayDateStyle(date)}
								label="Dispatch Date"
								inputFormat="DD/MM/YYYY"
								placeholder="Pick date"
								required
								style={{ minWidth: "115px" }}
								onChange={e => {
									setDispatchDate(e?.toISOString());
								}}
							/>
							{dispatchDateError && hasError && (
								<Text align="left" size="sm" color="red">
									required!
								</Text>
							)}
						</div>
					</div>
				</div>
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
							<th>Dispatched</th>
							{/* <th>Balance to Dispatch</th> */}
							<th>
								<Tooltip label="Balance to Dispatch">Bal to D</Tooltip>
							</th>
							{/* <th>Balance to Pack</th> */}
							<th>Delay</th>
							<th>Currently Packed</th>
							<th>
								<div style={styelObj}>
									<ActionIcon
										variant="transparent"
										onClick={() => {
											const newObj = input.map((obj, index) => {
												const currentlyPacked =
													mappingItem[index]?.packingDetails?.[0]
														?.packingquantity ?? 0;
												return {
													...obj,
													dispatchquantity: currentlyPacked,
												};
											});
											setInput(newObj);
										}}>
										<AiOutlineRight size={20} color="#339af0" />
									</ActionIcon>
								</div>
							</th>
							<th>To Dispatch</th>
							{/* <th>Mark as Complete</th> */}
							<th>
								<Tooltip label="Mark as Fully Dispatched">Mark as FD</Tooltip>
							</th>
							<th>Delay Reason</th>
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
				<Button onClick={handlTheSubmit} loading={loading}>
					DISPATCH
				</Button>
			</div>
			<Modal
				radius={8}
				padding={0}
				styles={ModelAlertStyleObj}
				size={"lg"}
				// opened={warning}
				// onClose={() => setWarning(false)}
				title={alertTitle}>
				<Text my={10}>
					Packed quantity is greater than order quantity. Do you want to
					proceed?
				</Text>
				<div>
					<Group position="right">
						<Button
							mt="md"
							color="red"
							onClick={() => {
								// setWarning(false);
								// setConfirmed(true);
							}}>
							OK
						</Button>
					</Group>
				</div>
			</Modal>
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
				opened={errorModal}>
				<>
					<Text my={10} style={{ color: "red" }}>
						Cannot dispatch quantity that is greater than currently packed
						quantity
					</Text>
				</>
				<Group position="right" mt={"md"}>
					<Button
						color={"red"}
						onClick={() => {
							setErrorModal(false);
						}}>
						Close
					</Button>
				</Group>
			</Modal>
			<Modal
				radius={8}
				padding={0}
				styles={ModelAlertStyleObj}
				size={"lg"}
				opened={warning}
				onClose={() => setWarning(false)}
				title={alertTitle}>
				<Text my={10}>
					Dispatched quantity is more than order quantity. Do you wish to
					continue?
				</Text>
				<div>
					<Group position="right">
						<Button
							mt="md"
							color="red"
							onClick={() => {
								setWarning(false);
								setConfirmed(true);
							}}>
							CONTINUE
						</Button>
					</Group>
				</div>
			</Modal>
		</div>
	);
};

export default DispatchForm;
