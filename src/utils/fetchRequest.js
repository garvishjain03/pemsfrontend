import Cookies from "js-cookie";

export const fetchRequest = async (url, options = { method: "GET" }) => {
	let data = {};
	let status = "";
	const ACCESS_TOKEN = Cookies.get("ACCESS_TOKEN");

	try {
		const _res = await fetch(url, {
			...options,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${ACCESS_TOKEN}`,
			},
		});

		status = _res.status;
		if (_res.headers.get("content-type")?.includes("application/json")) {
			data = await _res.json();
		}
	} catch (error) {
		console.warn(error.message);
	} finally {
		return { data, hasError: !(status === 200), status };
	}
};
