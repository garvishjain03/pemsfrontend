import { yupResolver } from "@hookform/resolvers/yup";
import {
	ActionIcon,
	Button,
	Card,
	Checkbox,
	Drawer,
	Grid,
	Group,
	Menu,
	Modal,
	NumberInput,
	ScrollArea,
	Select,
	Text,
	Textarea,
	TextInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import dayjs from "dayjs";
import Cookies from "js-cookie";
import React, { useEffect, useMemo, useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { MdOutlineAddCircle, MdRemoveCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { ModelStyleObj } from "../containers/salesOrder/SalesOrderItem";
import useFetch from "../hooks/useFetch";
import { operatorSubmitFormSchema } from "../pages/PlanningChart/schema";
import { getComment } from "../services/comment";
import { getMachine } from "../services/contextGetCalls";
import {
	editIssuedTc,
	getCuttingTc,
	getShiftDetails,
} from "../services/issuedTc";
import { getAllSalesOrders } from "../services/salesOrder";
import { getURL } from "../utils/apiURL";
import { fetchRequest } from "../utils/fetchRequest";
import { message } from "../utils/message";
import { translate } from "../utils/translate";
import Form from "./FormV2";
import QCPass from "./QCPass";
import { ReworkForm } from "./ReworkForm";
import TcShiftView from "./TcShiftView";
import { getUser, getUsers } from "../services/user";
import { store } from "../store";
import { todayDateStyle } from "../utils/todayDateBg";

const PlanningChartDrawer = ({
	opened,
	setOpened,
	data,
	workorderView = false,
	type,
}) => {
	const [acceptTc] = useFetch([]);
	const [issueTC] = useFetch([]);
	const [submitTc] = useFetch([]);

	const [windingType, setWindingType] = useState(data?.windingtype);

	const [enterQuantityModal, setEnterQuantityModal] = useState(false);

	const [edit, setEdit] = useState(false);
	const [buttonDisable, setButtonDisable] = useState(false);

	const [temporaryEntries, setTemporaryEntries] = useState({});

	const [binno, setBinno] = useState("");
	const [binnoModal, setBinnoModal] = useState(false);
	const [reworkSubmit, setReworkSubmit] = useState(false);

	const itemData = useMemo(
		() =>
			localStorage.getItem("active_role") === "CHECKINGOP"
				? data?.itemDetails?.length > 0
					? data?.itemDetails[0]
					: ""
				: data?.tcMapper?.length > 0
				? data?.tcMapper[0]?.issueTcItem
				: "",
		[data]
	);

	const workOrderNO = useMemo(() => {
		if (data?.workorderDetails?.length > 0 || data?.tcMapper?.length > 0) {
			return localStorage.getItem("active_role") === "CHECKINGOP" ? (
				data?.workorderDetails?.length === 1 ? (
					data?.workorderDetails?.[0]?.workorderno
				) : (
					// data?.workorderDetails?.map(ele => <Text>{ele.workorderno}</Text>)
					<>
						<Text
							size="lg"
							style={{
								maxHeight: "28px",
								overflow: "hidden",
								display: "inline",
							}}>
							{data?.workorderDetails?.[0]?.workorderno}
						</Text>
						<Menu trigger="hover" size={"lg"}>
							{data?.workorderDetails?.map((item, index) => (
								<Menu.Item key={index}>
									<Text>{item?.workorderno}</Text>
								</Menu.Item>
							))}
						</Menu>
					</>
				)
			) : data?.tcMapper?.length === 1 ? (
				data?.tcMapper?.[0]?.issueTcWorkorder?.workorderno
			) : (
				<>
					<Text
						size="lg"
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
								<Text>{item?.issueTcWorkorder?.workorderno}</Text>
							</Menu.Item>
						))}
					</Menu>
				</>
			);
		} else return "";
	}, [data]);

	const tcData = useMemo(
		() =>
			localStorage.getItem("active_role") === "CHECKINGOP"
				? data?.tcDetails
				: data,
		[data]
	);

	const defaultValues = {
		laserCut: false,
		machineArray: [
			{
				quantity: null,
				machine: "",
			},
		],
	};

	const form = useForm({
		resolver: yupResolver(operatorSubmitFormSchema),
		defaultValues,
	});

	const { control, reset, handleSubmit } = form;

	const { fields, append, remove } = useFieldArray({
		control,
		name: "machineArray",
	});

	const {
		types,
		formType,
		tolerance,
		coresize,
		leadDia,
		leadLength,
		wattages,
		machine,
		roles,
		tcShift,
		characteristics,
		loading,
	} = useSelector(state => ({
		types: state.context?.types?.rows,
		formType: state.context.formtypes?.rows,
		characteristics: state.context.characteristics?.rows,
		tolerance: state.context?.tolerances?.rows,
		coresize: state.context?.coresizes?.rows,
		leadDia: state.context?.leaddias?.rows,
		leadLength: state.context?.leadlengths?.rows,
		wattages: state.context?.wattages?.rows,
		machine: state.context?.machine?.rows,
		roles: state.user?.data,
		tcShift: state.IssuedTc?.tcShift,
		loading: state.orders?.loading,
	}));
	const activeOperator = localStorage.getItem("active_role");
	const machinesOperatorWise = useMemo(
		() =>
			activeOperator === "CUTTINGOP"
				? machine?.filter(item => item.type === "Cutting")
				: activeOperator === "COATINGOP"
				? machine?.filter(item => item.type === "Coating")
				: activeOperator === "WELDINGOP"
				? machine?.filter(item => item.type === "Welding")
				: activeOperator === "WINDINGOP"
				? machine
						?.filter(item => item.type === "Winding")
						?.filter(ele => ele?.WindingProcess === data?.windingtype)
				: [],
		[machine]
	);
	const machineDropdown = useMemo(
		() =>
			machinesOperatorWise
				?.filter(machine => machine?.visible === true)
				?.map(item => {
					return {
						label: item?.name,
						value: item?.id,
					};
				}),
		[machinesOperatorWise]
	);
	const roleSlugtoid = slug => {
		let id = "";

		roles.map(item => {
			if (item.slug === slug) {
				id = item.id;
			}
			return id;
		});
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

	const formTypeIdToLabel = id => {
		let label = "";
		formType?.forEach(item => {
			if (item?.id === id) {
				label = item.label;
			}
		});
		return label;
	};

	useEffect(() => {
		setWindingType(data?.windingtype);
		if (data?.isAccepted === "YES" || type == "edit") {
			getMachine(`CoreSize=${data?.tcMapper[0]?.issueTcItem?.coresize}`);
		}
	}, [data]);

	useEffect(() => {
		if (opened) {
			setButtonDisable(false);
			getShiftDetails(
				localStorage.getItem("active_role") === "CHECKINGOP"
					? tcData.tcid
					: data?.id
			);
			if (type === "edit") getUsers(true);
		}
	}, [opened]);

	const acceptHandler = async id => {
		setButtonDisable(true);
		const res = await acceptTc(getURL(`/actions/tc/accepted/${id}`), {
			method: "PUT",
			body: JSON.stringify({
				id: id,
			}),
		});

		if (res && res.status === 200) {
			setOpened(false);
			getCuttingTc();

			message.success({ message: translate("Tc Accepted Successfull") });
		} else {
			setButtonDisable(false);
		}
	};

	const handleSubmitClick = async () => {
		store.dispatch({
			type: "LOADING",
			payload: true,
		});
		setButtonDisable(true);
		const _submitValue = {
			...temporaryEntries,
			shift: localStorage.getItem("shift"),
		};
		if (binno) {
			_submitValue[`binno`] = binno;
		}
		let url =
			binno?.length > 0
				? `actions/tc/close/${data?.id}`
				: `actions/tc/submit/${data?.id}`;
		_submitValue[`tcid`] = data?.id;
		_submitValue[`shift_role`] = localStorage.getItem("active_roleid");
		_submitValue[`shift_date`] = localStorage.getItem("shift_date");
		let res;
		if (!reworkSubmit) {
			res = await submitTc(getURL(url), {
				method: "PUT",
				body: JSON.stringify(_submitValue),
			});
		}

		if (res && res.status === 200) {
			setTemporaryEntries({});
			getCuttingTc();
			setEnterQuantityModal(false);
			setOpened(false);
			setBinno("");
			reset({
				machineArray: [
					{
						quantity: null,
						machine: "",
					},
				],
			});
			getAllSalesOrders();
			message.success({ message: translate("Tc Submmited Succesfull") });
		} else {
			setButtonDisable(false);
			message.info({ message: translate("Tc Submmited Failed") });
		}
		store.dispatch({
			type: "LOADING",
			payload: false,
		});
	};

	const ShiftForm = () => {
		const formWatch = useWatch({
			control,
		});

		const [enterQunatityComment, setEnterQuantityComment] = useState("");

		const onSubmitHandler = async value => {
			setTemporaryEntries({ ...value, comment: enterQunatityComment });
			setEnterQuantityModal(false);
		};

		return (
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
					body: {
						padding: "16px",
					},
				}}
				size={"xl"}
				opened={enterQuantityModal}
				onClose={() => {
					setEnterQuantityModal(false);
					// if (temporaryEntries?.machine?.length <= 0) {
					reset({
						machineArray: [
							{
								quantity: 0,
								machine: "",
							},
						],
					});
					// }
				}}
				title={
					<Group direction="row">
						<Text>Enter Quantity</Text>
					</Group>
				}>
				<>
					<Group position="apart" my="sm">
						<Text size="sm">
							<strong>TC No:</strong>
							{tcData?.tcno}
						</Text>
						<Text>
							<strong>Shift :</strong> {localStorage.getItem("shift")}
						</Text>
						<Text size="sm">
							<strong>Date:</strong>
							{dayjs(localStorage.getItem("shift_date")).format("DD/MM/YYYY")}
						</Text>
					</Group>

					<Form form={form} onSubmit={handleSubmit(onSubmitHandler)}>
						{typeIdToLabel(itemData?.type) !== "Wire Wound Resistor" &&
							localStorage.getItem("active_role") === "CUTTINGOP" && (
								<Form.Item name="laserCut">
									<Checkbox label="Laser Cut" my={20} />
								</Form.Item>
							)}

						{fields &&
							fields.map((field, index) => {
								return (
									<Form.Group grid={4} key={index}>
										<Form.Item
											name={`machineArray.${index}.machine`}
											label="Machine"
											required={true}
											mb="sm">
											<Select
												searchable
												placeholder="Pick one"
												data={machineDropdown || []}
												required
											/>
										</Form.Item>

										{typeIdToLabel(itemData?.type) === "Wire Wound Resistor" &&
											data?.windingtype === "Leaded" &&
											localStorage.getItem("active_role") === "WINDINGOP" && (
												<Form.Item
													name={`machineArray.${index}.quantity`}
													label="Bulk Quantity"
													mb="sm"
													required={true}>
													<NumberInput placeholder="Enter Quantity" required />
												</Form.Item>
											)}

										<Form.Item
											name={`machineArray.${index}.${
												localStorage.getItem("active_role") === "WINDINGOP"
													? "shift_quantity_tape"
													: "quantity"
											}`}
											label={
												data?.windingtype === "Leaded" &&
												localStorage.getItem("active_role") === "WINDINGOP"
													? "Quantity Tape"
													: "Quantity"
											}
											required={true}>
											<NumberInput placeholder="Enter Quantity" required />
										</Form.Item>
										<Group>
											<ActionIcon
												mt={30}
												color="blue"
												onClick={() => {
													append({
														quantity: null,
														machine: "",
													});
												}}>
												<MdOutlineAddCircle size={40} />
											</ActionIcon>
											<ActionIcon
												disabled={fields.length === 1}
												mt={30}
												color="red"
												onClick={() => remove(index)}>
												<MdRemoveCircle size={40} />
											</ActionIcon>
										</Group>
									</Form.Group>
								);
							})}
						<Group grow>
							<TextInput
								placeholder="Comment"
								label="Comment"
								value={enterQunatityComment}
								onChange={e => setEnterQuantityComment(e.target.value)}
							/>
						</Group>
						<Group my={8} position="right">
							{/* {data?.isAccepted === "YES" && (
								<Button type="submit" disabled={buttonDisable}>
									Submit TC
								</Button>
							)}
							{data?.isAccepted === "YES" && (
								<Button
									onClick={() => {
										handleSubmit(onMarkClose(formWatch));
									}}>
									Mark Close
								</Button>
							)} */}
							{data?.isAccepted === "YES" && (
								<Button type="submit">Enter</Button>
							)}
						</Group>
					</Form>
				</>
			</Modal>
		);
	};

	const TcDetailJsx = ({ data }) => {
		console.log({ data });
		const [commentMsg, setcommentMsg] = useState("");

		const largeFont = { fontSize: "large" };

		const [input, setInput] = useState({
			quantity: null,
			binno: null,
			batchno: null,
			grams: null,
			// basicvalue: null,
			deliveryDate: null,
			comment: null,
		});
		const [windingTypeCommentModal, setWindingTypeCommentModal] =
			useState(false);
		const [windingTypeCommentError, setWindingTypeCommentError] =
			useState(false);
		const [comment, setComment] = useState("");
		const [commentModal, setCommentModal] = useState(false);
		const [commentError, setCommentError] = useState(false);
		const handleSave = type => {
			if (type != "submit") return setCommentModal(true);

			if ([null, undefined, "", NaN].includes(input.comment))
				return setCommentError(true);

			editIssuedTc(data?.id, { ...input, remark: input.comment });
			setCommentError(false);
			setCommentModal(false);
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

		const wattageIdToLabel = id => {
			let label = "";
			wattages?.forEach(item => {
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

		const addCommentHandler = async () => {
			let url = `comments`;
			const _res = await fetchRequest(getURL(url), {
				method: "POST",
				body: JSON.stringify({
					orderid: itemData?.orderid,
					itemid: itemData?.id,
					issuetcid:
						localStorage.getItem("active_role") === "CHECKINGOP"
							? tcData?.tcid
							: tcData?.id,
					workorderid:
						localStorage.getItem("active_role") === "CHECKINGOP"
							? data?.workorderDetails?.[0]?.workorderid
							: data?.tcMapper?.[0]?.workorderid,
					roleid: localStorage.getItem("active_roleid"),
					comments: commentMsg,
				}),
			});
			if (_res && _res.status === 201) {
				setcommentMsg("");
				getComment(
					`issuetcid=${
						localStorage.getItem("active_role") === "CHECKINGOP"
							? tcData?.tcid
							: tcData?.id
					}`
				);
				message.success({
					message: translate(`Comment Added`),
				});
			}
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
			setInput({
				quantity: tcData?.quantity ?? null,
				// basicvalue: tcData?.basicvalue ?? null,
				deliveryDate: itemData?.commitedDate,
				batch: tcData?.batchno ?? null,
				binno: tcData?.binno ?? null,
				grams: tcData?.grams ?? null,
			});
		}, []);

		const windingTypeHandler = async () => {
			if (!comment) {
				setWindingTypeCommentError(true);
				return;
			}
			setWindingTypeCommentError(false);
			const res = await issueTC(getURL(`issuetc/${data?.id}`), {
				method: "PUT",
				body: JSON.stringify({
					windingtype: windingType,
					remark: comment,
				}),
			});

			if (res && res.status === 200) {
				getCuttingTc();
				// setOpened(false);
				message.success({
					message: translate("Winding Type Change Successfull"),
				});
			}
			setCommentModal(false);
		};

		const onMarkClose = () => {
			let newArray = [...temporaryEntries.machineArray];
			if (
				newArray?.every(obj => {
					return Object?.values(obj).every(
						value => value !== undefined && value !== ""
					);
				})
			) {
				setBinnoModal(true);
			} else {
				alert("Please fill all required fields!");
			}
		};

		return (
			<Card
				shadow="sm"
				p="lg"
				radius="md"
				mx={16}
				withBorder
				style={{
					backgroundColor: headerColorhandler(itemData?.type, itemData?.tctype),
				}}>
				<Grid mb={"md"}>
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>MPN : </strong>
							<strong style={largeFont}>
								{localStorage.getItem("active_role") === "CHECKINGOP"
									? data?.partno
									: tcData?.tcMapper?.[0]?.issueTcItem?.mpn}
							</strong>
						</Text>
					</Grid.Col>
					{/* {typeIdToLabel(itemData?.type) !== "Wire Wound Resistor" && ( */}
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>Laser Cut: </strong>
							<strong style={largeFont}>
								{localStorage.getItem("active_role") === "CHECKINGOP"
									? tcData?.islasercut
									: tcData?.isLaserCut}
							</strong>
						</Text>
					</Grid.Col>
					{/* )} */}
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>TC No :</strong>
							<strong style={largeFont}>{tcData?.tcno}</strong>
						</Text>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>Customer : </strong>
							<strong style={largeFont}>
								{localStorage.getItem("active_role") === "CHECKINGOP" ? (
									data?.customer?.length === 1 ? (
										data?.customer?.[0]
									) : (
										// data.customer?.map(ele => <Text>{ele}</Text>)
										<span
											style={{ maxWidth: "250px", minWidth: "200px", gap: 0 }}>
											<Text
												size="lg"
												style={{
													maxHeight: "28px",
													overflow: "hidden",
													display: "inline",
												}}>
												{data?.customer?.[0]?.slice(0, 20)}
											</Text>
											<Menu trigger="hover" size={"xl"}>
												{data?.customer?.map(item => (
													<Menu.Item>
														<Text>{item}</Text>
													</Menu.Item>
												))}
											</Menu>
										</span>
									)
								) : data.tcMapper ? (
									data?.tcMapper?.length === 1 ? (
										data?.tcMapper?.[0]?.issueTcOrder?.customerName?.name
									) : (
										<span
											style={{ maxWidth: "250px", minWidth: "200px", gap: 0 }}>
											<Text
												size="lg"
												style={{
													maxHeight: "28px",
													overflow: "hidden",
													display: "inline",
												}}>
												{data?.tcMapper?.[0]?.issueTcOrder?.customerName?.name.slice(
													0,
													20
												)}
											</Text>
											<Menu trigger="hover" size={"xl"}>
												{data?.tcMapper?.map(item => (
													<Menu.Item>
														<Text>
															{item?.issueTcOrder?.customerName?.name}
														</Text>
													</Menu.Item>
												))}
											</Menu>
										</span>
									)
								) : (
									""
								)}
							</strong>
						</Text>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>Issue Date :</strong>{" "}
							<strong style={largeFont}>
								{dayjs(tcData?.createdAt).format("DD/MM/YYYY")}
							</strong>
						</Text>
					</Grid.Col>
					<Grid.Col span={3}>
						{type == "edit" && edit ? (
							<Group style={{ display: "flex" }}>
								<Text>
									<strong>Delivery Date</strong>
								</Text>
								<DatePicker
									dayStyle={date => todayDateStyle(date)}
									defaultValue={new Date(itemData?.commitedDate)}
									inputFormat="DD/MM/YYYY"
									placeholder="Pick date"
									style={{ minWidth: "115px" }}
									onChange={e => {
										setInput({ ...input, deliveryDate: e.toISOString() });
									}}
								/>
							</Group>
						) : (
							<Text size="sm">
								<strong>Delivery Date :</strong>{" "}
								<strong style={largeFont}>
									{dayjs(itemData?.commitedDate).format("DD/MM/YYYY")}
								</strong>
							</Text>
						)}
					</Grid.Col>
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>WorkOrder No :</strong> <strong>{workOrderNO}</strong>
						</Text>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>TC Type :</strong>{" "}
							<strong style={largeFont}>
								{itemData?.tctype?.toUpperCase()}
							</strong>
						</Text>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>Type :</strong>{" "}
							<strong style={largeFont}>{typeIdToLabel(itemData?.type)}</strong>
						</Text>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>Wattage :</strong>{" "}
							<strong style={largeFont}>
								{wattageIdToLabel(itemData?.wattage)}
							</strong>
						</Text>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>Tolerance :</strong>
							<strong style={largeFont}>
								{toleranceIdToLabel(itemData?.tolerance)}
							</strong>
						</Text>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>Ohms :</strong>
							<strong style={largeFont}>{itemData?.ohms}</strong>
							<strong style={largeFont}>{itemData?.unit}</strong>
						</Text>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>Coresize :</strong>
							<strong style={largeFont}>
								{coreSizeIdToLabel(itemData?.coresize)}
							</strong>
						</Text>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>Lead Length : </strong>
							<strong style={largeFont}>
								{leadLengthIdToLabel(itemData?.leadlength)}
							</strong>
						</Text>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>Lead Dia : </strong>
							<strong style={largeFont}>
								{leadDiaIdToLabel(itemData?.leaddia)}
							</strong>
						</Text>
					</Grid.Col>
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>Surge :</strong>{" "}
							<strong style={largeFont}>
								{itemData?.surge}
								KV
							</strong>
						</Text>
					</Grid.Col>
					<Grid.Col span={3}>
						{type == "edit" && edit ? (
							<Group style={{ display: "flex" }}>
								<Text>
									<strong>Quantity</strong>
								</Text>
								<NumberInput
									width="10rem"
									size="sm"
									value={input.quantity}
									defaultValue={tcData?.quantity}
									onChange={e => {
										setInput({ ...input, quantity: e });
									}}
								/>
							</Group>
						) : (
							<Text size="sm">
								<strong>Quantity :</strong>{" "}
								<strong style={largeFont}>
									{tcData?.quantity?.toLocaleString("en-IN")}
								</strong>
							</Text>
						)}
					</Grid.Col>
					{typeIdToLabel(itemData?.type) !== "Wire Wound Resistor" && (
						<Grid.Col span={3}>
							{/* {type == "edit" && edit ? (
								<Group style={{ display: "flex" }}>
									<Text>
										<strong>Basic Value</strong>
									</Text>
									<NumberInput
										width="10rem"
										size="sm"
										value={input.basicvalue}
										defaultValue={tcData?.basicvalue ? tcData?.basicvalue : ""}
										onChange={e => setInput({ ...input, basicvalue: e })}
									/>
								</Group>
							) : ( */}
							<Text size="sm">
								<strong>Basic Value :</strong>
								<strong style={largeFont}>
									{tcData?.basicvalue ? tcData?.basicvalue : ""}
								</strong>
							</Text>
							{/* )} */}
						</Grid.Col>
					)}
					{typeIdToLabel(itemData?.type) !== "Wire Wound Resistor" && (
						<Grid.Col span={3}>
							{type == "edit" && edit ? (
								<Group style={{ display: "flex" }}>
									<Text>
										<strong>Batch</strong>
									</Text>
									<TextInput
										width="10rem"
										size="sm"
										value={input.batchno}
										defaultValue={tcData?.batchno ? tcData?.batchno : ""}
										onChange={e =>
											setInput({ ...input, batchno: e.target.value })
										}
									/>
								</Group>
							) : (
								<Text size="sm">
									<strong>Batch :</strong>
									<strong style={largeFont}>
										{tcData?.batchno ? tcData?.batchno : ""}
									</strong>
								</Text>
							)}
						</Grid.Col>
					)}
					{/* {localStorage.getItem("active_role") !== "WINDINGOP" &&
						tcData?.binno && (
							<Grid.Col span={3}>
								{type == "edit" && edit ? (
									<Group style={{ display: "flex" }}>
										<Text>
											<strong>Bin No</strong>
										</Text>
										<TextInput
											width="10rem"
											size="sm"
											value={input.binno}
											defaultValue={tcData?.binno ? tcData?.binno : ""}
											onChange={e => {
												setInput({ ...input, binno: e.target.value });
											}}
										/>
									</Group>
								) : (
									<Text size="sm">
										<strong>Bin No: </strong>{" "}
										<strong style={largeFont}>
											{tcData?.binno ? tcData?.binno : ""}
										</strong>
									</Text>
								)}
							</Grid.Col>
						)} */}
					{typeIdToLabel(itemData?.type) !== "Wire Wound Resistor" && (
						<Grid.Col span={3}>
							{type == "edit" && edit ? (
								<Group style={{ display: "flex" }}>
									<Text>
										<strong>Grams</strong>
									</Text>
									<NumberInput
										width="10rem"
										size="sm"
										value={input.grams}
										defaultValue={tcData?.grams ?? null}
										onChange={e => setInput({ ...input, grams: e })}
									/>
								</Group>
							) : (
								<Text size="sm">
									<strong>Grams:</strong>
									<strong style={largeFont}>
										{" "}
										{tcData?.grams ? tcData?.grams : ""}
									</strong>
								</Text>
							)}
						</Grid.Col>
					)}
					{typeIdToLabel(itemData?.type) === "Wire Wound Resistor" && (
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Winding Wire :</strong>
								<strong style={largeFont}> {tcData.windingwire}</strong>
							</Text>
						</Grid.Col>
					)}
					{typeIdToLabel(itemData?.type) === "Wire Wound Resistor" && (
						<Grid.Col span={3}>
							<Text size="sm">
								<strong>Winding Diameter :</strong>
								<strong style={largeFont}> {tcData.wirediameter}</strong>
							</Text>
						</Grid.Col>
					)}
					<Grid.Col span={3}>
						<Text size="sm">
							<strong>Store-Keeper : </strong>
							<strong style={largeFont}>{tcData?.tcCreatedBy?.username}</strong>
						</Text>
					</Grid.Col>
					{itemData?.formType && (
						<Grid.Col span={6}>
							<Text size="sm">
								<strong>Formed Type :</strong>
								<strong style={largeFont}>
									{" "}
									{formTypeIdToLabel(itemData?.formType)}
								</strong>
							</Text>
						</Grid.Col>
					)}
					<Grid.Col span={12}>
						<Text size="sm">
							<strong>Special Instruction :</strong>{" "}
							<strong style={largeFont}>{tcData?.specialinstructions}</strong>
						</Text>
					</Grid.Col>
					{typeIdToLabel(itemData?.type) === "Wire Wound Resistor" &&
						tcData?.isAccepted === "YES" &&
						localStorage.getItem("active_role") === "WINDINGOP" && (
							<Grid.Col span={3}>
								{" "}
								<Select
									mb="sm"
									value={windingType}
									onChange={value => {
										setWindingType(value);
										// windingTypeHandler(value);
									}}
									label={"Winding Type"}
									searchable
									placeholder="Pick one"
									data={["Melf", "Leaded"]}
								/>
								<Button
									onClick={() => {
										setWindingTypeCommentModal(true);
									}}>
									SAVE
								</Button>
							</Grid.Col>
						)}
				</Grid>
				{type == "edit" && (
					<Group
						position="center"
						spacing="xl"
						style={{ marginBottom: "1rem" }}>
						<Button onClick={() => setEdit(true)}>EDIT</Button>
						{edit && <Button onClick={handleSave}>SAVE</Button>}
					</Group>
				)}
				{!workorderView && <ShiftForm />}
				{!workorderView && (
					<Textarea
						mt={"md"}
						value={commentMsg}
						placeholder="Your comment ..."
						label="Comment"
						onChange={event => setcommentMsg(event.currentTarget.value)}
					/>
				)}
				{!workorderView && (
					<Group my={8} position="right">
						<ReworkForm
							setReworkSubmit={setReworkSubmit}
							data={data}
							setOpened={setOpened}
							setEnterQuantityModal={setEnterQuantityModal}
						/>
						<Button
							onClick={() => {
								setOpened(false);
								if (commentMsg) addCommentHandler();
							}}>
							Save Comment
						</Button>
						{tcData?.isAccepted !== "YES" &&
							localStorage.getItem("active_role") !== "CHECKINGOP" && (
								<Button
									disabled={buttonDisable}
									onClick={() => {
										acceptHandler(data?.id);
									}}>
									Accept
								</Button>
							)}
						{tcData?.isAccepted === "YES" &&
							Cookies.get("USER_ID") === data?.operator &&
							localStorage.getItem("active_role") !== "CHECKINGOP" && (
								<Button
									onClick={() => {
										setEnterQuantityModal(true);
									}}>
									Enter Quantity
								</Button>
							)}
						{localStorage.getItem("active_role") === "CHECKINGOP" && (
							<QCPass data={data} setOpened={setOpened} />
						)}
					</Group>
				)}
				<TcShiftView
					data={
						localStorage.getItem("active_role") === "CHECKINGOP"
							? data?.tcDetails
							: data
					}
					type={type}
					temporaryEntries={temporaryEntries}
				/>
				{temporaryEntries?.machineArray?.length > 0 && (
					<Group position="right" spacing={"md"} style={{ marginTop: "1rem" }}>
						<Button disabled={loading} onClick={onMarkClose}>
							COMPLETE TC
						</Button>
						<Button disabled={loading} onClick={handleSubmitClick}>
							SUBMIT
						</Button>
					</Group>
				)}
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size="auto"
					opened={windingTypeCommentModal}
					onClose={() => {
						setWindingTypeCommentModal(false);
					}}
					title="WINDING TYPE COMMENT">
					<div style={{ padding: "1rem" }}>
						<TextInput
							label="Comment"
							placeholder="Comment"
							onChange={e => setComment(e.target.value)}
						/>
						{windingTypeCommentError && (
							<Text size="sm" color="red">
								required!
							</Text>
						)}
					</div>
					<Button
						style={{ float: "right", marginBottom: "1rem" }}
						onClick={windingTypeHandler}>
						SAVE
					</Button>
				</Modal>
				<Modal
					radius={8}
					padding={0}
					styles={ModelStyleObj}
					size="auto"
					opened={commentModal}
					onClose={() => {
						setCommentModal(false);
					}}
					title="SAVE EDITED TC">
					<div style={{ padding: "1rem" }}>
						<TextInput
							label="Comment"
							placeholder="Comment"
							required
							onChange={e => setInput({ ...input, comment: e.target.value })}
						/>
						{commentError && (
							<Text size="sm" color="red">
								required!
							</Text>
						)}
					</div>
					<Button
						style={{ float: "right", marginBottom: "1rem" }}
						onClick={() => handleSave("submit")}>
						SAVE
					</Button>
				</Modal>
			</Card>
		);
	};
	return (
		<>
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
						backgroundColor: "#228BE6",

						marginRight: "0px",
						zIndex: "1000 !important",
					},
				}}
				size="full"
				opened={opened}
				onClose={() => {
					setTemporaryEntries({});
					reset({
						machineArray: [
							{
								quantity: 0,
								machine: "",
							},
						],
					});
					setOpened(false);
					setEdit(false);
				}}
				title={
					<Group direction="row" position="apart">
						<Text>Travelling Card Details</Text>
						{/* {!localStorage.getItem("active_role").includes("OP") && (
							<Text>STATUS : {data?.status}</Text>
						)} */}
					</Group>
				}>
				<ScrollArea style={{ height: "90vh" }}>
					<TcDetailJsx data={data} />
				</ScrollArea>
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
						body: {
							padding: "16px",
						},
					}}
					size={"sm"}
					opened={binnoModal}
					onClose={() => setBinnoModal(false)}
					title={
						<Group direction="row">
							<Text>Enter Bin No</Text>
						</Group>
					}>
					<>
						<TextInput
							value={binno}
							label="Bin No"
							onChange={e => setBinno(e.currentTarget.value)}
							mb={"sm"}
						/>
						<Button
							disabled={binno.length < 1 || loading}
							onClick={() => {
								handleSubmitClick();
								setBinnoModal(false);
							}}>
							Submit
						</Button>
					</>
				</Modal>
			</Drawer>
		</>
	);
};

export default PlanningChartDrawer;
