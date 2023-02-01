import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#16463F",
		},
		secondary: {
			main: "#16463F",
		},
		background: {
			default: "#fff",
		},
		error: {
			main: red.A400,
		},
	},
	typography: {
		fontFamily: "Graphik",
		h5: {
			fontWeight: 500,
			fontSize: 26,
			letterSpacing: 0.5,
		},
		h2: {
			fontWeight: 500,
		},
	},
	shape: {
		borderRadius: 8,
	},
	components: {
		MuiTab: {
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiCssBaseline: {
			styleOverrides: `
			@font-face {
				font-family: 'Graphik';
				src: url("static/fonts/Graphik-Regular-Web.eot");
				src: url("static/fonts/Graphik-Regular-Web.eot?#iefix") format("embedded-opentype"),
				  url("static/fonts/Graphik-Regular-Web.woff2") format("woff2"),
				  url("static/fonts/Graphik-Regular-Web.woff") format("woff"),
				  url("static/fonts/Graphik-Regular-Web.ttf") format("truetype");
			  }
			  @font-face {
				font-style: italic;
				font-weight: normal;
				font-family: 'Graphik';
				src: url("static/fonts/Graphik-RegularItalic-Web.eot");
				src: url("static/fonts/Graphik-RegularItalic-Web.eot?#iefix") format("embedded-opentype"),
				  url("static/fonts/Graphik-RegularItalic-Web.woff2") format("woff2"),
				  url("static/fonts/Graphik-RegularItalic-Web.woff") format("woff"),
				  url("static/fonts/Graphik-RegularItalic-Web.ttf") format("truetype");
			  }
			  @font-face {
				font-weight: 500;
				font-style: normal;
				font-family: 'Graphik';
				src: url("static/fonts/Graphik-Medium-Web.eot");
				src: url("static/fonts/Graphik-Medium-Web.eot?#iefix") format("embedded-opentype"),
				  url("static/fonts/Graphik-Medium-Web.woff2") format("woff2"),
				  url("static/fonts/Graphik-Medium-Web.woff") format("woff"),
				  url("static/fonts/Graphik-Medium-Web.ttf") format("truetype");
			  }
			  
			  
			  @font-face {
				font-weight: 700;
				font-style: normal;
				font-family: 'Graphik';
				src: url("static/fonts/Graphik-Bold-Web.eot");
				src: url("static/fonts/Graphik-Bold-Web.eot?#iefix") format("embedded-opentype"),
				  url("static/fonts/Graphik-Bold-Web.woff2") format("woff2"),
				  url("static/fonts/Graphik-Bold-Web.woff") format("woff"),
				  url("static/fonts/Graphik-Bold-Web.ttf") format("truetype");
				}
			  
			  
			  @font-face {
				font-weight: 900;
				font-style: normal;
				font-family: 'Graphik';
				src: url("static/fonts/Graphik-Black-Web.eot");
				src: url("static/fonts/Graphik-Black-Web.eot?#iefix") format("embedded-opentype"),
				url("static/fonts/Graphik-Black-Web.woff2") format("woff2"),
				url("static/fonts/Graphik-Black-Web.woff") format("woff"),
				url("static/fonts/Graphik-Black-Web.ttf") format("truetype"),
				url("static/fonts/Graphik-Black-Web.svg#Graphik-Black-Web") format("svg");
			  }
			`,
		},
	},
	mixins: {
		toolbar: {
			minHeight: 48,
		},
	},
});

export default theme;
