import { Button, Group, Modal } from "@mantine/core";
import React, { useState } from "react";
import WorkorderExpendView from "../../pages/WorkOrderPage/WorkOrderExpendView";

const WorkOrderViewButton = ({ data, itemDetail }) => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<Modal
				radius={8}
				padding={0}
				styles={{
					close: {
						color: "#ffff",
						"&:hover": {
							color: "red",
						},
					},
					title: { color: "#ffff", fontWeight: "600" },
					header: {
						padding: "20px",
						backgroundColor: "#228BE6",

						marginRight: "0px",
						borderRadius: "8px 8px 0px 0px",
					},
					body: {
						paddingBottom: "1rem",
						paddingLeft: "3rem",
						paddingRight: "3rem",
					},
				}}
				size={"100%"}
				opened={openModal}
				onClose={() => setOpenModal(false)}
				title={<Group direction="row">Work Order</Group>}>
				<WorkorderExpendView
					data={data}
					isExpend={false}
					itemDetail={itemDetail}
				/>
			</Modal>
			<Button
				onClick={() => {
					setOpenModal(true);
				}}>
				View
			</Button>
		</>
	);
};

export default WorkOrderViewButton;
