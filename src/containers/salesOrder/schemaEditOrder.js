import * as yup from "yup";

export const schema = yup.object().shape({
	customer: yup.string().required("This is required").nullable(),
	customerOrderNumber: yup.string().required("This is required"),
	paymentTerm: yup.string().required("This is required"),
	orderDate: yup.string().required("This is required").nullable(),
});

export const updateItemSchema = yup.object().shape({
	// surge: yup.number().when(["orderType", "characteristics"], {
	// 	is: (orderType, characteristics) =>
	// 		orderType === "Manufacture" && characteristics === "High Surge",
	// 	then: yup
	// 		.number()
	// 		.typeError("This is required")
	// 		.required("This is required")
	// 		.nullable(),
	// }),
	price: yup
		.number("This is required")
		.typeError("This is required")
		.required("This is required")
		.positive()
		.min(1, "Number need be greater than 0"),
	tctype: yup.string().nullable().when("orderType", {
		is: "Manufacture",
		then: yup.string().nullable(),
	}),
	characteristics: yup.string().nullable().when("orderType", {
		is: "Manufacture",
		then: yup.string().nullable(),
	}),
	coresize: yup.string().nullable().when("orderType", {
		is: "Manufacture",
		then: yup.string().nullable(),
	}),
	leaddia: yup
		.string()
		.nullable()
		.when(["orderType", "shape"], {
			is: (orderType, shape) =>
				orderType === "Manufacture" && shape === "Standard Axial",
			then: yup.string().nullable(),
		}),
	leadlength: yup
		.string()
		.nullable()
		.when(["orderType", "shape"], {
			is: (orderType, shape) =>
				orderType === "Manufacture" && shape === "Standard Axial",
			then: yup.string().nullable(),
		}),
	formType: yup
		.string()
		.nullable()
		.when(["orderType", "shape"], {
			is: (orderType, shape) =>
				orderType === "Manufacture" && shape === "Formed",
			then: yup.string().nullable(),
		}),
	// ohms: yup.number().when("orderType", {
	// 	is: "Manufacture",
	// 	then: yup
	// 		.number()
	// 		.typeError("This is required")
	// 		.required("This is required")
	// 		.nullable(),
	// }),
	orderquantity: yup
		.number("This is required")
		.typeError("This is required")
		.required("This is required"),
	shape: yup.string().nullable().when("orderType", {
		is: "Manufacture",
		then: yup.string().nullable(),
	}),
	tcr: yup.string().nullable().when("orderType", {
		is: "Manufacture",
		then: yup.string().nullable(),
	}),
	tolerance: yup.string().nullable().when("orderType", {
		is: "Manufacture",
		then: yup.string().nullable(),
	}),
	type: yup.string().nullable().when("orderType", {
		is: "Manufacture",
		then: yup.string().nullable(),
	}),

	warehouse: yup.string().nullable(),
	wattage: yup.string().nullable().when("orderType", {
		is: "Manufacture",
		then: yup.string().nullable(),
	}),
	orderDate: yup.string().nullable(),
});
