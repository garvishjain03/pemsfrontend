import { yupResolver } from "@hookform/resolvers/yup";
import {
	ActionIcon,
	Button,
	Center,
	Container,
	Image,
	NumberInput,
	Radio,
	RadioGroup,
	Select,
	Switch,
	Text,
	TextInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { MdDelete, MdOutlineAddCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import ImagesAssest from "../../assets";
import Form from "../../component/Form";
import { todayDateStyle } from "../../utils/todayDateBg";

const CustomerOrderDetailForm = ({
	disableButton,
	defaultValues,
	onSubmit,
	schema,
	leaded,
	setLeadedFn,
	contextData,
	setCoreSizeFn,
	createLoading,
	visibleOrderForm = true,
	showOrderForm = true,
	DataPickerPopover,
	setDataPickerPopover = () => {},
}) => {
	const form = useForm({ resolver: yupResolver(schema), defaultValues });
	const { control, handleSubmit, getValues, setValue } = form;
	const { fields, append, remove } = useFieldArray({
		control,
		name: "array",
	});

	const arrayWatch = useWatch({
		control,
		name: "array",
	});

	const typeIdToLabel = id => {
		let label = "";
		contextData.typesDropDown?.find(item => {
			if (item.value === id) {
				label = item.label;
			}
		});
		return label;
	};

	const { coresizetoleadtodia, tcr } = useSelector(state => ({
		coresizetoleadtodia: state.context.coresizetoleadtodia?.rows,
		tcr: state.context.tcrs?.rows,
	}));

	const tcrLabelToId = label => {
		let id = "";
		tcr?.map(item => {
			if (item.label === label) id = item.id;
		});
		return id;
	};

	const coreSizeChanges = (key, value) => {
		setValue(`array.${key}.coresize`, value);

		const _find = coresizetoleadtodia.find(item => {
			return item.coresizeid === value;
		});

		if (_find) {
			setValue(`array.${key}.leaddia`, _find.leaddiaid);
			setValue(`array.${key}.leadlength`, _find.leadlengthid);
		}
	};

	const TypeChanges = (key, value) => {
		setValue(`array.${key}.type`, value);

		if (
			typeIdToLabel(value) === "Metal Film Resistor" ||
			typeIdToLabel(value) === "Metal Glaze d Resistor"
		) {
			setValue(`array.${key}.tcr`, "");
			contextData.tcrDropDown?.forEach(item => {
				if (item.label === "NA") {
					item.disabled = true;
				}
			});
		} else {
			contextData.tcrDropDown?.forEach(item => {
				if (item.label === "NA") {
					item.disabled = false;
				}
			});
		}
	};

	return (
		<>
			<Container fluid px={10}>
				<div
				// onClick={() => {
				// 	if (
				// 		DataPickerPopover[0] ||
				// 		DataPickerPopover[1] ||
				// 		DataPickerPopover[2]
				// 	)
				// 		setDataPickerPopover([false, false, false]);
				// }}
				>
					<Form form={form} onSubmit={handleSubmit(onSubmit)}>
						{visibleOrderForm && (
							<Form.Group group shadow>
								<Form.Item
									name={`customer`}
									label="Customer Name"
									required={true}
									mb="sm">
									<Select
										searchable
										allowDeselect={true}
										placeholder="Pick one"
										data={contextData?.customerDropDown || []}
									/>
								</Form.Item>
								<Form.Item
									required={true}
									name={`customerOrderNumber`}
									label="PO Number"
									mb="sm">
									<TextInput type="text" placeholder="Enter PO Number" />
								</Form.Item>
								<Form.Item
									required={true}
									name={`paymentTerm`}
									label="Payment terms"
									mb="sm">
									<TextInput type="text" placeholder="Enter Payment terms" />
								</Form.Item>

								<Form.Item
									name={`orderDate`}
									required
									label="Order Date"
									mb="sm">
									<DatePicker
										clickOutsideEvents={["click"]}
										dayStyle={date => todayDateStyle(date)}
										disabled={!showOrderForm}
										required={true}
										onDropdownOpen={() => {
											setDataPickerPopover([true, false, false]);
										}}
										// dropdownOpened={DataPickerPopover[0]}
										placeholder="Pick date"
										// dayStyle={new Date()  => }
										onDropdownClose={() => {
											setDataPickerPopover([false, false, false]);
											fields.forEach((item, index) => {
												const orderDate = getValues("orderDate");

												setValue(`array.${index}.orderDate`, orderDate);
											});
										}}
									/>
								</Form.Item>
								<Form.Item
									name={`scheduleDate`}
									label="Schedule Delivery Date"
									mb="sm">
									<DatePicker
										clickOutsideEvents={["click"]}
										dayStyle={date => todayDateStyle(date)}
										disabled={!showOrderForm}
										onDropdownOpen={() => {
											setDataPickerPopover([false, true, false]);
										}}
										// dropdownOpened={DataPickerPopover[1]}
										placeholder="Pick date"
										onDropdownClose={() => {
											setDataPickerPopover([false, false, false]);
											fields.forEach((item, index) => {
												const scheduleDate = getValues("scheduleDate");

												setValue(`array.${index}.scheduleDate`, scheduleDate);
											});
										}}
									/>
								</Form.Item>
								<Form.Item name={`commitedDate`} label="Commited Date" mb="sm">
									<DatePicker
										clickOutsideEvents={["click"]}
										dayStyle={date => todayDateStyle(date)}
										disabled={!showOrderForm}
										onDropdownOpen={() => {
											setDataPickerPopover([false, false, true]);
										}}
										// dropdownOpened={DataPickerPopover[2]}
										placeholder="Pick date"
										onDropdownClose={() => {
											setDataPickerPopover([false, false, false]);
											fields.forEach((item, index) => {
												const commitedDate = getValues("commitedDate");

												setValue(`array.${index}.commitedDate`, commitedDate);
											});
										}}
									/>
								</Form.Item>
							</Form.Group>
						)}

						{showOrderForm &&
							fields &&
							fields.map((field, index) => {
								return leaded[field.id] ? (
									<div wrapped key={field.id} shadow>
										<Form.Group group position>
											<Form.Item
												name={`array.${index}.itemType`}
												required={true}
												mb="sm">
												<Switch
													checked={leaded[field.id]}
													mt={3.33}
													size="xs"
													label={leaded[field.id] ? "Traded" : "Manufactured"}
													onChangeCapture={e =>
														setLeadedFn(field.id, e.currentTarget.checked)
													}
													style={{ justifyContent: "flex-end" }}
												/>
											</Form.Item>
											<ActionIcon
												color="blue"
												onClick={() => {
													append({
														itemType: false,
														orderDate: getValues("orderDate"),
														commitedDate: getValues("commitedDate"),
														scheduleDate: getValues("scheduleDate"),
														shape: "Standard Axial",
														characteristics: "Standard",
														tctype: "regular",
														tcr: tcrLabelToId("NA"),
													});
												}}
												style={{ maxWidth: "28px" }}>
												<MdOutlineAddCircle size={20} />
											</ActionIcon>
											<ActionIcon
												color="red"
												onClick={() => remove(index)}
												disabled={fields.length === 1}
												style={{ maxWidth: "28px" }}>
												<MdDelete size={20} />
											</ActionIcon>
										</Form.Group>

										<Form.Group group>
											<Form.Item
												name={`array.${index}.orderquantity`}
												label="Order Quantity"
												required={true}
												mb="sm">
												<NumberInput min={0} step={1} />
											</Form.Item>

											<Form.Item
												name={`array.${index}.customerPartNo`}
												label="Customer Part No."
												placeholder="Enter Customer Part No"
												mb="sm">
												<TextInput
													type="text"
													placeholder="Enter Order Number"
												/>
											</Form.Item>
											<Form.Item
												name={`array.${index}.partNo`}
												label="Part No."
												required={true}
												mb="sm">
												<TextInput type="text" placeholder="Enter Part No" />
											</Form.Item>

											<Form.Item
												name={`array.${index}.warehouse`}
												label="Warehouse"
												required={true}
												mb="sm">
												<Select
													searchable
													allowDeselect={true}
													placeholder="Pick one"
													data={contextData?.warehouseDropDown || []}
												/>
											</Form.Item>
											<Form.Item
												name={`array.${index}.price`}
												label="Price/100 p"
												required={true}
												mb="sm">
												<NumberInput
													precision="2"
													placeholder="Enter Price/100 p"
												/>
											</Form.Item>
											<Form.Item
												name={`array.${index}.orderDate`}
												label="Order Date"
												required={true}
												mb="sm">
												<DatePicker
													clickOutsideEvents={["click"]}
													placeholder="Pick date"
													required
													dayStyle={date => todayDateStyle(date)}
												/>
											</Form.Item>

											<Form.Item
												name={`array.${index}.scheduleDate`}
												label="Schedule Delivery Date"
												mb="sm">
												<DatePicker
													clickOutsideEvents={["click"]}
													placeholder="Pick date"
													required
													dayStyle={date => todayDateStyle(date)}
												/>
											</Form.Item>

											<Form.Item
												name={`array.${index}.commitedDate`}
												label="Commited Date"
												mb="sm">
												<DatePicker
													clickOutsideEvents={["click"]}
													placeholder="Pick date"
													dayStyle={date => todayDateStyle(date)}
												/>
											</Form.Item>
										</Form.Group>
									</div>
								) : (
									<div wrapped key={field.id} shadow>
										<Form.Group group>
											<div wrapped>
												<Text
													style={{
														fontWeight: "500",
														color: "black",
													}}
													size="xs"
													mr="sm"
													required>
													TC Type:
												</Text>
												<Form.Item
													name={`array.${index}.tctype`}
													required={true}
													mb="sm">
													<RadioGroup required size="xs">
														<Radio
															style={{
																fontWeight: "500",
																color: "black",
															}}
															value="miniature"
															label="Miniature"
														/>

														<Radio
															style={{
																fontWeight: "500",
																color: "black",
															}}
															value="regular"
															label="Regular"
														/>
													</RadioGroup>
												</Form.Item>
											</div>
											<div wrapped position="right">
												<Form.Item
													name={`array.${index}.itemType`}
													required={true}
													mb="sm">
													<Switch
														checked={leaded[field.id]}
														mt={3.33}
														size="xs"
														label={leaded[field.id] ? "Traded" : "Manufactured"}
														onChangeCapture={e =>
															setLeadedFn(field.id, e.currentTarget.checked)
														}
														style={{ justifyContent: "flex-end" }}
													/>
												</Form.Item>
												<ActionIcon
													color="blue"
													onClick={() => {
														append({
															itemType: false,
															characteristics: "",
															orderDate: getValues("orderDate"),
															commitedDate: getValues("commitedDate"),
															scheduleDate: getValues("scheduleDate"),
															shape: "Standard Axial",
															characteristics: "Standard",
															tctype: "regular",
															tcr: tcrLabelToId("NA"),
														});
													}}
													style={{ maxWidth: "28px" }}>
													<MdOutlineAddCircle size={20} />
												</ActionIcon>
												<ActionIcon
													color="red"
													onClick={() => remove(index)}
													disabled={fields.length === 1}
													style={{ maxWidth: "28px" }}>
													<MdDelete size={20} />
												</ActionIcon>
											</div>
										</Form.Group>
										<Form.Group group>
											<Form.Item
												name={`array.${index}.wattage`}
												label="Watt"
												required={true}
												mb="sm">
												<Select
													searchable
													allowDeselect={true}
													placeholder="Pick one"
													size="sm"
													onDropdownClose={() => {
														const [wattageid, coresizeid] = getValues([
															`array.${index}.wattage`,
															`array.${index}.coresize`,
														]);
														setCoreSizeFn(
															field.id,
															wattageid,
															coresizeid,
															setValue,
															index
														);
													}}
													data={contextData?.wattagesDropDown || []}
												/>
											</Form.Item>
											<Form.Item
												name={`array.${index}.type`}
												label="Type"
												required={true}
												mb="sm">
												<Select
													searchable
													allowDeselect={true}
													placeholder="Pick one"
													onChange={value => TypeChanges(index, value)}
													data={contextData?.typesDropDown || []}
												/>
											</Form.Item>
											<Form.Item
												name={`array.${index}.characteristics`}
												label="Characteristics"
												required={true}
												mb="sm">
												<Select
													searchable
													allowDeselect={true}
													placeholder="Pick one"
													data={contextData?.characteristicsDropDown || []}
												/>
											</Form.Item>

											<Form.Item
												name={`array.${index}.tolerance`}
												label="Tolerance"
												required={true}
												mb="sm">
												<Select
													searchable
													allowDeselect={true}
													placeholder="Pick one"
													data={contextData?.toleranceDropDown || []}
												/>
											</Form.Item>

											<Form.Item
												name={`array.${index}.ohms`}
												label="Ohms"
												required={true}
												mb="sm">
												<NumberInput
													placeholder={0}
													precision={2}
													min={0}
													step={1}
												/>
											</Form.Item>

											<Form.Item
												name={`array.${index}.unit`}
												label="Unit"
												required={true}
												mb="sm">
												<Select
													searchable
													allowDeselect={true}
													placeholder="Pick one"
													data={["R", "K", "M"]}
												/>
											</Form.Item>
										</Form.Group>

										<Form.Group grid={6}>
											<Form.Item
												name={`array.${index}.coresize`}
												label="Core Size"
												required={true}
												mb="sm">
												<Select
													searchable
													allowDeselect={true}
													placeholder="Pick one"
													onChange={value => coreSizeChanges(index, value)}
													data={contextData?.coresizeDropDown[field.id] || []}
												/>
											</Form.Item>
											<Form.Item
												name={`array.${index}.surge`}
												label="Surge"
												required={true}
												mb="sm">
												<NumberInput
													placeholder={0}
													precision={2}
													min={0}
													step={1}
													max={99}
												/>
											</Form.Item>
											<Form.Item
												name={`array.${index}.tcr`}
												label="TCR"
												required={true}
												mb="sm">
												<Select
													searchable
													allowDeselect={true}
													placeholder="Pick one"
													data={contextData?.tcrDropDown || []}
												/>
											</Form.Item>
											<Form.Item
												name={`array.${index}.shape`}
												label="Shape"
												required={true}
												mb="sm">
												<Select
													searchable
													allowDeselect={true}
													placeholder="Pick one"
													data={contextData?.shapeDropDown || []}
												/>
											</Form.Item>

											{arrayWatch?.[`${index}`]?.["shape"] ===
											"Standard Axial" ? (
												<Form.Item
													name={`array.${index}.leaddia`}
													label="Lead Dia"
													required={true}
													mb="sm">
													<Select
														searchable
														allowDeselect={true}
														placeholder="Pick one"
														data={contextData?.leaddiaDropDown || []}
													/>
												</Form.Item>
											) : null}

											{arrayWatch?.[`${index}`]?.["shape"] ===
											"Standard Axial" ? (
												<Form.Item
													name={`array.${index}.leadlength`}
													label="Lead Length"
													required={true}
													mb="sm">
													<Select
														searchable
														allowDeselect={true}
														placeholder="Pick one"
														data={contextData?.leadlengthDropDown || []}
													/>
												</Form.Item>
											) : null}

											{arrayWatch?.[`${index}`]?.["shape"] === "Formed" ? (
												<Form.Item
													name={`array.${index}.formType`}
													label="Form Type"
													required={true}
													mb="sm"
													span={2}>
													<Select
														searchable
														allowDeselect={true}
														placeholder="Pick one"
														data={contextData?.formtypeDropDown || []}
													/>
												</Form.Item>
											) : null}
										</Form.Group>

										<Form.Group group>
											<Form.Item
												name={`array.${index}.orderquantity`}
												label="Order Quantity"
												required={true}
												mb="sm">
												<NumberInput min={0} step={1} />
											</Form.Item>
											<Form.Item
												name={`array.${index}.customerPartNo`}
												label="Customer Part No."
												mb="sm">
												<TextInput
													type="text"
													placeholder="Enter Customer Part No"
												/>
											</Form.Item>

											<Form.Item
												name={`array.${index}.warehouse`}
												label="Warehouse"
												required={true}
												mb="sm">
												<Select
													searchable
													allowDeselect={true}
													placeholder="Pick one"
													data={contextData?.warehouseDropDown || []}
												/>
											</Form.Item>
											<Form.Item
												name={`array.${index}.price`}
												label="Price/100 p"
												required={true}
												mb="sm">
												<NumberInput
													precision="2"
													min={0.0}
													placeholder="Enter Price/100 p"
												/>
											</Form.Item>
											<Form.Item
												name={`array.${index}.orderDate`}
												label="Order Date"
												required={true}
												mb="sm">
												<DatePicker
													clickOutsideEvents={["click"]}
													placeholder="Pick date"
													required
													dayStyle={date => todayDateStyle(date)}
												/>
											</Form.Item>
											<Form.Item
												name={`array.${index}.scheduleDate`}
												label="Schedule Delivery Date"
												mb="sm">
												<DatePicker
													clickOutsideEvents={["click"]}
													placeholder="Pick date"
													required
													dayStyle={date => todayDateStyle(date)}
												/>
											</Form.Item>
											<Form.Item
												name={`array.${index}.commitedDate`}
												label="Commited Date"
												mb="sm">
												<DatePicker
													clickOutsideEvents={["click"]}
													placeholder="Pick date"
													dayStyle={date => todayDateStyle(date)}
												/>
											</Form.Item>
										</Form.Group>
									</div>
								);
							})}

						{showOrderForm && (
							<a
								href="#scrollToBottom"
								style={{
									display: "grid",
									justifyContent: "end",
								}}>
								<Image
									src={ImagesAssest.plusIcon}
									color="blue"
									onClick={() => {
										append({
											itemType: false,
											characteristics: "",
											orderDate: getValues("orderDate"),
											commitedDate: getValues("commitedDate"),
											scheduleDate: getValues("scheduleDate"),
											shape: "Standard Axial",
											characteristics: "Standard",
											tctype: "regular",
											tcr: tcrLabelToId("NA"),
										});
									}}
									style={{ maxWidth: "28px" }}
								/>

								{/* <ActionIcon
                color="blue"
                onClick={() => {
                append({
                	itemType: false,
                	characteristics: "",
                	orderDate: getValues("orderDate"),
                	commitedDate: getValues("commitedDate"),
                	scheduleDate: getValues("scheduleDate"),
                	shape: "Standard Axial",
                	characteristics: "Standard",
                	tctype: "regular",
                });
                }}
                style={{ maxWidth: "28px" }}>
                <MdOutlineAddCircle size={20} />
                </ActionIcon> */}
							</a>
						)}

						<Center>
							<Button
								type="submit"
								loading={createLoading}
								disabled={disableButton}>
								SAVE
							</Button>
						</Center>
					</Form>
				</div>
			</Container>
			<div id="scrollToBottom"></div>
		</>
	);
};

export default CustomerOrderDetailForm;
