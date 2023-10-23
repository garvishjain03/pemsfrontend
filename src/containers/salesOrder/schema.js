import * as yup from "yup";

export const schema = yup.object().shape({
	customer: yup.string().required("This is required").nullable(),
	customerOrderNumber: yup.string().required("This is required"),
	paymentTerm: yup.string().required("This is required"),
	orderDate: yup.string().required("This is required").nullable(),
	array: yup.array().of(
		yup.object().shape({
			price: yup
				.number("This is required")
				.typeError("This is required")
				.required("This is required")
				.positive()
				.min(1, "Number need be greater than 0"),
			tctype: yup
				.string()
				.nullable()
				.when("itemType", {
					is: false,
					then: yup.string().required("This is required").nullable(),
				}),
			surge: yup
				.number()

				.when(["itemType", "characteristics"], {
					is: (itemType, characteristics) => {
						return (
							!itemType &&
							(characteristics === "High Surge" ||
								characteristics === "Fusible High Surge")
						);
					},
					then: yup
						.number()
						.moreThan(0.0, "should be greater than 0")
						.typeError("This is required")
						.required("This is required")
						.nullable(),
				})
				.nullable(),
			characteristics: yup
				.string()
				.nullable()
				.when("itemType", {
					is: false,
					then: yup.string().required("This is required").nullable(),
				}),
			coresize: yup
				.string()
				.nullable()
				.when("itemType", {
					is: false,
					then: yup.string().required("This is required").nullable(),
				}),
			leaddia: yup
				.string()
				.nullable()
				.when(["itemType", "shape"], {
					is: (itemType, shape) => !itemType && shape === "Standard Axial",
					then: yup.string().required("This is required").nullable(),
				}),
			leadlength: yup
				.string()
				.nullable()
				.when(["itemType", "shape"], {
					is: (itemType, shape) => !itemType && shape === "Standard Axial",
					then: yup.string().required("This is required").nullable(),
				}),
			formType: yup
				.string()
				.nullable()
				.when(["itemType", "shape"], {
					is: (itemType, shape) => !itemType && shape === "Formed",
					then: yup.string().required("This is required").nullable(),
				}),
			ohms: yup
				.number()
				.when("itemType", {
					is: false,
					then: yup
						.number()
						.typeError("This is required")
						.required("This is required")
						.nullable(),
				})
				.nullable(),
			unit: yup
				.string()
				.nullable()
				.when("itemType", {
					is: false,
					then: yup.string().required("This is required").nullable(),
				}),
			orderquantity: yup
				.number("This is required")
				.typeError("This is required")
				.required("This is required")
				.positive()
				.min(1, "Number need be greater than 0"),
			shape: yup
				.string()
				.nullable()
				.when("itemType", {
					is: false,
					then: yup.string().required("This is required").nullable(),
				}),
			tcr: yup
				.string()
				.nullable()
				.when("itemType", {
					is: false,
					then: yup.string().required("This is required").nullable(),
				}),
			tolerance: yup
				.string()
				.nullable()
				.when("itemType", {
					is: false,
					then: yup.string().required("This is required").nullable(),
				}),
			type: yup
				.string()
				.nullable()
				.when("itemType", {
					is: false,
					then: yup.string().required("This is required").nullable(),
				}),

			warehouse: yup.string().required("This is required").nullable(),
			wattage: yup
				.string()
				.nullable()
				.when("itemType", {
					is: false,
					then: yup.string().required("This is required").nullable(),
				}),
			partNo: yup
				.string()
				.nullable()
				.when("itemType", {
					is: true,
					then: yup.string().required("This is required").nullable(),
				}),
			orderDate: yup.string().required("This is required").nullable(),
		})
	),
});

export const updateItemSchema = yup.object().shape({
	surge: yup
		.number()
		.when(["itemType", "characteristics"], {
			is: (itemType, characteristics) => {
				return (
					!itemType &&
					(characteristics === "High Surge" ||
						characteristics === "Fusible High Surge")
				);
			},
			then: yup
				.number()
				.moreThan(0.0, "should be greater than 0")
				.typeError("This is required")
				.required("This is required")
				.nullable(),
		})
		.nullable(),
	price: yup
		.number("This is required")
		.typeError("This is required")
		.required("This is required")
		.positive()
		.min(1, "Number need be greater than 0"),
	tctype: yup
		.string()
		.nullable()
		.when("orderType", {
			is: "Manufacture",
			then: yup.string().required("This is required").nullable(),
		}),
	characteristics: yup
		.string()
		.nullable()
		.when("orderType", {
			is: "Manufacture",
			then: yup.string().required("This is required").nullable(),
		}),
	coresize: yup
		.string()
		.nullable()
		.when("orderType", {
			is: "Manufacture",
			then: yup.string().required("This is required").nullable(),
		}),
	leaddia: yup
		.string()
		.nullable()
		.when(["orderType", "shape"], {
			is: (orderType, shape) =>
				orderType === "Manufacture" && shape === "Standard Axial",
			then: yup.string().required("This is required").nullable(),
		}),
	leadlength: yup
		.string()
		.nullable()
		.when(["orderType", "shape"], {
			is: (orderType, shape) =>
				orderType === "Manufacture" && shape === "Standard Axial",
			then: yup.string().required("This is required").nullable(),
		}),
	formType: yup
		.string()
		.nullable()
		.when(["orderType", "shape"], {
			is: (orderType, shape) =>
				orderType === "Manufacture" && shape === "Formed",
			then: yup.string().required("This is required").nullable(),
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
	shape: yup
		.string()
		.nullable()
		.when("orderType", {
			is: "Manufacture",
			then: yup.string().required("This is required").nullable(),
		}),
	tcr: yup
		.string()
		.nullable()
		.when("orderType", {
			is: "Manufacture",
			then: yup.string().required("This is required").nullable(),
		}),
	tolerance: yup
		.string()
		.nullable()
		.when("orderType", {
			is: "Manufacture",
			then: yup.string().required("This is required").nullable(),
		}),
	type: yup
		.string()
		.nullable()
		.when("orderType", {
			is: "Manufacture",
			then: yup.string().required("This is required").nullable(),
		}),

	warehouse: yup.string().required("This is required").nullable(),
	wattage: yup
		.string()
		.nullable()
		.when("orderType", {
			is: "Manufacture",
			then: yup.string().required("This is required").nullable(),
		}),
	orderDate: yup.string().required("This is required").nullable(),
});
