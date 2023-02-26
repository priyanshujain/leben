import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import {
	setDefaultLastSleepData,
	setSleepAuto,
	setWakeUpAuto,
} from "../utils/storage/sleep";
import dayjs from "dayjs";

var advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);

const MyApp = ({ Component, pageProps }) => {
	useEffect(() => {
		if (process.env.NODE_ENV !== "production") {
			const axe = require("react-axe");
			axe(React, ReactDOM, 1000);
		}

		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
		setDefaultLastSleepData();
		setSleepAuto();
		setWakeUpAuto();
	}, []);

	return (
		<>
			<Head>
				<title>Leben</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline>
					<Component {...pageProps} />
				</CssBaseline>
			</ThemeProvider>
		</>
	);
};

export default MyApp;
