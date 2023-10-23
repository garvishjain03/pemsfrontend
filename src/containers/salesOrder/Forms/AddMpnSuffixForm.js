import {
	Button,
	Group,
	Input,
	MultiSelect,
	Select,
	Text,
	TextInput,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateSalesItemApi } from "../../../services/SaleItem";

const AddMpnSuffixForm = ({ setAddMpnSuffixFormModal, data }) => {
	const [mpnSuffix, setMpnSuffix] = useState([]);
	const [mpnSuffixError, setMpnSuffixError] = useState(false);
	const [comment, setComment] = useState("");
	const [commentError, setCommentError] = useState(false);
	const [hasError, setHasError] = useState(false);

	const mpnSuffixList = useSelector(state => state?.context?.mpnsuffixlists);
	const multiSelectData = () => {
		return mpnSuffixList?.rows?.map(element => ({
			value: element.code,
			label: element.label,
		}));
	};
	const handleSubmit = () => {
		if (
			mpnSuffixError ||
			(localStorage.getItem("active_role") == "SUPERADMIN"
				? commentError
				: false)
		) {
			setHasError(true);
			return;
		}
		setHasError(false);
		setMpnSuffixError(false);
		localStorage.getItem("active_role") == "SUPERADMIN"
			? updateSalesItemApi(
					data?.id,
					{
						mpnSuffix: mpnSuffix,
						remark: comment,
					},
					data?.orderid
			  )
			: updateSalesItemApi(data?.itemid, { mpnSuffix: mpnSuffix });

		setAddMpnSuffixFormModal(false);
	};

	useEffect(() => {
		if (mpnSuffix.length <= 0) {
			setMpnSuffixError(true);
		} else {
			setMpnSuffixError(false);
		}

		if (localStorage.getItem("active_role") == "SUPERADMIN" && !comment) {
			setCommentError(true);
		} else {
			setCommentError(false);
		}
	}, [mpnSuffix, comment]);
	return (
		<div style={{ padding: "1rem" }}>
			<Group>
				<div>
					<Select
						data={multiSelectData()}
						label="MPN Suffix"
						placeholder="Pick MPN Suffix"
						searchable
						nothingFound="Nothing found"
						onChange={e => setMpnSuffix(e)}
					/>
					{mpnSuffixError && hasError && (
						<Text size="sm" color="red">
							required!
						</Text>
					)}
				</div>
				{localStorage.getItem("active_role") === "SUPERADMIN" && (
					<div>
						<TextInput
							label="Comment"
							placeholder="Comment"
							onChange={e => setComment(e.target.value)}
						/>
						{commentError && hasError && (
							<Text size="sm" color="red">
								required!
							</Text>
						)}
					</div>
				)}
			</Group>
			<Group position="right" style={{ marginTop: "1rem" }}>
				<Button onClick={handleSubmit}>SAVE</Button>
			</Group>
		</div>
	);
};

export default AddMpnSuffixForm;
