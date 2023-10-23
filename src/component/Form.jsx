import React from "react";
import { Controller } from "react-hook-form";
import { InputWrapper, Group, SimpleGrid } from "@mantine/core";

const Form = ({ children, form, onSubmit }) => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = form;

	const createElement = child => {
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

	const childRenderFn = children => {
		return Array.isArray(children)
			? children?.map((child, index) => {
					if (Array.isArray(child)) return childRenderFn(child);
					if (child?.props?.wrapped)
						return (
							<div
								key={index}
								style={
									child?.props?.shadow
										? {
												marginBottom: "15px",
												paddingLeft: "20px",
												paddingRight: "20px",
												boxShadow:
													"rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 10%) 0px 1px 2px",
												borderRadius: "10px",
												background: "#fff",
										  }
										: {}
								}>
								{childRenderFn([child.props.children])}
							</div>
						);
					if (child?.props?.name)
						return <div key={child?.props?.name}>{createElement(child)}</div>;
					else if (child?.props?.group) {
						return (
							<Group
								spacing="sm"
								align="flex-start"
								key={index}
								grow={child?.props?.nowrap ? false : true}
								direction="row"
								noWrap={child?.props?.nowrap ? true : false}
								position={child?.props?.position ? "right" : ""}
								style={
									child?.props?.shadow
										? {
												marginBottom: "10px",
												padding: "10px",
												boxShadow:
													"rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 10%) 0px 1px 2px",
												borderRadius: "5px",
												background: "#fff",
										  }
										: {}
								}>
								{child?.props?.children?.map((c, index) => {
									if (c?.props?.wrapped) {
										return (
											<div
												key={index}
												style={
													child?.props?.shadow
														? {
																marginBottom: "15px",
																paddingLeft: "20px",
																paddingRight: "20px",
																boxShadow:
																	"rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 10%) 0px 1px 2px",
																borderRadius: "10px",
																background: "#fff",
														  }
														: {
																display: "flex",
																justifyContent: c?.props?.position
																	? "right"
																	: "",
														  }
												}>
												{childRenderFn([c.props.children])}
											</div>
										);
									} else if (c?.props?.name)

										return <div key={c?.props?.name}>{createElement(c)}</div>;

										

									else return c;
								})}
							</Group>
						);
					} else if (child?.props?.grid) {
						return (
							<SimpleGrid cols={child?.props?.grid}>
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
												{createElement(c)}
											</div>
										);
									} else return c;
								})}
							</SimpleGrid>
						);
					} else return child;
			  })
			: null;
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>{childRenderFn(children)}</form>
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

const obj = [
	{
		id: "103d2be3-edf3-4ee6-8896-5574b6d8a22c",
		orderid: "9793cd8d-a369-40ac-8c88-dcea6fa2ad8c",
		itemid: "ea2d87ae-2ee2-4a1d-a830-12f788770364",
		userid: "400b1a7c-d1b6-4f00-b933-54bb9dd8e3cb",
		comments: "yhbtfnjh",
		createdAt: "2022-08-25T11:26:09.599Z",
		updatedAt: "2022-08-25T11:26:09.599Z",
		userdetails: {
			username: "harish",
			defaultRole: "3f45b9f1-aa83-4ec7-8874-162062662ea6",
		},
	},
	{
		id: "103d2be3-edf3-4ee6-8896-5574b6d8a22c",
		orderid: "9793cd8d-a369-40ac-8c88-dcea6fa2ad8c",
		itemid: "ea2d87ae-2ee2-4a1d-a830-12f788770364",
		userid: "400b1a7c-d1b6-4f00-b933-54bb9dd8e3cb",
		comments: "yhbtfnjh",
		createdAt: "2022-08-25T11:26:09.599Z",
		updatedAt: "2022-08-25T11:26:09.599Z",
		userdetails: {
			username: "satish",
			defaultRole: "3f45b9f1-aa83-4ec7-8874-162062662ea6",
		},
	},
	{
		id: "103d2be3-edf3-4ee6-8896-5574b6d8a22c",
		orderid: "9793cd8d-a369-40ac-8c88-dcea6fa2ad8c",
		itemid: "ea2d87ae-2ee2-4a1d-a830-12f788770364",
		userid: "400b1a7c-d1b6-4f00-b933-54bb9dd8e3cb",
		comments: "yhbtfnjh",
		createdAt: "2022-08-25T11:26:09.599Z",
		updatedAt: "2022-08-25T11:26:09.599Z",
		userdetails: {
			username: "harish",
			defaultRole: "3f45b9f1-aa83-4ec7-8874-162062662ea6",
		},
	},
	{
		id: "103d2be3-edf3-4ee6-8896-5574b6d8a22c",
		orderid: "9793cd8d-a369-40ac-8c88-dcea6fa2ad8c",
		itemid: "ea2d87ae-2ee2-4a1d-a830-12f788770364",
		userid: "400b1a7c-d1b6-4f00-b933-54bb9dd8e3cb",
		comments: "yhbtfnjh",
		createdAt: "2022-08-25T11:26:09.599Z",
		updatedAt: "2022-08-25T11:26:09.599Z",
		userdetails: {
			username: "harish",
			defaultRole: "3f45b9f1-aa83-4ec7-8874-162062662ea6",
		},
	},
];

const Obj1 = [
	{
		name: "harish",
		role: "ddd",
		comments: [
			{
				comment: "1st comment",
			},
			{
				comment: "2t comment",
			},
			{
				comment: "3t comment",
			},
			{
				comment: "4t comment",
			},
		],
	},
	{
		name: "satish",
		role: "ddd",
		comments: [
			{
				comment: "1st comment",
			},
			{
				comment: "2t comment",
			},
			{
				comment: "3t comment",
			},
			{
				comment: "4t comment",
			},
		],
	},
];
