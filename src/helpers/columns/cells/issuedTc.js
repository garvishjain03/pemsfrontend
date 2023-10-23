import { ActionIcon, Center, Tooltip } from "@mantine/core";
import Cookies from "js-cookie";
import { GrRevert } from "react-icons/gr";
import { useSelector } from "react-redux";
import IssueTCForm from "../../../component/IssueTCForm";
import CancelTC from "../../../component/TcCancel";
import TcPrint from "../../../component/TcPrint";
import TcSend from "../../../component/TcSend";
import useFetch from "../../../hooks/useFetch";
import { getCuttingTc, getIssuedTc } from "../../../services/issuedTc";
import { getCount } from "../../../services/salesOrder";
import { getURL } from "../../../utils/apiURL";
import { message } from "../../../utils/message";
import { translate } from "../../../utils/translate";
import CommentFeature from "./CommentFeature";
import PartNoTipToolMapper from "../../../component/PartNoTipToolMapper";
import TcEdit from "../../../component/TcEdit";
import Logs from "../../../component/Logs";

export const IssuedTCActionCell = ({ row, column }) => {
	const [issueTC] = useFetch([]);
	const sendTcHandeler = async () => {
		const res = await issueTC(getURL(`issuetc/tcsend/${row.original.id}`), {
			method: "PUT",
			body: JSON.stringify({
				tcids: [row.original.id],
			}),
		});

		if (res && res.status === 200) {
			getIssuedTc();
			getCount();
			message.success({ message: translate("IssueTC Send Succesfull") });
		}
	};

	return (
		<Center mr={2}>
			{localStorage.getItem("active_role") == "SUPERADMIN" &&
				["WELDING", "COATING", "QUALITY", "COMPLETED"].includes(
					row.original?.status
				) &&
				row.original?.isAccepted != "YES" && <TcEdit data={row.original} />}
			{column.showCellElements?.send && row.original.status === "PENDING" && (
				<TcSend row={row?.original} />
			)}
			{column.showCellElements?.print && <TcPrint data={[row]} />}
			{column.showCellElements?.edit && (
				<IssueTCForm data={row?.original} edit={true} />
			)}

			{column.showCellElements?.cancel && <CancelTC data={row?.original} />}
			{column.showCellElements?.comment && (
				<CommentFeature row={row} type="issuetcid" />
			)}
			{/* <Logs id={row?.original?.id} type="issuetcid" number={"TC_NO"} /> */}
			{/* <Group spacing={4} style={{ width: "60px" }}>
				{column.showCellElements?.edit ? (
					<Update
						defaultValues={row.original}
						id={row.original?.id}
						context={"lead_dia"}
						path={LEADDIAS}
					/>
				) : null}
				{column.showCellElements?.delete ? (
					<Delete row={row} id={row.original?.id} path={LEADDIAS} />
				) : null}
			</Group> */}
		</Center>
	);
};

export const CuttingTcOperatorCell = ({ row }) => {
	return <>{row.original?.operatorDetails?.username}</>;
};
export const CuttingTcCoresizeCell = ({ row }) => {
	const coreSizes = useSelector(state => state.context?.coresizes?.rows);
	let lable = "";

	coreSizes?.map(item => {
		if (item?.id === row.original?.tcMapper[0]?.issueTcItem?.coresize) {
			lable = item.label;
		}
	});
	return <span key={lable}>{lable}</span>;
};
export const CuttingTCActionCell = ({ row }) => {
	const [acceptTc] = useFetch([]);

	const acceptHandler = async id => {
		const res = await acceptTc(getURL(`/actions/tc/accepted/${id}`), {
			method: "PUT",
			body: JSON.stringify({
				id: id,
			}),
		});

		if (res && res.status === 200) {
			getCuttingTc();

			message.success({ message: translate("Tc Accept Revert Succesfull") });
		}
	};
	return (
		<Center>
			<CommentFeature row={row} type="issuetcid" />
			{row?.original?.isAccepted === "YES" &&
				Cookies.get("USER_ID") === row.original?.operator && (
					<Tooltip label="revert">
						<ActionIcon
							style={{ marginBottom: "8px" }}
							variant="transparent"
							onClick={() => {
								acceptHandler(row.original.id);
							}}>
							<GrRevert size={23} color="#339af0" />
						</ActionIcon>
					</Tooltip>
				)}
		</Center>
	);
};

export const issuedTcPartNoCell = ({ row }) => {
	return <PartNoTipToolMapper data={row?.original} />;
};
