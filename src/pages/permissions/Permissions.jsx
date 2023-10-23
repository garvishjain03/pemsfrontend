import {
	Button,
	Center,
	Checkbox,
	Container,
	Group,
	LoadingOverlay,
	Select,
	Switch,
	Text,
	Title,
} from "@mantine/core";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import ContextSettingTable from "../../containers/contextMenu/SettingTable/ContextSettingTable";
import { getAllRole } from "../../services/role";
import {
	getPermissions,
	getSystemUserPermissions,
} from "../../services/permission";
import useFetch from "../../hooks/useFetch";
import { getURL } from "../../utils/apiURL";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";

const Permissions = () => {
	const { permissionData = {}, loading } = useSelector(state => ({
		permissionData: state.permission?.systemUserPermissions,
		loading: state.permission?.loadingsystempermission,
	}));
	const [updatePermission] = useFetch();
	const [role, setRole] = useState("SYSTEMUSER");
	const [page, setPage] = useState("userPage");
	const [changeTableData, setChangeTableData] = useState([]);
	const [checkedButton, setCheckedButton] = useState({});
	const [switchCheck, setSwitchCheck] = useState(false);
	const [roleId, setRoleId] = useState("");

	const setCheckedButtonFn = (key, value) =>
		setCheckedButton(crr => {
			const _curr = { ...crr };
			_curr[key] = value;
			return _curr;
		});
	// const setCheckedButtonFn = (key, value) =>
	// setCheckedButton(crr => {
	// 	const _curr = { ...crr };
	// 	_curr[key] = value;
	// 	return _curr;
	// });

	const allRoles = useSelector(state => state.user.data);
	const dropDownRolesData = useMemo(() => {
		if (!Array.isArray(allRoles)) return [];
		return allRoles?.map(item => {
			return { value: item.slug, label: item.title };
		});
	}, [allRoles]);

	useEffect(() => {
		getAllRole();
	}, []);

	useEffect(() => {
		const slugToId = allRoles?.find(item => item.slug === role);
		if (slugToId) {
			setRoleId(slugToId.id);

			getSystemUserPermissions(slugToId.id);
		}
	}, [role, allRoles]);

	const applySettingsHandler = async () => {
		let tempPage = permissionData[page];
		const topButtonkeys = Object.keys(checkedButton);
		if (changeTableData) {
			tempPage.Table1 = changeTableData;
		}
		if (topButtonkeys) {
			tempPage.topButtons?.forEach(element => {
				if (topButtonkeys?.includes(element.value)) {
					element.enable = checkedButton[element.value];
				}
			});
		}
		const res = await updatePermission(getURL("permission/roles"), {
			method: "PUT",
			body: JSON.stringify({
				roleid: roleId,
				app_config: {
					[page]: tempPage,
				},
			}),
		});
		if (res && res.status === 200) {
			getPermissions(localStorage.getItem("active_roleid"));
			getSystemUserPermissions(roleId);
			setCheckedButton({});
			message.success({
				message: translate("Permission Updated Successfully"),
			});
		}
	};

	const setPageVisible = async value => {
		let tempPage = permissionData[page];
		tempPage.pageVisible = value;
		const res = await updatePermission(getURL("permission/roles"), {
			method: "PUT",
			body: JSON.stringify({
				roleid: roleId,
				app_config: {
					[page]: tempPage,
				},
			}),
		});
		if (res && res.status === 200) {
			getSystemUserPermissions(roleId);
			getPermissions(localStorage.getItem("active_roleid"));
			message.success({
				message: translate("Permission Updated Successfully"),
			});
			setSwitchCheck(false);
		}
	};

	useEffect(() => {
		if (!loading) setSwitchCheck(permissionData[page]?.pageVisible);
	}, [page, role, loading]);

	if (loading) return <LoadingOverlay visible={loading} />;

	return (
		<Container fluid>
			<Group position="apart">
				<Group>
					<Text>Pages:</Text>
					<Select
						searchable
						value={page}
						placeholder="Pick one"
						data={Object.keys(permissionData)}
						onChange={value => setPage(value)}
					/>
				</Group>
				<Group>
					<Text>Roles:</Text>
					<Select
						searchable
						value={role}
						onChange={val => setRole(val)}
						placeholder="Pick one"
						data={dropDownRolesData || []}
					/>
				</Group>
			</Group>
			<Group position="apart" mt={20}>
				<Switch
					checked={switchCheck}
					defaultChecked={permissionData[page]?.pageVisible}
					label="Allow user to view this page"
					size="md"
					onChange={event => {
						setSwitchCheck(event.currentTarget.checked);
						setPageVisible(event.currentTarget.checked);
					}}
				/>
				<Button
					onClick={applySettingsHandler}
					style={{ display: switchCheck ? "block" : "none" }}>
					Apply
				</Button>
			</Group>

			{role && page && permissionData[page] && switchCheck ? (
				<>
					<ContextSettingTable
						role={role}
						page={page}
						tableData={permissionData[page]?.Table1 || []}
						setChangeTableData={setChangeTableData}
					/>
					<Title order={4} mt="lg">
						Buttons
					</Title>
					{permissionData[page]?.topButtons ? (
						<Group mt={20} direction="row">
							{permissionData[page]?.topButtons.map(item => {
								return (
									<Checkbox
										checked={checkedButton[item.value]}
										defaultChecked={item.enable}
										key={item.value}
										label={item.title}
										onChange={event =>
											setCheckedButtonFn(
												item.value,
												event.currentTarget.checked
											)
										}
									/>
								);
							})}
						</Group>
					) : null}
				</>
			) : (
				<Center style={{ marginTop: 40 }}>
					<Text>
						Currently {role.toLowerCase()} don't have permission to view{" "}
						{page.toLowerCase()}.
						<br />
						To change setting{" "}
						<strong>click on above "Allow user to view this page"</strong>
					</Text>
				</Center>
			)}
		</Container>
	);
};

export default Permissions;
