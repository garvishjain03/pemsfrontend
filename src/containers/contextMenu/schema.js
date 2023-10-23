import * as yup from "yup";

export const schema = yup.object().shape({
	label: yup.string().required("label required"),
	code: yup.string().required("code required"),
});
