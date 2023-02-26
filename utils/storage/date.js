import React from "react";
import dayjs from "dayjs";
import { getSettingsData } from "./settings";

function getLatestDate() {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	if (month < 10) {
		return `${year}-0${month}-${day}`;
	}
	return `${year}-${month}-${day}`;
}

function getCurrentDate() {
	const settings = getSettingsData();
	const date = dayjs()
		.add(-settings.dayStartTime.hours, "hour")
		.add(-settings.dayStartTime.minutes, "minute");
	const year = date.year();
	const month = date.month() + 1;
	const day = date.date();

	const monthStr = month < 10 ? `0${month}` : month;
	const dayStr = day < 10 ? `0${day}` : day;
	return `${year}-${monthStr}-${dayStr}`;
}

function getLastSleepDate() {
	const settings = getSettingsData();
	const date = dayjs()
		.add(-1, "day")
		.add(-settings.dayStartTime.hours, "hour")
		.add(-settings.dayStartTime.minutes, "minute");
	const year = date.year();
	const month = date.month() + 1;
	const day = date.date();

	const monthStr = month < 10 ? `0${month}` : month;
	const dayStr = day < 10 ? `0${day}` : day;
	return `${year}-${monthStr}-${dayStr}`;
}

function getOldCurrentDate() {
	const settings = getSettingsData();
	const date = dayjs()
		.add(-settings.dayStartTime.hours, "hour")
		.add(-settings.dayStartTime.minutes, "minute");
	const year = date.year();
	const month = date.month() + 1;
	const day = date.date();

	const monthStr = month < 10 ? `0${month}` : month;
	return `${year}-${monthStr}-${day}`;
}

export { getLatestDate, getCurrentDate, getOldCurrentDate, getLastSleepDate };
