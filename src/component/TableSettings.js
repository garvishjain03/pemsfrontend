import {
	Button,
	Center,
	Checkbox,
	Container,
	Group,
	Title,
} from "@mantine/core";
import { useState } from "react";

const TableSettings = ({ columns }) => {
	const [checkedDisplay, setCheckedDisplay] = useState({});
	const [checkedFilters, setCheckedFilters] = useState({});
	const [checkedSorting, setCheckedSorting] = useState({});

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

	let updateJsonFile = columns;

	const applyhandler = () => {
		const displaykeys = Object.keys(checkedDisplay);
		const sortingkeys = Object.keys(checkedSorting);

		updateJsonFile.forEach(element => {
			if (displaykeys.includes(element.Header)) {
				element.display = checkedDisplay[element.Header];
			}
			if (sortingkeys.includes(element.Header)) {
				element.disableSortBy = !checkedSorting[element.Header];
			}
		});
	};

	return (
		<Container>
			<Title order={3}>Display columns</Title>
			<Group>
				{columns.map(item => {
					return (
						<Checkbox
							defaultChecked={item.display}
							checked={checkedDisplay.value}
							key={item.Header}
							label={item.Header}
							onChange={event => {
								setCheckedDisplayFn(item.Header, event.currentTarget.checked);
							}}
						/>
					);
				})}
			</Group>

			<Title order={3}>Filters</Title>
			<Group>
				{columns.map(item => {
					return (
						<Checkbox
							defaultChecked={!item.disableFilters}
							key={item.Header}
							label={item.Header}
							onChange={event => {
								setCheckedFiltersFn(item.Header, event.currentTarget.checked);
							}}
						/>
					);
				})}
			</Group>

			<Title order={3}>Sorting</Title>
			<Group>
				{columns.map(item => (
					<Checkbox
						defaultChecked={!item.disableSortBy}
						key={item.Header}
						label={item.Header}
						onChange={event => {
							setCheckedSortingFn(item.Header, event.currentTarget.checked);
						}}
					/>
				))}
			</Group>
			<Center>
				<Button onClick={applyhandler}>Apply</Button>
			</Center>
		</Container>
	);
};

export default TableSettings;
