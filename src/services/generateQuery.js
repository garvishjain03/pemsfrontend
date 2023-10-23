export const generateQuery = items => {
	const query = new URLSearchParams(window.location.search);

	items.forEach(item => {
		Object.entries(item).forEach(([key, value]) => {
			if (value)
				query.has(key) ? query.set(key, value) : query.append(key, value);
			else query.delete(key);
		});
	});
	return query.toString();
};

export const generateSalesQuery = (query, items) => {
	let tempObj = items
		? JSON.parse(
				'{"' + decodeURI(items.replace(/&/g, '","').replace(/=/g, '":"')) + '"}'
		  )
		: {};

	Object.entries(query).forEach(([key, value]) => {
		if (value) tempObj[key] = value;
		else delete tempObj[key];
	});

	const serialize = obj => {
		const str = [];
		for (let key in obj)
			if (obj.hasOwnProperty(key)) {
				str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
			}
		return str.join("&");
	};

	return serialize(tempObj);
};
