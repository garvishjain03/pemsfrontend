import { ActionIcon, Modal } from "@mantine/core";
import React, { useState } from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";
import ToolTipJSX from "./common/ToolTipJSX";

import { RecheckItemsFormSingle } from "../Forms/RecheckItemsForm";
import { ModelStyleObjSaleItem } from "./common/ModelStyle";
const RecheckTheItem = ({ row }) => {
	const { itemStatus } = row?.original ?? {};
	const [recheckModel, setrecheckModel] = useState(false);
	const [recheckError, setrecheckError] = useState(false);

	const handleTheRecheck = () => {
		if (itemStatus !== "ACCEPTED") {
			setrecheckError(true);
			setrecheckModel(false);
			return;
		} else {
			setrecheckError(false);
			setrecheckModel(true);
		}
	};
	const recheckMpnTitle = <>Recheck MPN: {row?.original?.mpn}</>;
	return (
		<>
			<ToolTipJSX label="recheck">
				<ActionIcon variant="transparent" onClick={handleTheRecheck}>
					<BsArrowCounterclockwise size={22} color="#339af0" />
				</ActionIcon>{" "}
			</ToolTipJSX>
			<>
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObjSaleItem}
					size="90%"
					opened={recheckModel}
					onClose={() => {
						setrecheckModel(false);
					}}
					title={recheckMpnTitle}>
					<div>
						<RecheckItemsFormSingle
							recheckError={recheckError}
							setrecheckError={setrecheckError}
							recheckModel={recheckModel}
							setrecheckModel={setrecheckModel}
							selectedItem={[row?.original]}
						/>
					</div>
				</Modal>
			</>
		</>
	);
};
export default RecheckTheItem;
