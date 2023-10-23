import dayjs from "dayjs";
import MpnTipToolMapper from "../../../component/MpnTipToolMapper";

export const packingiItemMpnCell = ({ row }) => {
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
export const packingOrderNoCell = ({ row }) => row.original.allItems?.orderno;
export const packingOaDateCell = ({ row }) =>
	row.original?.createdAt
		? dayjs(row.original?.createdAt).format("DD-MM-YYYY")
		: "";
export const packingItemStatusCell = ({ row }) => row.original?.itemStatus;
export const packingOrderQuantityCell = ({ row }) =>
	row.original?.orderquantity.toLocaleString("en-IN");
export const packingItemCommitedDateCell = ({ row }) =>
	row.original?.commitedDate
		? dayjs(row.original?.commitedDate).format("DD-MM-YYYY")
		: "";
export const packingItemDelivarySummaryCell = ({ row }) =>
	row.original?.packingDetails?.[0]?.packingquantity
		? `Packed : ${(row.original?.packingDetails?.[0]?.packingquantity).toLocaleString(
				"en-IN"
		  )}`
		: "";
export const packingItemActionCell = () => "";
