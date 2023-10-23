import React, { useEffect, useState } from "react";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setDrawerSalesQuery } from "../redux/order/actions";
import { generateQuery, generateSalesQuery } from "../services/generateQuery";

export const SortingIcon = ({ isDesc, fieldtitle, source, id, isSorted }) => {
	const [IsDesc, setIsDesc] = useState(isDesc);
	const [searchParams, setSearchParams] = useSearchParams();

	const { drawerSalesQuery = "" } = useSelector(state => ({
		drawerSalesQuery: state?.orders?.drawersalesquery,
	}));

	useEffect(() => {
		if (isSorted) {
			if (source === "drawer" && id) {
				const obj = {
					order_by: sortingFieldName[fieldtitle]
						? sortingFieldName[fieldtitle]
						: fieldtitle,
					order: isDesc ? "asc" : "desc",
				};
				setDrawerSalesQuery(generateSalesQuery(obj, drawerSalesQuery));
			} else {
				let gen = generateQuery([
					{
						order_by: sortingFieldName[fieldtitle]
							? sortingFieldName[fieldtitle]
							: fieldtitle,
					},
					{ order: isDesc ? "asc" : "desc" },
				]);
				setSearchParams(gen);
			}
		} else {
			let gen = generateQuery([
				{
					order_by: "",
				},
				{ order: "" },
			]);
			setSearchParams(gen);
		}
	}, [isSorted, isDesc]);

	if (isSorted && !isDesc) return <BsFillCaretDownFill />;
	if (isSorted && isDesc) return <BsFillCaretUpFill />;
	return null;
};

///maping for field name stored in backend
const sortingFieldName = {
	Name: "firstName",
	UserName: "username",
	DefaultRole: "defaultRole",
	// Roles: "userroles",
	Status: "userStatus",
	Value: "value",
	Label: "label",
	Code: "code",
	CreatedAt: "createdAt",
	LastUpdatedAt: "updatedAt",
	Visible: "visible",
	Wattage: "",
	Coresize: "",
	LeadLength: "",
	LeadDia: "",
	MachineName: "name",
	MachineType: "type",
	WindingProcess: "WindingProcess",
	CustomerName: "name",
	customerOrderNumber: "customerOrderNumber",
	orderno: "orderno",
	orderDate: "orderDate",
	orderStatus: "orderStatus",
	customer: "customer",
	item: "item",
	itemCode: "itemCode",
	itemStatus: "itemStatus",
	itemOrderquantity: "orderquantity",
	commitedDate: "commitedDate",
	scheduleDate: "scheduleDate",
	itemDeliverySummary: "itemDeliverySummary",
	createdAt: "createdAt",
	updatedAt: "updatedAt",
	tcdeliveryDate: "wodeliverydate",
};
