import {
	ActionIcon,
	Button,
	Checkbox,
	Input,
	Table,
	Text,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import {
	editHistoryApi,
	getStockQuantity,
	unPackApi,
} from "../../../services/SaleItem";
import UnversialRemark, { SingleRemark } from "./RemarkTextArea";

const UnPackingForm = ({ setUnPackItem, orderid, id, type }) => {
	// let orderid = null;
	const [GlobalRemark, setGlobalRemark] = useState("");
	const [remarkError, setRemarkError] = useState("");
	const [input, setInput] = useState([]);
	const [unPackQuantityError, setUnPackQuantityError] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [greaterUnPackQuantityError, setGreaterUnPackQuantityError] =
		useState(false);
	const [greaterUnPackQuantityIndexes, setGreaterUnPackQuantityIndexes] =
		useState([]);
	const {
		selectedItem,
		individualItem,
		itemDetails,
		tabledata,
		drawerSalesQuery = "",
		stockQuantity = [],
	} = useSelector(state => ({
		selectedItem: state.Items,
		individualItem: state.orders?.individualItem,
		itemDetails: state.orders?.individualItemDetails,
		tabledata: state.orders?.allitems?.rows,
		drawerSalesQuery: state?.orders?.drawersalesquery,
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
				mpn,
				orderType,
				partNo,
			},
			index
		) => {
			const quantityArray = input.find(data => data.id == id);
			let currentlyPacked = packingDetails?.[0]?.packingquantity ?? 0;
			const trimItemCode = itemno.split("Q")?.[0];
			const stockQty = () => stockQuantity?.filter(ele => ele.mpn == mpn);

			return (
				<tr key={index}>
					<td>{trimItemCode}</td>
					<td>{orderType == "Traded" ? partNo : mpn}</td>
					<td>{orderquantity}</td>
					<td>0</td>
					<td>2000</td>
					<td>{currentlyPacked}</td>
					<td>{stockQty()?.[0]?.total_stock_quantity ?? 0}</td>
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
												unpackingquantity: currentlyPacked,
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
							style={
								{
									// width: "7rem",
								}
							}>
							<Input
								type="number"
								min={1}
								value={quantityArray?.unpackingquantity}
								onChange={e => {
									const value = e.target.value;
									const updateObj = input.map((obj, i) => {
										if (index === i) {
											return { ...obj, unpackingquantity: value };
										}
										return obj;
									});
									setInput(updateObj);
								}}
							/>
							{unPackQuantityError && hasError && (
								<Text size="sm" color="red">
									quantity required!
								</Text>
							)}
							{greaterUnPackQuantityError &&
								hasError &&
								(greaterUnPackQuantityIndexes.includes(index) ||
									individualItem) && (
									<Text size="sm" color="red">
										should be less than packed
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

	const handlTheSubmit = () => {
		if (!remarkError && !unPackQuantityError && !greaterUnPackQuantityError) {
			let body = {
				items: input,
				universalRemark: GlobalRemark,
				roleid: localStorage.getItem("active_roleid"),
			};
			if (type === "edit") {
				editHistoryApi(id, body, orderid);
			} else {
				unPackApi(orderid, body, drawerSalesQuery);
			}

			setUnPackItem(false);
			setHasError(false);
		} else {
			setHasError(true);
		}
	};

	useEffect(() => {
		let mappingItem = individualItem ? itemDetails : selectedItem;
		getStockQuantity(mappingItem.map(data => data.mpn));

		if (window.location.pathname == "/packingitemlist") {
			const newObj = mappingItem.map(({ id, orderid }) => {
				return {
					id,
					orderid,
					remarks: null,
					unpackingquantity: null,
				};
			});
			setInput(newObj);
		} else {
			const newObj = mappingItem.map(({ id }) => {
				return {
					id,
					orderid,
					remarks: null,
					unpackingquantity: null,
				};
			});
			setInput(newObj);
		}
	}, []);
	useEffect(() => {
		if (individualItem) {
			const toUnPackQuantity = input[0]?.unpackingquantity;
			const remarks = input[0]?.remarks;
			if (remarks == null || remarks == "") {
				setRemarkError("remark");
			} else {
				setRemarkError("");
			}
			if ([null, NaN, ""].includes(toUnPackQuantity)) {
				setUnPackQuantityError(true);
			} else {
				setUnPackQuantityError(false);
			}
			if (
				toUnPackQuantity >
				(mappingItem?.[0]?.packingDetails?.[0]?.packingquantity ?? 0)
			) {
				setGreaterUnPackQuantityError(true);
			} else {
				setGreaterUnPackQuantityError(false);
			}
		} else {
			let batchUnPackQuantity = [];
			let unpackQuantityExist = [];
			let greaterUnPackQuantityExist = [];
			let greaterPackQuantityItems = [];
			let batchRemarks = [];
			input.forEach(({ remarks, unpackingquantity }) => {
				batchRemarks.push(remarks);
				batchUnPackQuantity.push(unpackingquantity);
			});

			for (let [i, data] of batchUnPackQuantity.entries()) {
				if (
					data > (mappingItem?.[i]?.packingDetails?.[0]?.packingquantity ?? 0)
				) {
					greaterUnPackQuantityExist.push(true);
					greaterPackQuantityItems.push(i);
				} else {
					greaterUnPackQuantityExist.push(false);
				}
			}
			if (greaterUnPackQuantityExist.includes(true)) {
				setGreaterUnPackQuantityIndexes([...greaterPackQuantityItems]);
				setGreaterUnPackQuantityError(true);
			} else {
				setGreaterUnPackQuantityError(false);
			}

			if (
				batchUnPackQuantity.includes(null) ||
				batchUnPackQuantity.includes(NaN) ||
				batchUnPackQuantity.includes("")
			) {
				setUnPackQuantityError(true);
			} else {
				setUnPackQuantityError(false);
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
	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
					// marginBottom: "1rem",
					width: "100%",
				}}
				className="unPacking_header">
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
							<th>Order Quantity</th>
							<th>Dispatched</th>
							<th>Balance to Dispatch</th>
							<th>Currently Packed</th>
							<th>Available in Store</th>
							<th>
								<div style={styelObj}>
									<ActionIcon
										variant="transparent"
										onClick={() => {
											const newObj = input.map((obj, index) => {
												return {
													...obj,
													unpackingquantity:
														mappingItem[index]?.packingDetails?.[0]
															?.packingquantity ?? 0,
												};
											});
											setInput(newObj);
										}}>
										<AiOutlineRight size={20} color="#339af0" />
									</ActionIcon>
								</div>
							</th>
							<th>Unpack Quantity</th>
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
				<Button onClick={handlTheSubmit}>UNPACK</Button>
			</div>
		</div>
	);
};

export default UnPackingForm;
