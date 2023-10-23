import DownloadReport from "../../../component/DownloadReport";
import UploadReport from "../../../component/UploadReport";

export const ExcelUploadFileName = ({ row }) => row.original?.file_name ?? "NA";
export const ExcelUploadFileSize = ({ row }) => {
	const size = row.original?.file_size;
	let formattedSize;
	if (size > 8000000) {
		formattedSize = (size / 8000000).toFixed(2) + " MG";
	} else {
		formattedSize = (size / 8000).toFixed(2) + " KB";
	}
	return formattedSize ?? "NA";
};
export const ExcelUploadOANumber = ({ row }) => row.original?.oanumber ?? "NA";
export const ExcelUploadProcessStatus = ({ row }) =>
	row.original?.process_status ?? "NA";
export const ExcelUploadSuccessCount = ({ row }) =>
	row.original?.success_count ?? 0;
export const ExcelUploadFailedCount = ({ row }) =>
	row.original?.failed_count ?? 0;
export const ExcelUploadTotalRecords = ({ row }) =>
	row.original?.total_records ?? 0;
export const ExcelUploadActions = ({ row }) => {
	return (
		<>
			{row?.original?.response_file_data ? <DownloadReport row={row} /> : ""}
			{row?.original?.response_file_data ? <UploadReport row={row} /> : ""}
		</>
	);
};
