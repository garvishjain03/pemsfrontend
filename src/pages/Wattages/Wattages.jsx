// mantine ui
import { Button, Container, Group, Modal, Text } from "@mantine/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
////component
import TableComponent from "../../component/table/table";
//
import CreateContext from "../../containers/contextMenu/CreateContextForm";
import DeleteBulkContext from "../../containers/contextMenu/DeleteBulkContext";
import { schema } from "../../containers/contextMenu/schema";
import ShowAndHideContextPopup from "../../containers/contextMenu/ShowAndHideContextPopUp";
import { genrateColumnConfig } from "../../helpers/columns/columns";
import useFetch from "../../hooks/useFetch";
import { getWattages } from "../../services/contextGetCalls";
import { generateQuery } from "../../services/generateQuery";
import { getURL } from "../../utils/apiURL";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";
import { store } from "../../store";

const Watteges = () => {
	const [opened, setOpened] = useState(false);
	const [changeBulkDelete] = useFetch();
	const [changeBulkHideShow] = useFetch();
	const [searchParams, setSearchParams] = useSearchParams();
	const [createContext] = useFetch();
	const [openedDeactive, setOpenedDeactive] = useState(false);
	const [openedActive, setOpenedActive] = useState(false);
	const [openedDelete, setOpenedDelete] = useState(false);
	const [showFilter, setShowFilter] = useState(true);
	const [selected, setSelected] = useState([]);

	const {
		tableData = [],
		dataCount = 0,
		loadingPermission = true,
		permissionData = {},
		loading,
	} = useSelector(state => ({
		tableData: state.context.wattages?.rows,
		dataCount: state.context.wattages?.count,
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
		getWattages();
	}, [searchParams.toString()]);

	const COLUMNS = useMemo(() => {
		return genrateColumnConfig(permissionData?.wattagesPage?.Table1 || []);
	}, [loadingPermission]);
	//form default values
	const defaultValues = {
		label: "",
		value: "",
		code: "",
	};

	const handleChangeBulkDelete = async data => {
		let ids = [];
		data.forEach(row => {
			ids.push(row.original.id);
		});
		if (ids.length > 0) {
			const res = await changeBulkDelete(getURL("wattages/bulk/delete"), {
				method: "DELETE",
				body: JSON.stringify({ ids: ids }),
			});
			if (res.status === 200) {
				message.success({
					message: translate("DeletewattagesSuccessMessage"),
				});
				getWattages();
				setOpenedDelete(false);
			}
		}
	};

	const handleChangeBulkHideShowAll = async (data, flag) => {
		let ids = [];
		data.forEach(row => {
			ids.push(row.original.id);
		});
		if (ids.length > 0) {
			const res = await changeBulkHideShow(
				getURL(`wattages/${flag}/bulk/mark-visible`),
				{
					method: "PUT",
					body: JSON.stringify({ ids: ids }),
				}
			);
			if (res.status === 200) {
				flag
					? message.success({
							message: translate("ShowWattagesSuccessMessage"),
					  })
					: message.success({
							message: translate("HideWattagesSuccessMessage"),
					  });

				getWattages();
				flag ? setOpenedActive(false) : setOpenedDeactive(false);
			}
		}
	};

	const onSubmit = async value => {
		store.dispatch({
			type: "LOADING",
			payload: true,
		});
		const res = await createContext(getURL(`wattages`), {
			method: "POST",

			body: JSON.stringify({
				label: value.label,
				value: value.label,
				code: value.code,
			}),
		});
		if (res && res.status === 412) {
			if (res.data?.code === "0011") {
				message.error({
					message: translate("LabelErrorMessage"),
				});
			} else if (res.data?.code === "0012") {
				message.error({
					message: translate("ValueErrorMessage"),
				});
			} else if (res.data?.code === "0015") {
				message.error({
					message: translate("CodeErrorMessage"),
				});
			}
		}
		if (res && res.status === 201) {
			setOpened(false);
			message.success({
				message: translate("CreateWattagesSuccessMessage"),
			});
			getWattages();
		}
		store.dispatch({
			type: "LOADING",
			payload: false,
		});
	};

	const buttonCofig = permissionData?.wattagesPage?.topButtons;

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
				title="Create Wattage">
				<CreateContext
					onSubmit={onSubmit}
					schema={schema}
					defaultValues={defaultValues}
				/>
			</Modal>

			<Modal
				centered
				size="md"
				opened={openedDeactive}
				onClose={() => setOpenedDeactive(false) || selected.length === 0}>
				<ShowAndHideContextPopup
					selected={selected.filter(row => row.original.visible === true)}
					openedPopup={openedDeactive}
					setOpenedPopup={setOpenedDeactive}
					handleChangeBulkHideShowAll={handleChangeBulkHideShowAll}
					visible={false}
					heading={"Are you sure you want hide all Wattages"}
				/>
			</Modal>

			<Modal
				centered
				size="md"
				opened={openedActive}
				onClose={() => setOpenedActive(false) || selected.length === 0}>
				<ShowAndHideContextPopup
					selected={selected.filter(row => row.original.visible === false)}
					openPopup={openedActive}
					setOpenedPopup={setOpenedActive}
					handleChangeBulkHideShowAll={handleChangeBulkHideShowAll}
					visible={true}
					heading={"Are you sure you want show all Wattages"}
				/>
			</Modal>

			<Modal
				centered
				size="md"
				opened={openedDelete}
				onClose={() => setOpenedDelete(false) || selected.length === 0}>
				<DeleteBulkContext
					selected={selected}
					setOpenedDelete={setOpenedDelete}
					handleChangeBulkDelete={handleChangeBulkDelete}
				/>
			</Modal>

			<Group position="apart">
				<Text size="xl" weight={500}>
					Wattages
				</Text>
				<Group position="right" spacing={4}>
					{showbutton("addButton") ? (
						<Button onClick={() => setOpened(true)}>Add</Button>
					) : null}

					{showbutton("showAllButton") ? (
						<Button
							color={"green"}
							disabled={
								selected.filter(row => row.original.visible === false)
									.length === 0
							}
							onClick={() => setOpenedActive(true)}>
							Show All
						</Button>
					) : null}
					{showbutton("hideAllButton") ? (
						<Button
							color="red"
							disabled={
								selected.filter(row => row.original.visible === true).length ===
								0
							}
							onClick={() => setOpenedDeactive(true)}>
							Hide All
						</Button>
					) : null}
					{showbutton("deleteAllButton") ? (
						<Button
							color={"red"}
							disabled={selected.length === 0}
							onClick={() => setOpenedDelete(true)}>
							Delete All
						</Button>
					) : null}

					{showbutton("hideFiltersButton") ? (
						<Button
							onClick={() => {
								setShowFilter(!showFilter);
							}}>
							{showFilter ? "Hide Filters" : "Show Filters"}
						</Button>
					) : null}
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

export default Watteges;
