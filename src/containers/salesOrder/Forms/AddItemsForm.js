import {
	Button,
	Group,
	Input,
	NumberInput,
	Select,
	Text,
	TextInput,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addNewItemApi, getAllMpn } from "../../../services/stock";
import { SingleRemark } from "./RemarkTextArea";

const AddItemsForm = ({ data, setAddNewItemsModal }) => {
	const [input, setInput] = useState([]);
	const [remarkError, setRemarkError] = useState(false);
	const [quantityError, setQunatityError] = useState(false);
	const [mpnError, setMpnError] = useState(false);
	const [decimalQuantityError, setDecimalQunatityError] = useState(false);
	const [validMpnError, setValidMpnHasError] = useState(false);
	const [alreadyInStockError, setAlreadyInStockError] = useState(false);
	const [submitDisabled, setSubmitDisabled] = useState(false);
	const [hasError, setHasError] = useState(false);

	const { mpn = [] } = useSelector(state => ({
		mpn: state.stock?.mpn,
	}));
	useEffect(() => {
		getAllMpn(true);
		setInput({
			mpn: null,
			remarks: null,
			quantity: null,
		});
	}, []);

	useEffect(() => {
		const remarks = input?.remarks;
		const quantity = input?.quantity;
		const mpn = input?.mpn;
		if (remarks == null || remarks == "") {
			setRemarkError(true);
		} else {
			setRemarkError(false);
		}
		if (mpn == null || mpn == "") {
			setMpnError(true);
		} else {
			setMpnError(false);
		}
		if (quantity === null || quantity === "" || isNaN(quantity)) {
			setQunatityError(true);
		} else {
			setQunatityError(false);
			if (/^(0|[1-9]\d*)$/.test(quantity)) {
				setDecimalQunatityError(false);
			} else {
				setDecimalQunatityError(true);
			}
		}
	}, [input]);

	const handlTheSubmit = () => {
		// let isVaidMpn;
		// isVaidMpn = mpn?.find(data => data?.mpn == input.mpn);
		let alreadyInStock;
		alreadyInStock = data?.find(element => element.mpn == input.mpn);
		if (
			!remarkError &&
			!quantityError &&
			!decimalQuantityError &&
			!mpnError &&
			// isVaidMpn &&
			!alreadyInStock
		) {
			setSubmitDisabled(true);
			setHasError(false);
			addNewItemApi(input);
			setAddNewItemsModal(false);
			setAlreadyInStockError(false);
			setValidMpnHasError(false);
		} else {
			setHasError(true);
			// isVaidMpn ? setValidMpnHasError(false) : setValidMpnHasError(true);
			alreadyInStock
				? setAlreadyInStockError(true)
				: setAlreadyInStockError(false);
		}
	};

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
				}}>
				<div style={{ paddingInline: "1rem" }}>
					<TextInput
						label="MPN"
						placeholder="Enter MPN"
						onChange={e => {
							setInput({ ...input, mpn: e.target.value });
						}}
					/>
					{mpnError && hasError && (
						<Text size="sm" color="red">
							mpn required!
						</Text>
					)}
					{/* {validMpnError && hasError && !mpnError && !alreadyInStockError && (
						<Text size="sm" color="red">
							enter a valid mpn!
						</Text>
					)} */}
					{alreadyInStockError && hasError && !mpnError && (
						<Text size="sm" color="red">
							mpn already in stock!
						</Text>
					)}
				</div>
				<div style={{ paddingInline: "1rem" }}>
					<NumberInput
						placeholder="Enter Quantity"
						label="Enter Quantity"
						min={0}
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
				<Button onClick={handlTheSubmit} disabled={submitDisabled}>
					ADD
				</Button>
			</Group>
		</>
	);
};

export default AddItemsForm;
