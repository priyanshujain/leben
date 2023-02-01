import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../src/createEmotionCache";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-GB">
				<Head>
					<meta name="theme-color" content="#16463F" />
					<meta
						name="Description"
						content="A simplified habit tracking app."
					/>
					<link rel="manifest" href="static/manifest.json" />
					<link
						rel="icon"
						sizes="196x196"
						href="static/img/favicon-196.png"
					/>
					<link
						rel="apple-touch-icon"
						href="static/img/apple-icon-180.png"
					/>
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-2048-2732.jpg"
						media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-2732-2048.jpg"
						media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-1668-2388.jpg"
						media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-2388-1668.jpg"
						media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-1536-2048.jpg"
						media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-2048-1536.jpg"
						media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-1668-2224.jpg"
						media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-2224-1668.jpg"
						media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-1620-2160.jpg"
						media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-2160-1620.jpg"
						media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-1290-2796.jpg"
						media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-2796-1290.jpg"
						media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-1179-2556.jpg"
						media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-2556-1179.jpg"
						media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-1284-2778.jpg"
						media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-2778-1284.jpg"
						media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-1170-2532.jpg"
						media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-2532-1170.jpg"
						media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-1125-2436.jpg"
						media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-2436-1125.jpg"
						media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-1242-2688.jpg"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-2688-1242.jpg"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-828-1792.jpg"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-1792-828.jpg"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-1242-2208.jpg"
						media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-2208-1242.jpg"
						media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-750-1334.jpg"
						media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-1334-750.jpg"
						media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-640-1136.jpg"
						media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					/>
					<link
						rel="apple-touch-startup-image"
						href="static/img/apple-splash-1136-640.jpg"
						media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					/>
				</Head>
				<body>
					<script src="https://apis.google.com/js/api.js"></script>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	// Render app and page and get the context of the page with collected side effects.
	const originalRenderPage = ctx.renderPage;

	// You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
	// However, be aware that it can have global side effects.
	const cache = createEmotionCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />;
				},
		});

	const initialProps = await Document.getInitialProps(ctx);
	// This is important. It prevents Emotion to render invalid HTML.
	// See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(" ")}`}
			key={style.key}
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		emotionStyleTags,
	};
};

export default MyDocument;
