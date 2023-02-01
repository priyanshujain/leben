import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import theme from "../src/theme";
import google from "../lib/google";
import CircularProgress from "@mui/material/CircularProgress";
import Router from "next/router";

const styles = {
	todo: {
		maxWidth: 480,
		margin: "auto",
		textAlign: "center",
		marginBottom: "100px",
	},
	paper: {
		width: "100%",
	},
	form: {
		padding: theme.spacing(2),
		paddingTop: 0,
		textAlign: "right",
	},
	list: {
		listStyle: "none",
		padding: 0,
		marginBottom: 0,
		borderRadius: "0 0 4px 4px",
	},
	action: {
		padding: theme.spacing(2),
		textAlign: "right",
	},
	submitButton: {
		width: "50px",
		height: "50px",
		borderRadius: "50%",
		border: 0,
		backgroundColor: theme.palette.primary.main,
	},
};

const GoogleAuth = () => {
	const [code, setCode] = useState(0);

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		// Update the document title using the browser API
		// var router = useRouter();

		// console.log("router.query", router.query);
		let params = new URLSearchParams(window.location.search);
		let codeVal = params.get("code");
		setCode(codeVal);
		if (!code) {
			try {
				google.auth.getTokenFromCode(codeVal).then((res) => {
					if (res && res.accessToken) {
						Router.push("/backup");
					}
				});
			} catch (error) {
				console.log("error", error);
			}
		}
	});

	return (
		<main>
			<Grid
				container
				sx={{ ...styles.todo }}
				justify="center"
				direction="column"
			>
				<div style={{ minHeight: "100vh", marginTop: "50vh" }}>
					<CircularProgress />
				</div>
			</Grid>
		</main>
	);
};

export default GoogleAuth;
