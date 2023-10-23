import * as yup from "yup";

export const schema = yup.object().shape({
	wattage: yup.string().required("wattage required"),
	coresize: yup.array().of(yup.string()).required("coresize required"),
});
