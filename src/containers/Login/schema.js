import * as yup from "yup";

export const schema = yup.object().shape({
	email: yup.string().required("username required").trim(),
	password: yup.string().trim().required().min(8),
});
