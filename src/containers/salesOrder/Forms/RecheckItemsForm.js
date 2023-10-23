import { Button, Table, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getBulkRecheckItemStatus } from "../../../services/SaleItem";
import UnversialRemark, { SingleRemark } from "./RemarkTextArea";

export const RecheckItemsFormSingle = ({
	setRecheckItemsFormBool,
	selectedItem,
	recheckError: ActiveRowSelectedError,
	setrecheckError: setActiveRowSelectedError,
	recheckModel,
	setrecheckModel,
}) => {
	const [commentError, setcommentError] = useState(false);
	const [gloablRemark, setgloablRemark] = useState();
	const [InputRemark, setInputRemark] = useState(null);

	const { itemno, customerPartNo, orderid, id, mpn, orderType, partNo } =
		selectedItem[0] ?? {};
	useEffect(() => {
		if ((InputRemark?.length > 0) | (InputRemark === null)) {
			setcommentError(false);
		} else {
			setcommentError(true);
		}
	}, [InputRemark]);

	const handlTheSubmit = () => {
		const obj = {
			items: [
				{
					id,
					remarks: InputRemark,
				},
			],
			universalRemark: gloablRemark,
			roleid: localStorage.getItem("active_roleid"),
		};

		if (InputRemark === "" || InputRemark === null) {
			setcommentError(true);
		} else {
			getBulkRecheckItemStatus(orderid, obj);
			setcommentError(false);
			setrecheckModel(false);
		}
	};
	const trimItemCode = itemno.split("Q")?.[0];

	return (
		<div>
			<div className="AcceptItemTable">
				<Table>
					<thead>
						<tr>
							<th>Item </th>
							<th>MPN</th>
							<th>Remark</th>
						</tr>
					</thead>
					<tbody>
						{" "}
						<tr key={1}>
							<td>{trimItemCode}</td>
							<td>{orderType == "Traded" ? partNo : mpn}</td>
							<td>
								<SingleRemark
									onChange={e => {
										const value = e.target.value;
										setInputRemark(value);
									}}
								/>
								{(InputRemark === "" || commentError) && (
									<Text size="sm" color="red">
										remark required!
									</Text>
								)}
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
				}}>
				<Button onClick={handlTheSubmit}>RECHECK</Button>
			</div>
		</div>
	);
};
const AcceptItemTable = ({ setInputRemark, InputRemark, gloablRemark }) => {
	const { selectedItem } = useSelector(state => ({
		selectedItem: state.Items,
	}));

	const handleTheInputChange = (value, argId) => {
		const newObj = InputRemark.map(obj => {
			if (argId === obj.id) {
				return {
					...obj,
					remarks: value,
				};
			}
			return obj;
		});

		setInputRemark(newObj);
	};
	const rows = selectedItem.map(
		({ itemno, orderType, id, mpn, partNo }, index) => {
			const trimItemCode = itemno.split("Q")?.[0];

			return (
				<tr key={index}>
					<td>{trimItemCode}</td>
					<td>{orderType == "Traded" ? partNo : mpn}</td>
					<td>
						<SingleRemark
							onChange={e => {
								const value = e.target.value;
								handleTheInputChange(value, id);
							}}
						/>
						{/* {InputRemark[index]?.remarks === "" && !gloablRemark && (
						<Text size="sm" color="red">
							remark required!
						</Text>
					)} */}
					</td>
				</tr>
			);
		}
	);

	return (
		<Table>
			<thead>
				<tr>
					<th>Item </th>
					<th>MPN</th>
					<th>Remark</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
};
const RecheckItemsForm = ({ setRecheckItemsFormBool }) => {
	const [gloablRemark, setgloablRemark] = useState("");
	const [InputRemark, setInputRemark] = useState([]);
	const [commentError, setcommentError] = useState(false);
	// const [ActiveRowSelectedError, setActiveRowSelectedError] = useState(false);

	const { selectedItem } = useSelector(state => ({
		selectedItem: state.Items,
	}));
	useEffect(() => {
		const newObj = selectedItem.map(({ id }) => {
			return {
				id,
				remarks: null,
			};
		});
		setInputRemark(newObj);
	}, []);

	useEffect(() => {
		if (gloablRemark && gloablRemark !== "") {
			setcommentError(false);
		}
	}, [gloablRemark]);

	const handlTheSubmit = () => {
		const obj = {
			items: InputRemark,
			universalRemark: gloablRemark,
			roleid: localStorage.getItem("active_roleid"),
		};
		const emptyRemark = InputRemark.filter(
			({ remarks }) => remarks === "" || remarks === null
		);

		const { orderid } = selectedItem[0];
		if (gloablRemark && gloablRemark !== "") {
			getBulkRecheckItemStatus(orderid, obj);
			setRecheckItemsFormBool(false);
		} else {
			if (emptyRemark.length === 0) {
				getBulkRecheckItemStatus(orderid, obj);
				setRecheckItemsFormBool(false);
			} else {
				setcommentError(true);
			}
		}
	};
	return (
		<div>
			{selectedItem.length > 1 && (
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
							display: "flex",
							justifyContent: "flex-end",

							width: "100%",
						}}
						className="AIHeader_item">
						<div
							style={{
								width: "100%",
							}}>
							<UnversialRemark
								onChange={e => {
									const value = e.target.value;
									setgloablRemark(value);
								}}
								commentError={commentError}
							/>
						</div>
					</div>
				</div>
			)}
			<div className="AcceptItemTable">
				<AcceptItemTable
					setInputRemark={setInputRemark}
					InputRemark={InputRemark}
					gloablRemark={gloablRemark}
				/>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
				}}>
				<Button onClick={handlTheSubmit}>RECHECK</Button>
			</div>
		</div>
	);
};

export default RecheckItemsForm;
