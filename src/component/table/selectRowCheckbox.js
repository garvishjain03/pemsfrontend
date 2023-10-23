import React, { useState } from "react";
import { Checkbox } from "@mantine/core";

export const RowCheckbox = React.forwardRef(
	(
		{
			indeterminate,
			row = 0,
			selectAllRows = () => {},
			handleSelectRow = () => {},
			...rest
		},
		ref
	) => {
		const defaultRef = React.useRef();
		const resolvedRef = ref || defaultRef;
		const [check, setcheck] = useState(false);
		React.useEffect(() => {
			resolvedRef.current.indeterminate = indeterminate;
		}, [resolvedRef, indeterminate]);
		const handleCheck = () => {
			// if (check) {
			// 	handleSelectRow(row.original);
			// } else {
			handleSelectRow(row.original);
			// }
			setcheck(prev => !prev);
		};
		return (
			<Checkbox
				checked={check}
				onClick={handleCheck}
				ref={resolvedRef}
				{...rest}
			/>
		);
	}
);
