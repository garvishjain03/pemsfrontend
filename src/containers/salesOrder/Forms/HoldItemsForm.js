import React, { useState, useEffect } from "react";

import { Button, Modal, MultiSelect } from "@mantine/core";
import { Table, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import UnversialRemark, { SingleRemark } from "./RemarkTextArea";
import { holdItemApi } from "../../../services/SaleItem";

const AcceptItemTable = ({
	setInput,
	Input,
	individualItem,
	setMultiSelect,
	remarkError,
	reasonError,
	hasError,
}) => {
	const {
		selectedItem,
		reasons = [],
		itemDetails = [],
	} = useSelector(state => ({
		selectedItem: state.Items,
		reasons: state.context?.holdreasons?.rows,
		itemDetails: state.orders?.individualItemDetails,
		individualItem: state.orders?.individualItem,
	}));
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
	const getReasonsDropDownValues = () => {
		let array = [];
		reasons?.map(data => {
			array.push({ label: data.label, value: data.id });
		});
		return array;
	};

	const handleTheSelectChange = (value, argId) => {
		const newObj = Input.map(obj => {
			if (argId === obj.id) {
				return {
					...obj,
					holdreason: value,
				};
			}
			return obj;
		});

		setInput(newObj);
	};

	let mappingItem = individualItem ? itemDetails : selectedItem;

	const rows = mappingItem.map(
		({ itemno, customerPartNo, id, label, mpn, orderType, partNo }, index) => {
			const trimItemCode = itemno.split("Q")?.[0];
			return (
				<tr key={index}>
					<td>{trimItemCode}</td>
					<td>{orderType == "Traded" ? partNo : mpn}</td>
					<td>
						<MultiSelect
							onChange={e => {
								handleTheSelectChange(e, id);
							}}
							data={getReasonsDropDownValues()}
							placeholder="Pick all that you like"
						/>
						{reasonError && hasError && (
							<Text size="sm" color="red">
								reason required!
							</Text>
						)}
					</td>
					<td>
						<SingleRemark
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
					<th> Item </th>
					<th>MPN</th> <th>Hold Reason </th>
					<th>Remark</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
};

const RecheckItemsForm = ({ setHoldItems }) => {
	let orderid = null;
	const [gloablRemark, setgloablRemark] = useState("");
	const [Input, setInput] = useState([]);
	const [multiSelect, setMultiSelect] = useState();
	const [ActiveRowSelectedError, setActiveRowSelectedError] = useState(false);
	const [remarkError, setRemarkError] = useState("");
	const [reasonError, setReasonError] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [disableButton, setDisableButton] = useState(false);

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

	useEffect(() => {
		let mappingItem = individualItem ? itemDetails : selectedItem;
		const newObj = mappingItem.map(({ id }) => {
			return {
				id,
				remarks: null,
				holdreason: null,
			};
		});
		setInput(newObj);
	}, []);

	useEffect(() => {
		if (individualItem) {
			// const { remarks, holdreason } = Input[0];
			const remarks = Input[0]?.remarks;
			const holdreason = Input[0]?.holdreason;
			if (remarks == null || remarks == "") {
				setRemarkError("remark");
			} else {
				setRemarkError("");
			}
			if (holdreason == null || holdreason.length == 0) {
				setReasonError(true);
			} else {
				setReasonError(false);
			}
		} else {
			let batchRemarks = [];
			let batchReasons = [];
			let reasonExists = false;
			Input.forEach(({ remarks, holdreason }) => {
				batchRemarks.push(remarks);
				batchReasons.push(holdreason);
			});
			for (let data of batchReasons) {
				if (data == null) {
					reasonExists = false;
				} else if (data.length == 0) {
					reasonExists = false;
				} else {
					reasonExists = true;
				}
				if (!reasonExists) break;
			}

			if (batchRemarks.includes(null) || batchRemarks.includes("")) {
				if (gloablRemark) {
					setRemarkError("");
				} else {
					setRemarkError("global");
				}
			} else {
				setRemarkError("");
			}
			if (!reasonExists) {
				setReasonError(true);
			} else {
				setReasonError(false);
			}
		}
	}, [gloablRemark, Input]);

	const handlTheSubmit = () => {
		if (!remarkError && !reasonError) {
			setDisableButton(true);
			let body = {
				items: Input,
				universalRemark: gloablRemark,
				roleid: localStorage.getItem("active_roleid"),
			};
			holdItemApi(orderid, body);
			setHoldItems(false);
			setHasError(false);
		} else {
			setDisableButton(false);
			setHasError(true);
		}
	};
	return (
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
			</div>
			<div className="AcceptItemTable">
				<AcceptItemTable
					setInput={setInput}
					Input={Input}
					individualItem={individualItem}
					setMultiSelect={setMultiSelect}
					remarkError={remarkError}
					reasonError={reasonError}
					hasError={hasError}
				/>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
				}}>
				<Button onClick={handlTheSubmit} disabled={disableButton}>
					HOLD
				</Button>
			</div>
			<Modal
				styles={{
					drawer: { background: "rgb(248, 249, 250)" },
					closeButton: {
						color: "#ffff",
						"&:hover": {
							color: "red",
						},
					},

					title: { color: "#ffff", fontWeight: "600" },
				}}
				opened={ActiveRowSelectedError}
				onClose={() => setActiveRowSelectedError(false)}>
				<h4> Please select the Items which are not in Acccepted Order </h4>
				<div
					style={{
						display: "flex",
						justifyContent: "flex-end",
					}}>
					<Button onClick={() => setActiveRowSelectedError(false)}>
						Cancel
					</Button>
				</div>
			</Modal>
		</div>
	);
};
export default RecheckItemsForm;
