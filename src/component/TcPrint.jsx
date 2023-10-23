import {
	ActionIcon,
	Button,
	Center,
	Drawer,
	Grid,
	Group,
	ScrollArea,
	Stack,
	Text,
	Title,
	Tooltip,
} from "@mantine/core";
import dayjs from "dayjs";
import React, { useRef, useState } from "react";
import { RiPrinterFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";

const TcPrint = ({ data, isTop = false }) => {
	const [tcModalOpened, setTcModalOpened] = useState(false);
	let componentRef = useRef();
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
		tcrs,
	} = useSelector(state => ({
		types: state.context?.types?.rows,
		wattages: state.context?.wattages?.rows,
		tolerance: state.context?.tolerances?.rows,
		tcrs: state.context?.tcrs?.rows,
		shape: state.context?.shapes?.rows,
		characteristics: state.context.characteristics?.rows,
		coresize: state.context?.coresizes?.rows,
		leadDia: state.context?.leaddias?.rows,
		leadLength: state.context?.leadlengths?.rows,
		formType: state.context?.formtypes?.rows,
	}));

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
	const typeIdToLabel = id => {
		let label = "";
		types?.forEach(item => {
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

	const toleranceIdToLabel = id => {
		let label = "";
		tolerance?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};
	return (
		<div>
			{isTop ? (
				<Button
					disabled={data.length < 1}
					onClick={() => setTcModalOpened(true)}>
					<RiPrinterFill size={23} color={"#ffffff"} />
					Print TC
				</Button>
			) : (
				<Tooltip label="Print Tc">
					<ActionIcon
						color="dark"
						variant="transparent"
						onClick={() => setTcModalOpened(true)}>
						<RiPrinterFill size={23} />
					</ActionIcon>
				</Tooltip>
			)}
			<Drawer
				padding={0}
				styles={{
					drawer: { background: "rgb(248, 249, 250)" },
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
						backgroundColor: "#228BE6",
						marginRight: "0px",
						zIndex: "1000 !important",
					},
				}}
				size="full"
				opened={tcModalOpened}
				onClose={() => setTcModalOpened(false)}
				title={
					<Group direction="row">
						<Text>Print TC</Text>
					</Group>
				}>
				<ScrollArea p="xl" style={{ height: "75vh" }}>
					<div id="tcPrint" ref={el => (componentRef = el)}>
						<Stack>
							{data?.map((item, index) => {
								const values = item?.original;
								const grams = values?.grams;
								const itemData = values?.tcMapper;

								return (
									<div style={{ marginBottom: "8rem" }}>
										<Center>
											<Title
												order={4}
												style={{
													position: "relative",
													top: "1ex",
													zIndex: 1,
													left: "em",
													backgroundColor: "white",
													padding: "0 5px",
												}}>
												TRAVELLING CARD
											</Title>
										</Center>
										<div
											style={{
												border: "1px solid black",
												padding: "1rem",
												marginLeft: "1.5rem",
											}}>
											<Grid>
												<Grid.Col span={12}>
													<Text size="sm">
														<strong>Customer :</strong>
														{itemData?.map((item, index) => (
															<span style={{ marginRight: "10px" }}>
																{item?.issueTcOrder?.customerName?.name},
															</span>
														))}
													</Text>
												</Grid.Col>
												<Grid.Col span={12}>
													<div style={{ display: "flex" }}>
														<strong>Part No : </strong>
														{itemData[0]?.issueTcItem?.mpn}
													</div>
												</Grid.Col>
												<Grid.Col span={3}>
													<Text size="sm">
														<strong>TC No : </strong>

														{values.tcno}
													</Text>
												</Grid.Col>
												<Grid.Col span={3}>
													<Text size="sm">
														<strong>Issue Date : </strong>

														{dayjs(values?.createdAt).format("DD/MM/YYYY")}
													</Text>
												</Grid.Col>
												<Grid.Col span={3}>
													<Text size="sm">
														<strong>Delivery Date :</strong>{" "}
														{dayjs(
															itemData[0]?.issueTcItem?.commitedDate
														).format("DD/MM/YYYY")}
													</Text>
												</Grid.Col>
												<Grid.Col span={3}>
													<Text size="sm">
														<strong>Quantity :</strong>{" "}
														{values?.quantity?.toLocaleString("en-IN")}
													</Text>
												</Grid.Col>
												<Grid.Col span={3}>
													<Text size="sm">
														<strong>Wattage :</strong>{" "}
														{wattageIdToLabel(
															itemData[0]?.issueTcItem?.wattage
														)}
													</Text>
												</Grid.Col>
												<Grid.Col span={3}>
													<Text size="sm">
														<strong>Type :</strong>{" "}
														{typeIdToLabel(itemData[0]?.issueTcItem?.type)}
													</Text>
												</Grid.Col>
												<Grid.Col span={3}>
													<Text size="sm">
														<strong>Characteristics :</strong>{" "}
														{characteristicsIdToLabel(
															itemData[0]?.issueTcItem?.characteristics
														)}
													</Text>
												</Grid.Col>
												<Grid.Col span={3}>
													<Text size="sm">
														<strong>Tolerance :</strong>{" "}
														{toleranceIdToLabel(
															itemData[0]?.issueTcItem?.tolerance
														)}
													</Text>
												</Grid.Col>
												<Grid.Col span={3}>
													<Text size="sm">
														<strong>Ohms : </strong>
														{itemData[0]?.issueTcItem?.ohms}{" "}
														{itemData[0]?.issueTcItem?.unit}
													</Text>
												</Grid.Col>
												{/* <Grid.Col span={3}>
													<Text size="sm">
														<strong>Weight :</strong> 0 gms
													</Text>
												</Grid.Col> */}
												<Grid.Col span={3}>
													<Text size="sm">
														<strong>Coresize :</strong>{" "}
														{coreSizeIdToLabel(
															itemData[0]?.issueTcItem?.coresize
														)}
													</Text>
												</Grid.Col>
												<Grid.Col span={3}>
													<Text size="sm">
														<strong>Surge :</strong>{" "}
														{itemData[0]?.issueTcItem?.surge} KV
													</Text>
												</Grid.Col>
												{typeIdToLabel(itemData[0]?.issueTcItem?.type) !==
													"Wire Wound Resistor" && (
													<Grid.Col span={3}>
														<Text size="sm">
															<strong>Basic Value :</strong>{" "}
															{values?.basicvalue}
														</Text>
													</Grid.Col>
												)}
												{typeIdToLabel(itemData[0]?.issueTcItem?.type) !==
													"Wire Wound Resistor" && (
													<Grid.Col span={3}>
														<Text size="sm">
															<strong>Batch :</strong>
															{values?.batchno ? values?.batchno : ""}
														</Text>
													</Grid.Col>
												)}
												{typeIdToLabel(itemData[0]?.issueTcItem?.type) !==
													"Wire Wound Resistor" && (
													<Grid.Col span={3}>
														<Text size="sm">
															<strong>Bin No:</strong>{" "}
															{values?.binno ? values?.binno : ""}
														</Text>
													</Grid.Col>
												)}
												<Grid.Col span={3}>
													<Text size="sm">
														<strong>TCR: </strong>{" "}
														{tcrIdToLabel(itemData[0]?.issueTcItem?.tcr)}
													</Text>
												</Grid.Col>
												{grams && (
													<Grid.Col span={3}>
														<Text size="sm">
															<strong>Grams : </strong> {grams}
														</Text>
													</Grid.Col>
												)}
												{typeIdToLabel(itemData[0]?.issueTcItem?.type) ===
													"Wire Wound Resistor" && (
													<Grid.Col span={3}>
														<Text size="sm">
															<strong>Winding Type :</strong>{" "}
															{values?.windingtype}
														</Text>
													</Grid.Col>
												)}
												{typeIdToLabel(itemData[0]?.issueTcItem?.type) ===
													"Wire Wound Resistor" && (
													<Grid.Col span={3}>
														<Text size="sm">
															<strong>Winding Wire :</strong>{" "}
															{values?.windingwire}
														</Text>
													</Grid.Col>
												)}{" "}
												{typeIdToLabel(itemData[0]?.issueTcItem?.type) ===
													"Wire Wound Resistor" && (
													<Grid.Col span={3}>
														<Text size="sm">
															<strong>Winding Diameter :</strong>{" "}
															{values?.wirediameter}
														</Text>
													</Grid.Col>
												)}
												<Grid.Col span={12}>
													<Text size="sm">
														<strong>Workorder No :</strong>{" "}
														{itemData?.map((item, index) => (
															<span style={{ marginRight: "10px" }}>
																{item?.issueTcWorkorder?.workorderno}
															</span>
														))}
													</Text>
												</Grid.Col>
												<Grid.Col span={3}>
													<Text size="sm">
														<strong>Store Keeper : </strong>
														{values?.tcCreatedBy?.username}
													</Text>
												</Grid.Col>
												<Grid.Col span={12}>
													<Text size="sm">
														<strong>Special Instruction :</strong>{" "}
														{values?.specialinstructions}
													</Text>
												</Grid.Col>
												{/* <Grid.Col span={3}>
													<Text size="sm">
														<strong>Shape :</strong>{" "}
														{shapeIdToLabel(itemData[0]?.issueTcItem?.shape)}
													</Text>
												</Grid.Col>

												{shapeIdToLabel(itemData?.shape) ===
												"Standard Axial" ? (
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
															Formtype: {formTypeIdToLabel(itemData?.formType)}
														</Text>
													</Grid.Col>
												)} */}
											</Grid>
										</div>
									</div>
								);
							})}
						</Stack>
					</div>
				</ScrollArea>
				<Group position="center">
					{/* <Link target={"_blank"} to="/printTc"> */}
					<ReactToPrint
						trigger={() => <Button> Print</Button>}
						content={() => componentRef}
					/>

					{/* </Link> */}
				</Group>
			</Drawer>
		</div>
	);
};

export default TcPrint;
