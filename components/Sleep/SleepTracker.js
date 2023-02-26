import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../src/theme";
import Base from "../Base";
import dayjs from "dayjs";
import { getSettingsData } from "../../utils/storage";
import {
	getLastSleepData,
	setLastSleepData,
	getSleepSettingData,
	setSleepNow,
} from "../../utils/storage/sleep";
import { Button } from "@mui/material";
import { capitalize } from "../../utils/helpers";

const styles = {
	grid: {
		maxWidth: 480,
		margin: "auto",
		marginBottom: "100px",
		padding: theme.spacing(2),
	},
	paper: {
		width: "100%",
	},
};

const PageContent = () => {
	const settings = getSettingsData();
	const sleepSetting = getSleepSettingData();
	const lastSleepData = getLastSleepData();

	const handleSleepNow = () => {
		setSleepNow();
	};

	return (
		<main>
			<Base />
			<Grid
				container
				sx={{ ...styles.grid }}
				justify="center"
				direction="column"
			>
				<div style={{ ...styles.paper }}>
					<h2
						style={{
							fontWeight: 500,
							fontSize: "24px",
							textAlign: "center",
						}}
					>
						{dayjs()
							.add(-settings.dayStartTime.hours, "hour")
							.format("ddd, Do MMM")}
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
							“The best bridge between despair and hope is a good
							night's sleep”
						</i>
						<br /> - Matthew Walker
					</p>

					<div>
						<h3
							style={{
								marginBottom: "0px",
							}}
						>
							Sleep Goal
						</h3>
						<div
							style={{
								display: "flex",
								padding: "10px",
							}}
						>
							<div
								style={{
									width: "50%",
								}}
							>
								<p
									style={{
										marginBottom: "4px",
									}}
								>
									Bedtime
								</p>
								<p
									style={{
										fontWeight: "500",
										marginTop: 0,
									}}
								>
									{dayjs()
										.startOf("day")
										.add(
											sleepSetting.sleepStartTime.hours,
											"hour"
										)
										.add(
											sleepSetting.sleepStartTime.minutes,
											"minute"
										)
										.format("h:mm A")}
								</p>
							</div>
							<div>
								<p
									style={{
										marginBottom: "4px",
									}}
								>
									Duration
								</p>
								<p
									style={{
										fontWeight: "500",
										marginTop: 0,
									}}
								>
									{`${sleepSetting.sleepDuration.hours} h ${
										sleepSetting.sleepDuration.minutes
											? `${sleepSetting.sleepDuration.minutes} m`
											: ""
									}`}
								</p>
							</div>
						</div>
					</div>

					<Button
						variant="contained"
						style={{
							width: "100%",
							marginTop: "16px",
						}}
						onClick={handleSleepNow}
					>
						I am Gonna Sleep Now
					</Button>

					<div>
						<h3
							style={{
								marginBottom: "0px",
								marginTop: "32px",
							}}
						>
							Last Night
						</h3>
						<div
							style={{
								display: "flex",
							}}
						>
							<div
								style={{
									width: "50%",
								}}
							>
								<p
									style={{
										marginBottom: "4px",
									}}
								>
									Bedtime
								</p>
								<p
									style={{
										fontWeight: "500",
										marginTop: "0px",
									}}
								>
									{dayjs()
										.startOf("day")
										.add(
											sleepSetting.sleepStartTime.hours,
											"hour"
										)
										.add(
											sleepSetting.sleepStartTime.minutes,
											"minute"
										)
										.format("h:mm A")}
								</p>
							</div>
							<div>
								<p
									style={{
										marginBottom: "4px",
									}}
								>
									Wakeup Time
								</p>
								<p
									style={{
										fontWeight: "500",
										marginTop: "0px",
									}}
								>
									{dayjs()
										.startOf("day")
										.add(
											sleepSetting.sleepEndTime.hours,
											"hour"
										)
										.add(
											sleepSetting.sleepEndTime.minutes,
											"minute"
										)
										.format("h:mm A")}
								</p>
							</div>
						</div>
						<div
							style={{
								display: "flex",
							}}
						>
							<div
								style={{
									width: "50%",
								}}
							>
								<p
									style={{
										marginBottom: "4px",
									}}
								>
									Duration
								</p>
								<p
									style={{
										fontWeight: "500",
										marginTop: "0px",
									}}
								>
									{`${sleepSetting.sleepDuration.hours} h ${
										sleepSetting.sleepDuration.minutes
											? `${sleepSetting.sleepDuration.minutes} m`
											: ""
									}`}
								</p>
							</div>
							<div>
								<p
									style={{
										marginBottom: "4px",
									}}
								>
									Sleep Quality
								</p>
								<p
									style={{
										fontWeight: "500",
										marginTop: 0,
									}}
								>
									{capitalize("good")}
								</p>
							</div>
						</div>
					</div>

					<Button
						variant="outlined"
						style={{
							width: "100%",
							marginTop: "16px",
						}}
						onClick={handleSleepNow}
					>
						UPDATE
					</Button>
				</div>
			</Grid>
		</main>
	);
};

export default PageContent;
