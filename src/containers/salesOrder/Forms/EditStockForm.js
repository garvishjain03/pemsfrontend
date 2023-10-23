import {
	Button,
	Group,
	Input,
	Text,
	NumberInput,
	Select,
	TextInput,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { editStockApi } from "../../../services/stock";
import { useSelector } from "react-redux";

const EditStockForm = ({ data, setEditStockModal }) => {
	const [input, setInput] = useState([]);
	const [remarkError, setRemarkError] = useState(false);
	const [typeError, setTypeError] = useState(false);
	const [quantityError, setQunatityError] = useState(false);
	const [greaterQuantityError, setGreaterQunatityError] = useState(false);
	const [decimalQuantityError, setDecimalQunatityError] = useState(false);
	const [hasError, setHasError] = useState(false);

	const { loading } = useSelector(state => state.orders);

	useEffect(() => {
		setInput({
			type: null,
			remarks: null,
			quantity: null,
		});
	}, []);

	useEffect(() => {
		const remarks = input?.remarks;
		const quantity = input?.quantity;
		const type = input?.type;
		if (remarks == null || remarks == "") {
			setRemarkError(true);
		} else {
			setRemarkError(false);
		}
		if (type == null || type?.length < 0) {
			setTypeError(true);
		} else {
			setTypeError(false);
		}
		if (quantity == null || quantity == "" || quantity == NaN) {
			setQunatityError(true);
		} else {
			setQunatityError(false);
			if (/^(0|[1-9]\d*)$/.test(quantity)) {
				setDecimalQunatityError(false);
			} else {
				setDecimalQunatityError(true);
			}
		}
		if (quantity > data?.total_stock_quantity && quantity && type == "REDUCE") {
			setGreaterQunatityError(true);
		} else {
			setGreaterQunatityError(false);
		}
	}, [input]);

	const handlTheSubmit = () => {
		if (
			!remarkError &&
			!quantityError &&
			!decimalQuantityError &&
			!typeError &&
			!greaterQuantityError
		) {
			setHasError(false);
			editStockApi(input, data?.mpn);
			setEditStockModal(false);
		} else {
			setHasError(true);
		}
	};

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					fontWeight: "bold",
					fontSize: "1.2rem",
					margin: "-0.5rem",
				}}>
				<p>{data?.mpn}</p>
				<p>QTY: {data?.total_stock_quantity}</p>
			</div>
			<hr></hr>
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<div style={{ paddingInline: "1rem" }}>
					<Select
						label="Type"
						placeholder="Pick one"
						onChange={e => {
							setInput({ ...input, type: e });
						}}
						data={[
							{ value: "ADD", label: "ADD" },
							{ value: "REDUCE", label: "REDUCE" },
						]}
					/>
					{typeError && hasError && (
						<Text size="sm" color="red">
							type required!
						</Text>
					)}
				</div>
				<div style={{ paddingInline: "1rem" }}>
					<NumberInput
						placeholder="Enter Quantity"
						label="Enter Quantity"
						min={1}
						onChange={e => {
							setInput({ ...input, quantity: e });
						}}
						withAsterisk
					/>
					{quantityError && hasError && (
						<Text size="sm" color="red">
							quantity required!
						</Text>
					)}
					{decimalQuantityError && hasError && (
						<Text size="sm" color="red">
							should be a positive integer
						</Text>
					)}
					{greaterQuantityError && hasError && (
						<Text size="sm" color="red">
							should be less than existing quantity
						</Text>
					)}
				</div>
				<div style={{ paddingInline: "1rem" }}>
					<TextInput
						label="Enter Remark"
						placeholder="Enter Remark"
						onChange={e => {
							setInput({ ...input, remarks: e.target.value });
						}}
					/>
					{remarkError && hasError && (
						<Text size="sm" color="red">
							remark required!
						</Text>
					)}
				</div>
			</div>
			<Group position="right" style={{ margin: "1rem" }}>
				{" "}
				<Button onClick={handlTheSubmit} loading={loading}>
					SAVE
				</Button>
			</Group>
		</>
	);
};

export default EditStockForm;
