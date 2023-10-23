import { Button, Container, Group, Modal, Text } from "@mantine/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import TableComponent from "../../component/table/table";
import DeactiveOrActiveUsersPopup from "../../containers/DeactiveOrActiveUsersPopup";
import DeleteUsersPopup from "../../containers/DeleteUsersPopup";
import UserForm from "../../containers/UserForm";
import { createSchema } from "../../containers/validationSchema";
import { genrateColumnConfig } from "../../helpers/columns";
import useFetch from "../../hooks/useFetch";
import { generateQuery } from "../../services/generateQuery";
import { createUser, getUsers } from "../../services/user";
import { getURL } from "../../utils/apiURL";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";

const Users = () => {
	const [showFilter, setShowFilter] = useState(true);
	const [opened, setOpened] = useState(false);
	const [openedDeactive, setOpenedDeactive] = useState(false);
	const [openedActive, setOpenedActive] = useState(false);
	const [openedDelete, setOpenedDelete] = useState(false);
	const [selected, setSelected] = useState([]);
	const [userImg, setUserImg] = useState("");
	const [changeBulkStatus] = useFetch([]);
	const [changeBulkDelete] = useFetch([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [createLoading, setCreateLoading] = useState(false);

	const setPagnation = useCallback(
		async ({ pageNumber, pageSize }) => {
			const limit = searchParams.get("limit")
				? parseInt(searchParams.get("limit"))
				: 50;

			let gen = generateQuery([
				{
					limit: parseInt(pageSize),
					offset: parseInt(limit * (pageNumber - 1)),
				},
			]);

			setSearchParams(gen);
		},
		[searchParams, setSearchParams]
	);

	const handleChangeBulkStatus = async (data, status) => {
		let userids = [];
		data.forEach(row => {
			userids.push(row.original.id);
		});
		if (userids.length > 0) {
			const res = await changeBulkStatus(
				getURL(`users/bulk/${status}/changestatus`),
				{
					method: "PUT",
					body: JSON.stringify({ userids: userids }),
				}
			);
			if (res.status === 200) {
				if (status === 0) {
					message.success({
						message: translate("DeactivateUsersSuccessMessage"),
					});
				} else if (status === 1) {
					message.success({
						message: translate("ActivateUsersSuccessMessage"),
					});
				}

				getUsers();
				setOpenedActive(false);
				setOpenedDeactive(false);
			}
		}
	};

	const handleChangeBulkDelete = async data => {
		let userids = [];
		data.forEach(row => {
			userids.push(row.original.id);
		});
		if (userids.length > 0) {
			const res = await changeBulkDelete(getURL("users/bulk/delete"), {
				method: "DELETE",
				body: JSON.stringify({ userids: userids }),
			});
			if (res.status === 200) {
				message.success({ message: translate("DeleteUsersSucessMessage") });
				getUsers();
				setOpenedDelete(false);
			}
		}
	};

	const {
		users = [],
		usersCount,
		loading,
		loadingPermission = true,
		permissionData = {},
	} = useSelector(state => ({
		users: state.user.users?.data,
		usersCount: state.user.users?.count,
		loading: state.user.loadingUsers,
		loadingPermission: state.permission?.loading,
		permissionData: state.permission?.permissions,
	}));

	useEffect(() => {
		getUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams.toString()]);

	const COLUMNS = useMemo(() => {
		if (loadingPermission) return [];
		return genrateColumnConfig(permissionData?.userPage?.Table1 || []);
	}, [loadingPermission, permissionData?.userPage?.Table1]);

	const tableData = useMemo(() => users, [users]);

	//form default values
	const defaultValues = useMemo(() => {
		return {
			email: "",
			username: "",
			password: "",
			role: "",
			defaultRole: "",
			lastName: "",
			firstName: "",
			phone: "",
		};
	}, []);

	const onSubmit = async value => {
		setCreateLoading(true);
		if (value.role?.find(role => role === value.defaultRole) === undefined)
			value.role.push(value.defaultRole);
		const res = await createUser({ ...value, userImg });
		if (res) setCreateLoading(false);
		if (res && res.status === 201) {
			message.success({ message: translate("CreateUserSuccessMessage") });
			getUsers();
			setOpened(false);
			setUserImg("");
		}
	};
	const buttonCofig = useMemo(() => {
		return permissionData?.userPage?.topButtons;
	}, [permissionData?.userPage?.topButtons]);

	const showbutton = btn => {
		const obj = buttonCofig?.find(item => item.value === btn);
		return obj ? obj.enable : false;
	};

	return (
		<Container fluid>
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
				title="Add user">
				<UserForm
					defaultValues={defaultValues}
					onSubmit={onSubmit}
					setUserImg={setUserImg}
					userImg={userImg}
					schema={createSchema}
					buttonLabel="Create User"
					loading={createLoading}
				/>
			</Modal>

			<Modal
				centered
				size="md"
				opened={openedDeactive}
				onClose={() => setOpenedDeactive(false) || selected.length === 0}>
				<DeactiveOrActiveUsersPopup
					selected={selected.filter(
						row =>
							row.original.userStatus === 1 &&
							row.original.username !== "superadmin"
					)}
					openedPopup={openedDeactive}
					setOpenedPopup={setOpenedDeactive}
					handleChangeBulkStatus={handleChangeBulkStatus}
					status={0}
					heading={translate("DeactivatePopupTitle")}
				/>
			</Modal>
			<Modal
				centered
				size="md"
				opened={openedActive}
				onClose={() => setOpenedActive(false) || selected.length === 0}>
				<DeactiveOrActiveUsersPopup
					selected={selected.filter(row => row.original.userStatus === 0)}
					openPopup={openedActive}
					setOpenedPopup={setOpenedActive}
					handleChangeBulkStatus={handleChangeBulkStatus}
					status={1}
					heading={translate("ActivatePopupTitle")}
				/>
			</Modal>
			<Modal
				centered
				size="md"
				opened={openedDelete}
				onClose={() => setOpenedDelete(false) || selected.length === 0}>
				<DeleteUsersPopup
					selected={selected}
					setOpenedDelete={setOpenedDelete}
					handleChangeBulkDelete={handleChangeBulkDelete}
				/>
			</Modal>
			<Group position="apart">
				<Text>Users</Text>
				<Group position="right" spacing={4}>
					{showbutton("activateAllButton") && (
						<Button
							color="green"
							disabled={
								selected.filter(row => row.original.userStatus === 0).length ===
								0
							}
							onClick={() => setOpenedActive(true)}>
							Activate
						</Button>
					)}
					{showbutton("deactivateAllButton") && (
						<Button
							color="red"
							disabled={
								selected.filter(
									row =>
										row.original.userStatus === 1 &&
										row.original.username !== "superadmin"
								).length === 0
							}
							onClick={() => setOpenedDeactive(true)}>
							Deactivate
						</Button>
					)}
					{showbutton("deleteAllButton") && (
						<Button
							color="red"
							disabled={selected.length === 0}
							onClick={() => setOpenedDelete(true)}>
							Delete All
						</Button>
					)}
					{showbutton("addButton") && (
						<Button onClick={() => setOpened(true)}>Add User</Button>
					)}
					{showbutton("hideFiltersButton") && (
						<Button
							onClick={() => {
								setShowFilter(!showFilter);
							}}>
							{showFilter ? "Hide Filters" : "Show Filters"}
						</Button>
					)}
				</Group>
			</Group>

			<TableComponent
				Data={tableData}
				Columns={COLUMNS}
				sort={true}
				globleSearch={true}
				setSelected={setSelected}
				loading={loading}
				showFilter={showFilter}
				setPagnation={setPagnation}
				dataCount={usersCount - 1}
			/>
		</Container>
	);
};
export default Users;
