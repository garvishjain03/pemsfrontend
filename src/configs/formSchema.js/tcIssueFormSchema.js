import * as yup from "yup";
export const filmResistorSchema = (edit, status) =>
	yup.object().shape({
		basicValue: yup.string().required("basic value required"),
		grams: yup.number().required("grams required"),
		quantity: yup.number().required("quantity required"),
		remark:
			edit && status !== "PENDING"
				? yup.string().required("remark required")
				: yup.string(),
	});
export const wireWoundResistorSchema = (edit, status) =>
	yup.object().shape({
		windingType: yup.string().required("winding type required"),
		windingWire: yup.string().required("winding wire required"),
		wireDia: yup.number().required("wire dia required"),
		quantity: yup.number().required("quantity required"),
		remark:
			edit && status !== "PENDING"
				? yup.string().required("remark required")
				: yup.string(),
	});
