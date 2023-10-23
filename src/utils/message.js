import { showNotification, updateNotification } from "@mantine/notifications";

const error = args => {
	return showNotification({
		color: "red",
		title: "Error",
		autoClose: false,
		...args,
	});
};

const success = args => {
	return showNotification({
		color: "green",
		title: "Success",
		...args,
	});
};

const warning = args => {
	return showNotification({
		color: "orange",
		title: "Warning",
		...args,
	});
};

const info = args => {
	return showNotification({
		color: "blue",
		title: "Info",
		...args,
	});
};

const updateMessage = args => {
	return updateNotification({
		color: "blue",
		title: "Success",
		...args,
	});
};

export const message = { error, success, warning, info, updateMessage };
