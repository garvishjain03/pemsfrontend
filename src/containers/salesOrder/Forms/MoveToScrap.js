import {
	Button,
	Group,
	Input,
	NumberInput,
	Select,
	Text,
	TextInput,
	Tooltip,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { processReturnApi } from "../../../services/stock";
import { useSelector } from "react-redux";

const MoveToScrap = ({ data, clickedRowDetails, setMoveToScrapModal }) => {
	const [input, setInput] = useState([]);
	const [remarkError, setRemarkError] = useState(false);
	const [quantityError, setQunatityError] = useState(false);
	const [greaterQuantityError, setGreaterQunatityError] = useState(false);
	const [decimalQuantityError, setDecimalQunatityError] = useState(false);
	const [hasError, setHasError] = useState(false);
	const { loading } = useSelector(state => state.orders);
	useEffect(() => {
		setInput({
			mpn: null,
			remarks: null,
			quantity: null,
		});
	}, []);

	useEffect(() => {
		const remarks = input?.remarks;
		const quantity = input?.quantity;
		if (remarks == null || remarks == "") {
			setRemarkError(true);
		} else {
			setRemarkError(false);
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
		if (quantity > clickedRowDetails?.return_quantity && quantity) {
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
			!greaterQuantityError
		) {
			setHasError(false);
			processReturnApi(
				{
					quantity: input?.quantity,
					remark: input?.remarks,
					scrap: true,
					mpn: "",
				},
				data?.[0]?.mpn,
				"returnHistory"
			);
			setMoveToScrapModal(false);
		} else {
			setHasError(true);
		}
	};

	const onHover =
		data?.[0]?.ReturnItemDetails?.toleranceDetails?.value +
		" | " +
		data?.[0]?.ReturnItemDetails?.coresizeDetails?.value;
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
				<Tooltip label={onHover}>
					<p>{data?.[0]?.mpn}</p>
				</Tooltip>
				<p>QTY: {clickedRowDetails?.return_quantity}</p>
			</div>
			<hr></hr>
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
						placeholder="Enter Quantity"
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
					SCRAP
				</Button>
			</Group>
		</>
	);
};

export default MoveToScrap;
