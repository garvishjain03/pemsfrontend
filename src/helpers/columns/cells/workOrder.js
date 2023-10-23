import WorkOrderPartNoTiptoolMapper from "../../../component/WorkOrderPartNoTiptoolMapper";
import WorkOrderActionCell from "../../../containers/salesOrder/workOrder/WorkOrderActionCell";

export const SalesWorkOrderItemActionCell = ({ row, column }) => (
	<WorkOrderActionCell row={row} column={column} />
);
export const WorkOrderPartNoCell = ({ row }) => {
	return <WorkOrderPartNoTiptoolMapper data={row?.original} />;
};
