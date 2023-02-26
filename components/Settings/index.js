import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import theme from "../../src/theme";
import Base from "../Base";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { getSettingsData } from "../../utils/storage";
import { setSettingsData } from "../../utils/storage/settings";
import dayjs from "dayjs";
import { Snackbar } from "@mui/material";

const styles = {
	todo: {
		maxWidth: 480,
		margin: "auto",
		marginBottom: "100px",
	},
	paper: {
		width: "100%",
		textAlign: "left",
	},
	form: {
		padding: theme.spacing(2),
		paddingTop: 0,
		textAlign: "left",
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
};

const Settings = () => {
	let initialState = getSettingsData();
	const [settings, setSettings] = useState(initialState);
	const [open, setOpen] = useState(false);
	const [startTime, setStartTime] = useState(initialState.dayStartTime);
	const [endTime, setEndTime] = useState(initialState.dayEndTime);

	const handleSave = () => {
		if (settings != getSettingsData()) {
			setSettingsData(settings);
			setOpen(true);
		}
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (newValue) => {
		let newStartTime = {
			hours: newValue.hour(),
			minutes: newValue.minute(),
		};
		setStartTime(newStartTime);
		settings.dayStartTime = newStartTime;
		setSettings(settings);
	};

	const handleEndTimeChange = (newValue) => {
		let newEndTime = {
			hours: newValue.hour(),
			minutes: newValue.minute(),
		};
		setEndTime(newEndTime);
		settings.dayEndTime = newEndTime;
		setSettings(settings);
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
				<div style={{ ...styles.paper }}>
					<h1
						style={{
							textAlign: "left",
							paddingLeft: "20px",
							fontWeight: "400",
						}}
					>
						App Settings
					</h1>
					<div
						style={{
							paddingTop: "20px",
							paddingLeft: "20px",
						}}
					>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<TimePicker
								label="Day Start Time"
								value={dayjs()
									.hour(startTime.hours)
									.minute(startTime.minutes)}
								onChange={handleChange}
								renderInput={(params) => (
									<TextField {...params} />
								)}
							/>
						</LocalizationProvider>

						<div
							style={{
								marginTop: "32px",
							}}
						>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<TimePicker
									label="Wind Up Time"
									value={dayjs()
										.hour(endTime.hours)
										.minute(endTime.minutes)}
									onChange={handleEndTimeChange}
									renderInput={(params) => (
										<TextField {...params} />
									)}
								/>
							</LocalizationProvider>
						</div>

						<div style={{ ...styles.action }}>
							<Button
								type="submit"
								variant="contained"
								onClick={handleSave}
							>
								SAVE
							</Button>
							<Snackbar
								open={open}
								autoHideDuration={1000}
								onClose={handleClose}
								message="Setting Saved Successfully"
							/>
						</div>
					</div>
				</div>
			</Grid>
		</main>
	);
};

export default Settings;
