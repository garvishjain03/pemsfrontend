import { ActionIcon, Tooltip } from "@mantine/core";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { getURL } from "../utils/apiURL";
import { saveAs } from "file-saver";

const DownloadReport = ({ row }) => {
	const handleClick = () => {
		const outputFilename = `Report.xlsx`;
		const url = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${row?.original?.response_file_data}`;
		saveAs(url, outputFilename);
	};

	return (
		<>
			<Tooltip label="Download Report">
				<ActionIcon color="blue" variant="transparent" onClick={handleClick}>
					<AiOutlineCloudDownload size={23} />
				</ActionIcon>
			</Tooltip>
		</>
	);
};
export default DownloadReport;
