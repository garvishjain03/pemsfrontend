import React, { useEffect, useState } from "react";

import { Button, Text } from "@mantine/core";
import { Table } from "@mantine/core";
import UnversialRemark, { SingleRemark } from "./RemarkTextArea";
import { useSelector } from "react-redux";
import { markAsAcceptApi } from "../../../services/SaleItem";

function AcceptItemTable({ Input, setInput, remarkError, hasError }) {
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

	let mappingItem = individualItem ? itemDetails : selectedItem;
	const rows = mappingItem.map(
		({ itemno, customerPartNo, id, mpn, orderType, partNo }, index) => {
			const trimItemCode = itemno.split("Q")?.[0];

			return (
				<tr key={index}>
					<td>{trimItemCode}</td>
					<td>{orderType == "Traded" ? partNo : mpn}</td>

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
					<th>MPN</th>
					<th>Remark</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
}

const MarkAsAcceptedForm = ({ setMarkAsAcceptBool }) => {
	let orderid = null;
	const [gloablRemark, setgloablRemark] = useState("");
	const [Input, setInput] = useState([]);
	const [remarkError, setRemarkError] = useState("");
	const [hasError, setHasError] = useState(false);

	const { selectedItem, individualItem, itemDetails, tabledata } = useSelector(
		state => ({
			selectedItem: state.Items,
			individualItem: state.orders?.individualItem,
			itemDetails: state.orders?.individualItemDetails,
			tabledata: state.orders?.allitems?.rows,
		})
	);
	useEffect(() => {
		let mappingItem = individualItem ? itemDetails : selectedItem;
		const newObj = mappingItem.map(({ id }) => {
			return {
				id,
				remarks: null,
			};
		});
		setInput(newObj);
	}, []);

	useEffect(() => {
		if (individualItem) {
			const remarks = Input[0]?.remarks;
			if (remarks == null || remarks == "") {
				setRemarkError("remark");
			} else {
				setRemarkError("");
			}
		} else {
			let batchRemarks = [];
			Input.forEach(({ remarks }) => {
				batchRemarks.push(remarks);
			});

			if (batchRemarks.includes(null) || batchRemarks.includes("")) {
				if (gloablRemark) {
					setRemarkError("");
				} else {
					setRemarkError("global");
				}
			} else {
				setRemarkError("");
			}
		}
	}, [gloablRemark, Input]);

	if (tabledata?.length > 0) {
		orderid = tabledata[0]?.orderid;
	}

	const handlTheSubmit = () => {
		if (!remarkError) {
			let body = {
				items: Input,
				universalRemark: gloablRemark,
				roleid: localStorage.getItem("active_roleid"),
			};
			markAsAcceptApi(orderid, body);
			setMarkAsAcceptBool(false);
			setHasError(false);
		} else {
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
				className="markAsAcceptedHeaders">
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
					remarkError={remarkError}
					hasError={hasError}
				/>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
				}}>
				<Button onClick={handlTheSubmit}>MARK AS ACCEPT</Button>
			</div>
		</div>
	);
};
export default MarkAsAcceptedForm;
