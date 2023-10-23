import { Text } from "@mantine/core";
import dayjs from "dayjs";
import MpnTipToolMapper from "../../../component/MpnTipToolMapper";

export const dispatchItemMpnCell = ({ row }) => {
	const {
		mpn,
		orderType,
		partNo,
		wattage,
		type,
		tolerance,
		ohms,
		surge,
		unit,
	} = row.original;

	return (
		<MpnTipToolMapper
			orderType={orderType}
			partNo={partNo}
			mpn={mpn}
			wattage={wattage}
			type={type}
			tolerance={tolerance}
			ohms={ohms}
			surge={surge}
			unit={unit}
		/>
	);
};
export const dispatchOrderNoCell = ({ row }) => row.original.allItems?.orderno;
export const dispatchOaDateCell = () => "";
export const dispatchItemStatusCell = ({ row }) => row.original?.itemStatus;
export const dispatchOrderQuantityCell = ({ row }) =>
	row.original?.orderquantity.toLocaleString("en-IN");
export const dispatchItemCommitedDateCell = ({ row }) =>
	row.original?.commitedDate
		? dayjs(row.original?.commitedDate).format("DD-MM-YYYY")
		: "";
export const dispatchItemDelivarySummaryCell = ({ row }) => (
	<>
		<Text
			fz="xs"
			size="sm"
			style={{
				width: "8rem",
			}}>
			{row.original?.dispatchedDetails?.[0]?.totaldispatchqty
				? `Dispatched : ${(row.original?.dispatchedDetails?.[0]?.totaldispatchqty).toLocaleString(
						"en-IN"
				  )}`
				: ""}
		</Text>
		<Text
			fz="xs"
			size="sm"
			style={{
				width: "8rem",
			}}>
			{row.original?.returnDetails?.[0]?.returnquantity
				? `Return : ${(row.original?.returnDetails?.[0]?.returnquantity).toLocaleString(
						"en-IN"
				  )}`
				: ""}
		</Text>
	</>
);
export const dispatchItemActionCell = () => "";
