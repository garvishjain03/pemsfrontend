import {
	Button,
	Group,
	Input,
	NumberInput,
	Select,
	Text,
	TextInput,
} from "@mantine/core";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getAllMpn, processReturnApi } from "../../../services/stock";

const TransferStockForm = ({ data, from, setTransferStockModal }) => {
	const [input, setInput] = useState([]);
	const [remarkError, setRemarkError] = useState(false);
	const [mpnError, setMpnError] = useState(false);
	const [mpnMissMatchError, setMpnMissMatchError] = useState(false);
	const [quantityError, setQunatityError] = useState(false);
	const [greaterQuantityError, setGreaterQunatityError] = useState(false);
	const [decimalQuantityError, setDecimalQunatityError] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [validMpnError, setValidMpnHasError] = useState(false);
	const [sameMpnError, setSameMpnError] = useState(false);

	const { mpn = [], loading } = useSelector(state => ({
		mpn: state.stock?.mpn,
		loading: state.orders.loading,
	}));

	const mpnDropDown = useMemo(() => {
		const newSet = [...new Set(mpn.map(obj => obj?.mpn))];
		return newSet?.map(ele => ({ value: ele, label: ele }));
	});
	useEffect(() => {
		getAllMpn();
		setInput({
			mpn: data?.mpn,
			remark: null,
			quantity: null,
		});
	}, []);

	useEffect(() => {
		const remarks = input?.remark;
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
		if (mpn === data.mpn) {
			setSameMpnError(true);
		} else {
			setSameMpnError(false);
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
		if (
			quantity >
				(from == "returnHistory"
					? data?.return_quantity
					: data?.total_stock_quantity) &&
			quantity
		) {
			setGreaterQunatityError(true);
		} else {
			setGreaterQunatityError(false);
		}
		if (data?.mpn?.slice(0, 3) == "WWS" && mpn?.slice(0, 3) != "WWS") {
			setMpnMissMatchError(true);
		} else {
			setMpnMissMatchError(false);
		}
	}, [input]);

	const handlTheSubmit = () => {
		// let isVaidMpn;
		// isVaidMpn = mpn?.find(data => data?.mpn == input.mpn);
		if (
			!remarkError &&
			!quantityError &&
			!decimalQuantityError &&
			!mpnError &&
			!sameMpnError &&
			!greaterQuantityError &&
			!mpnMissMatchError
			// && isVaidMpn
		) {
			setHasError(false);
			setValidMpnHasError(false);
			processReturnApi(input, data?.mpn, from);
			setTransferStockModal(false);
		} else {
			setHasError(true);
			// isVaidMpn ? setValidMpnHasError(false) : setValidMpnHasError(true);
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
				<p>
					QTY:{" "}
					{from == "returnHistory"
						? data?.return_quantity
						: data?.total_stock_quantity}
				</p>
			</div>
			<hr></hr>
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<div style={{ paddingInline: "1rem" }}>
					<Select
						value={input?.mpn}
						label="MPN"
						placeholder="MPN"
						data={mpnDropDown}
						onChange={e => {
							setInput({ ...input, mpn: e });
						}}
						searchable
					/>
					{!validMpnError && mpnMissMatchError && !mpnError && hasError && (
						<Text size="sm" color="red">
							select a wirewound item
						</Text>
					)}
					{mpnError && hasError && (
						<Text size="sm" color="red">
							mpn required!
						</Text>
					)}
					{validMpnError && hasError && !mpnError && (
						<Text size="sm" color="red">
							enter a valid mpn!
						</Text>
					)}
					{sameMpnError && hasError && !mpnError && (
						<Text size="sm" color="red">
							can't transfer to same mpn
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
						placeholder="Enter Quantity"
						onChange={e => {
							setInput({ ...input, remark: e.target.value });
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
					TRANFER
				</Button>
			</Group>
		</>
	);
};

export default TransferStockForm;
