import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import React from "react";
import ReactDOM from "react-dom";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";

import { mytheme } from "./configs/theme";
import { store } from "./store";

// Components
import App from "./App";

// Mantine UI
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

i18next
	.use(initReactI18next)
	.use(HttpApi)
	.init({
		lng: document.querySelector("html").lang,
		fallbackLng: "en",
		react: { useSuspense: false },
		backend: {
			loadPath: "/assets/locales/{{lng}}/translation.json",
		},
	});

ReactDOM.render(
	<Provider store={store}>
		<MantineProvider theme={mytheme["light"]}>
			<NotificationsProvider
				autoClose={2000}
				position="top-center"
				zIndex={2077}>
				<App />
			</NotificationsProvider>
		</MantineProvider>
	</Provider>,

	document.getElementById("root")
);
