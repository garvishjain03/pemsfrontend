import { Text, Textarea } from "@mantine/core";
import React from "react";

const UnversialRemark = ({ onChange, commentError }) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "end",
				gap: "1rem",
				width: "100%",
				margin: "1rem 0",
			}}>
			<span
				style={{
					fontWeight: "800",
					color: "black",
				}}>
				Universal Remark :{" "}
			</span>
			<div style={{ display: "flex", flexDirection: "column", width: "44%" }}>
				<Textarea
					placeholder="Universal Remark"
					autosize
					minRows={2}
					onChange={onChange}
					required
				/>
				{commentError && (
					<Text align="left" size="sm" color="red">
						remark required!
					</Text>
				)}
			</div>
		</div>
	);
};
export const SingleRemark = ({ onChange, value }) => {
	return (
		<Textarea
			value={value}
			placeholder="Remark"
			autosize
			minRows={1}
			onChange={onChange}
			required
		/>
	);
};
export default UnversialRemark;
