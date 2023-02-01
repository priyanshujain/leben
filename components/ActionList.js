import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TodoItem from "./Action";
import { setLatestData } from "../utils/storage";
import theme from "../src/theme";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const styles = {
	todo: {
		maxWidth: 480,
		margin: "auto",
		marginTop: theme.spacing(4),
		textAlign: "center",
	},
	paper: {
		width: "100%",
	},
	list: {
		listStyle: "none",
		padding: 0,
		marginBottom: 0,
		marginTop: 0,
		borderRadius: "0 0 4px 4px",
	},
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	margin: "0 20px",
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor:
			theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.primary.main,
	},
}));

const Todo = ({ data }) => {
	const initialState = data["tasks"].map((key) => {
		return {
			id: key.id,
			text: key.text,
			completed: key.completed,
			lastUpdated: key.lastUpdated,
			lastUpdatedDisplay: key.lastUpdatedDisplay,
		};
	});
	const [todos, setTodos] = useState(initialState);

	const updateTodo = (todo) => {
		const updatedTodos = todos.map((v) => (v.id === todo.id ? todo : v));
		setTodos(updatedTodos);
		setLatestData(updatedTodos);
	};

	const completedTodos = todos.filter((todo) => todo.completed === true);
	const pendingTodos = todos.filter((todo) => todo.completed !== true);
	const completedNum = completedTodos.length;
	const perCompleted = (completedNum * 100) / todos.length;

	return (
		<Grid
			container
			sx={{ ...styles.todo }}
			justify="center"
			direction="column"
		>
			<div>
				<p
					style={{
						textAlign: "left",
						marginLeft: "20px",
						marginBottom: "20px",
						fontSize: "20px",
					}}
				>{`Today's progress`}</p>
				<BorderLinearProgress
					variant="determinate"
					value={perCompleted}
				/>
				<p
					style={{
						textAlign: "right",
						marginRight: "20px",
					}}
				>{`${parseInt(perCompleted)}% goals completed for today`}</p>
			</div>
			<p
				style={{
					textAlign: "left",
					marginLeft: "20px",
					marginBottom: "0px",
					marginTop: "20px",
				}}
			>{`Pending (${pendingTodos.length})`}</p>
			<div style={{ ...styles.paper }}>
				<ul style={{ ...styles.list }}>
					{pendingTodos.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							updateTodo={updateTodo}
							disabled={false}
						/>
					))}
				</ul>
			</div>
			<p
				style={{
					textAlign: "left",
					marginLeft: "20px",
					marginBottom: "0px",
					marginTop: "20px",
				}}
			>{`Completed (${completedNum})`}</p>
			<div style={{ ...styles.paper }}>
				<ul style={{ ...styles.list }}>
					{completedTodos.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							updateTodo={updateTodo}
							disabled={false}
						/>
					))}
				</ul>
			</div>
		</Grid>
	);
};

export default Todo;
