import React, { useState } from "react";
import { ActionIcon, Modal } from "@mantine/core";
import { MdDelete } from "react-icons/md";
import useFetch from "../../hooks/useFetch";
import { getURL } from "../../utils/apiURL";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";

import { getMachine } from "../../services/contextGetCalls";
import DeleteCustomerPopup from "./DeleteCustomerPopup";

const Delete = ({ row, id, path }) => {
	const [openDelete, setOpenDelete] = useState(false);
	const [deleteContext, deletingContext] = useFetch();

	const onDelete = async () => {
		const res = await deleteContext(getURL(`${path}/${id}`), {
			method: "DELETE",
		});
		if (res && res.status === 200) {
			message.success({
				message: translate(`Delete${path}SuccessMessage`),
			});
			getMachine();
			setOpenDelete(false);
		}
	};

	return (
		<>
			<Modal
				centered
				size="md"
				opened={openDelete}
				onClose={() => setOpenDelete(false)}>
				<DeleteCustomerPopup
					row={row}
					title={"Machine"}
					setOpenedDelete={setOpenDelete}
					onDelete={onDelete}
				/>
			</Modal>

			<ActionIcon
				color="red"
				loading={deletingContext}
				variant="transparent"
				onClick={() => setOpenDelete(true)}>
				<MdDelete size={22} />
			</ActionIcon>
		</>
	);
};

export default Delete;
