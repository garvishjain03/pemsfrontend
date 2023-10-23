import React, { useEffect, useMemo } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../component/Form";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

import {
	Text,
	TextInput,
	PasswordInput,
	Button,
	Center,
	Select,
	MultiSelect,
	Container,
	Group,
	Image,
	Badge,
} from "@mantine/core";
import { useSelector } from "react-redux";
import { badgeRolesColor } from "../configs/badgeRoles";

const UserForm = ({
	defaultValues,
	onSubmit,
	setUserImg,
	userImg,
	imageurl,
	setImageUrl,
	schema,
	buttonLabel,
	loading,
}) => {
	const form = useForm({ resolver: yupResolver(schema), defaultValues });
	const { control, getValues, setValue } = form;

	const allRoles = useSelector(state => state.user.data);

	const dropDownDefaultRoleData = useMemo(() => {
		if (!Array.isArray(allRoles)) return [];
		return allRoles.map(item => {
			return { value: item.id, label: item.title };
		});
	}, [allRoles]);

	const dropDownRolesData = useMemo(() => {
		if (!Array.isArray(allRoles)) return [];
		return allRoles?.map(item => {
			return {
				value: item.id,
				label: (
					<Badge key={item.id} color={badgeRolesColor(item.slug)}>
						{item.title}
					</Badge>
				),
			};
		});
	}, [allRoles]);

	const defaultRole = useWatch({
		control,
		name: "defaultRole",
	});

	useEffect(() => {
		if (!defaultRole) return;

		let roles = [];
		if (getValues) roles = getValues("role") || [];
		const isDefaultRoleExist = roles.some(role => role === defaultRole);

		if (isDefaultRoleExist) return;
		if (setValue) setValue("role", [defaultRole, ...roles]);
	}, [defaultRole, getValues, setValue]);

	return (
		<Container fluid px={24} py={12}>
			<Form form={form} onSubmit={onSubmit}>
				<Form.Group group>
					<Form.Item
						name="firstName"
						label="First Name"
						required={true}
						mb="sm">
						<TextInput type="text" placeholder="Enter First Name" />
					</Form.Item>

					<Form.Item name="lastName" label="Last Name" required={false} mb="sm">
						<TextInput type="text" placeholder="Enter Last Name" />
					</Form.Item>
				</Form.Group>

				<Form.Group group>
					<Form.Item name="username" label="Username" required={true} mb="sm">
						<TextInput
							type="text"
							placeholder="Enter Username"
							disabled={defaultValues.username}
						/>
					</Form.Item>

					<Form.Item name="password" label="Password" mb="sm" required={true}>
						<PasswordInput placeholder="Enter Password" />
					</Form.Item>
				</Form.Group>

				<Form.Group group>
					<Form.Item name="phone" label="Phone Number" required={false} mb="sm">
						<TextInput type="text" placeholder="Enter PhoneNumber" />
					</Form.Item>

					<Form.Item name="email" label="Email" required={false} mb="sm">
						<TextInput type="text" placeholder="Enter Email" />
					</Form.Item>
				</Form.Group>

				<Form.Group group>
					<Form.Item
						name="defaultRole"
						label="defaultRole"
						mb="sm"
						required={true}>
						<Select
							disabled={defaultValues.username === "superadmin"}
							rolesabc="abc"
							searchable
							allowDeselect={true}
							placeholder="Pick one"
							data={dropDownDefaultRoleData}
						/>
					</Form.Item>

					<Form.Item name="role" label="Role" mb="sm" required={true}>
						<MultiSelect
							disabled={!defaultRole}
							placeholder="Pick"
							data={dropDownRolesData}
						/>
					</Form.Item>
				</Form.Group>
				<Center style={{ position: "relative" }}>
					<Dropzone
						p={10}
						style={{ minWidth: "530px" }}
						onDrop={files => {
							setUserImg(files);
							setImageUrl && setImageUrl("");
						}}
						onReject={files => console.warn("rejected files", files)}
						maxSize={3 * 1024 ** 2}
						accept={IMAGE_MIME_TYPE}>
						{() => (
							<Group position="center">
								{(Array.isArray(userImg) && userImg.length > 0) || imageurl ? (
									<Image
										height={100}
										width={80}
										src={imageurl ? imageurl : URL.createObjectURL(userImg[0])}
									/>
								) : (
									<div>
										<Text size="xl" color="dimmed" inline>
											Drag images here or click to select files
										</Text>
										<Text size="sm" color="dimmed" inline mt={7}>
											Attach file should not exceed 5mb
										</Text>
									</div>
								)}
							</Group>
						)}
					</Dropzone>
					{(userImg.length > 0 || imageurl) && (
						<AiFillCloseCircle
							style={{ position: "absolute", top: "4px", right: "109px" }}
							size={24}
							color="red"
							onClick={e => {
								e.preventDefault();
								setUserImg("");
								setImageUrl && setImageUrl("");
							}}
						/>
					)}
				</Center>

				<Center mt={24}>
					<Button type="submit" loading={loading}>
						{buttonLabel}
					</Button>
				</Center>
			</Form>
		</Container>
	);
};

export default UserForm;
