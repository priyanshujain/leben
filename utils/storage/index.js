import React from "react";
import { getSettingsData } from "./settings";
import { renameKey } from "../helpers";
import { getLatestDate, getOldCurrentDate, getCurrentDate } from "./date";

function getData() {
	return getDataLocalStorage();
}

function setData(updatedData) {
	return setDataLocalStorage(updatedData);
}

function getDataLocalStorage() {
	var data = window.localStorage.getItem("db");
	if (data) {
		data = decodeURIComponent(escape(window.atob(data)));
		data = JSON.parse(data);
	} else {
		data = {};
		data["events"] = {};
	}
	return data;
}

function setDataLocalStorage(data) {
	data = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))));
	window.localStorage.setItem("db", data);
}
function getSchema() {
	const data = getData();
	var schema = data["schema"] || {
		lastUpdated: new Date().toISOString(),
		lastUpdatedDisplay: new Date().toLocaleString(),
		tasks: [],
	};
	return schema["tasks"] || [];
}

function setSchema(tasks) {
	const db = getData();
	var schema = {
		tasks: tasks,
	};
	schema["lastUpdated"] = new Date().toISOString();
	schema["lastUpdatedDisplay"] = new Date().toLocaleString();
	db["schema"] = schema;
	setData(db);
}

function getLatestData() {
	var data = getData();
	let date = getCurrentDate();
	const oldDate = getOldCurrentDate();

	const defaultData = getSchema().map((key) => {
		return {
			id: key.id,
			text: key.text,
			completed: false,
			lastUpdated: "",
			lastUpdatedDisplay: "",
		};
	});
	let isExists = false;
	if (data["events"].hasOwnProperty(date)) {
		isExists = true;
	} else if (data["events"].hasOwnProperty(oldDate)) {
		isExists = true;
		renameKey(data["events"], oldDate, date);
		setData(data);
		date = oldDate;
	}
	if (!isExists) {
		data["events"][date] = {};
		data["events"][date]["tasks"] = defaultData;
		data["events"][date]["lastUpdated"] = new Date().toISOString();
		data["events"][date]["lastUpdatedDisplay"] =
			new Date().toLocaleString();
		setData(data);
		return data["events"][date];
	}
	// check if any item in data has changed from schema
	const schema = getSchema();
	const schemaIds = schema.map((key) => key.id);
	const dataIds = data["events"][date]["tasks"].map((key) => key.id);
	const newIds = schemaIds.filter((id) => !dataIds.includes(id));
	const removedIds = dataIds.filter((id) => !schemaIds.includes(id));
	if (newIds.length > 0 || removedIds.length > 0) {
		const newData = data["events"][date]["tasks"].filter(
			(item) => !removedIds.includes(item.id)
		);
		newIds.forEach((id) => {
			newData.push({
				id: id,
				text: schema.find((item) => item.id === id).text,
				completed: false,
				lastUpdated: "",
				lastUpdatedDisplay: "",
			});
		});
		data["events"][date]["tasks"] = newData;
		data["events"][date]["lastUpdated"] = new Date().toISOString();
		data["events"][date]["lastUpdatedDisplay"] =
			new Date().toLocaleString();
		setData(data);
	}
	return data["events"][date];
}

function setLatestData(data) {
	var db = getData();
	let date = getCurrentDate();
	const oldDate = getOldCurrentDate();
	let isExists = false;
	if (db["events"].hasOwnProperty(date)) {
		isExists = true;
	} else if (db["events"].hasOwnProperty(oldDate)) {
		isExists = true;
		date = oldDate;
	}
	data["lastUpdated"] = new Date().toISOString();
	data["lastUpdatedDisplay"] = new Date().toLocaleString();
	if (!db["events"][date]) {
		db["events"][date] = {};
	}
	db["events"][date]["tasks"] = data;
	db["events"][date]["lastUpdated"] = new Date().toISOString();
	db["events"][date]["lastUpdatedDisplay"] = new Date().toLocaleString();
	setData(db);
}

function downloadData() {
	const data = JSON.stringify(getData(), null, 4);
	const filename = "leben-backup.json";
	var file = new Blob([data], { type: "application/json" });
	if (window.navigator.msSaveOrOpenBlob)
		// IE10+
		window.navigator.msSaveOrOpenBlob(file, filename);
	else {
		// Others
		var a = document.createElement("a"),
			url = URL.createObjectURL(file);
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		setTimeout(function () {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);
		}, 0);
	}
}

export {
	getLatestDate,
	getSchema,
	setSchema,
	getLatestData,
	setLatestData,
	downloadData,
	getData,
	getSettingsData,
	getCurrentDate,
};
