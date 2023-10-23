import { AiFillEdit } from "react-icons/ai";
import React, { useMemo, useState } from "react";
import { ActionIcon, LoadingOverlay, Modal } from "@mantine/core";
import UserForm from "../containers/UserForm";
import { getUser, getUsers } from "../services/user";
import { updateUser } from "../services/user";
import { showPassword } from "../services/auth";
import { updateSchema } from "../containers/validationSchema";
import Cookie from "js-cookie";
import useFetch from "../hooks/useFetch";
import { getURL } from "../utils/apiURL";
import { translate } from "../utils/translate";
import { message } from "../utils/message";

const Edit = ({ defaultValues, id }) => {
	const [opened, setOpened] = useState(false);
	const [userImg, setUserImg] = useState("");
	const [imageurl, setImageUrl] = useState("");
	const [password, setPassword] = useState(null);
	const [removeProfilePic] = useFetch();
	const [createLoading, setCreateLoading] = useState(false);

	const roles = useMemo(() => {
		return Array.isArray(defaultValues.userroles)
			? defaultValues.userroles.map(item => item.roleid)
			: [];
	}, [defaultValues.userroles]);

	const showUserPassword = async id => {
		setPassword(null);
		const password = await showPassword(id);

		setPassword(password.slice(20));
	};

	const defaultValue = useMemo(() => {
		return {
			username: defaultValues.username,
			userStatus: defaultValues.userStatus,
			role: roles,
			email: defaultValues.email,
			defaultRole: defaultValues.defaultRole,
			lastName: defaultValues.lastName,
			firstName: defaultValues.firstName,
			phone: defaultValues.phone,
			password: password,
		};
	}, [defaultValues, password, roles]);

	const onSubmit = async value => {
		setCreateLoading(true);
		//pushing default role into role  if roles not selected
		if (value.role?.find(role => role === value.defaultRole) === undefined)
			value.role.push(value.defaultRole);
		// removeProfilePic
		if (!imageurl && defaultValues.user_profile.length > 0) {
			const resProfile = await removeProfilePic(
				getURL(`users/profile-pic/${id}`),
				{
					method: "DELETE",
				}
			);
		}
		const res = await updateUser({ ...value, userImg }, id);
		if (res) setCreateLoading(false);
		if (res && res.status === 404) {
			const _data = await res.json();
			if (_data.code === "0009") {
				message.error({ message: translate("IdnotFoundErrorMessage") });
			}
		}
		if (res && res.status === 200) {
			message.success({ message: translate("UpdateUserSuccessMessage") });
			getUsers();
			setOpened(false);
			setUserImg("");
			if (id === Cookie.get("USER_ID")) {
				getUser(id);
			}
		}
	};

	return (
		<>
			{!password ? (
				<LoadingOverlay visible={opened} />
			) : (
				<Modal
					radius={8}
					padding={0}
					styles={{
						close: {
							color: "#ffff",
							"&:hover": {
								color: "red",
							},
						},
						title: { color: "#ffff", fontWeight: "600" },
						header: {
							padding: "20px",
							backgroundColor: "#228BE6",
							marginRight: "0px",
							borderRadius: "8px 8px 0px 0px",
						},
					}}
					size="xl"
					opened={opened}
					onClose={() => setOpened(false)}
					title="Update User">
					<UserForm
						defaultValues={defaultValue}
						onSubmit={onSubmit}
						setUserImg={setUserImg}
						schema={updateSchema}
						userImg={userImg}
						imageurl={imageurl}
						setImageUrl={setImageUrl}
						buttonLabel="Update User"
						loading={createLoading}
					/>
				</Modal>
			)}
			<ActionIcon
				color="blue"
				variant="transparent"
				onClick={() => {
					showUserPassword(id);
					if (
						Array.isArray(defaultValues.user_profile) &&
						defaultValues.user_profile.length > 0
					) {
						setImageUrl(
							`data:${defaultValues.user_profile[0]?.blob_mimetype};base64,${defaultValues.user_profile[0]?.blob_data}`
						);
					}
					setOpened(true);
				}}>
				<AiFillEdit size={22} />
			</ActionIcon>
		</>
	);
};

export default Edit;
