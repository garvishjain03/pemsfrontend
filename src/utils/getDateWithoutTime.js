export function getDateWithoutTime(dateString) {
	// convert the date string to a date object
	const date = new Date(dateString);

	// set the time component to 00:00:00
	date.setHours(0, 0, 0, 0);

	return date;
}
