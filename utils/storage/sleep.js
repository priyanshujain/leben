import React from "react";
import dayjs from "dayjs";
import { getLastSleepDate, getCurrentDate } from "./date";
import { getSettingsData } from "./settings";

export function getSleepData() {
	var data = window.localStorage.getItem("_sleep");
	if (data) {
		data = decodeURIComponent(escape(window.atob(data)));
		data = JSON.parse(data);
	} else {
		data = getDefaultSleepData();
	}
	return data;
}

export function setSleepData(data) {
	data = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))));
	window.localStorage.setItem("_sleep", data);
}

function getDefaultSleepData() {
	const sleep = {
		setting: {
			sleepStartTime: {
				hours: 11,
				minutes: 0,
			},
			sleepEndTime: {
				hours: 7,
				minutes: 0,
			},
			sleepDuration: {
				hours: 8,
				minutes: 0,
			},
			sleepTimeBuffer: {
				hours: 0,
				minutes: 30,
			},
		},
		events: {},
	};
	return sleep;
}

export function getSleepSchema() {
	return {
		id: "sleep",
		startTime: {
			hours: 0,
			minutes: 0,
			timeIso: "",
			isRecorded: false,
		},
		endTime: {
			hours: 0,
			minutes: 0,
			timeIso: "",
			isRecorded: false,
		},
		duration: 0,
		lastUpdated: "",
		sleepMood: "",
		wakeUPMood: "",
		notes: "",
		alarmUsed: false,
		sleepQuality: "good",
		awakeDuringNight: false,
		sleepAidUsed: false,
		sleepAidType: "",
		sleepAidDosage: "",
		sleepAidTime: {
			hours: 0,
			minutes: 0,
		},
		dayType: "",
		weather: "",
		location: "",
		dinnerTime: {
			hours: 0,
			minutes: 0,
		},
		dinnerType: "",
		dinnerAmount: "",
		dinnerLate: false,
		workoutDone: false,
		workoutType: "",
		workoutTime: {
			hours: 0,
			minutes: 0,
		},
		workoutDuration: {
			hours: 0,
			minutes: 0,
		},
		workoutLate: null,
		workoutIntensity: "",
		workoutLocation: "",
		isStressed: false,
		isAnxious: false,
		isDepressed: false,
		isSad: false,
		isAngry: false,
		isIrritable: false,
		isTired: false,
		isFatigued: false,
		isSleepy: false,
		isNauseous: false,
		isHeadache: false,
		isDizzy: false,
		isFoggy: false,
		isConfused: false,
		isForgetful: false,
		isDistracted: false,
		isRecorded: false,
	};
}

export function getLastSleepData() {
	const date = getLastSleepDate();
	var data = getSleepData();

	const defaultData = getSleepSchema();

	let isExists = false;
	if (data["events"].hasOwnProperty(date)) {
		isExists = true;
	}
	if (!isExists) {
		data["events"][date] = defaultData;
		return data["events"][date];
	}
	return data["events"][date];
}

export function getCurrentSleepData() {
	const date = getCurrentDate();
	var data = getSleepData();

	const defaultData = getSleepSchema();

	let isExists = false;
	if (data["events"].hasOwnProperty(date)) {
		isExists = true;
	}
	if (!isExists) {
		data["events"][date] = defaultData;
		return data["events"][date];
	}
	return data["events"][date];
}

export function setLastSleepData(data) {
	const date = getLastSleepDate();
	var sleepData = getSleepData();
	data["lastUpdated"] = new Date().toISOString();
	sleepData["events"][date] = data;
	setSleepData(sleepData);
}

export function setCurrentSleepData(data) {
	const date = getCurrentSleepData();
	var sleepData = getSleepData();
	data["lastUpdated"] = new Date().toISOString();
	sleepData["events"][date] = data;
	setSleepData(sleepData);
}

export function setDefaultLastSleepData() {
	const date = getLastSleepDate();
	var data = getSleepData();
	if (data["events"].hasOwnProperty(date)) {
		return;
	}
	const sleepData = getLastSleepData();
	setLastSleepData(sleepData);
}

export function getSleepSettingData() {
	let data = getSleepData()["setting"];
	let defaultSettingData = getDefaultSleepData()["setting"];
	for (let key in defaultSettingData) {
		if (data[key] === undefined) {
			data[key] = defaultData[key];
		}
	}
	return data;
}

export function setSleepSettingData(data) {
	let sleepData = getSleepData();
	sleepData["setting"] = data;
	setSleepData(sleepData);
}

export function setSleepNow() {
	let sleepData = getCurrentSleepData();
	const dt = dayjs();
	sleepData.startTime.timeIso = dt.format();
	sleepData.startTime.isRecorded = true;
	sleepData.startTime.hours = dt.hour();
	sleepData.startTime.minutes = dt.minute();
	setCurrentSleepData(sleepData);
}

export function setSleepAuto() {
	const settings = getSettingsData();
	if (
		dayjs() >
		dayjs()
			.startOf("day")
			.add(settings.dayEndTime.hours, "hour")
			.add(settings.dayEndTime.minutes, "minute")
	) {
		let sleepData = getCurrentSleepData();
		const dt = dayjs();
		sleepData.startTime.timeIso = dt.format();
		sleepData.startTime.hours = dt.hour();
		sleepData.startTime.minutes = dt.minute();
		setCurrentSleepData(sleepData);
	}
}

export function setWakeUpAuto() {
	const sleepSetting = getSleepSettingData();
	if (
		dayjs() >
		dayjs()
			.startOf("day")
			.add(sleepSetting.sleepStartTime.hours, "hour")
			.add(sleepSetting.sleepStartTime.minutes, "minute")
	) {
		const settings = getSettingsData();
		let sleepData = getCurrentSleepData();
		const isLastDay =
			dayjs() >
			dayjs()
				.startOf("day")
				.add(settings.dayStartTime.hours, "hour")
				.add(settings.dayStartTime.minutes, "minute");

		if (isLastDay) {
			sleepData = getLastSleepData();
		}
		const dt = dayjs();
		sleepData.startTime.timeIso = dt.format();
		sleepData.startTime.isRecorded = true;
		sleepData.startTime.hours = dt.hour();
		sleepData.startTime.minutes = dt.minute();
		if (isLastDay) {
			setLastSleepData(sleepData);
		} else {
			setCurrentSleepData(sleepData);
		}
	}
}
