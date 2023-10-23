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
import { addShiftDetails } from "../../../services/issuedTc";
import { todayDateStyle } from "../../../utils/todayDateBg";

const AddShiftForm = ({ shiftDetails, tcId, setAddModal }) => {
	const [input, setInput] = useState({
		operator: null,
		shift: null,
		machine: null,
		shiftquantity: null,
		shiftDate: null,
		remark: null,
		shiftStatus: shiftDetails?.status,
		tcid: tcId,
	});

	const [commentError, setCommentError] = useState(false);
	const [dateError, setDateError] = useState(false);
	const [quantityError, setQunatityError] = useState(false);
	const [shiftError, setShiftError] = useState(false);
	const [machineError, setMachineError] = useState(false);
	const [operatorError, setOperatorError] = useState(false);
	const [hasError, setHasError] = useState(false);

	const { machine, users } = useSelector(state => ({
		machine: state.context?.machine?.rows,
		users: state?.user?.users?.data,
	}));
	const machinesOperatorWise = useMemo(
		() =>
			shiftDetails.status === "CUTTING"
				? machine?.filter(item => item.type === "Cutting")
				: shiftDetails.status === "COATING"
				? machine?.filter(item => item.type === "Coating")
				: shiftDetails.status === "WELDING"
				? machine?.filter(item => item.type === "Welding")
				: shiftDetails.status === "WINDING"
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
	const usersOperatorWise = useMemo(
		() =>
			shiftDetails.status === "CUTTING"
				? users?.filter(item =>
						item.userroles
							.map(({ allroles }) => allroles?.slug)
							.includes("CUTTINGOP")
				  )
				: shiftDetails.status === "COATING"
				? users?.filter(item =>
						item.userroles
							.map(({ allroles }) => allroles?.slug)
							.includes("COATINGOP")
				  )
				: shiftDetails.status === "WELDING"
				? users?.filter(item =>
						item.userroles
							.map(({ allroles }) => allroles?.slug)
							.includes("WELDINGOP")
				  )
				: shiftDetails.status === "WINDING"
				? users?.filter(item =>
						item.userroles
							.map(({ allroles }) => allroles?.slug)
							.includes("WINDINGOP")
				  )
				: [],
		[users]
	);

	const userDropDown = useMemo(
		() =>
			usersOperatorWise?.map(item => {
				return {
					label: item?.username,
					value: item?.id,
				};
			}),
		[usersOperatorWise]
	);

	useEffect(() => {
		if ([null, undefined, "", NaN].includes(input.remark)) {
			setCommentError(true);
		} else {
			setCommentError(false);
		}
		if ([null, undefined, "", NaN].includes(input.shift)) {
			setShiftError(true);
		} else {
			setShiftError(false);
		}
		if ([null, undefined, "", NaN].includes(input.shiftDate)) {
			setDateError(true);
		} else {
			setDateError(false);
		}
		if ([null, undefined, "", NaN].includes(input.machine)) {
			setMachineError(true);
		} else {
			setMachineError(false);
		}
		if ([null, undefined, "", NaN].includes(input.operator)) {
			setOperatorError(true);
		} else {
			setOperatorError(false);
		}
		if ([null, undefined, "", NaN].includes(input.shiftquantity)) {
			setQunatityError(true);
		} else {
			setQunatityError(false);
		}
	}, [input]);

	const handlTheSubmit = () => {
		if (
			!operatorError &&
			!dateError &&
			!quantityError &&
			!commentError &&
			(shiftDetails?.status === "QUALITY" || (!shiftError && !machineError))
		) {
			addShiftDetails(input);
			setAddModal(false);
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
				}}>
				<div style={{ paddingInline: "1rem" }}>
					<Select
						label="Operator"
						placeholder="Pick Operator"
						data={userDropDown || []}
						searchable
						onChange={e => {
							setInput({ ...input, operator: e });
						}}
					/>
					{operatorError && hasError && (
						<Text size="sm" color="red">
							required!
						</Text>
					)}
				</div>
				<div style={{ paddingInline: "1rem" }}>
					<DatePicker
						dayStyle={date => todayDateStyle(date)}
						label="Shift Date"
						placeholder="Pick Date"
						inputFormat="DD/MM/YYYY"
						onChange={e => {
							setInput({ ...input, shiftDate: e.toISOString() });
						}}
					/>
					{dateError && hasError && (
						<Text size="sm" color="red">
							required!
						</Text>
					)}
				</div>
				{shiftDetails.status != "QUALITY" && (
					<div style={{ paddingInline: "1rem" }}>
						<Select
							label="Machine"
							placeholder="Pick Machine"
							data={machineDropdown || []}
							onChange={e => {
								setInput({ ...input, machine: e });
							}}
						/>
						{machineError && hasError && (
							<Text size="sm" color="red">
								required!
							</Text>
						)}
					</div>
				)}
				{shiftDetails?.shift_quantity_tape && shiftDetails?.shift_quantity ? (
					<>
						<div style={{ paddingInline: "1rem" }}>
							<NumberInput
								label="Quantity Tape"
								placeholder="Enter Quantity"
								onChange={e => {
									setInput({ ...input, shiftQuantityTape: e });
								}}
							/>
							{quantityError && hasError && (
								<Text size="sm" color="red">
									required!
								</Text>
							)}
						</div>
						<div style={{ paddingInline: "1rem" }}>
							<NumberInput
								label="Quantity Bulk"
								placeholder="Enter Quantity"
								onChange={e => {
									setInput({ ...input, shiftQuantityBulk: e });
								}}
							/>
							{quantityError && hasError && (
								<Text size="sm" color="red">
									required!
								</Text>
							)}
						</div>
					</>
				) : (
					<div style={{ paddingInline: "1rem" }}>
						<NumberInput
							label="Shift Quantity"
							placeholder="Enter Quantity"
							onChange={e => {
								setInput({ ...input, shiftquantity: e });
							}}
						/>
						{quantityError && hasError && (
							<Text size="sm" color="red">
								required!
							</Text>
						)}
					</div>
				)}
				{shiftDetails.status != "QUALITY" && (
					<div style={{ paddingInline: "1rem" }}>
						<Select
							label="Shift"
							placeholder="Pick One"
							data={["SHIFT1", "SHIFT2", "SHIFT3"]}
							onChange={e => {
								setInput({ ...input, shift: e });
							}}
						/>
						{shiftError && hasError && (
							<Text size="sm" color="red">
								required!
							</Text>
						)}
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
					{commentError && hasError && (
						<Text size="sm" color="red">
							required!
						</Text>
					)}
				</div>
			</div>
			<Group position="right" style={{ margin: "1rem" }}>
				{" "}
				<Button onClick={handlTheSubmit}>ADD</Button>
			</Group>
		</>
	);
};

export default AddShiftForm;
