// mantine ui
import { Button, Container, Group, Modal, Text } from "@mantine/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
////component
import TableComponent from "../../component/table/table";
import CreateCustomer from "../../containers/Customer/customerForm";
import { schema } from "../../containers/Customer/schema";
import { genrateColumnConfig } from "../../helpers/columns/columns";
import useFetch from "../../hooks/useFetch";
import { getCustomers } from "../../services/contextGetCalls";
import { generateQuery } from "../../services/generateQuery";
import { getURL } from "../../utils/apiURL";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";
import { store } from "../../store";

const Customers = () => {
	const [showFilter, setShowFilter] = useState(true);
	const [opened, setOpened] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const [createCustomers] = useFetch();
	const setSelected = () => {};

	const {
		tableData = [],
		dataCount = 0,
		loadingPermission = true,
		permissionData = {},
		loading,
	} = useSelector(state => ({
		tableData: state.context.customers?.rows,
		dataCount: state.context.customers?.count,
		loadingPermission: state.permission?.loading,
		permissionData: state.permission?.permissions,
		loading: state.context.loading,
	}));
	const setPagnation = useCallback(async ({ pageNumber, pageSize }) => {
		const limit = searchParams.get("limit")
			? parseInt(searchParams.get("limit"))
			: 50;
		let gen = generateQuery([
			{ limit: parseInt(pageSize), offset: parseInt(limit * (pageNumber - 1)) },
		]);
		setSearchParams(gen);
	});

	useEffect(() => {
		getCustomers();
	}, [searchParams.toString()]);

	const COLUMNS = useMemo(() => {
		return genrateColumnConfig(permissionData?.customerPage?.Table1 || []);
	}, [loadingPermission]);

	//form default values
	const defaultValues = {
		name: "",
		value: "",
		visible: true,
	};

	const onSubmit = async value => {
		store.dispatch({
			type: "LOADING",
			payload: true,
		});
		const res = await createCustomers(getURL(`customer`), {
			method: "POST",

			body: JSON.stringify({
				name: value.name,
				value: value.name,
				visible: value.visible,
			}),
		});
		if (res && res.status === 412) {
			if (res.data?.code === "0030") {
				message.error({
					message: translate("CustomerNameErrorMessage"),
				});
			} else if (res.data?.code === "0012") {
				message.error({
					message: translate("CustomerValueErrorMessage"),
				});
			}
		}
		if (res && res.status === 201) {
			setOpened(false);
			message.success({
				message: translate("CreateCustomerSuccessMessage"),
			});
			getCustomers();
		}
		store.dispatch({
			type: "LOADING",
			payload: false,
		});
	};
	const buttonCofig = permissionData?.customerPage?.topButtons;

	const showbutton = btn => {
		const obj = buttonCofig?.find(item => item.value === btn);
		return obj ? obj.enable : false;
	};
	return (
		<Container fluid>
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
				}}
				size="md"
				opened={opened}
				onClose={() => setOpened(false)}
				title="Create Customer">
				<CreateCustomer
					onSubmit={onSubmit}
					schema={schema}
					defaultValues={defaultValues}
				/>
			</Modal>

			<Group position="apart">
				<Text size="xl" weight={500}>
					Customers
				</Text>
				<Group position="right" spacing={4}>
					{showbutton("addButton") ? (
						<Button onClick={() => setOpened(true)}>Add</Button>
					) : null}

					<Button
						onClick={() => {
							setShowFilter(!showFilter);
						}}>
						{showFilter ? "Hide Filters" : "Show Filters"}
					</Button>
				</Group>
			</Group>

			<TableComponent
				Data={tableData}
				Columns={COLUMNS}
				sort={true}
				globleSearch={true}
				setSelected={setSelected}
				loading={loading}
				showFilter={showFilter}
				setPagnation={setPagnation}
				dataCount={dataCount}
			/>
		</Container>
	);
};

export default Customers;
