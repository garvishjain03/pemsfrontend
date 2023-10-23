import { Button, Group, Modal, Text, TextInput } from "@mantine/core";
import { auto } from "@popperjs/core";
import { async } from "q";
import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { getAllSalesOrders, getCount } from "../../../services/salesOrder";
import { getURL } from "../../../utils/apiURL";
import { message } from "../../../utils/message";
import { translate } from "../../../utils/translate";
import { ModelStyleObj } from "../modelCssObject/modelCssObject";

const RevertClose = ({ revert, setRevert, data }) => {
	const [comment, setComment] = useState("");
	const [hasError, setHasError] = useState(false);
	const [commentError, setCommentError] = useState(false);

	const [revertCloseApi] = useFetch([]);

	const handleSubmit = async () => {
		if (!commentError) {
			setHasError(false);
			const res = await revertCloseApi(
				getURL(`/salesorder/revertdispatchstatus/${data?.id}`),
				{
					method: "PUT",
					body: JSON.stringify({
						remarks: comment,
					}),
				}
			);
			if (res && res.status === 200) {
				setRevert(false);
				getAllSalesOrders();
				getCount();
				message.success({
					message: translate("Revert Order Close Succesful"),
				});
			} else {
				setRevert(false);
				message.info({
					message: translate("Revert Order Close Failed"),
				});
			}
		} else {
			setHasError(true);
		}
	};

	useEffect(() => {
		if (comment == "" || !comment) {
			setCommentError(true);
		} else {
			setCommentError(false);
		}
	}, [comment]);

	return (
		<Modal
			radius={8}
			padding={0}
			styles={ModelStyleObj}
			size={auto}
			opened={revert}
			onClose={() => setRevert(false)}
			title="REVERT CLOSED ORDER">
			<Text style={{ marginBottom: "0.7rem" }}>
				Order No : <strong>{data?.orderno}</strong> will be reverted back to{" "}
				<span style={{ color: "red", fontWeight: 600 }}>DISPATCHED</span>
			</Text>
			<div>
				<TextInput
					label="Remark"
					placeholder="Remark"
					required
					onChange={e => setComment(e.target.value)}
				/>
				{commentError && hasError && (
					<Text size="sm" color="red">
						required!
					</Text>
				)}
			</div>
			<Group style={{ marginTop: "0.9rem" }} position="right">
				<Button onClick={handleSubmit}>REVERT CLOSE</Button>
			</Group>
		</Modal>
	);
};

export default RevertClose;
