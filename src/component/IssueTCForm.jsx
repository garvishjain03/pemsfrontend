import { yupResolver } from "@hookform/resolvers/yup";
import {
	ActionIcon,
	Button,
	Card,
	Drawer,
	Grid,
	Group,
	Input,
	Menu,
	Modal,
	NumberInput,
	Select,
	Text,
	Textarea,
	TextInput,
	Tooltip,
} from "@mantine/core";
import dayjs from "dayjs";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillCreditCard, AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
import {
	filmResistorSchema,
	wireWoundResistorSchema,
} from "../configs/formSchema.js/tcIssueFormSchema";
import { tcIssuedActionConfig } from "../configs/issueTcActionConfig";
import useFetch from "../hooks/useFetch";
import { getIssuedTc } from "../services/issuedTc";
import {
	getCount,
	getWorkOrders,
	getWorkorderShiftcount,
} from "../services/salesOrder";
import { getURL } from "../utils/apiURL";
import { message } from "../utils/message";
import { translate } from "../utils/translate";
import Form from "./FormV2";
import { alertTitle, ModelAlertStyleObj } from "./TcCancel";

const IssueTCForm = ({ data, edit = false }) => {
	const [tcModalOpened, setTcModalOpened] = useState(false);
	const [disableButton, setDisableButton] = useState(false);
	const [issueQuantityWarning, setIssueQuantityWarning] = useState(false);
	const [warningConfirmed, setWarningConfirmed] = useState(false);
	const [status, setStatus] = useState("");
	const [issueTC] = useFetch([]);
	const {
		types,
		tolerance,
		warehouse,
		wattages,
		characteristics,
		shape,
		coresize,
		leadDia,
		leadLength,
		formType,
		tcrs,
		workorderShiftCount,
	} = useSelector(state => ({
		types: state.context?.types?.rows,
		wattages: state.context?.wattages?.rows,
		tolerance: state.context?.tolerances?.rows,
		warehouse: state.context?.warehouse?.rows,
		shape: state.context?.shapes?.rows,
		characteristics: state.context.characteristics?.rows,
		coresize: state.context?.coresizes?.rows,
		leadDia: state.context?.leaddias?.rows,
		leadLength: state.context?.leadlengths?.rows,
		formType: state.context?.formtypes?.rows,
		tcrs: state.context?.tcrs?.rows,
		workorderShiftCount: state.orders?.workorderShiftCount,
	}));

	const defaultValue = useMemo(() => {
		return {
			basicValue: "",
			batch: "",
			binNo: "",
			grams: "",
			instruction: "",
			quantity: "",
			surge: "",
			windingType: "",
			windingWire: "",

			remark: "",
		};
	}, []);
	const itemData = useMemo(
		() => (edit ? data?.tcMapper[0]?.issueTcItem : data?.workorder_item),
		[data]
	);
	const typeIdToLabel = id => {
		let label = "";
		types?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};

	const schema =
		typeIdToLabel(itemData?.type) === "Wire Wound Resistor"
			? wireWoundResistorSchema(edit ? true : false, data?.status)
			: filmResistorSchema(edit ? true : false, data?.status);

	const form = useForm({ resolver: yupResolver(schema), defaultValue });
	const { reset, setValue } = form;

	const toleranceIdToLabel = id => {
		let label = "";
		tolerance?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};

	const characteristicsIdToLabel = id => {
		let label = "";
		characteristics?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};

	const wattageIdToLabel = id => {
		let label = "";
		wattages?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});

		return label;
	};
	const shapeIdToLabel = id => {
		let label = "";
		shape?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});

		return label;
	};

	const coreSizeIdToLabel = id => {
		let label = "";
		coresize?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};

	const tcrIdToLabel = id => {
		let label = "";
		tcrs?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};
	const formTypeIdToLabel = id => {
		let label = "";
		formType?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};
	const leadLengthIdToLabel = id => {
		let label = "";
		leadLength?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};
	const leadDiaIdToLabel = id => {
		let label = "";
		leadDia?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});

		return label;
	};

	const onSubmit = async value => {
		const totalIssuedTcCount = workorderShiftCount?.issuetcquantity;
		const remainingWorkOrderCount = parseInt(data?.qty) - totalIssuedTcCount;
		if (value?.quantity > remainingWorkOrderCount && !warningConfirmed) {
			setIssueQuantityWarning(true);
			return;
		} else {
			setIssueQuantityWarning(false);
		}
		setDisableButton(true);
		let tcData = {
			itemid: itemData.id,
			orderid: itemData.orderid,
			workorderid: data.id,
			status: "PENDING",
			quantity: value.quantity,
			quarter: "Q3",
			specialinstructions: value?.instruction,
		};

		if (typeIdToLabel(itemData?.type) === "Wire Wound Resistor") {
			tcData["wirediameter"] = value.wireDia;
			tcData["windingtype"] = value.windingType;
			tcData["windingwire"] = value.windingWire;
			if (edit) {
				tcData["remark"] = value.remark;
			}
		} else {
			tcData["binno"] = value.binNo;
			tcData["batchno"] = value.batch;
			tcData["grams"] = value.grams;
			tcData["basicvalue"] = value.basicValue;
			if (edit) {
				tcData["remark"] = value.remark;
			}
		}
		if (edit) {
			const res = await issueTC(getURL(`issuetc/${data?.id}`), {
				method: "PUT",
				body: JSON.stringify(tcData),
			});

			if (res && res.status === 200) {
				setTcModalOpened(false);
				reset({});
				getIssuedTc();
				getCount();
				message.success({ message: translate("IssueTC Update Succesfull") });
			} else {
				setDisableButton(false);
			}
		} else {
			const res = await issueTC(getURL(`issuetc`), {
				method: "POST",
				body: JSON.stringify({
					issuecombineTc: false,
					issuetc: [tcData],
				}),
			});

			if (res && res.status === 200) {
				setTcModalOpened(false);
				reset({});
				message.success({ message: translate("TC issued successfully") });
				getCount();
				if (window.location.pathname.includes("pendingworkorders")) {
					getWorkOrders("combine");
				} else {
					getWorkOrders();
				}
			} else {
				setDisableButton(false);
			}
		}
	};

	const headerColorhandler = (type, tcType, isButton) => {
		const typeLabel = typeIdToLabel(type);

		if (tcType === "regular") {
			if (typeLabel === "Metal Oxide Resistor")
				return isButton ? "#A5D8FF" : "#A5D8FF";
			else if (
				typeLabel === "Wire Wound Resistor" &&
				["Fusible High Surge", "Fusible"].includes(
					characteristicsIdToLabel(itemData?.characteristics)
				)
			) {
				return isButton ? "#FFDEEB" : "#FCC2D7";
			} else if (typeLabel === "Wire Wound Resistor") return "#ffffff";
			else return "#ffffff";
		} else {
			if (
				typeLabel === "Wire Wound Resistor" &&
				["Fusible High Surge", "Fusible"].includes(
					characteristicsIdToLabel(itemData?.characteristics)
				)
			)
				return isButton ? "#FFDEEB" : "#FCC2D7";

			if (typeLabel === "Wire Wound Resistor") return "#ffffff";
			else return isButton ? "yellow" : "#EEE41C";
		}
	};

	useEffect(() => {
		getWorkorderShiftcount(data?.id);
		if (tcModalOpened) {
			getWorkorderShiftcount(data?.id);
			setValue("basicValue", data?.basicvalue);
			setValue("grams", data?.grams);
			setValue("quantity", data?.quantity);
			setValue("batch", data?.batchno);
			setValue("binNo", data?.binno);
			setValue("instruction", data?.specialinstructions);
			setValue("quantity", data?.quantity);
			setValue("windingType", data?.windingtype);
			setValue("windingWire", data?.windingwire);
			setValue(
				"wireDia",
				typeof data?.wirediameter == "string"
					? parseFloat(data?.wirediameter)
					: data?.wirediameter
			);
		}
	}, [tcModalOpened]);

	function getQuarter(date) {
		// Get the month of the date.
		var month = date.getMonth();

		// Divide the month by 3 and add 1 to get the quarter.
		return "Q" + (Math.floor(month / 3) + 1);
	}

	return (
		<div>
			{edit ? (
				!(
					!tcIssuedActionConfig(data?.status) || data?.isAccepted === "YES"
				) && (
					<Tooltip label="Edit Tc">
						<ActionIcon
							color="#339af0"
							variant="transparent"
							onClick={() => {
								setTcModalOpened(true);
								setStatus(data?.status);
							}}>
							<AiFillEdit size={23} />
						</ActionIcon>
					</Tooltip>
				)
			) : (
				<Tooltip label="Issue TC">
					<ActionIcon
						color="#339af0"
						variant="transparent"
						disabled={["CANCELLED", "COMPLETED", "TCISSUEDCOMPLETED"].includes(
							data.status
						)}
						onClick={() => {
							setTcModalOpened(true);
						}}>
						<AiFillCreditCard size={29} />
					</ActionIcon>{" "}
				</Tooltip>
			)}
			<Drawer
				padding={0}
				styles={{
					drawer: {
						background: "rgb(248, 249, 250)",
					},
					closeButton: {
						color: "#ffff",
						"&:hover": {
							color: "red",
						},
					},

					title: {
						color: "#ffff",
						fontWeight: "600",
						width: "100%",
					},
					header: {
						padding: "10px",
						backgroundColor:
							headerColorhandler(itemData?.type, itemData?.tctype) === "#ffffff"
								? "#228BE6"
								: headerColorhandler(itemData?.type, itemData?.tctype),
						marginRight: "0px",
						zIndex: "1000 !important",
					},
				}}
				size="full"
				opened={tcModalOpened}
				onClose={() => setTcModalOpened(false)}
				title={
					<Group direction="row">
						<AiFillCreditCard size="24px" />
						{/* <Text>{edit ? "Edit TC" : "Issue TC"}</Text> */}
						<Text>Issue TC</Text>
					</Group>
				}>
				<Card
					style={{
						backgroundColor: headerColorhandler(
							itemData?.type,
							itemData?.tctype
						),
					}}
					shadow="sm"
					p="lg"
					mx="md"
					radius="md"
					withBorder>
					<Grid>
						<Grid.Col span={3}>
							<div style={{ display: "flex" }}>
								<strong>Part No : </strong>
								{itemData?.mpn}
							</div>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>TC Type : </strong>

								{itemData?.tctype?.toUpperCase()}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong> Date :</strong>{" "}
								{dayjs(data?.createdAt).format("DD/MM/YYYY")}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Quarter :</strong> {getQuarter(new Date())}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Workorder No :</strong>{" "}
								{edit ? (
									data.issuetctype === "COMBINE" ? (
										// data?.tcMapper?.map(
										// 		item => `${item.issueTcWorkorder?.workorderno}, `
										//   )
										<>
											<Text
												size="sm"
												style={{
													maxHeight: "28px",
													overflow: "hidden",
													display: "inline",
												}}>
												{data?.tcMapper?.[0]?.issueTcWorkorder?.workorderno}
											</Text>
											<Menu trigger="hover" size={"lg"}>
												{data?.tcMapper?.map((item, index) => (
													<Menu.Item key={index}>
														<Text>{item.issueTcWorkorder?.workorderno}</Text>
													</Menu.Item>
												))}
											</Menu>
										</>
									) : (
										data?.tcMapper[0]?.issueTcWorkorder?.workorderno
									)
								) : (
									data?.workorderno
								)}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Customer :</strong>
								{edit ? (
									data.issuetctype === "COMBINE" ? (
										<>
											<Text
												size="sm"
												style={{
													maxHeight: "28px",
													overflow: "hidden",
													display: "inline",
												}}>
												{data?.tcMapper?.[0]?.issueTcOrder?.customerName?.name}
											</Text>
											<Menu trigger="hover" size={"lg"}>
												{data?.tcMapper?.map((item, index) => (
													<Menu.Item key={index}>
														<Text>{item.issueTcOrder?.customerName?.name}</Text>
													</Menu.Item>
												))}
											</Menu>
										</>
									) : (
										data?.tcMapper[0]?.issueTcOrder?.customerName?.name
									)
								) : (
									data?.workorder_salesorder?.customerName?.name
								)}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Delivery Date :</strong>{" "}
								{dayjs(itemData?.commitedDate).format("DD/MM/YYYY")}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Order Quantity :</strong>{" "}
								{edit
									? data?.quantity?.toLocaleString("en-IN")
									: data?.qty?.toLocaleString("en-IN")}
							</Text>
						</Grid.Col>

						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Characteristics :</strong>{" "}
								{characteristicsIdToLabel(itemData?.characteristics)}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Wattage :</strong> {wattageIdToLabel(itemData?.wattage)}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Type :</strong> {typeIdToLabel(itemData?.type)}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Tolerance :</strong>{" "}
								{toleranceIdToLabel(itemData?.tolerance)}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Shape :</strong> {shapeIdToLabel(itemData?.shape)}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Coresize :</strong>{" "}
								{coreSizeIdToLabel(itemData?.coresize)}
							</Text>
						</Grid.Col>

						{shapeIdToLabel(itemData?.shape) === "Standard Axial" ? (
							<>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Lead Dia :</strong>{" "}
										{leadDiaIdToLabel(itemData?.leaddia)}
									</Text>
								</Grid.Col>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Lead Length :</strong>{" "}
										{leadLengthIdToLabel(itemData?.leadlength)}
									</Text>
								</Grid.Col>
							</>
						) : (
							<Grid.Col span={6}>
								<Text size="sm">
									<strong> Formtype</strong>:{" "}
									{formTypeIdToLabel(itemData?.formType)}
								</Text>
							</Grid.Col>
						)}
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Surge :</strong> {itemData?.surge}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Ohms : </strong>
								{itemData?.ohms}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Unit :</strong> {itemData?.unit}
							</Text>
						</Grid.Col>
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>TCR: </strong> {tcrIdToLabel(itemData?.tcr)}
							</Text>
						</Grid.Col>
					</Grid>
				</Card>

				{typeIdToLabel(itemData?.type) === "Wire Wound Resistor" ? (
					<Card
						mx="md"
						shadow="sm"
						style={{
							backgroundColor: headerColorhandler(
								itemData?.type,
								itemData?.tctype
							),
						}}
						p="lg"
						radius="md"
						mt={"sm"}
						withBorder>
						<Form form={form} onSubmit={onSubmit}>
							<Form.Group grid={4}>
								<Form.Item
									name="windingType"
									label="Winding Type"
									required={true}
									mb="sm">
									<Select
										searchable
										placeholder="Pick one"
										data={["Melf", "Leaded"]}
									/>
								</Form.Item>

								<Form.Item
									name="windingWire"
									label="Winding Wire"
									required={true}>
									<TextInput type="text" placeholder="Winding Wire" />
								</Form.Item>
								<Form.Item name="wireDia" label="Wire Dia" required={true}>
									<NumberInput
										precision="2"
										min={0.0}
										placeholder="Enter Wire Dia"
									/>
								</Form.Item>
								<Form.Item name="quantity" label="Quantity" required={true}>
									<NumberInput min={0} placeholder="Enter Quantity" />
								</Form.Item>
							</Form.Group>

							<Form.Item
								name="instruction"
								label="Special Instructions"
								required={false}>
								<Textarea type="text" placeholder="Enter Instructions ..." />
							</Form.Item>
							{edit ? (
								<Form.Item
									name="remark"
									label="Remark"
									required={status === "PENDING" ? false : true}>
									<Textarea
										type="text"
										placeholder="Enter Remark ..."
										required={status === "PENDING" ? false : true}
									/>
								</Form.Item>
							) : null}

							<Button
								color={headerColorhandler(
									itemData?.type,
									itemData?.tctype,
									true
								)}
								disabled={disableButton}
								type="submit"
								mt={"sm"}>
								SAVE
							</Button>
						</Form>
					</Card>
				) : (
					<Card
						mx="md"
						shadow="sm"
						p="lg"
						style={{
							backgroundColor: headerColorhandler(
								itemData?.type,
								itemData?.tctype
							),
						}}
						radius="md"
						mt={"sm"}
						withBorder>
						<Form form={form} onSubmit={onSubmit}>
							<Form.Group grid={5}>
								<Form.Item
									name="basicValue"
									label="Basic Value"
									required={true}>
									<TextInput placeholder="Enter Basic Value" />
								</Form.Item>

								<Form.Item name="grams" label="Grams" required={true}>
									<NumberInput
										defaultValue={data?.grams}
										min={0}
										placeholder="Enter Grams"
									/>
								</Form.Item>

								<Form.Item name="quantity" label="Quantity" required={true}>
									<NumberInput min={0} placeholder="Enter Quantity" />
								</Form.Item>
								<Form.Item name="batch" label="Batch" required={false}>
									<TextInput type="text" placeholder="Enter Batch" />
								</Form.Item>
								<Form.Item name="binNo" label="Bin No" required={false}>
									<TextInput type="text" placeholder="Enter Bin No" />
								</Form.Item>
							</Form.Group>

							<Form.Item
								name="instruction"
								label="Special Instructions"
								required={false}>
								<Textarea type="text" placeholder="Enter Instructions ..." />
							</Form.Item>
							{edit ? (
								<Form.Item
									name="remark"
									label="Remark"
									required={status === "PENDING" ? false : true}>
									<Textarea
										type="text"
										placeholder="Enter Remark ..."
										required={status === "PENDING" ? false : true}
									/>
								</Form.Item>
							) : null}

							<Button
								type="submit"
								disabled={disableButton}
								mt={"sm"}
								color={headerColorhandler(
									itemData?.type,
									itemData?.tctype,
									true
								)}>
								ISSUE TC
							</Button>
						</Form>
					</Card>
				)}
			</Drawer>
			<Modal
				radius={8}
				padding={0}
				styles={ModelAlertStyleObj}
				size={"lg"}
				opened={issueQuantityWarning}
				onClose={() => setIssueQuantityWarning(false)}
				title={alertTitle}>
				<Text my={10}>
					Issue TC quantity is greater than Work Order quantity. Do you want to
					proceed?
				</Text>
				<div>
					<Group position="right">
						<Button
							mt="md"
							color="red"
							onClick={() => {
								setIssueQuantityWarning(false);
								setWarningConfirmed(true);
							}}>
							OK
						</Button>
					</Group>
				</div>
			</Modal>
		</div>
	);
};

export default IssueTCForm;
