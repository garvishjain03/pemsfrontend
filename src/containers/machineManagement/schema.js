import * as yup from "yup";

export const schema = yup.object().shape({
	name: yup.string().when("type", {
		is: val => val !== "Coating",
		then: yup
			.string()
			.matches(/\d+$/, "Name must end with at least 1 number")
			.required("Name required"),
		otherwise: yup.string().required("Name required"),
	}),
	type: yup.string().required("value required"),
	coresize: yup.array().of(yup.string()).required("coresize required").min(1),
});
