import {
	Button,
	Container,
	Group,
	LoadingOverlay,
	Modal,
	Text,
} from "@mantine/core";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import TableComponent from "../../component/table/table";
import CreateWattagetoCoresize from "../../containers/MappingUi/wattagetocoresize/createWattagetoCoresize";
import { schema } from "../../containers/MappingUi/wattagetocoresize/schema";
import { genrateColumnConfig } from "../../helpers/columns";
import useFetch from "../../hooks/useFetch";
import {
	getCoreSizes,
	getWattages,
	getWattageToCoresizes,
} from "../../services/contextGetCalls";
import { generateQuery } from "../../services/generateQuery";
import { getURL } from "../../utils/apiURL";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";
import { store } from "../../store";

const WattagesToCoreSize = () => {
	const [showFilter, setShowFilter] = useState(true);
	const [opened, setOpened] = useState(false);
	const [createWattagetoCoresize] = useFetch();
	const [searchParams, setSearchParams] = useSearchParams();

	const {
		tableData = [],
		dataCount = 0,
		loadingPermission = true,
		permissionData = {},
		loading,
	} = useSelector(state => ({
		tableData: state.context.wattagestocoresize?.rows,
		dataCount: state.context.wattagestocoresize?.count,
		loadingPermission: state.permission?.loading,
		permissionData: state.permission?.permissions,
		loading: state.context?.loading,
	}));
	const setPagnation = ({ pageNumber, pageSize }) => {
		const limit = searchParams.get("limit")
			? parseInt(searchParams.get("limit"))
			: 50;

		let gen = generateQuery([
			{
				limit: parseInt(pageSize),
				offset: parseInt(limit * (pageNumber - 1)),
			},
		]);
		setSearchParams(gen);
	};

	const defaultValues = useMemo(() => {
		return {
			wattage: "",
			coresize: [],
		};
	}, []);

	const COLUMNS = useMemo(() => {
		if (loadingPermission) return [];
		return genrateColumnConfig(
			permissionData?.wattageToCoresizePage?.Table1 || []
		);
	}, [loadingPermission, permissionData?.wattageToCoresizePage?.Table1]);

	useEffect(() => {
		getWattages();
		getCoreSizes();
	}, []);

	useEffect(() => {
		//if (searchParams.toString()) return
		getWattageToCoresizes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams.toString()]);

	const onSubmit = async value => {
		store.dispatch({
			type: "LOADING",
			payload: true,
		});
		const res = await createWattagetoCoresize(getURL(`wattage-to-coresizes`), {
			method: "POST",

			body: JSON.stringify({
				wattageid: value.wattage,
				coresizeid: value.coresize,
			}),
		});
		if (res && res.status === 412) {
			if (res.data?.code === "0021") {
				message.error({
					message: translate("Mapping already exist"),
				});
			}
		}
		if (res && res.status === 201) {
			setOpened(false);
			message.success({
				message: translate("CreateWattageToCoresizeSuccessMessage"),
			});
			getWattageToCoresizes();
		}
		store.dispatch({
			type: "LOADING",
			payload: false,
		});
	};

	const buttonCofig = permissionData?.wattageToCoresizePage?.topButtons;

	const showbutton = btn => {
		const obj = buttonCofig?.find(item => item.value === btn);
		return obj ? obj.enable : false;
	};
	// if (loading) return <LoadingOverlay visible={true} />;
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
				size="lg"
				opened={opened}
				onClose={() => setOpened(false)}
				title="Create Wattage to CoreSize">
				<CreateWattagetoCoresize
					onSubmit={onSubmit}
					schema={schema}
					defaultValues={defaultValues}
				/>
			</Modal>
			<Group position="apart">
				<Text>Wattage To Coresize</Text>
				<Group position="right" spacing={4}>
					{showbutton("addButton") && (
						<Button onClick={() => setOpened(true)}>Add</Button>
					)}
					{showbutton("hideFiltersButton") && (
						<Button
							onClick={() => {
								setShowFilter(!showFilter);
							}}>
							{showFilter ? "Hide Filters" : "Show Filters"}
						</Button>
					)}
				</Group>
			</Group>

			<TableComponent
				Data={tableData}
				Columns={COLUMNS}
				sort={true}
				globleSearch={true}
				setSelected={() => {}}
				loading={loading}
				showFilter={showFilter}
				setPagnation={setPagnation}
				dataCount={dataCount}
			/>
		</Container>
	);
};

export default WattagesToCoreSize;
