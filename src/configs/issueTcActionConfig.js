export const tcIssuedActionConfig = status => {
	return config[status] || false;
};

const config = {
	PENDING: true,
	CUTTING: true,
	WINDING: true,
};
