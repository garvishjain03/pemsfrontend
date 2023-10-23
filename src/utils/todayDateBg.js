export const todayDateStyle = date => {
	const today = new Date();
	if (date.toDateString() === today.toDateString()) {
		return {
			// backgroundColor: "gray",
			border: "3px solid black",
			// color: "white",
		};
	}
};
