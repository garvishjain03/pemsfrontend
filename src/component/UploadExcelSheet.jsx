import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Button, Group, Text } from "@mantine/core";
import { getURL } from "../utils/apiURL";
import useFetch from "../hooks/useFetch";
import Cookies from "js-cookie";
import { translate } from "../utils/translate";
import { message } from "../utils/message";
import { getAllSalesOrders } from "../services/salesOrder";
import { store } from "../store";
import { orderTypes } from "../redux/order/types";
import { useSelector } from "react-redux";

function UploadExcelSheet({ setProcessingStatus }) {
	const [file, setFile] = useState(null);
	const [uploadExcel] = useFetch([]);
	const getFileRef = useRef(null);

	const { loading } = useSelector(state => state.orders);

	const handleFileUpload = event => {
		const uploadedFile = event.target.files[0];
		if (
			uploadedFile &&
			uploadedFile.type ===
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
		) {
			setFile(uploadedFile);
			setProcessingStatus(false);
			store.dispatch({
				type: orderTypes.REMOVE_FILE_ID,
			});
		} else {
			// Show an error message to the user
			alert("Please select a valid (Excel)xlsx file");
		}
	};

	const handleFormSubmit = async event => {
		store.dispatch({
			type: "LOADING",
			payload: true,
		});
		event.preventDefault();
		if (file) {
			const formData = new FormData();
			formData.append("file", file);

			try {
				const response = await axios.post(getURL("upload-sales"), formData, {
					headers: {
						Authorization: `Bearer ${Cookies.get("ACCESS_TOKEN")}`,
					},
				});
				if (response.status === 200) {
					message.success({ message: translate("Upload Successful") });
					store.dispatch({
						type: orderTypes.FILE_ID,
						payload: response?.data?.fileId,
					});
					setFile(null);
					getFileRef.current.value = null;
				} else {
					message.error({ message: translate("Upload Failed") });
				}
			} catch (error) {
				console.error(error);
				// Show an error message to the user
				message.error({ message: translate("Upload Failed") });
			}
		}
		store.dispatch({
			type: "LOADING",
			payload: false,
		});
	};

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<Group>
					<Group>
						<Button
							onClick={() => getFileRef.current.click()}
							// style={{ marginRight: "0.9rem" }}
						>
							{!file ? "Choose File" : file?.name}
						</Button>
						<input
							type="file"
							accept=".xlsx"
							onChange={handleFileUpload}
							id="getFile"
							ref={getFileRef}
							style={{
								display: "none",
							}}
						/>
					</Group>
					<Button type="submit" disabled={!file || loading}>
						Upload
					</Button>
				</Group>
			</form>
		</div>
	);
}

export default UploadExcelSheet;
