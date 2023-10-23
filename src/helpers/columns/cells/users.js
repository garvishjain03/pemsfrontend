import { Avatar, Badge, Center, Group, Menu } from "@mantine/core";
import Delete from "../../../component/Delete";
import Edit from "../../../component/Edit";
import Status from "../../../component/Status";
import { badgeRolesColor } from "../../../configs/badgeRoles";

export const usersProfileCell = ({ row }) => {
	return (
		<Avatar
			radius="xl"
			size={30}
			src={`data:${
				row.original.user_profile[0]?.blob_mimetype
					? row.original.user_profile[0]?.blob_mimetype
					: null
			};base64,${
				row.original.user_profile[0]?.blob_data
					? row.original.user_profile[0]?.blob_data
					: null
			}`}
		/>
	);
};

export const usersRolesCell = ({ row }) => {
	const _roles = row.original.userroles;

	return (
		<Group
			direction="row"
			style={{ maxWidth: "250px", minWidth: "200px", gap: 0 }}>
			<span
				style={{
					maxHeight: "30px",
					maxWidth: "163px",
					overflow: "hidden",
					display: "inline",
				}}>
				{_roles.map(role => (
					<Badge
						key={role.allroles.title}
						style={{ display: "inline" }}
						color={badgeRolesColor(role.allroles.slug)}>
						{role.allroles.title}
					</Badge>
				))}
			</span>
			<span style={{ display: "inline" }}>
				{_roles.length > 1 ? (
					<Menu trigger="hover">
						{_roles.map((role, idx) => (
							<Menu.Item key={idx}>
								<Badge key={idx} color={badgeRolesColor(role.allroles.slug)}>
									{role.allroles.title}
								</Badge>
							</Menu.Item>
						))}
					</Menu>
				) : null}
			</span>
		</Group>
	);
};

export const usersDefaultRolesCell = ({ row }) => {
	const _default = row.original.defaultRole;
	const _roles = row.original.userroles;

	const _defaultRole = _roles.find(({ roleid }) => roleid === _default);
	const _title = _defaultRole?.allroles?.title;

	return (
		<Badge color={badgeRolesColor(_defaultRole?.allroles?.slug)}>
			{_title}
		</Badge>
	);
};

export const usersActionsCell = ({ row, column }) => {
	return (
		<Center>
			<Group spacing={4} style={{ width: "60px" }}>
				{column.showCellElements?.edit ? (
					<Edit defaultValues={row.original} id={row.original?.id} />
				) : null}
				{column.showCellElements?.delete ? <Delete row={row} /> : null}
			</Group>
		</Center>
	);
};

export const usersStatusCell = ({ row }) => {
	return (
		<Center>
			<Status
				userStatus={row.original.userStatus}
				id={row.original?.id}
				row={row}
			/>
		</Center>
	);
};
