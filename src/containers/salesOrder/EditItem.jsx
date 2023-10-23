import { ActionIcon, Button, Modal, Text, Tooltip } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { getAllSalesItems, getItemEditFields } from "../../services/salesOrder";
import { getURL } from "../../utils/apiURL";
import { message } from "../../utils/message";
import { translate } from "../../utils/translate";
import SalesItemEditForm from "./SalesItemEditForm";
import { updateItemSchema } from "./schema";

const EditItem = ({ defaultValues, log }) => {
	const [updateSalesItem] = useFetch();
	const [opened, setOpened] = useState(false);
	const [coresizeDropDown, setCoreSizeDropDown] = useState([]);
	const [commentError, setcommentError] = useState(false);
	const [commentonItem, setCommentonItem] = useState("");
	const [TCWarmingMessage, setTCWarmingMessage] = useState(false);
	const [formData, setFormData] = useState("");
	const [coresize, setCoresize] = useState("");

	const {
		types,
		characteristics,
		tolerance,
		tcr,
		shape,
		warehouse,
		customer,
		wattageToCore,
		formtype,
		loading,
		coresizetoleadtodia,
		editableField = {},
		leaddia,
		leadlength,
	} = useSelector(state => ({
		types: state.context.types?.rows,
		characteristics: state.context.characteristics?.rows,
		tolerance: state.context.tolerances?.rows,
		tcr: state.context.tcrs?.rows,
		shape: state.context.shapes?.rows,
		warehouse: state.context.warehouse?.rows,
		customer: state.context.customers?.rows,
		wattageToCore: state.context?.wattagestocoresize?.rows,
		formtype: state.context.formtypes?.rows,
		coresizetoleadtodia: state.context.coresizetoleadtodia?.rows,
		loading: state.context.loading,
		editableField: state?.configs?.itemEditFields,
		leaddia: state.context.leaddias?.rows,
		leadlength: state.context.leadlengths?.rows,
	}));
	const wattagesDropDown = wattageToCore?.map(item => {
		return { label: item.label, value: item.id };
	});
	const formtypeDropDown = formtype
		?.filter(item => item.visible)
		?.sort((a, b) => a.code - b.code)
		?.map(item => {
			return { label: item?.code + "-" + item.label, value: item.id };
		});

	const typesDropDown = types?.map(item => {
		return { label: item.label, value: item.id };
	});
	const characteristicsDropDown = characteristics?.map(item => {
		return { label: item.label, value: item.label, key: item.id };
	});
	const shapeLabelToId = label => {
		const ids = shapeDropDown?.find(item => item.label === label);
		return ids?.key;
	};
	const characteristicsLabelToId = label => {
		const ids = characteristicsDropDown?.find(item => item.label === label);
		return ids?.key;
	};

	const toleranceDropDown = tolerance?.map(item => {
		return { label: item.label, value: item.id };
	});
	const tcrDropDown = tcr?.map(item => {
		return { label: item.label, value: item.id };
	});
	const shapeDropDown = shape?.map(item => {
		return { label: item.label, value: item.label, key: item.id };
	});
	const warehouseDropDown = warehouse?.map(item => {
		return { label: item.label, value: item.id };
	});
	const customerDropDown = customer?.map(item => {
		return { label: item?.name, value: item?.id };
	});

	const setCoreSizeFn = (value, coresizeid, setValue) => {
		const _coresizeObject = wattageToCore?.find(item => item.id === value);
		const _coresizedropdown = _coresizeObject?.all_wattages_core?.map(item => {
			return {
				value: item?.coresizeid,
				label: item?.wattage_to_coresizes.label,
			};
		});

		const coreSizeExist = _coresizedropdown?.find(
			ele => ele.value === coresizeid
		);

		if (!coreSizeExist && setValue) {
			setValue("coresize", "");
		}

		let _coresizedropdownValue = _coresizedropdown?.[0]
			? _coresizedropdown[0].value
			: "";

		if (defaultValues.coresize && Array.isArray(_coresizedropdown)) {
			if (_coresizedropdown.some(el => el.value === defaultValues.coresize)) {
				_coresizedropdownValue = defaultValues.coresize;
			}
		}

		setCoreSizeDropDown(_coresizedropdown);
		setLeadLengthAndDiaFn(_coresizedropdownValue);
	};

	const setLeadLengthAndDiaFn = value => {
		if (!value) return;
		setCoresize(value);
	};

	const shapeIdToLabel = value => {
		const _id = shapeDropDown?.find(item => item.key === value);
		return _id?.label;
	};

	const characteristicsIdToLabel = value => {
		const _id = characteristicsDropDown?.find(item => item.key === value);
		return _id?.label;
	};

	const defaultValuesModify = () => {
		let _defaultValues = { ...defaultValues };
		_defaultValues.shape = shapeIdToLabel(defaultValues.shape);
		_defaultValues.characteristics = characteristicsIdToLabel(
			defaultValues?.characteristics
		);

		_defaultValues.orderDate = _defaultValues?.orderDate
			? new Date(_defaultValues?.orderDate)
			: "";

		_defaultValues.scheduleDate = _defaultValues?.scheduleDate
			? new Date(_defaultValues?.scheduleDate)
			: "";

		_defaultValues.commitedDate = _defaultValues?.commitedDate
			? new Date(_defaultValues?.commitedDate)
			: "";

		_defaultValues.coresize = coresize;

		return _defaultValues;
	};

	const onSubmit = async value => {
		if (value.itemStatus !== "PENDING") {
			if (commentonItem === "") {
				setcommentError(true);
				return;
			}
		}
		setFormData(value);
		SubmitTheForm(value, true);
	};
	const SubmitTheForm = async (val, arg) => {
		let updateValue = arg === true ? val : formData;
		let value = updateValue;
		updateValue["remark"] = commentonItem;
		if (updateValue["shape"]) {
			updateValue["shape"] = shapeLabelToId(updateValue["shape"]);
		}
		if (updateValue["characteristics"]) {
			updateValue["characteristics"] = characteristicsLabelToId(
				updateValue["characteristics"]
			);
		}
		for (const key in updateValue) {
			if (!updateValue[key]) delete updateValue[key];
		}
		const res = await updateSalesItem(getURL(`salesitem/item/${value.id}`), {
			method: "PUT",
			body: JSON.stringify(updateValue),
		});

		if (res && res.status === 200) {
			setTCWarmingMessage(false);
			setOpened(false);
			setFormData("");

			message.success({
				message: translate(`UpdateSalesOrderMessage`),
			});
			getAllSalesItems(value?.orderid);
		}
	};
	const ModelAlertStyleObj = {
		drawer: { background: "rgb(248, 249, 250)" },
		title: { color: "orange", fontWeight: "600" },
		header: {
			padding: "14px",
			marginRight: "0px",
			borderRadius: "8px 8px 0px 0px",
			borderBottom: "2px solid orange",
		},

		body: {
			padding: "4px 16px 16px 16px",
		},
		close: {
			"&:hover": {
				color: "red",
			},
		},
	};
	useEffect(() => {
		if (opened && !loading && defaultValues.wattage) {
			setCoreSizeFn(defaultValues.wattage);
		}
	}, [defaultValues.wattage, opened]);

	useEffect(() => {
		if (opened) getItemEditFields(defaultValues?.id);
	}, [opened]);

	const ModelStyleObj = {
		drawer: { background: "rgb(248, 249, 250)" },
		closeButton: {
			color: "#ffff",
			"&:hover": {
				color: "red",
			},
		},

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

		body: {
			paddingBottom: ".5rem",
			paddingLeft: ".5rem",
			paddingRight: ".5rem",
		},
	};
	const alertTitle = (
		<div style={{ display: "flex", alignItems: "center" }}>
			<MdErrorOutline
				style={{ width: "20px", height: "20px", paddingRight: "4px" }}
			/>{" "}
			ALERT
		</div>
	);
	useEffect(() => {
		if (commentonItem && commentonItem !== "") {
			setcommentError(false);
		}
	}, [commentonItem]);
	const PPlanner = localStorage.getItem("active_role") === "PRODUCTIONPL";

	const allTcsInPending = useMemo(() => {
		const issueTcsStatus = defaultValues.issueTcItem.map(
			item => item.tcMapper.status === "PENDING"
		);
		return issueTcsStatus.every(i => i === true);
	}, [defaultValues]);

	const isEditable = defaultValues.itemStatus === "INPRODUCTION";

	const leaddiaDropDown = leaddia
		?.filter(item => item.visible)
		?.map(item => {
			return { label: item.label, value: item.id };
		});
	const leadlengthDropDown = leadlength
		?.filter(item => item.visible)
		?.map(item => {
			return { label: item.label, value: item.id };
		});

	return (
		<>
			{!PPlanner && (
				<Tooltip label="Edit">
					<ActionIcon
						color="blue"
						variant="transparent"
						onClick={() => {
							isEditable ? setTCWarmingMessage(true) : setOpened(true);
						}}>
						<AiFillEdit size={22} />
					</ActionIcon>
				</Tooltip>
			)}
			<Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				size={"100%"}
				opened={opened}
				className="updateItemModel"
				onClose={() => setOpened(false)}
				title="Update Item">
				<SalesItemEditForm
					commentonItem={commentonItem}
					id={defaultValues?.id}
					setCommentonItem={setCommentonItem}
					setcommentError={setcommentError}
					commentError={commentError}
					schema={updateItemSchema}
					editableField={editableField}
					defaultValues={defaultValuesModify(defaultValues)}
					onSubmit={onSubmit}
					setLeadLengthAndDiaFn={setLeadLengthAndDiaFn}
					setCoreSizeFn={setCoreSizeFn}
					contextData={{
						typesDropDown,
						characteristicsDropDown,
						toleranceDropDown,
						tcrDropDown,
						shapeDropDown,
						warehouseDropDown,
						customerDropDown,
						wattagesDropDown,
						coresizeDropDown,
						leaddiaDropDown,
						leadlengthDropDown,
						formtypeDropDown,
					}}
				/>
			</Modal>

			<Modal
				radius={8}
				padding={0}
				styles={ModelAlertStyleObj}
				size="auto"
				opened={TCWarmingMessage}
				onClose={() => {
					setTCWarmingMessage(false);
				}}
				title={alertTitle}>
				<div>
					<Text mt={16} mb={16}>
						{allTcsInPending ? (
							<span>
								TCs have been issued, please contact RM Storekeeper before
								proceeding
							</span>
						) : (
							<span>
								TCs are in Production, please contact RM storekeeper before
								proceeding.
							</span>
						)}
					</Text>
					<div
						style={{ display: "flex", justifyContent: "right", gap: "1rem" }}>
						<Button
							onClick={() => {
								setOpened(true);
								setTCWarmingMessage(false);
							}}
							mt={"sm"}>
							Proceed
						</Button>
						<Button
							onClick={() => {
								setTCWarmingMessage(false);
							}}
							color="red"
							mt={"sm"}>
							Close
						</Button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default EditItem;
