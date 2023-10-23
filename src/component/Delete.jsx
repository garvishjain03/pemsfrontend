import { ActionIcon, Modal } from "@mantine/core";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { getUsers } from "../services/user";
import { getURL } from "../utils/apiURL";
import { message } from "../utils/message";
import { translate } from "../utils/translate";
import DeleteUserPopup from "./DeleteUserPopup";

const Delete = ({ row }) => {
	const [openDelete, setOpenDelete] = useState(false);
	const [deleteUser, deletingUser] = useFetch();
	const user = useSelector(state => state.user.user);

	const onDelete = async id => {
		const res = await deleteUser(getURL(`users/${id}`), {
			method: "DELETE",
		});
		if (res && res.status === 200) {
			message.success({ message: translate("DeleteUserSuccessMessage") });
			getUsers();
		}
	};

	return (
		<>
			<Modal
				centered
				size="md"
				opened={openDelete}
				onClose={() => setOpenDelete(false)}>
				<DeleteUserPopup
					row={row}
					setOpenedDelete={setOpenDelete}
					onDelete={onDelete}
				/>
			</Modal>

			<ActionIcon
				color="red"
				loading={deletingUser}
				variant="transparent"
				disabled={row.original?.id === user.id}
				onClick={() => setOpenDelete(true)}>
				<MdDelete size={22} />
			</ActionIcon>
		</>
	);
};

export default Delete;
