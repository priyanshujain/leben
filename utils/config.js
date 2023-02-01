const env = Object.create(process.env);

const googleClientId = env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const googleClientSecret = env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET;
const googleRedirectUri = env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
console.log(
	googleClientId,
	googleClientSecret,
	googleRedirectUri,
	env,
	process.env
);
export const credentials = {
	googleClientId: googleClientId,
	googleClientSecret: googleClientSecret,
	googleRedirectUri: googleRedirectUri,
};
