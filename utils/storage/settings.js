const allFeatures = ["habit", "sleep"];

export function getSettingsData() {
	var data = window.localStorage.getItem("_settings");
	const defaultData = getDefaultSettings();
	if (data) {
		data = decodeURIComponent(escape(window.atob(data)));
		data = JSON.parse(data);
		for (let key in defaultData) {
			if (data[key] === undefined) {
				data[key] = defaultData[key];
			}
		}
	} else {
		data = getDefaultSettings();
	}
	return data;
}

export function setSettingsData(data) {
	data = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))));
	window.localStorage.setItem("_settings", data);
}

function getDefaultSettings() {
	const settings = {
		dayStartTime: {
			hours: 0,
			minutes: 0,
		},
		dayEndTime: {
			hours: 0,
			minutes: 0,
		},
		locationId: "home",
		locations: [
			{
				id: "home",
				name: "Home",
				lat: 0,
				lng: 0,
				locationString: "",
				city: "",
				country: "",
				timezone: "",
				state: "",
				postalCode: "",
			},
		],
		theme: "light",
		features: ["habit", "sleep"],
	};
	return settings;
}

export function getFeatures() {
	const data = getSettingsData()["features"];
	let featureData = {};
	allFeatures.map((feature) => {
		featureData[feature] = false;
	});
	data.map((feature) => {
		featureData[feature] = true;
	});
	return featureData;
}

export function getMandatoryFeatures() {
	return {
		settings: true,
	};
}
