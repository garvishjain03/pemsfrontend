import { ActionIcon, Modal, Tooltip } from "@mantine/core";
import React, { useState } from "react";
import { BsFillPlusCircleFill, BsPlusCircle } from "react-icons/bs";
import AddMpnSuffixForm from "../containers/salesOrder/Forms/AddMpnSuffixForm";
import { ModelStyleObj } from "../containers/salesOrder/SalesOrderItem";

const AddMpnSuffix = ({ data }) => {
	const [AddMpnSuffixFormModal, setAddMpnSuffixFormModal] = useState();
	return (
		<div>
			<Tooltip label="Add MPN Suffix">
				<ActionIcon
					color="blue"
					variant="transparent"
					onClick={() => {
						setAddMpnSuffixFormModal(true);
					}}>
					<BsFillPlusCircleFill size={23} />
				</ActionIcon>
			</Tooltip>
			<Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				size="auto"
				opened={AddMpnSuffixFormModal}
				onClose={() => setAddMpnSuffixFormModal(false)}
				title="Add MPN Suffix">
				<AddMpnSuffixForm
					setAddMpnSuffixFormModal={setAddMpnSuffixFormModal}
					data={data}
				/>
			</Modal>
		</div>
	);
};

export default AddMpnSuffix;
