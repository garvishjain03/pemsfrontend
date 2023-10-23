import { Button, Group, Table, Text } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getEditDatesApi } from "../../../services/SaleItem";

const EditDatesForm = ({ setEditDate }) => {
	const [input, setInput] = useState([]);
	const { selectedItem } = useSelector(state => ({
		selectedItem: state.Items,
	}));
	const handleSave = () => {
		const body = { items: input };
		const orderId = selectedItem?.[0]?.orderid;
		getEditDatesApi(orderId, body);
		setEditDate(false);
	};

	useEffect(() => {
		const newObj = selectedItem.map(({ id, scheduleDate, commitedDate }) => {
			return {
				id,
				scheduleDate,
				commitedDate,
			};
		});
		setInput(newObj);
	}, []);
	return (
		<>
			<Table>
				<thead>
					<tr>
						<th>Item No.</th>
						<th>Order Date</th>
						<th>Scheduled Delivery Date</th>
						<th>Committed Date</th>
					</tr>
				</thead>
				<tbody>
					{selectedItem?.map((ele, index) => {
						return (
							<tr>
								<td style={{ maxWidth: "14rem" }}>
									<Text>{ele?.itemno}</Text>
								</td>
								<td style={{ maxWidth: "14rem" }}>
									<DatePicker
										placeholder="Pick Date"
										defaultValue={new Date(ele?.orderDate)}
										onChange={e => {
											const updateObj = input.map((obj, i) => {
												if (index === i) {
													return { ...obj, orderDate: e.toISOString() };
												}
												return obj;
											});
											setInput(updateObj);
										}}
									/>
								</td>
								<td style={{ maxWidth: "14rem" }}>
									<DatePicker
										placeholder="Pick Date"
										defaultValue={new Date(ele?.scheduleDate)}
										onChange={e => {
											const updateObj = input.map((obj, i) => {
												if (index === i) {
													return { ...obj, scheduleDate: e.toISOString() };
												}
												return obj;
											});
											setInput(updateObj);
										}}
									/>
								</td>
								<td style={{ maxWidth: "14rem" }}>
									<DatePicker
										placeholder="Pick Date"
										defaultValue={new Date(ele?.commitedDate)}
										onChange={e => {
											const updateObj = input.map((obj, i) => {
												if (index === i) {
													return { ...obj, commitedDate: e.toISOString() };
												}
												return obj;
											});
											setInput(updateObj);
										}}
									/>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<Group position="right" style={{ padding: "1rem" }}>
				<Button onClick={handleSave}>SAVE</Button>
			</Group>
		</>
	);
};

export default EditDatesForm;
