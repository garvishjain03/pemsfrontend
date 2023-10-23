import Form from "../../component/Form";
import { schema } from "./schema";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Mantine UI
import {
	Button,
	Center,
	Image,
	Paper,
	PasswordInput,
	TextInput,
} from "@mantine/core";

const sx = theme => ({
	backgroundColor: theme.colors.gray[0],
	minHeight: "100vh",
	minWidth: "100vw",
});

const Login = ({ onSubmit, defaultValues, loading }) => {
	const form = useForm({ resolver: yupResolver(schema), defaultValues });
	return (
		<Center sx={sx}>
			<Paper
				shadow="xl"
				p="xl"
				radius="sm"
				style={{ width: 450, height: "auto", padding: 50 }}>
				<Form form={form} onSubmit={onSubmit}>
					<Center>
						<Image
							width={160}
							height={60}
							mb="md"
							src={require("../../assets/MicrosoftTeams-image.png")}
							alt="Logo"
						/>
					</Center>

					<Form.Item name="email" label="User Name" required={true} mb="md">
						<TextInput type="text" placeholder="Enter UserName" />
					</Form.Item>

					<Form.Item name="password" label="Password" mb="xl" required={true}>
						<PasswordInput placeholder="Enter Password" />
					</Form.Item>
					<Center>
						<Button loading={loading} type="submit">
							Login
						</Button>
					</Center>
				</Form>
			</Paper>
		</Center>
	);
};

export default Login;
