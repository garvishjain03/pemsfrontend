import { ActionIcon, Tooltip } from "@mantine/core";
import React from "react";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import PlanningChartDrawer from "./PlanningChartDrawer";

const TcEdit = ({ data }) => {
	const [opened, setOpened] = useState(false);
	return (
		<div>
			<Tooltip label="Edit Tc">
				<ActionIcon
					color="#339af0"
					variant="transparent"
					onClick={() => setOpened(true)}>
					<AiFillEdit size={23} />
				</ActionIcon>
			</Tooltip>
			{/* {opened && ( */}
			<PlanningChartDrawer
				opened={opened}
				setOpened={setOpened}
				data={data}
				workorderView={true}
				type="edit"
			/>
			{/* )} */}
		</div>
	);
};

export default TcEdit;
