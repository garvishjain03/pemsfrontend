import * as yup from "yup";

export const createSchema = yup.object().shape({
	username: yup
		.string()
		.required("Username required")
		.min(3, "Username must be at least 5 characters"),
	password: yup.string().trim().required("Password required").min(8),
	firstName: yup
		.string()
		.trim()
		.required("FirstName required")
		.min(3, "Firstname must be at least 3 characters"),

	defaultRole: yup.string().trim().required("Default Role required"),
	role: yup.array().of(yup.string()).required("Roles required").nullable(),
});

export const updateSchema = yup.object().shape({
	username: yup
		.string()
		.required("Username required")
		.min(3, "Username must be at least 5 characters"),
	password: yup.string().trim().required("Password required").min(8),

	firstName: yup
		.string()
		.trim()
		.required("FirstName required")
		.min(3, "Firstname must be at least 3 characters"),
	defaultRole: yup
		.string("Default Role required")
		.trim()
		.required("Default Role required"),
	role: yup.array().of(yup.string()).required("Roles required"),
});
