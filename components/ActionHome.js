import React from "react";
import Router from "next/router";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ActionList from "./ActionList";
import { getLatestData, downloadData } from "../utils/storage";
import Button from "@mui/material/Button";
import theme from "../src/theme";
import Base from "./Base";
import moment from "moment";

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
	action: {
		padding: theme.spacing(2),
		textAlign: "right",
	},
};

const ActionHome = () => {
	const data = getLatestData();
	return (
		<main>
			<Base />
			<Grid
				container
				style={{ ...styles.todo }}
				justify="center"
				direction="column"
			>
				<div style={{ ...styles.paper }}>
					<h2 style={{ fontWeight: 500, fontSize: "24px" }}>
						{moment().format("ddd, Do MMM")}
					</h2>
					<p
						style={{
							marginTop: "5px",
							textAlign: "center",
							padding: "0 20px",
							fontWeight: "400",
						}}
					>
						<i>
							“Every action you take is a vote for the person you
							wish to become”
						</i>
						<br /> - James Clear
					</p>
					{data["tasks"].length === 0 ? (
						<div style={{ textAlign: "center", marginTop: "60px" }}>
							<Button
								variant="outlined"
								size="large"
								style={{
									textTransform: "none",
									fontSize: "18px",
									fontWeight: "400",
									borderWidth: "2px",
									borderColor: "#16463F",
								}}
								onClick={() => {
									Router.push("/goals");
								}}
							>
								Add Your First Daily Goal 🎯
							</Button>
						</div>
					) : null}
					{data && data.tasks && data.tasks.length > 0 ? (
						<ActionList data={data} />
					) : null}
				</div>
			</Grid>
		</main>
	);
};

export default ActionHome;
