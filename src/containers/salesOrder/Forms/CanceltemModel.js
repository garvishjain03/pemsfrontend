import React, { useEffect, useState } from "react";

import { Button, Table, Text } from "@mantine/core";
import { useSelector } from "react-redux";

import { saveBulkCancelItemAccept } from "../../../services/SaleItem";
import UnversialRemark, { SingleRemark } from "./RemarkTextArea";

const AcceptItemTable = ({
	setInputRemark,
	InputRemark,
	ActiveRowSelectedError,
	gloablRemark,
	setActiveRowSelectedError,
}) => {
	const { selectedItem } = useSelector(state => ({
		selectedItem: state.Items,
	}));

	useEffect(() => {
		if (gloablRemark && gloablRemark !== "") setActiveRowSelectedError(false);
	}, [gloablRemark]);

	const handleTheInputChange = (value = "", argId) => {
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
		({ itemno, customerPartNo, id, mpn, partNo, orderType }, index) => {
			if (InputRemark[index]?.remarks?.length > 0) {
				setActiveRowSelectedError(false);
			}
			const trimItemCode = itemno.split("Q")?.[0];
			return (
				<tr key={index}>
					<td>{trimItemCode}</td>
					<td>{orderType == "Traded" ? partNo : mpn}</td>
					<td>
						{/* <Input
                  onChange={e => {
                  	const value = e.target.value;
                  	handleTheInputChange(value, id);
                  }}
                  /> */}
						<SingleRemark
							onChange={e => {
								const value = e.target.value;
								handleTheInputChange(value, id);
							}}
						/>
						{/* {InputRemark[index]?.remarks?.length === 0 && !gloablRemark && (
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

const CanceltemModel = ({ setAcceptItemModeBool }) => {
	const [gloablRemark, setgloablRemark] = useState("");
	const [InputRemark, setInputRemark] = useState([]);
	const [ActiveRowSelectedError, setActiveRowSelectedError] = useState(false);
	const [commentError, setCommentError] = useState(false);

	const { selectedItem } = useSelector(state => ({
		selectedItem: state.Items,
	}));

	useEffect(() => {
		if (gloablRemark && gloablRemark !== "") {
			setCommentError(false);
		}
	}, [gloablRemark]);

	useEffect(() => {
		const newObj = selectedItem.map(({ id }) => {
			return {
				id,
				remarks: "",
			};
		});
		setInputRemark(newObj);
	}, []);
	const handlTheSubmit = () => {
		if (InputRemark.length <= 0) {
			setActiveRowSelectedError(true);
			return;
		}

		const acceptedItemStatusPresent = InputRemark.filter(
			({ remarks }) => remarks === "" || remarks === null
		);

		if (acceptedItemStatusPresent.length > 0 && !gloablRemark) {
			setActiveRowSelectedError(true);
			return;
		} else {
			const obj = {
				items: InputRemark,
				universalRemark: gloablRemark,
			};

			const { orderid } = selectedItem[0];
			saveBulkCancelItemAccept(orderid, obj);
			setAcceptItemModeBool(false);
		}
	};
	return (
		<div>
			<div className="CanceltemModel_header">
				<div
					style={{
						display: "flex",
						justifyContent: "flex-end",
						marginRight: "2rem",
						gap: "1rem",
					}}
					className="AIHeader_item">
					{selectedItem?.length > 1 && (
						<>
							<UnversialRemark
								onChange={e => {
									const value = e.target.value;
									setgloablRemark(value);
								}}
								commentError={ActiveRowSelectedError}
								required
							/>
						</>
					)}
				</div>
			</div>
			<div className="AcceptItemTable">
				<AcceptItemTable
					setInputRemark={setInputRemark}
					InputRemark={InputRemark}
					ActiveRowSelectedError={ActiveRowSelectedError}
					setgloablRemark={setgloablRemark}
					gloablRemark={gloablRemark}
					setActiveRowSelectedError={setActiveRowSelectedError}
				/>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
				}}>
				<Button onClick={handlTheSubmit}>Cancel</Button>
			</div>
		</div>
	);
};

const AcceptItemTableSIngle = ({
	setInputRemark,
	InputRemark,
	selectedItem,
	setCommentError,
	commentError,
	ActiveRowSelectedError,
}) => {
	const handleTheInputChange = (value = "", argId) => {
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

	// useEffect(() => {
	// 	if (InputRemark) {
	// 		setCommentError(false);
	// 	}else setCommentError(true)
	// }, [InputRemark]);

	const rows = selectedItem.map(
		({ itemno, customerPartNo, id, mpn, orderType, partNo }, index) => {
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
								if (value !== "") {
									setCommentError(false);
								} else {
									setCommentError(true);
								}
							}}
						/>
						{commentError && ActiveRowSelectedError && (
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
};
export const CanceltemModelSingleItem = ({
	setAcceptItemModeBool,
	selectedItem,
}) => {
	const [gloablRemark, setgloablRemark] = useState("");
	const [InputRemark, setInputRemark] = useState([]);
	const [ActiveRowSelectedError, setActiveRowSelectedError] = useState(false);
	const [commentError, setCommentError] = useState(true);

	const handlTheSubmit = () => {
		if (InputRemark.length <= 0) {
			setActiveRowSelectedError(true);
			return;
		}

		const acceptedItemStatusPresent = InputRemark.filter(
			({ remarks }) => remarks === ""
		);

		if (acceptedItemStatusPresent.length > 0) {
			setActiveRowSelectedError(true);
			return;
		} else {
			const obj = {
				items: InputRemark,
				universalRemark: gloablRemark,
			};

			const { orderid } = selectedItem[0];
			saveBulkCancelItemAccept(orderid, obj);
			setAcceptItemModeBool(false);
		}
	};
	useEffect(() => {
		const newObj = selectedItem.map(({ id }) => {
			return {
				id,
				remarks: "",
			};
		});
		setInputRemark(newObj);
	}, []);
	return (
		<div>
			<div className="CanceltemModel_header">
				<div
					style={{
						display: "flex",
						justifyContent: "flex-end",
						marginRight: "2rem",
						gap: "1rem",
					}}
					className="AIHeader_item">
					{selectedItem?.length > 1 && (
						<>
							<UnversialRemark
								onChange={e => {
									const value = e.target.value;
									setgloablRemark(value);
								}}
								required
							/>
						</>
					)}
				</div>
			</div>
			<div className="AcceptItemTable">
				<AcceptItemTableSIngle
					setInputRemark={setInputRemark}
					InputRemark={InputRemark}
					selectedItem={selectedItem}
					setCommentError={setCommentError}
					commentError={commentError}
					ActiveRowSelectedError={ActiveRowSelectedError}
				/>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
				}}>
				<Button mt="sm" onClick={handlTheSubmit}>
					Cancel
				</Button>
			</div>
		</div>
	);
};
export default CanceltemModel;
