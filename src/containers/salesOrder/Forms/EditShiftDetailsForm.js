import {
	Button,
	Group,
	MultiSelect,
	NumberInput,
	Select,
	Text,
	TextInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { editShifitTc } from "../../../services/issuedTc";
import { todayDateStyle } from "../../../utils/todayDateBg";

const EditShiftDetailsForm = ({ editShift, tcId, setEditModal }) => {
	const [input, setInput] = useState({
		shift_type: null,
		shift_machine: null,
		shift_quantity: null,
		shift_date: null,
		remark: null,
	});

	const [commentError, setCommentError] = useState(false);

	const machine = useSelector(state => state.context?.machine?.rows);
	const machinesOperatorWise = useMemo(
		() =>
			editShift.status === "CUTTING"
				? machine?.filter(item => item.type === "Cutting")
				: editShift.status === "COATING"
				? machine?.filter(item => item.type === "Coating")
				: editShift.status === "WELDING"
				? machine?.filter(item => item.type === "Welding")
				: editShift.status === "WINDING"
				? machine?.filter(item => item.type === "Winding")
				: [],
		[machine]
	);

	const machineDropdown = useMemo(
		() =>
			machinesOperatorWise?.map(item => {
				return {
					label: item?.name,
					value: item?.id,
				};
			}),
		[machinesOperatorWise]
	);

	useEffect(() => {
		setInput({
			shift_type: editShift?.shift_type,
			shift_machine: machineDropdown?.find(
				data => data?.label == editShift?.machine
			)?.value,
			shift_quantity:
				editShift.status != "QUALITY"
					? editShift?.quantity
					: editShift?.quatity,
			shift_date: editShift?.shift_date,
			remark: null,
		});
	}, []);

	const handlTheSubmit = () => {
		if ([null, undefined, "", NaN].includes(input.remark))
			return setCommentError(true);

		editShifitTc(
			editShift?.shiftid,
			input,
			tcId,
			editShift.status,
			editShift?.shift_quantity
		);
		setEditModal(false);
		setCommentError(false);
	};
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
				}}>
				<div style={{ paddingInline: "1rem" }}>
					<DatePicker
						dayStyle={date => todayDateStyle(date)}
						label="Shift Date"
						placeholder="Pick Date"
						defaultValue={new Date(editShift?.shift_date)}
						inputFormat="DD/MM/YYYY"
						onChange={e => {
							setInput({ ...input, shift_date: e.toISOString() });
						}}
					/>
				</div>
				{editShift.status != "QUALITY" && (
					<div style={{ paddingInline: "1rem" }}>
						<Select
							label="Machine"
							placeholder={editShift?.machine}
							data={machineDropdown || []}
							onChange={e => {
								setInput({ ...input, shift_machine: e });
							}}
						/>
					</div>
				)}
				<div style={{ paddingInline: "1rem" }}>
					<NumberInput
						label="Shift Quantity"
						placeholder="Enter Quantity"
						defaultValue={
							editShift?.status == "QUALITY"
								? editShift?.shift_quantity
								: editShift?.quantity
						}
						onChange={e => {
							setInput({ ...input, shift_quantity: e });
						}}
					/>
				</div>
				{editShift.status != "QUALITY" && (
					<div style={{ paddingInline: "1rem" }}>
						<Select
							label="Shift"
							placeholder="Pick One"
							defaultValue={editShift?.shift_type}
							data={["SHIFT1", "SHIFT2", "SHIFT3"]}
							onChange={e => {
								setInput({ ...input, shift_type: e });
							}}
						/>
					</div>
				)}
				<div style={{ paddingInline: "1rem" }}>
					<TextInput
						label="Comment"
						placeholder="Comment"
						onChange={e => {
							setInput({ ...input, remark: e.target.value });
						}}
					/>
					{commentError && (
						<Text size="sm" color="red">
							required!
						</Text>
					)}
				</div>
			</div>
			<Group position="right" style={{ margin: "1rem" }}>
				{" "}
				<Button onClick={handlTheSubmit}>SAVE</Button>
			</Group>
		</>
	);
};

export default EditShiftDetailsForm;
