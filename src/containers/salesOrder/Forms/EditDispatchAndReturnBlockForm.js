import {
	Button,
	Center,
	Checkbox,
	Input,
	NumberInput,
	Text,
	TextInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { useState } from "react";
import {
	DispatchApi,
	DispatchEditApi,
	editHistoryApi,
} from "../../../services/SaleItem";
import { todayDateStyle } from "../../../utils/todayDateBg";

const EditDispatchAndReturnBlockForm = ({
	data,
	setModal,
	type,
	orderid,
	id,
	historyId,
}) => {
	const [input, setInput] = useState({
		quantity:
			type == "edit" ? data?.dispatchQty : data?.returnDetails?.returnquantity,
		dispatchedDate:
			type == "edit" ? data?.dispatchDate : data?.returnDetails?.createdAt,
		invoiceNumber: type == "edit" ? data?.invoiceNo : null,
		invoiceDate: data?.invoiceDate,
		markAsDispatched: data?.status == "DISPATCHED" ? true : false,
		remarks: null,
		orderid,
		itemId: id,
	});
	const [remarkError, setRemarkError] = useState(false);
	const [quantityError, setQunatityError] = useState(false);

	const handleSubmit = () => {
		if (input.remarks && input.quantity <= data?.orderquantity) {
			// DispatchEditApi(orderid, { ...input, id: id });
			editHistoryApi(historyId, input, orderid);
			setModal(false);
		} else {
			input.remarks ? setRemarkError(false) : setRemarkError(true);
			input.quantity <= data?.orderquantity
				? setQunatityError(false)
				: input.quantity
				? setQunatityError(true)
				: setQunatityError(false);
		}
	};
	return (
		<>
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<div style={{ paddingInline: "1rem" }}>
					<NumberInput
						placeholder="Enter Quantity"
						label="Dispatch Quantity"
						min={1}
						defaultValue={data?.dispatchQty}
						onChange={e => {
							setInput({ ...input, quantity: e });
						}}
					/>
					{quantityError && (
						<Text size="sm=" color="red">
							should not be greater than packed quantity!
						</Text>
					)}
				</div>
				<div style={{ paddingInline: "1rem" }}>
					<DatePicker
						dayStyle={date => todayDateStyle(date)}
						defaultValue={new Date(data?.dispatchDate)}
						label="Dispatched Date"
						inputFormat="DD/MM/YYYY"
						placeholder="Pick date"
						style={{ minWidth: "115px" }}
						onChange={e => {
							setInput({ ...input, dispatchedDate: e.toISOString() });
						}}
					/>
				</div>
				<div style={{ paddingInline: "1rem" }}>
					<TextInput
						placeholder="Enter Invoice"
						label="Invoice Number"
						defaultValue={data?.invoiceNo}
						onChange={e => {
							setInput({ ...input, invoiceNumber: e.target.value });
						}}
					/>
				</div>
				<div style={{ paddingInline: "1rem" }}>
					<DatePicker
						dayStyle={date => todayDateStyle(date)}
						defaultValue={new Date(data?.invoiceDate)}
						label="Invoice Date"
						inputFormat="DD/MM/YYYY"
						placeholder="Pick date"
						style={{ minWidth: "115px" }}
						onChange={e => {
							setInput({ ...input, invoiceDate: e.toISOString() });
						}}
					/>
				</div>
				<div style={{ paddingInline: "1rem" }}>
					<Text size="sm" style={{ fontWeight: "600" }}>
						Mark As Dispatched
					</Text>
					<Center style={{ marginTop: "0.8rem" }}>
						<Checkbox
							defaultChecked={data?.status == "DISPATCHED" ? true : false}
							onChange={e => {
								const value = e.currentTarget.checked;
								setInput({ ...input, markAsDispatched: value });
							}}
							disabled={data?.workorderItem.find(ele =>
								["PENDING", "INPROGRESS", "TCISSUEDCOMPLETED"].includes(
									ele?.status
								)
							)}
						/>
					</Center>
				</div>
				<div style={{ paddingInline: "1rem" }}>
					<TextInput
						label="Enter Remark"
						placeholder="Enter Remark"
						onChange={e => {
							setInput({ ...input, remarks: e.target.value });
						}}
					/>
					{remarkError && (
						<Text size="sm" color="red">
							required!
						</Text>
					)}
				</div>
			</div>
			<div
				style={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
				<Button onClick={handleSubmit}>SAVE</Button>
			</div>
		</>
	);
};

export default EditDispatchAndReturnBlockForm;
