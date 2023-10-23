import { ActionIcon } from "@mantine/core";
import React from "react";
import ToolTipJSX from "./common/ToolTipJSX";
import { SiGooglemessages } from "react-icons/si";
import { getCommentsByItemId } from "../../../services/SaleItem";
const CommentOnItems = ({ setcommentModel, id }) => {
	return (
		<>
			<ToolTipJSX label="Comment">
				<ActionIcon
					variant="transparent"
					onClick={() => {
						getCommentsByItemId(id);
						setcommentModel(true);
					}}>
					<SiGooglemessages size={22} color="#339af0" />
				</ActionIcon>{" "}
			</ToolTipJSX>
		</>
	);
};
export default CommentOnItems;
