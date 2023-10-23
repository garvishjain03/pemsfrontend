import { ActionIcon, Tooltip } from "@mantine/core";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { orderTypes } from "../redux/order/types";
import { getUploadSalesApi } from "../services/salesOrder";
import { store } from "../store";
import { getURL } from "../utils/apiURL";
import { message } from "../utils/message";
import { translate } from "../utils/translate";

const UploadReport = () => {
	const [file, setFile] = useState(null);
	const fileUploadRef = useRef(null);

	const handleClick = () => {
		fileUploadRef.current.click();
	};
	const handleFileUpload = event => {
		const uploadedFile = event.target.files[0];
		if (
			uploadedFile &&
			uploadedFile.type ===
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
		) {
			setFile(uploadedFile);
		} else {
			// Show an error message to the user
			alert("Please select a valid (Excel)xlsx file");
		}
	};

	const handleUpload = async () => {
		if (file) {
			const formData = new FormData();
			formData.append("file", file);

			try {
				const response = await axios.post(getURL("upload-items"), formData, {
					headers: {
						Authorization: `Bearer ${Cookies.get("ACCESS_TOKEN")}`,
					},
				});
				if (response.status === 200) {
					message.success({ message: translate("Upload Successful") });
					setTimeout(() => {
						getUploadSalesApi();
					}, 15000);
				} else {
					message.error({ message: translate("Upload Failed") });
				}
			} catch (error) {
				console.error(error);
				// Show an error message to the user
				message.error({ message: translate("Upload Failed") });
			}
		}
	};

	useEffect(() => {
		handleUpload();
	}, [file]);

	return (
		<>
			<Tooltip label="Upload Report">
				<ActionIcon color="green" variant="transparent" onClick={handleClick}>
					<AiOutlineCloudUpload size={23} />
				</ActionIcon>
			</Tooltip>
			<input
				type="file"
				accept=".xlsx"
				onChange={handleFileUpload}
				id="fileUpload"
				ref={fileUploadRef}
				style={{
					display: "none",
				}}
			/>
		</>
	);
};
export default UploadReport;
