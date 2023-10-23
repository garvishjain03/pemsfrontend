import React, { useState, useEffect } from "react";
import { Checkbox, Group, Table, Text } from "@mantine/core";

const ContextSettingTable = ({ role, page, tableData, setChangeTableData }) => {
	const [checkedDisplay, setCheckedDisplay] = useState({});
	const [checkedFilters, setCheckedFilters] = useState({});
	const [checkedSorting, setCheckedSorting] = useState({});
	const [checkedDelete, setCheckedDelete] = useState(null);
	const [checkedEdit, setCheckedEdit] = useState(null);
	const [checkedActionsButton, setCheckedActionsButton] = useState({});

	const setCheckedActionsButtonFn = (key, value) =>
		setCheckedActionsButton(crr => {
			const _curr = { ...crr };
			_curr[key] = value;

			return _curr;
		});

	useEffect(() => {
		setCheckedDisplay({});
		setCheckedFilters({});
		setCheckedSorting({});
		setCheckedDelete(null);
		setCheckedEdit(null);
	}, [role, page]);

	const setCheckedDisplayFn = (key, value) =>
		setCheckedDisplay(crr => {
			const _curr = { ...crr };
			_curr[key] = value;
			return _curr;
		});

	const setCheckedFiltersFn = (key, value) =>
		setCheckedFilters(crr => {
			const _curr = { ...crr };
			_curr[key] = value;
			return _curr;
		});

	const setCheckedSortingFn = (key, value) =>
		setCheckedSorting(crr => {
			const _curr = { ...crr };
			_curr[key] = value;
			return _curr;
		});

	useEffect(() => {
		applyhandler();
	}, [checkedDisplay, checkedFilters, checkedSorting, checkedActionsButton]);

	const elements = tableData?.map(item => {
		let btn = item.showCellElements ? item.showCellElements : {};
		return {
			field: item.id,
			visible: (
				<Checkbox
					key={item.id}
					checked={checkedDisplay[item.id]}
					defaultChecked={item.display}
					onChange={event => {
						setCheckedDisplayFn(item.id, event.currentTarget.checked);
						if (!event.currentTarget.checked) {
							setCheckedSortingFn(item.id, event.currentTarget.checked);
							setCheckedFiltersFn(item.id, event.currentTarget.checked);
							// if (item.id === "Actions") {
							// 	setCheckedDelete(false);
							// 	setCheckedEdit(false);
							// }
						}
					}}
				/>
			),
			sortable: item.id !== "Actions" && (
				<Checkbox
					key={item.id}
					checked={checkedSorting[item.id]}
					defaultChecked={!item.disableSortBy}
					onChange={event => {
						setCheckedSortingFn(item.id, event.currentTarget.checked);
					}}
				/>
			),
			filterable: item.id !== "Actions" && (
				<Checkbox
					key={item.id}
					checked={checkedFilters[item.id]}
					defaultChecked={!item.disableFilters}
					onChange={event => {
						setCheckedFiltersFn(item.id, event.currentTarget.checked);
					}}
				/>
			),
			delete: Object.keys(btn).includes("delete") ? (
				<Checkbox
					checked={checkedDelete}
					defaultChecked={item.showCellElements.delete}
					key={item.id}
					onChange={event => {
						setCheckedDelete(event.currentTarget.checked);
					}}
				/>
			) : null,
			edit: Object.keys(btn).includes("edit") ? (
				<Checkbox
					checked={checkedEdit}
					defaultChecked={item.showCellElements.edit}
					key={item.id}
					onChange={event => {
						setCheckedEdit(event.currentTarget.checked);
					}}
				/>
			) : null,
		};
	});

	const rows = elements?.map(element => (
		<tr key={element.id}>
			<td>{element.field}</td>
			<td>{element.visible}</td>
			<td>{element.sortable}</td>
			<td>{element.filterable}</td>
		</tr>
	));
	let updateTableData = tableData;

	const applyhandler = () => {
		const displaykeys = Object.keys(checkedDisplay);
		const sortingkeys = Object.keys(checkedSorting);
		const filterkeys = Object.keys(checkedFilters);

		updateTableData.forEach(element => {
			if (displaykeys.includes(element.id)) {
				element.display = checkedDisplay[element.id];
			}
			if (sortingkeys.includes(element.id)) {
				element.disableSortBy = !checkedSorting[element.id];
			}
			if (filterkeys.includes(element.id)) {
				element.disableFilters = !checkedFilters[element.id];
			}
			if (element.id === "Actions") {
				Object.entries(checkedActionsButton).map(([key, value]) => {
					if (checkedActionsButton[key] !== null) {
						element.showCellElements[key] = value;
					}
				});
			}
		});
		setChangeTableData(updateTableData);
	};

	return (
		<>
			<Table mt={50}>
				<thead>
					<tr>
						<th>Field</th>
						<th>Visible</th>
						<th>Sortable</th>
						<th>Filterable</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
			<Group mt={20} direction="column">
				<Text weight={700}>Table action button</Text>
				{tableData?.map(item => {
					if (item?.id === "Actions")
						return (
							<Group mt={8} direction="row">
								{Object.entries(item?.showCellElements).map(([key, value]) => {
									return (
										<Checkbox
											checked={checkedActionsButton[key]}
											defaultChecked={value}
											key={key}
											label={key}
											onChange={event =>
												setCheckedActionsButtonFn(key, event?.target.checked)
											}
										/>
									);
								})}
							</Group>
						);
				})}
			</Group>
		</>
	);
};

export default ContextSettingTable;
