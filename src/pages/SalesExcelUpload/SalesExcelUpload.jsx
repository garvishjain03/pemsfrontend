import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { genrateColumnConfig } from "../../helpers/columns";
import {
	getAllSalesOrders,
	getCount,
	getUploadSalesApi,
	getUploadStatus,
} from "../../services/salesOrder";
import { getURL } from "../../utils/apiURL";
import { fetchRequest } from "../../utils/fetchRequest";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";
import { setDrawerSalesQuery } from "../../redux/order/actions";
import { generateQuery } from "../../services/generateQuery";
import { store } from "../../store";
import Cookies from "js-cookie";
import axios from "axios";
import {
	ActionIcon,
	Button,
	Container,
	Group,
	ScrollArea,
	Text,
	Tooltip,
} from "@mantine/core";
import UploadExcelSheet from "../../component/UploadExcelSheet";
import TableComponent from "../../component/table/table";
import { saveAs } from "file-saver";
import { FaFileDownload } from "react-icons/fa";

const SalesExcelUpload = () => {
	const [showFilter, setShowFilter] = useState(true);

	const [selected, setSelected] = useState([]);
	const [processingStatus, setProcessingStatus] = useState(false);

	const [searchParams, setSearchParams] = useSearchParams();

	const setPagnation = useCallback(
		async ({ pageNumber, pageSize }) => {
			const limit = searchParams.get("limit")
				? parseInt(searchParams.get("limit"))
				: 50;

			let gen = generateQuery([
				{
					limit: parseInt(pageSize),
					offset: parseInt(limit * (pageNumber - 1)),
				},
			]);

			setSearchParams(gen);
		},
		[searchParams, setSearchParams]
	);

	const {
		items = [],
		itemCount = 0,
		loading = false,
		loadingPermission = true,
		permissionData = {},
		drawerSalesQuery = "",
		selectedItem,
		fileId,
	} = useSelector(state => ({
		items: state.orders?.excelUploadDetails?.body?.rows,
		itemCount: state.orders?.UploadExcelDetails?.count,
		loading: state.orders?.excelUploadLoading,
		loadingPermission: state.permission?.loading,
		permissionData: state.permission?.permissions,
		drawerSalesQuery: state?.orders?.drawersalesquery,
		selectedItem: state.Items,
		fileId: state.orders?.fileId,
	}));

	const COLUMNS = useMemo(() => {
		if (loadingPermission) return [];
		return genrateColumnConfig(permissionData?.salesExcelUpload?.Table1 || []);
	}, [loadingPermission, permissionData?.salesExcelUpload?.Table1]);

	const tableData = useMemo(() => items, [items]);

	const buttonCofig = useMemo(() => {
		return permissionData?.salesExcelUpload?.topButtons;
	}, [permissionData?.salesExcelUpload?.topButtons]);

	const showbutton = btn => {
		const obj = buttonCofig?.find(item => item.value === btn);
		return obj ? obj.enable : false;
	};

	const handleSelectRow = row => {
		store.dispatch({
			type: "new",
			payload: {
				id: row.id,
				row,
			},
		});
	};

	useEffect(() => {
		getUploadSalesApi();
	}, [searchParams.toString()]);

	useEffect(() => {
		const getUploadStatus = async () => {
			let _res = {};
			try {
				_res = await fetchRequest(getURL(`upload-jobs/status/${fileId}`));
			} catch (error) {
				console.warn(error);
			} finally {
				if (
					_res.status === 200 &&
					_res?.data?.processStatus === "COMPLETED" &&
					_res?.data?.status === true
				) {
					setProcessingStatus(true);
					message.success({
						message: translate("Uploaded Excel Sheet Processed Successfully"),
					});
					getUploadSalesApi();
				} else {
					message.info({
						message: translate("Uploaded Excel Sheet is Processing"),
					});
				}
			}
		};

		if (fileId) {
			const interval = setInterval(() => {
				!processingStatus && getUploadStatus();
			}, 15000);

			if (processingStatus) clearInterval(interval);
			return () => {
				clearInterval(interval);
			};
		}
	}, [fileId, processingStatus]);

	const handleDownloadTemplate = async type => {
		const ACCESS_TOKEN = Cookies.get("ACCESS_TOKEN");
		// Its important to set the 'Content-Type': 'blob' and responseType:'arraybuffer'.
		const headers = {
			"Content-Type": "blob",
			Authorization: `Bearer ${ACCESS_TOKEN}`,
		};
		const config = {
			method: "GET",
			url: getURL(type === "EDIT" ? `/template-sales-edit ` : `template-sales`),
			responseType: "arraybuffer",
			headers,
		};

		try {
			const response = await axios(config);

			const outputFilename =
				type === "EDIT" ? `EditTemplate.xlsx` : `Template.xlsx`;

			// If you want to download file automatically using link attribute.
			// const url = URL.createObjectURL(new Blob([response.data]));
			// const link = document.createElement("a");
			// link.href = url;
			// link.setAttribute("download", outputFilename);
			// document.body.appendChild(link);
			// link.click();
			// const fs = require("fs");
			// OR you can save/write file locally.
			// fs.writeFileSync(outputFilename, response.data);
			// saveAs(response.data, outputFilename);

			//New Approach
			const file = new Blob([response.data], {
				type: "text/plain;charset=utf-8",
			});
			saveAs(file, outputFilename);
		} catch (error) {
			throw Error(error);
		}
	};

	return (
		<Container fluid>
			<Group position="apart" spacing={4}>
				<Text>Sales Item Excel Upload</Text>
				<Group>
					{<Button onClick={handleDownloadTemplate}>Download Template</Button>}
					{<UploadExcelSheet setProcessingStatus={setProcessingStatus} />}
					<Tooltip label="Edit Sales Item Template">
						<ActionIcon
							variant="transparent"
							onClick={() => handleDownloadTemplate("EDIT")}>
							<FaFileDownload size={22} color="green" />
						</ActionIcon>
					</Tooltip>
				</Group>
			</Group>
			<ScrollArea style={{ height: "80vh" }}>
				<TableComponent
					Data={tableData || []}
					Columns={COLUMNS}
					rowClick={true}
					handleSelectRow={handleSelectRow}
					sort={true}
					globleSearch={true}
					setSelected={() => {}}
					loading={loading}
					showFilter={showFilter}
					setPagnation={setPagnation}
					dataCount={itemCount}
				/>
			</ScrollArea>
		</Container>
	);
};

export default SalesExcelUpload;
