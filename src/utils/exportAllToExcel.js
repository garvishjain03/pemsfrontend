import React from "react";
import Excel from "exceljs";
import { saveAs } from "file-saver";
import { Button } from "@mantine/core";
const workSheetName = "Worksheet-1";
const workBookName = "MyWorkBook";
const myInputId = "myInput";

const ExportAllToExcel = ({ handleClick }) => {
	const saveExcel = async () => {
		let data = await handleClick();
		let datakey = [];
		// let data = excelData();
		for (const key in data?.[0]) {
			datakey.push(key);
		}
		const columns = datakey.map(item => {
			return { header: item, key: item };
		});
		const workbook = new Excel.Workbook();
		try {
			const myInput = document.getElementById(myInputId);
			const fileName = myInput.value || workBookName;
			// creating one worksheet in workbook
			const worksheet = workbook.addWorksheet(workSheetName);
			// add worksheet columns
			// each columns contains header and its mapping key from data
			worksheet.columns = columns;
			// updated the font for first row.
			worksheet.getRow(1).font = { bold: true };
			// loop through all of the columns and set the alignment with width.
			worksheet.columns.forEach(column => {
				column.width = column.header.length + 5;
				column.alignment = { horizontal: "center" };
			});

			// loop through data and add each one to worksheet
			data.forEach(singleData => {
				worksheet.addRow(singleData);
			});

			// loop through all of the rows and set the outline style.
			worksheet.eachRow({ includeEmpty: false }, row => {
				// store each cell to currentCell
				const currentCell = row._cells;
				// loop through currentCell to apply border only for the non-empty cell of excel
				currentCell.forEach(singleCell => {
					// store the cell address i.e. A1, A2, A3, B1, B2, B3, ...
					const cellAddress = singleCell._address;
					// apply border
					worksheet.getCell(cellAddress).border = {
						top: { style: "thin" },
						left: { style: "thin" },
						bottom: { style: "thin" },
						right: { style: "thin" },
					};
				});
			});

			// write the content using writeBuffer
			const buf = await workbook.xlsx.writeBuffer();
			// download the processed file
			saveAs(new Blob([buf]), `${fileName}.xlsx`);
		} catch (error) {
			console.error("<<<ERROR>>>", error);
			console.error("Something Went Wrong", error.message);
		} finally {
			// removing worksheet's instance to create new one
			workbook.removeWorksheet(workSheetName);
		}
	};

	return (
		<>
			<Button onClick={saveExcel}>Export All Data</Button>
		</>
	);
};
export default ExportAllToExcel;
