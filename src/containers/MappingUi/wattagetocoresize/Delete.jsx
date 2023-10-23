import React, { useState } from "react";
import { ActionIcon, Modal } from "@mantine/core";
import { MdDelete } from "react-icons/md";
import useFetch from "../../../hooks/useFetch";
import { getURL } from "../../../utils/apiURL";
import { message } from "../../../utils/message";
import { translate } from "../../../utils/translate";
import { getWattageToCoresizes } from "../../../services/contextGetCalls";
import DeleteMappingUiPopup from "./DeleteMappingUiPopup";

const Delete = ({ row }) => {
	const [openDelete, setOpenDelete] = useState(false);
	const [deleteContext, deletingContext] = useFetch();

	const onDelete = async id => {
		const res = await deleteContext(getURL(`wattage-to-coresizes/${id}`), {
			method: "DELETE",
		});
		if (res && res.status === 200) {
			message.success({
				message: translate(`DeleteWattageToCoresizeSuccessMessage`),
			});
			getWattageToCoresizes();
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
				<DeleteMappingUiPopup
					row={row}
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
