import React, { useEffect, useState } from "react";

import { Button, Modal, Table } from "@mantine/core";
import { useSelector } from "react-redux";
import { saveBulAcceptItemAcceptedStatus } from "../../services/SaleItem";
import UnversialRemark, { SingleRemark } from "./Forms/RemarkTextArea";

const AcceptItemTable = ({ setInputRemark, InputRemark }) => {
	const { selectedItem } = useSelector(state => ({
		selectedItem: state.Items,
	}));

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
					<th>Remark</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
};
const AcceptItemModel = ({ setAcceptItemModeBool }) => {
	const [gloablRemark, setgloablRemark] = useState("");
	const [InputRemark, setInputRemark] = useState([]);
	const [ActiveRowSelectedError, setActiveRowSelectedError] = useState(false);

	const { selectedItem } = useSelector(state => ({
		selectedItem: state.Items,
	}));

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
		const acceptedItemStatusPresent = selectedItem.filter(
			({ itemStatus }) => itemStatus === "ACCEPTED"
		);

		if (acceptedItemStatusPresent.length > 0) {
			setActiveRowSelectedError(true);
			return;
		}
		const obj = {
			items: InputRemark,
			roleid: localStorage.getItem("active_roleid"),
			universalRemark: gloablRemark,
		};

		const { orderid } = selectedItem[0];
		saveBulAcceptItemAcceptedStatus(orderid, obj);
		setAcceptItemModeBool(false);
	};
	return (
		<div>
			<div className="AcceptItemModel_header">
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
							{/* {" "}
              <span>Unversial Remark </span>
              <div>
              <Input
              	onChange={e => {
              		const value = e.target.value;
              		setgloablRemark(value);
              	}}
              	required
              />
              </div> */}
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
				<AcceptItemTable
					setInputRemark={setInputRemark}
					InputRemark={InputRemark}
				/>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
				}}>
				<Button onClick={handlTheSubmit}>Accept</Button>
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
export default AcceptItemModel;
