import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material/styles";
import TodoItem from "./TodoItem";
import { setSchema, getSchema } from "../utils/storage";
import Button from "@mui/material/Button";
import Router from "next/router";
import theme from "../src/theme";
import Base from "./Base";
import google from "../lib/google";

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

const Todo = () => {
	const [isAuthAvailable, setIsAuthAvailable] = useState();

	useEffect(() => {
		const checkAuth = async () => {
			await google.auth.isAuthAvailable().then((isAuth) => {
				setIsAuthAvailable(isAuth);
			});
		};
		checkAuth();
	});

	const openAuthUrl = () => {
		const authUrl = google.auth.getGoogleAuthURL();
		window.open(authUrl, "_self");
	};

	return (
		<main>
			<Base />
			<Grid
				container
				sx={{ ...styles.todo }}
				justify="center"
				direction="column"
			>
				<div style={{ marginTop: "50px" }}>
					<Button variant="contained" onClick={openAuthUrl}>
						Backup to google drive
					</Button>
				</div>
			</Grid>
		</main>
	);
};

export default Todo;
