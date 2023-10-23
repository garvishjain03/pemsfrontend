import { yupResolver } from "@hookform/resolvers/yup";
import {
	Button,
	Card,
	Drawer,
	Grid,
	Group,
	Menu,
	Modal,
	NumberInput,
	Select,
	Text,
	Textarea,
	TextInput,
} from "@mantine/core";
import dayjs from "dayjs";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { BiError } from "react-icons/bi";
import { useSelector } from "react-redux";
import {
	filmResistorSchema,
	wireWoundResistorSchema,
} from "../configs/formSchema.js/tcIssueFormSchema";
import useFetch from "../hooks/useFetch";
import { getWorkOrders } from "../services/salesOrder";
import { getURL } from "../utils/apiURL";
import { message } from "../utils/message";
import { translate } from "../utils/translate";
import Form from "./FormV2";

const CombineTCForm = ({ data }) => {
	const [tcModalOpened, setTcModalOpened] = useState(false);
	const [issueTC] = useFetch([]);
	const [allWorkOrderNo, setAllWorkOrderNo] = useState([]);
	const [allCustomerName, setAllCustomerName] = useState([]);
	const [combineOrderCount, setCombineOrderCount] = useState([]);

	const {
		types,
		tolerance,

		wattages,
		characteristics,
		shape,
		coresize,
		leadDia,
		leadLength,
		formType,
	} = useSelector(state => ({
		types: state.context?.types?.rows,
		wattages: state.context?.wattages?.rows,
		tolerance: state.context?.tolerances?.rows,
		shape: state.context?.shapes?.rows,
		characteristics: state.context.characteristics?.rows,
		coresize: state.context?.coresizes?.rows,
		leadDia: state.context?.leaddias?.rows,
		leadLength: state.context?.leadlengths?.rows,
		formType: state.context?.formtypes?.rows,
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
			wireDia: "",
		};
	}, []);

	const combineValidation = useMemo(
		() =>
			data?.filter(
				item =>
					data[0]?.original?.workorder_item?.mpn !==
						item?.original?.workorder_item?.mpn ||
					item?.original?.status !== "PENDING"
			),
		[data]
	);

	const tcData = useMemo(() => data[0]?.original, [data]);

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
		typeIdToLabel(tcData?.workorder_item?.type) === "Wire Wound Resistor"
			? wireWoundResistorSchema(false)
			: filmResistorSchema(false);
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
		let allTC = [];
		for (let i = 0; i < data.length; i++) {
			let tcData = {
				itemid: data[i]?.original?.itemid,
				orderid: data[i]?.original?.orderid,
				workorderid: data[i]?.original?.id,
				status: "PENDING",
				quantity: value.quantity,
				quarter: "Q3",
				specialinstructions: value?.instruction,
			};

			if (
				typeIdToLabel(data[0]?.original?.workorder_item?.type) ===
				"Wire Wound Resistor"
			) {
				tcData["wirediameter"] = value.wireDia;
				tcData["windingtype"] = value.windingType;
				tcData["windingwire"] = value.windingWire;
				// tcData["wiretype"] = value.wiretype;
			} else {
				tcData["binno"] = value.binNo;
				tcData["batchno"] = value.batch;
				tcData["grams"] = value.grams;
				tcData["basicvalue"] = value.basicValue;
			}
			allTC.push(tcData);
		}

		const res = await issueTC(getURL(`issuetc`), {
			method: "POST",
			body: JSON.stringify({
				issuecombineTc: true,
				issuetc: allTC,
			}),
		});

		if (res && res.status === 201) {
			setTcModalOpened(false);
			reset({});
			message.success({ message: translate("IssueTCSuccesfull") });
			getWorkOrders();
		}
	};

	const headerColorhandler = (type, tcType, isButton) => {
		const typeLabel = typeIdToLabel(type);

		if (tcType === "regular") {
			if (typeLabel === "Metal Oxide Resistor")
				return isButton ? "green" : "#26EE1C";
			else if (typeLabel === "Wire Wound Resistor") return "#ffffff";
			else if (typeLabel === "Wire Wound Fusible Resistors")
				return isButton ? "pink" : "#e64980";
			else return "#ffffff";
		} else {
			if (
				typeLabel === "Wire Wound Resistor" &&
				characteristicsIdToLabel(tcData?.workorder_item?.characteristics) ===
					"Fusible"
			)
				return "pink";

			if (typeLabel === "Wire Wound Resistor") return "#ffffff";
			else return isButton ? "yellow" : "#EEE41C";
		}
	};

	const CombineDataHandler = () => {
		let allWorkOrdersNo = [];
		let customerName = [];
		let allorderquantity = 0;
		for (let i = 0; i < data?.length; i++) {
			customerName.push(
				data[i]?.original?.workorder_salesorder?.customerName?.name
			);
			allWorkOrdersNo.push(data[i]?.original?.workorderno);
			allorderquantity = allorderquantity + parseInt(data[i]?.original?.qty);
		}
		setAllCustomerName(customerName);
		setAllWorkOrderNo(allWorkOrdersNo);
		setCombineOrderCount(allorderquantity);
	};

	useEffect(() => {
		CombineDataHandler();
		if (combineOrderCount) {
			setValue("quantity", combineOrderCount);
		}
	}, [tcModalOpened, combineOrderCount]);

	const errorTitle = (
		<div style={{ display: "flex", alignItems: "center" }}>
			<BiError style={{ width: "20px", height: "20px", paddingRight: "4px" }} />{" "}
			ERROR
		</div>
	);

	const ModelErrorStyleObj = {
		drawer: { background: "rgb(248, 249, 250)" },
		close: {
			color: "#ffff",
			"&:hover": {
				color: "red",
			},
		},

		title: { color: "red", fontWeight: "600" },
		header: {
			padding: "14px",
			marginRight: "0px",
			borderRadius: "8px 8px 0px 0px",
			borderBottom: "2px solid red",
		},

		body: {
			padding: "4px 16px 16px 16px",
		},
	};

	const errorModal = (
		<Modal
			radius={8}
			padding={0}
			styles={ModelErrorStyleObj}
			size="lg"
			title={errorTitle}
			withCloseButton={false}
			opened={tcModalOpened}>
			<Group position="left" direction="column">
				<Text fz="sm">
					MPN No must be same for all selected workorders and Status should be
					PENDING
				</Text>
			</Group>
			<Group position="right" mt="lg">
				<Button
					color={"red"}
					onClick={() => {
						setTcModalOpened(false);
					}}>
					Close
				</Button>
			</Group>
		</Modal>
	);

	function getQuarter(date) {
		// Get the month of the date.
		var month = date.getMonth();

		// Divide the month by 3 and add 1 to get the quarter.
		return "Q" + (Math.floor(month / 3) + 1);
	}

	return (
		<div>
			<Button
				disabled={data?.length < 2}
				onClick={() => setTcModalOpened(true)}>
				Create Combine TC
			</Button>
			{combineValidation.length > 0 ? (
				errorModal
			) : (
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
								headerColorhandler(
									tcData?.workorder_item?.type,
									tcData?.workorder_item?.tctype
								) === "#ffffff"
									? "#228BE6"
									: headerColorhandler(
											tcData?.workorder_item?.type,
											tcData?.workorder_item?.tctype
									  ),
							marginRight: "0px",
							zIndex: "1000 !important",
						},
					}}
					size="full"
					opened={tcModalOpened}
					onClose={() => setTcModalOpened(false)}
					title={
						<Group direction="row">
							<Text>Combine Issue TC</Text>
						</Group>
					}>
					<>
						<Card
							mx="md"
							style={{
								backgroundColor: headerColorhandler(
									tcData?.workorder_item?.type,
									tcData?.workorder_item?.tctype
								),
							}}
							shadow="sm"
							p="lg"
							radius="md"
							withBorder>
							<Grid>
								<Grid.Col span={3}>
									<div style={{ display: "flex" }}>
										<strong>Part No : </strong>
										{tcData?.workorder_item?.mpn}
									</div>
								</Grid.Col>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>TC Type : </strong>

										{tcData?.workorder_item?.tctype.toUpperCase()}
									</Text>
								</Grid.Col>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong> Date :</strong>{" "}
										{dayjs(tcData?.createdAt).format("DD/MM/YYYY")}
									</Text>
								</Grid.Col>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Quarter :</strong> {getQuarter(new Date())}
									</Text>
								</Grid.Col>

								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Delivery Date :</strong>{" "}
										{dayjs(tcData?.workorder_item?.commitedDate).format(
											"DD/MM/YYYY"
										)}
									</Text>
								</Grid.Col>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Order Quantity :</strong> {combineOrderCount}
									</Text>
								</Grid.Col>

								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Characteristics :</strong>{" "}
										{characteristicsIdToLabel(
											tcData?.workorder_item?.characteristics
										)}
									</Text>
								</Grid.Col>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Wattage :</strong>{" "}
										{wattageIdToLabel(tcData?.workorder_item?.wattage)}
									</Text>
								</Grid.Col>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Type :</strong>{" "}
										{typeIdToLabel(tcData?.workorder_item?.type)}
									</Text>
								</Grid.Col>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Tolerance :</strong>{" "}
										{toleranceIdToLabel(tcData?.workorder_item?.tolerance)}
									</Text>
								</Grid.Col>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Shape :</strong>{" "}
										{shapeIdToLabel(tcData?.workorder_item?.shape)}
									</Text>
								</Grid.Col>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Coresize :</strong>{" "}
										{coreSizeIdToLabel(tcData?.workorder_item?.coresize)}
									</Text>
								</Grid.Col>

								{shapeIdToLabel(tcData?.workorder_item?.shape) ===
								"Standard Axial" ? (
									<>
										<Grid.Col span={3}>
											<Text size="sm">
												<strong>Lead Dia :</strong>{" "}
												{leadDiaIdToLabel(tcData?.workorder_item?.leaddia)}
											</Text>
										</Grid.Col>
										<Grid.Col span={3}>
											<Text size="sm">
												<strong>Lead Length :</strong>{" "}
												{leadLengthIdToLabel(
													tcData?.workorder_item?.leadlength
												)}
											</Text>
										</Grid.Col>
									</>
								) : (
									<Grid.Col span={6}>
										<Text size="sm">
											Formtype:{" "}
											{formTypeIdToLabel(tcData?.workorder_item?.formType)}
										</Text>
									</Grid.Col>
								)}
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Surge :</strong> {tcData?.workorder_item?.surge}
									</Text>
								</Grid.Col>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Ohms : </strong>
										{tcData?.workorder_item?.ohms}
									</Text>
								</Grid.Col>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Unit :</strong> {tcData?.workorder_item?.unit}
									</Text>
								</Grid.Col>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Workorder No :</strong>{" "}
										<span>
											<Text
												size="sm"
												style={{
													maxHeight: "28px",
													overflow: "hidden",
													display: "inline",
												}}>
												{allWorkOrderNo?.[0]}
											</Text>
											<Menu trigger="hover" size={"lg"}>
												{allWorkOrderNo?.map((item, index) => (
													<Menu.Item key={index}>
														<Text>{item}</Text>
													</Menu.Item>
												))}
											</Menu>
										</span>
									</Text>
								</Grid.Col>
								<Grid.Col span={3}>
									<Text size="sm">
										<strong>Customer :</strong>
										<span
											style={{ maxWidth: "250px", minWidth: "200px", gap: 0 }}>
											<Text
												size="sm"
												style={{
													maxHeight: "28px",
													overflow: "hidden",
													display: "inline",
												}}>
												{allCustomerName?.[0]?.slice(0, 20)}
											</Text>
											<Menu trigger="hover" size={"xl"}>
												{allCustomerName?.map(item => (
													<Menu.Item>
														<Text>{item}</Text>
													</Menu.Item>
												))}
											</Menu>
										</span>
									</Text>
								</Grid.Col>
							</Grid>
						</Card>

						{typeIdToLabel(tcData?.workorder_item?.type) ===
						"Wire Wound Resistor" ? (
							<Card
								mx="md"
								shadow="sm"
								style={{
									backgroundColor: headerColorhandler(
										tcData?.workorder_item?.type,
										tcData?.workorder_item?.tctype
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
											required={true}>
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
											<NumberInput placeholder="Enter Wire Dia" />
										</Form.Item>
										<Form.Item name="quantity" label="Quantity" required={true}>
											<NumberInput precision="2" placeholder="Enter Quantity" />
										</Form.Item>
									</Form.Group>

									<Form.Item
										name="instruction"
										label="Special Instructions"
										required={false}>
										<Textarea
											type="text"
											placeholder="Enter Instructions ..."
										/>
									</Form.Item>

									<Button
										color={headerColorhandler(
											tcData?.workorder_item?.type,
											tcData?.workorder_item?.tctype,
											true
										)}
										type="submit"
										mt={"sm"}>
										ISSUE TC
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
										tcData?.workorder_item?.type,
										tcData?.workorder_item?.tctype
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
											<NumberInput placeholder="Enter Grams" />
										</Form.Item>

										<Form.Item name="quantity" label="Quantity" required={true}>
											<NumberInput placeholder="Enter Quantity" />
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
										<Textarea
											type="text"
											placeholder="Enter Instructions ..."
										/>
									</Form.Item>

									<Button
										type="submit"
										mt={"sm"}
										color={headerColorhandler(
											tcData?.workorder_item?.type,
											tcData?.workorder_item?.tctype,
											true
										)}>
										ISSUE TC
									</Button>
								</Form>
							</Card>
						)}
					</>
				</Drawer>
			)}
		</div>
	);
};

export default CombineTCForm;
