import { InputWrapper, SimpleGrid } from "@mantine/core";
import React from "react";
import { Controller } from "react-hook-form";

const createElement = (child, control, errors) => {
	let ErrorMessage = "";
	if (child?.props?.name?.includes(".")) {
		const splitName = child?.props?.name?.split(".");
		ErrorMessage = errors[splitName[0]]?.[splitName[1]]?.[splitName[2]]
			? errors[splitName[0]][splitName[1]][splitName[2]].message
			: "";
	} else {
		ErrorMessage = errors[child?.props?.name]?.message;
	}

	return React.createElement(child.type, {
		...child.props,
		control,
		error: ErrorMessage,
	});
};

const childRenderFn = (children, form) => {
	const {
		control,
		formState: { errors },
	} = form;

	return Array.isArray(children)
		? children?.map((child, index) => {
				if (Array.isArray(child)) return childRenderFn(child, form);

				if (child?.props?.name) {
					return (
						<div key={child?.props?.name}>
							{createElement(child, control, errors)}
						</div>
					);
				} else if (child?.props?.grid) {
					return (
						<SimpleGrid key={index} cols={child?.props?.grid}>
							{child?.props?.children?.map(c => {
								if (c?.props?.name) {
									return (
										<div
											style={
												c?.props.span && {
													gridColumn: `span ${c?.props.span}`,
												}
											}
											key={c?.props?.name}>
											{createElement(c, control, errors)}
										</div>
									);
								} else {
									return c;
								}
							})}
						</SimpleGrid>
					);
				} else {
					return child;
				}
		  })
		: null;
};

const Form = ({ children, form, onSubmit }) => {
	const { handleSubmit } = form;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{childRenderFn(children, form)}
		</form>
	);
};

const Item = ({
	children,
	control,
	error,
	name,
	label,
	mb,
	style,
	required = false,
	customError,
}) => {
	if (error && customError) {
		error = customError;
	}
	return (
		<InputWrapper
			label={label}
			error={error}
			mb={mb}
			required={required}
			style={style ? style : {}}>
			<Controller
				name={name}
				control={control}
				render={({ field }) => {
					return React.createElement(children.type, {
						...field,
						...children.props,
					});
				}}
			/>
		</InputWrapper>
	);
};

const Items = ({ children }) => children;

Form.Item = Item;
Form.Group = Items;

export default Form;
