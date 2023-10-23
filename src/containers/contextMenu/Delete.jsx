import React, { useState } from "react";
import { ActionIcon, Modal } from "@mantine/core";
import { MdDelete } from "react-icons/md";
import useFetch from "../../hooks/useFetch";
import { getURL } from "../../utils/apiURL";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";

import {
	getCoreSizes,
	getFormTypes,
	getHoldReasons,
	getLeadDias,
	getLeadLengths,
	getMpnSuffixLists,
	getShapes,
	getTcrs,
	getTolerances,
	getWareHouse,
	getCharacteristics,
	getDelayReasons,
	getTypes,
	getWattages,
	getCustomers,
} from "../../services/contextGetCalls";

import DeleteContextPopup from "./DeleteContextPopup";

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
			switch (path) {
				case "delayreasons":
					getDelayReasons();
					break;

				case "characteristics":
					getCharacteristics();
					break;

				case "types":
					getTypes();
					break;
				case "wattages":
					getWattages();
					break;
				case "coresizes":
					getCoreSizes();
					break;

				case "formtypes":
					getFormTypes();
					break;

				case "holdreasons":
					getHoldReasons();
					break;

				case "leaddias":
					getLeadDias();
					break;

				case "leadlengths":
					getLeadLengths();
					break;

				case "mpnsuffixlists":
					getMpnSuffixLists();
					break;

				case "shapes":
					getShapes();
					break;

				case "tcrs":
					getTcrs();
					break;

				case "tolerances":
					getTolerances();
					break;

				case "warehouse":
					getWareHouse();
					break;
				case "customer":
					setOpenDelete(false);
					getCustomers();

					break;

				default:
					break;
			}
		}
	};

	return (
		<>
			<Modal
				centered
				size="md"
				opened={openDelete}
				onClose={() => setOpenDelete(false)}>
				<DeleteContextPopup
					row={row}
					title={path}
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
