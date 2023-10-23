import * as yup from "yup";

export const schema = yup.object().shape({
	leadlength: yup.string().required("lead length required"),
	coresize: yup.string().required("coresize required"),
	leaddia: yup.string().required("lead dia required"),
});
