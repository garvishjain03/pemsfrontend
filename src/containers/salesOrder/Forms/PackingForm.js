import {
	ActionIcon,
	Button,
	Checkbox,
	Group,
	Input,
	Modal,
	Table,
	Text,
	TextInput,
	Tooltip,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RowCheckboxHeader } from "../../../component/table/selectRowCheckboxHeader";
import { alertTitle, ModelAlertStyleObj } from "../../../component/TcCancel";
import {
	editHistoryApi,
	getStockQuantity,
	packApi,
} from "../../../services/SaleItem";
import { getAllSalesOrders } from "../../../services/salesOrder";
import UnversialRemark, { SingleRemark } from "./RemarkTextArea";
import { todayDateStyle } from "../../../utils/todayDateBg";

const PackingForm = ({ setPackItem, orderid, type, id }) => {
	// let orderid = null;
	const [packingDate, setPackingDate] = useState("");
	const [GlobalRemark, setGlobalRemark] = useState("");
	const [commentError, setCommentError] = useState(false);
	const [input, setInput] = useState([]);
	const [packquantityError, setPackQuantityError] = useState(false);
	const [greaterPackQuantityError, setGreaterPackQuantityError] =
		useState(false);
	const [stockError, setStockError] = useState(false);
	const [stockErrorIndex, setStockErrorIndex] = useState(false);
	const [confirmed, setConfirmed] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [warning, setWarning] = useState(false);
	const [packingDateError, setPackingDateError] = useState(false);
	const {
		selectedItem,
		individualItem,
		itemDetails,
		tabledata,
		drawerSalesQuery = "",
		users = [],
		stockQuantity = [],
	} = useSelector(state => ({
		selectedItem: state.Items,
		individualItem: state.orders?.individualItem,
		itemDetails: state.orders?.individualItemDetails,
		tabledata: state.orders?.allitems?.rows,
		drawerSalesQuery: state?.orders?.drawersalesquery,
		users: state.user.users?.data,
		stockQuantity: state.stock?.stockQuantity,
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

	const stockQty = mpn => stockQuantity?.filter(ele => ele.mpn == mpn);

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
				mpn,
				partNo,
				orderType,
			},
			index
		) => {
			const quantityArray = input.find(data => data.id == id);
			const packQuantity = packingDetails?.[0]?.packingquantity ?? 0;
			const dispatchedQuantity = dispatchedDetails?.[0]?.totaldispatchqty ?? 0;
			const balanceToPack = orderquantity - (packQuantity + dispatchedQuantity);
			const trimItemCode = itemno.split("Q")?.[0];

			return (
				<tr key={index}>
					<td>{trimItemCode}</td>
					<td>{orderType == "Traded" ? partNo : mpn}</td>
					<td>{orderquantity}</td>
					<td>{dispatchedQuantity}</td>
					<td>{orderquantity - dispatchedQuantity}</td>
					<td>{packQuantity}</td>
					<td>{balanceToPack}</td>
					<td>
						{stockQty(orderType == "Traded" ? partNo : mpn)?.[0]
							?.total_stock_quantity ?? 0}
					</td>
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
												packingquantity: balanceToPack,
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
								width: "4rem",
							}}>
							<Input
								type="number"
								min={1}
								value={quantityArray?.packingquantity}
								onChange={e => {
									const value = parseInt(e.target.value);
									const updateObj = input.map((obj, i) => {
										if (index === i) {
											return { ...obj, packingquantity: value };
										}
										return obj;
									});
									setInput(updateObj);
								}}
							/>
							{packquantityError && hasError && (
								<Text size="sm" color="red">
									required!
								</Text>
							)}
							{!packquantityError &&
								stockError &&
								hasError &&
								(individualItem || stockErrorIndex.includes(index)) && (
									<Text size="sm" color="red">
										is greater than available stock!
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
								checked={input?.[index]?.markasaccepted}
								onChange={e => {
									const value = e.currentTarget.checked;
									const updateObj = input.map((obj, i) => {
										if (index === i) {
											return { ...obj, markasaccepted: value };
										}
										return obj;
									});
									setInput(updateObj);
								}}
							/>
						</div>
					</td>
					<td>
						<SingleRemark
							value={remark}
							onChange={e => {
								handleTheInputChange(e.target.value, id);
							}}
						/>
						{commentError && hasError && (
							<Text size="sm" color="red">
								required!
							</Text>
						)}
					</td>
				</tr>
			);
		}
	);

	const handlTheSubmit = () => {
		if (
			(!greaterPackQuantityError || confirmed) &&
			!packquantityError &&
			!commentError &&
			!packingDateError &&
			!stockError
		) {
			// if (confirmed) {
			let body = {
				items: input,
				universalRemark: GlobalRemark,
				packingDate: packingDate,
				roleid: localStorage.getItem("active_roleid"),
			};
			if (type === "edit") {
				editHistoryApi(id, body, orderid);
			} else {
				packApi(orderid, body, drawerSalesQuery);
			}
			setPackItem(false);
			setHasError(false);
			// }
		} else {
			setHasError(true);
			greaterPackQuantityError && !confirmed
				? setWarning(true)
				: setWarning(false);
		}
	};

	useEffect(() => {
		let mappingItem = individualItem ? itemDetails : selectedItem;
		getStockQuantity(
			mappingItem.map(data =>
				data?.orderType === "Manufacture" ? data?.mpn : data?.partNo
			)
		);

		if (window.location.pathname == "/packingitemlist") {
			const newObj = mappingItem.map(({ id, orderid, mpn }) => {
				return {
					id,
					orderid,
					mpn,
					remarks: null,
					packingquantity: null,
					markasaccepted: null,
				};
			});
			setInput(newObj);
		} else {
			const newObj = mappingItem.map(({ id, mpn }) => {
				return {
					id,
					mpn,
					orderid,
					remarks: null,
					packingquantity: null,
					markasaccepted: type == "edit" ? true : null,
				};
			});
			setInput(newObj);
		}
	}, []);

	useEffect(() => {
		if (individualItem) {
			const toPackQuantity = input[0]?.packingquantity;
			if (toPackQuantity > mappingItem?.[0]?.orderquantity) {
				setGreaterPackQuantityError(true);
			} else {
				setGreaterPackQuantityError(false);
			}
			if (
				type !== "edit" &&
				mappingItem?.[0]?.orderType === "Manufacture" &&
				toPackQuantity &&
				toPackQuantity >
					(stockQty(input[0]?.mpn)?.[0]?.total_stock_quantity ?? 0)
			) {
				setStockError(true);
			} else {
				setStockError(false);
			}
			if (toPackQuantity == null || toPackQuantity == NaN) {
				setPackQuantityError(true);
			} else {
				setPackQuantityError(false);
			}
			if (type == "edit" && !input?.[0]?.remarks) {
				setCommentError(true);
			} else {
				setCommentError(false);
			}
		} else {
			let batchPackQuantity = [];
			let packQuantityExist = [];
			let greaterPackQuantityExist = [];
			let moreThanStockQuantity = [];
			input.forEach(({ packingquantity }) => {
				batchPackQuantity.push(packingquantity);
			});
			for (let [i, data] of batchPackQuantity.entries()) {
				if (data == null || data == NaN) {
					packQuantityExist.push(false);
				} else {
					packQuantityExist.push(true);
				}
				if (data > mappingItem?.[i]?.orderquantity) {
					greaterPackQuantityExist.push(true);
				} else {
					greaterPackQuantityExist.push(false);
				}
				if (
					mappingItem?.[i]?.orderType === "Manufacture" &&
					data > (stockQty(input[i]?.mpn)?.[0]?.total_stock_quantity ?? 0)
				) {
					moreThanStockQuantity.push(i);
				}
			}
			setStockErrorIndex(moreThanStockQuantity);
			// for (let [i, data] of batchPackQuantity.entries()) {
			// 	if (data == null || data == NaN) {
			// 		packQuantityExist = false;
			// 	} else {
			// 		packQuantityExist = true;
			// 	}

			// 	if (!packQuantityExist) break;
			// }
			// for (let [i, data] of batchPackQuantity.entries()) {
			// 	if (data > mappingItem?.[i]?.orderquantity) {
			// 		greaterPackQuantityExist = true;
			// 	} else {
			// 		greaterPackQuantityExist = false;
			// 	}
			// 	if (greaterPackQuantityExist) break;
			// }
			if (packQuantityExist.includes(false)) {
				setPackQuantityError(true);
			} else {
				setPackQuantityError(false);
			}
			if (greaterPackQuantityExist.includes(true)) {
				setGreaterPackQuantityError(true);
			} else {
				setGreaterPackQuantityError(false);
			}
			if (moreThanStockQuantity.length > 0) {
				setStockError(true);
			} else {
				setStockError(false);
			}
		}
	}, [input]);

	useEffect(() => {
		if ([null, ""].includes(packingDate)) {
			setPackingDateError(true);
		} else {
			setPackingDateError(false);
		}
	}, [packingDate]);

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
						width: "60%",
						margin: "1rem 0",
					}}>
					<div style={{ display: "flex" }}>
						<div style={{ paddingInline: "1rem", width: "14rem" }}>
							<DatePicker
								clickOutsideEvents={["click"]}
								dayStyle={date => todayDateStyle(date)}
								label="Packing Date"
								inputFormat="DD/MM/YYYY"
								placeholder="Pick date"
								required
								style={{ minWidth: "115px" }}
								onChange={e => {
									setPackingDate(e.toISOString());
								}}
							/>
							{packingDateError && hasError && (
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
						{/* {remarkError == "global" && hasError && (
							<Text size="sm" color="red">
								remark required!
							</Text>
						)} */}
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

							<th>Packed</th>
							{/* <th>Balance to Pack</th> */}
							<th>
								<Tooltip label="Balance to Pack">Bal to P</Tooltip>
							</th>
							<th>Available in Store</th>
							<th>
								<div style={styelObj}>
									<ActionIcon
										variant="transparent"
										onClick={() => {
											const newObj = input.map((obj, index) => {
												const packQuantity =
													mappingItem[index]?.packingDetails?.[0]
														?.packingquantity ?? 0;
												const dispatchQuantity =
													mappingItem[index]?.dispatchedDetails?.[0]
														?.totaldispatchqty ?? 0;
												const balanceToPack =
													mappingItem[index]?.orderquantity -
													(packQuantity + dispatchQuantity);
												return {
													...obj,
													packingquantity: balanceToPack,
												};
											});
											setInput(newObj);
										}}>
										<AiOutlineRight size={20} color="#339af0" />
									</ActionIcon>
								</div>
							</th>
							<th>To Pack</th>
							{/* <th>Mark as Complete</th> */}
							<th>
								<Tooltip label="Mark as Complete">Mark as C</Tooltip>
							</th>
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
				<Button onClick={handlTheSubmit}>PACK</Button>
			</div>
			<Modal
				radius={8}
				padding={0}
				styles={ModelAlertStyleObj}
				size={"lg"}
				opened={warning}
				onClose={() => setWarning(false)}
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
								setWarning(false);
								setConfirmed(true);
							}}>
							OK
						</Button>
					</Group>
				</div>
			</Modal>
		</div>
	);
};

export default PackingForm;
