import { Tooltip } from "@mantine/core";
import React,{useState} from "react";

const ToolTipJSX = props => {
	const [zIndex, setzIndex] = useState(1000);
	return (
		<div
			onMouseEnter={() => {
				setzIndex(1000);
			}}
			onClick={() => {
				setzIndex(100);
			}}
			onMouseLeave={() => {
				setzIndex(150);
			}}>
			<Tooltip zIndex={zIndex} color="dark" withArrow label={props.label}>
				{props.children}
			</Tooltip>
		</div>
	);
};
export default ToolTipJSX;
