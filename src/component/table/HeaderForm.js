import { Button, Group, Select, Text } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { useEffect, useState } from "react";
import { todayDateStyle } from "../../utils/todayDateBg";

const HeaderForm = ({ setDateModalOpened }) => {
	const [shiftDate, setShiftDate] = useState(new Date());
	const [shift, setShift] = useState([]);
	const [shiftDateError, setShiftDateError] = useState(false);
	const [shiftError, setShiftError] = useState(false);
	const [hasError, setHasError] = useState(false);

	const handleSave = e => {
		e.preventDefault();
		if (shiftDate && shift?.length) {
			localStorage.setItem("shift_date", shiftDate);
			localStorage.setItem("shift", shift);
			setDateModalOpened(false);
		} else {
			setHasError(true);
		}
	};

	useEffect(() => {
		if (!shiftDate) setShiftDateError(true);
		else {
			setShiftDateError(false);
		}
		if (!shift?.length) setShiftError(true);
		else {
			setShiftError(false);
		}
	}, [shift, shiftDate]);

	return (
		<Group position="center" direction="column" my={8}>
			<DatePicker
				dayStyle={date => todayDateStyle(date)}
				required
				value={shiftDate}
				onChange={value => {
					setShiftDate(value);
				}}
				label="Select Shift Date"
				placeholder="pick date"
				my={16}
			/>
			{shiftDateError && hasError && (
				<Text size="sm" color="red" mt={"-1.5rem"}>
					required!
				</Text>
			)}
			<Select
				value={shift}
				onChange={e => setShift(e)}
				placeholder="Pick Shift"
				label="Shift"
				required
				data={["SHIFT1", "SHIFT2", "SHIFT3"]}
			/>
			{shiftError && hasError && (
				<Text size="sm" color="red" mt={"-1rem"}>
					required!
				</Text>
			)}
			<Button onClick={handleSave}>SAVE</Button>
		</Group>
	);
};

export default HeaderForm;
