export const SalesItemItemCodeAccesor = row => row?.itemno;
export const SalesItemMpnAccessor = row => {
	const { mpn, orderType, partNo } = row;

	return orderType === "Traded" ? partNo : mpn;
};
export const SalesItemDelivarySummaryAccesor = row => row?.itemDelivarySummary;
