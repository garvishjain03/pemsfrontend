import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//pages
import { login } from "../../services/auth";

// Container
import Login from "../../containers/Login";
import { homePageConfig } from "../../configs/sidebarConfig/homepage";
const defaultValues = {
	email: "",
	password: "",
};

const LoginPage = () => {
	let navigate = useNavigate();

	const [loading, setLoading] = useState(false);

	const onSubmit = async value => {
		setLoading(true);
		const res = await login(value);
		setLoading(false);

		if (res && res.status === 200) {
			const _activeRole = localStorage.getItem("active_role");
			const _sidebarConfig = homePageConfig[_activeRole?.toLowerCase()];

			navigate(_sidebarConfig);
		}
	};

	return (
		<Login
			defaultValues={defaultValues}
			loading={loading}
			onSubmit={onSubmit}
		/>
	);
};

export default LoginPage;
