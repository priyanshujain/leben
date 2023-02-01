import React from "react";
import { createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import theme from "../src/theme";
import moment from "moment";

const styles = {
	todoItem: {
		display: "flex",
		padding: theme.spacing(1.5),
		animationName: "$slideDown",
		animationDuration: "300ms",
		animationFillMode: "forwards",
		animationDelay: "0s",
		animationTimingFunction: "cubic-bezier(0.1, 0.23, 0.23, 1.44)",
		"&:nth-child(even)": {
			background: "#EEF6FF",
		},
	},
	text: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
	},
	textWithStrike: {
		textDecoration: "line-through",
	},
};

const TodoItem = ({ todo, updateTodo, disabled }) => {
	return (
		<li style={{ ...styles.todoItem }}>
			<label
				style={
					todo.completed && !disabled
						? { ...styles.textWithStrike, ...styles.text }
						: { ...styles.text }
				}
			>
				<Checkbox
					checked={todo.completed}
					onChange={() =>
						updateTodo({
							...todo,
							completed: !todo.completed,
							lastUpdated: new Date().toISOString(),
							lastUpdatedDisplay: new Date().toLocaleString(),
						})
					}
					disabled={disabled}
					color="secondary"
				/>
				<div style={{ paddingTop: "4px", paddingBottom: "4px" }}>
					<Typography
						variant="h6"
						display="block"
						style={{
							color: "black",
							textAlign: "left",
							paddingRight: "10px",
						}}
					>
						{todo.text}
					</Typography>
					{todo.lastUpdated && (
						<Typography
							variant="span"
							display="block"
							style={{ color: "black", textAlign: "left" }}
						>
							Last Updated:{" "}
							{disabled
								? moment(new Date(todo.lastUpdated)).format(
										"MMM Do YYYY, h:mm a"
								  )
								: moment(new Date(todo.lastUpdated)).format(
										"h:mm a"
								  )}
						</Typography>
					)}
				</div>
			</label>
		</li>
	);
};

export default TodoItem;
