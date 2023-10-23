import { yupResolver } from "@hookform/resolvers/yup";
import {
	Button,
	Center,
	Container,
	NumberInput,
	Radio,
	RadioGroup,
	Select,
	Text,
	Textarea,
	TextInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Form from "../../component/Form";
import { editableFields } from "./helper/editableFields";
import "./SalesItemEditForm.css";
import { todayDateStyle } from "../../utils/todayDateBg";
import { useSelector } from "react-redux";

const SalesItemEditForm = ({
	id,
	defaultValues,
	onSubmit,
	schema,
	contextData,
	editableField,
	setCoreSizeFn,
	setLeadLengthAndDiaFn,
	setCommentonItem = () => {},
	setcommentError = () => {},
	commentonItem,
	commentError = false,
}) => {
	const form = useForm({ resolver: yupResolver(schema), defaultValues });
	const { control, handleSubmit, setValue, getValues } = form;
	const [showCssClass, setshowCssClass] = useState(true);
	const [tcrDropDown, setTcrDropDown] = useState([]);

	const { coresizetoleadtodia } = useSelector(state => ({
		coresizetoleadtodia: state.context.coresizetoleadtodia?.rows,
	}));

	const shape = useWatch({ control, name: "shape" });

	useEffect(() => {
		if (defaultValues?.orderType === "Traded") {
			setshowCssClass(true);
		} else {
			setshowCssClass(false);
		}
	}, [defaultValues]);

	// useEffect(() => {
	// 	if (!defaultValues) return;
	// 	setValue("leaddia", defaultValues.leaddia);
	// 	setValue("coresize", defaultValues.coresize);
	// 	setValue("leadlength", defaultValues.leadlength);
	// }, [defaultValues]);

	// useEffect(() => {
	// 	if (!defaultValues) return;
	// 	getItemEditFields(id);
	// }, [defaultValues]);

	const onChangeWattageHandler = (value, coresizeid, setValue) => {
		setValue("wattage", value);
		setCoreSizeFn(value, coresizeid, setValue);
	};

	const coreSizeChanges = value => {
		setValue("coresize", value);
		const _find = coresizetoleadtodia.find(item => {
			return item.coresizeid === value;
		});
		if (_find) {
			setValue(`leaddia`, _find.leaddiaid);
			setValue(`leadlength`, _find.leadlengthid);
		}
	};

	const typeIdToLabel = id => {
		let label = "";
		contextData.typesDropDown?.find(item => {
			if (item.value === id) {
				label = item.label;
			}
		});
		return label;
	};

	const TypeChanges = value => {
		setValue(`type`, value);
		let mappedData = [];
		if (
			typeIdToLabel(value) === "Metal Film Resistor" ||
			typeIdToLabel(value) === "Metal Glaze d Resistor"
		) {
			setValue(`tcr`, "");
			mappedData = contextData.tcrDropDown?.map(item => {
				if (item.label === "NA") {
					item.disabled = true;
					return item;
				}
				return item;
			});
		} else {
			mappedData = contextData.tcrDropDown?.map(item => {
				if (item.label === "NA") {
					item.disabled = false;
					return item;
				}
				return item;
			});
		}
		setTcrDropDown(mappedData);
	};

	useEffect(() => {
		let mappedData = [];
		if (
			typeIdToLabel(defaultValues.type) === "Metal Film Resistor" ||
			typeIdToLabel(defaultValues.type) === "Metal Glaze d Resistor"
		) {
			mappedData = contextData.tcrDropDown?.map(item => {
				if (item.label === "NA") {
					item.disabled = true;
					return item;
				}
				return item;
			});
		} else {
			mappedData = contextData.tcrDropDown?.map(item => {
				if (item.label === "NA") {
					item.disabled = false;
					return item;
				}
				return item;
			});
		}
		setTcrDropDown(mappedData);
	}, []);

	return (
		<>
			<div className={`${showCssClass ? "SalesItemEditForm" : "tradedItem"}`}>
				<Container fluid px={12} py={12}>
					<Form form={form} onSubmit={handleSubmit(onSubmit)}>
						{defaultValues?.orderType === "Traded" ? (
							<Form.Group group>
								<Form.Item
									name={`orderquantity`}
									label="Order Quantity"
									required={true}
									mb="sm">
									<NumberInput
										disabled={!editableField?.orderquantity}
										min={0}
										step={1}
									/>
								</Form.Item>
								<Form.Item
									name={`customerPartNo`}
									label="Customer Part No."
									mb="sm">
									<TextInput type="text" placeholder="Enter Customer Part No" />
								</Form.Item>
								<Form.Item name={`partNo`} label="Part No." mb="sm">
									<TextInput
										disabled={!editableField?.partNo}
										type="text"
										placeholder="Enter Part No"
									/>
								</Form.Item>
								<Form.Item
									name={`warehouse`}
									label="Warehouse"
									required={true}
									mb="sm">
									<Select
										disabled={!editableField?.warehouse}
										searchable
										allowDeselect={true}
										placeholder="Pick one"
										data={contextData?.warehouseDropDown || []}
									/>
								</Form.Item>{" "}
								<Form.Item
									name={`price`}
									label="Price/100 p"
									required={true}
									mb="sm">
									<NumberInput precision="2" placeholder="Enter Price/100 p" />
								</Form.Item>
								<Form.Item
									name={`orderDate`}
									label="Order Date"
									required={true}
									mb="sm">
									<DatePicker
										dayStyle={date => todayDateStyle(date)}
										disabled={!editableField?.orderDate}
										placeholder="Pick date"
										required
									/>
								</Form.Item>
								<Form.Item
									name={`scheduleDate`}
									label="Schedule Delivery Date"
									mb="sm">
									<DatePicker
										dayStyle={date => todayDateStyle(date)}
										disabled={!editableField?.scheduleDate}
										placeholder="Pick date"
										required
									/>
								</Form.Item>
								<Form.Item name={`commitedDate`} label="Commited Date" mb="sm">
									<DatePicker
										dayStyle={date => todayDateStyle(date)}
										disabled={!editableField?.commitedDate}
										placeholder="Pick date"
									/>
								</Form.Item>
							</Form.Group>
						) : (
							<div wrapped>
								<Form.Group group nowrap>
									<Text
										style={{
											fontWeight: "500",
											color: "black",
										}}
										size="xs"
										required>
										TC Type:
									</Text>
									<Form.Item name={`tctype`} required={true} mb="sm">
										<RadioGroup
											disabled={!editableField?.tctype}
											required
											size="xs">
											<Radio
												disabled={!editableField?.tctype}
												style={{
													fontWeight: "500",
													color: "black",
												}}
												value="miniature"
												label="Miniature"
											/>
											<Radio
												disabled={!editableField?.tctype}
												style={{
													fontWeight: "500",
													color: "black",
												}}
												value="regular"
												label="Regular"
											/>
										</RadioGroup>
									</Form.Item>
								</Form.Group>

								<Form.Group group>
									<Form.Item
										name={`wattage`}
										label="Watt"
										required={true}
										mb="sm">
										<Select
											disabled={!editableField?.wattage}
											searchable
											allowDeselect={true}
											placeholder="Pick one"
											size="sm"
											onChange={value => {
												const [wattageid, coresizeid] = getValues([
													`wattage`,
													`coresize`,
												]);
												onChangeWattageHandler(value, coresizeid, setValue);
											}}
											data={contextData?.wattagesDropDown || []}
										/>
									</Form.Item>
									<Form.Item name={`type`} label="Type" required={true} mb="sm">
										<Select
											disabled={!editableField?.type}
											searchable
											allowDeselect={true}
											placeholder="Pick one"
											data={contextData?.typesDropDown || []}
											onChange={value => TypeChanges(value)}
										/>
									</Form.Item>
									<Form.Item
										name={`characteristics`}
										label="Characteristics"
										required={true}
										mb="sm">
										<Select
											disabled={!editableField?.characteristics}
											searchable
											allowDeselect={true}
											placeholder="Pick one"
											data={contextData?.characteristicsDropDown || []}
										/>
									</Form.Item>

									<Form.Item
										name={`tolerance`}
										label="Tolerance"
										required={true}
										mb="sm">
										<Select
											disabled={!editableField?.tolerance}
											searchable
											allowDeselect={true}
											placeholder="Pick one"
											data={contextData?.toleranceDropDown || []}
										/>
									</Form.Item>

									<Form.Item name={`ohms`} label="Ohms" required={true} mb="sm">
										<NumberInput
											disabled={!editableField?.ohms}
											precision={2}
											min={0}
											step={1}
										/>
									</Form.Item>

									<Form.Item name={`unit`} label="Unit" required={true} mb="sm">
										<Select
											disabled={!editableField?.unit}
											searchable
											allowDeselect={true}
											placeholder="Pick one"
											data={["R", "K", "M"]}
										/>
									</Form.Item>
								</Form.Group>

								<Form.Group grid={6}>
									<Form.Item
										name={`coresize`}
										label="Core Size"
										required={true}
										mb="sm">
										<Select
											disabled={!editableField?.coresize}
											searchable
											allowDeselect={true}
											placeholder="Pick one"
											onChange={value => coreSizeChanges(value)}
											data={contextData?.coresizeDropDown || []}
										/>
									</Form.Item>
									<Form.Item
										name={`surge`}
										label="Surge"
										required={true}
										mb="sm">
										<NumberInput
											disabled={!editableField?.surge}
											precision={2}
											min={0}
											max={99}
											step={1}
										/>
									</Form.Item>
									<Form.Item name={`tcr`} label="TCR" required={true} mb="sm">
										<Select
											disabled={!editableField?.tcr}
											searchable
											allowDeselect={true}
											placeholder="Pick one"
											data={tcrDropDown || []}
										/>
									</Form.Item>
									<Form.Item
										name={`shape`}
										label="Shape"
										required={true}
										mb="sm">
										<Select
											disabled={!editableField?.shape}
											searchable
											allowDeselect={true}
											placeholder="Pick one"
											data={contextData?.shapeDropDown || []}
										/>
									</Form.Item>

									{shape === "Standard Axial" ? (
										<Form.Item
											name={`leaddia`}
											label="Lead Dia"
											required={true}
											mb="sm">
											<Select
												disabled={!editableField?.leaddia}
												searchable
												allowDeselect={true}
												placeholder="Pick one"
												data={contextData?.leaddiaDropDown || []}
											/>
										</Form.Item>
									) : null}

									{shape === "Standard Axial" ? (
										<Form.Item
											name={`leadlength`}
											label="Lead Length"
											required={true}
											mb="sm">
											<Select
												disabled={!editableField?.leadlength}
												searchable
												allowDeselect={true}
												placeholder="Pick one"
												data={contextData.leadlengthDropDown || []}
											/>
										</Form.Item>
									) : null}

									{shape === "Formed" ? (
										<Form.Item
											name={`formType`}
											label="Form Type"
											required={true}
											mb="sm"
											span={2}>
											<Select
												disabled={!editableField?.formType}
												searchable
												allowDeselect={true}
												placeholder="Pick one"
												data={contextData.formtypeDropDown || []}
											/>
										</Form.Item>
									) : null}
								</Form.Group>

								<Form.Group group>
									<Form.Item
										name={`orderquantity`}
										label="Order Quantity"
										required={true}
										mb="sm">
										<NumberInput
											disabled={!editableField?.orderquantity}
											min={0}
											step={1}
										/>
									</Form.Item>
									<Form.Item
										name={`customerPartNo`}
										label="Customer Part No."
										mb="sm">
										<TextInput
											type="text"
											placeholder="Enter Customer Part No"
										/>
									</Form.Item>
									<Form.Item
										name={`warehouse`}
										label="Warehouse"
										required={true}
										mb="sm">
										<Select
											disabled={!editableField?.warehouse}
											searchable
											allowDeselect={true}
											placeholder="Pick one"
											data={contextData?.warehouseDropDown || []}
										/>
									</Form.Item>{" "}
									<Form.Item
										name={`price`}
										label="Price/100 p"
										required={true}
										mb="sm">
										<NumberInput
											precision="2"
											placeholder="Enter Price/100 p"
										/>
									</Form.Item>
									<Form.Item
										name={`orderDate`}
										label="Order Date"
										required={true}
										mb="sm">
										<DatePicker
											dayStyle={date => todayDateStyle(date)}
											defaultValue={defaultValues?.orderDate}
											disabled={!editableField?.orderDate}
											placeholder="Pick date"
											required
										/>
									</Form.Item>
									<Form.Item
										name={`scheduleDate`}
										label="Schedule Delivery Date"
										mb="sm">
										<DatePicker
											dayStyle={date => todayDateStyle(date)}
											disabled={!editableField?.scheduleDate}
											placeholder="Pick date"
											required
										/>
									</Form.Item>
									<Form.Item
										name={`commitedDate`}
										label="Commited Date"
										mb="sm">
										<DatePicker
											dayStyle={date => todayDateStyle(date)}
											disabled={!editableField?.commitedDate}
											placeholder="Pick date"
										/>
									</Form.Item>
								</Form.Group>
							</div>
						)}
						<div style={{ marginBottom: "1rem" }}>
							<Textarea
								label="Comment"
								onChange={e => {
									setCommentonItem(e.target.value);
								}}
								style={{
									width: "100%",
								}}
								type="text"
								placeholder="Enter Comment ..."
							/>{" "}
							{commentError && (
								<Text size="sm" color="red">
									remark required!
								</Text>
							)}
						</div>

						<Center>
							{" "}
							<Button type="submit">SAVE</Button>
						</Center>
					</Form>
				</Container>
			</div>
			{/* <Modal
				radius={8}
				padding={0}
				styles={ModelStyleObj}
				opened={commentError}
				size={"50%"}
				onClose={() => setcommentError(false)}>
				<h3
					style={{
						fontWeight: 500,
					}}>
					Comments are mandatory for updating an Item.
				</h3>
				<div
					style={{
						display: "flex",
						justifyContent: "flex-end",
					}}>
					<Button onClick={() => setcommentError(false)}>Cancel</Button>
				</div>
			</Modal> */}
		</>
	);
};

export default SalesItemEditForm;
