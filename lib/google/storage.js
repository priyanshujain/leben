export function getAuthData() {
	var data = window.localStorage.getItem("_auth");
	if (data) {
		data = decodeURIComponent(escape(window.atob(data)));
		data = JSON.parse(data);
	} else {
		data = {};
	}
	return data;
}

export function setAuthData(data) {
	data = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))));
	window.localStorage.setItem("_auth", data);
}
