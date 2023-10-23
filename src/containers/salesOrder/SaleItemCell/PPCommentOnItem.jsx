import { ActionIcon, Tooltip } from "@mantine/core";
import React from "react";
import { SiGooglemessages } from "react-icons/si";
import { getCommentsByItemId } from "../../../services/SaleItem";

const PPCommentOnItem = ({ setcommentModel, row }) => {
	const { id } = row?.original ?? {};
	return (
		<>
			<Tooltip label="comment">
				<ActionIcon
					variant="transparent"
					onClick={() => {
						getCommentsByItemId(id);
						setcommentModel(true);
					}}>
					<SiGooglemessages size={22} color="#339af0" />
				</ActionIcon>{" "}
			</Tooltip>
		</>
	);
};
export default PPCommentOnItem;
