import React from "react";
import Grid from "@mui/material/Grid";
import TodoItem from "./Action";
import moment from "moment";
import { fixOldDateFormat } from "../utils/helpers";

const styles = {
	todo: {
		maxWidth: 400,
		margin: "auto",
		textAlign: "center",
	},
	logo: {
		left: "unset !important",
	},
	srOnly: {
		width: 0,
		height: 0,
		position: "absolute",
		left: "-9999px",
		overflow: "hidden",
	},
	paper: {
		width: "100%",
	},
	list: {
		listStyle: "none",
		padding: 0,
		marginBottom: 0,
		borderRadius: "0 0 4px 4px",
	},
};

const ReportList = ({ data }) => {
	const initialState = Object.keys(data["events"])
		.reverse()
		.map((key) => {
			return {
				day: fixOldDateFormat(key),
				tasks: data["events"][key]["tasks"],
				lastUpdated: data["events"][key]["lastUpdated"],
				lastUpdatedDisplay: data["events"][key]["lastUpdatedDisplay"],
			};
		});

	return (
		<Grid
			container
			sx={{ ...styles.todo }}
			justify="center"
			direction="column"
		>
			<header>
				<h1 style={{ ...styles.srOnly }}> Report </h1>
			</header>
			<div sx={{ ...styles.paper }}>
				<ul style={{ ...styles.list }}>
					{initialState.map((todo) => (
						<div style={{ marginTop: "40px" }} key={todo.day}>
							<h2
								style={{
									margin: "10px 0 0 0",
									fontWeight: 500,
								}}
							>
								{moment(new Date(todo.day)).format(
									"ddd, Do MMM"
								)}
							</h2>
							<p
								style={{
									textAlign: "center",
									marginLeft: "20px",
									marginBottom: "20px",
									marginTop: 0,
								}}
							>{`(${parseInt(
								(todo.tasks.filter(
									(todo) => todo.completed === true
								).length *
									100) /
									todo.tasks.length
							)}% completed)`}</p>
							<ul style={{ ...styles.list }}>
								{todo.tasks.map((task) => (
									<TodoItem
										key={task.id}
										todo={task}
										updateTodo={() => {}}
										disabled={true}
									/>
								))}
							</ul>
						</div>
					))}
				</ul>
			</div>
		</Grid>
	);
};

export default ReportList;
