import axios from "axios";
import moment from "moment";
import { setAuthData, getAuthData } from "./storage";

module.exports = class Client {
	constructor(authClient) {
		``;
		this.authClient = authClient;
	}

	getGoogleAuthURL() {
		/*
		 * Generate a url that asks permissions to the user's email and profile
		 */
		const scopes = ["https://www.googleapis.com/auth/drive.appdata"];
		const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
		const options = {
			access_type: "offline",
			prompt: "consent",
			scope: scopes.join(" "),
			redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
			client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
			response_type: "code",
		};
		const qs = new URLSearchParams(options);
		return `${rootUrl}?${qs.toString()}`;
	}

	getTokenFromCode(code) {
		/*
		 * Uses the code to get tokens
		 * that can be used to fetch the user's profile
		 */
		const url = "https://accounts.google.com/o/oauth2/token";
		const values = {
			code,
			client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
			client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
			redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
			grant_type: "authorization_code",
		};

		const qs = new URLSearchParams(values);
		const rootUrl = `${url}?${qs.toString()}`;
		return axios
			.post(rootUrl, {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			})
			.then((res) => this.processAuthData(res.data))
			.catch((error) => {
				console.error(`Failed to fetch auth tokens`);
				throw new Error(error.message);
			});
	}

	refreshToken(refreshToken) {
		const url = "https://accounts.google.com/o/oauth2/token";
		const values = {
			refresh_token: refreshToken,
			client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
			client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
			grant_type: "refresh_token",
		};
		const qs = new URLSearchParams(values);
		const rootUrl = `${url}?${qs.toString()}`;
		return axios
			.post(rootUrl, {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			})
			.then((res) => {
				let data = res.data;
				data.refresh_token = refreshToken;
				return this.processAuthData(data);
			})
			.catch((error) => {
				console.error(`Failed to fetch auth tokens`);
				throw new Error(error.message);
			});
	}

	processAuthData(data) {
		try {
			let tokenStr = "";
			const {
				access_token,
				refresh_token,
				expires_in,
				scope,
				token_type,
			} = data;
			const expiresAt = moment().add(expires_in - 10, "seconds");
			let tokenData = {
				accessToken: access_token,
				refreshToken: refresh_token,
				expiresAt,
				scope,
				tokenType: token_type,
			};
			setAuthData(tokenData);
			return tokenData;
		} catch (error) {
			console.error(`Failed to process auth data`);
			throw new Error(error.message);
		}
	}

	getAuthToken() {
		let data = getAuthData();
		if (!data) {
			return Promise.resolve(null);
		} else {
			let { accessToken, refreshToken, expiresAt } = data;
			if (moment().isAfter(expiresAt)) {
				return this.refreshToken(refreshToken)
					.then((data) => {
						setAuthData(data);
						return data.accessToken;
					})
					.catch((error) => {
						console.error(`Failed to refresh token`);
						throw new Error(error.message);
					});
			} else {
				return Promise.resolve(accessToken);
			}
		}
	}

	isAuthAvailable() {
		return this.getAuthToken().then((token) => {
			return token ? true : false;
		});
	}
};
