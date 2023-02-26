import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../src/theme";
import Base from "../Base";

const styles = {
	grid: {
		maxWidth: 480,
		margin: "auto",
		marginBottom: "100px",
	},
};

const Settings = () => {
	return (
		<main>
			<Base />
			<Grid
				container
				sx={{ ...styles.grid }}
				justify="center"
				direction="column"
			></Grid>
		</main>
	);
};

export default Settings;
