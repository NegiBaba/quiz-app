import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#FF3B3F",
		},
		secondary: {
			main: "#AF9CF3",
		},
		error: {
			main: "#FF3B3F",
		},
		success: {
			light: "#35D299",
			main: "#44B77B",
		},
		grey: {
			main: "#F3F4FA",
		},
	},
	typography: {
		fontFamily: "Nunito",
		h6: {
			fontSize: "16px",
			fontWeight: 600,
			opacity: 0.8,
			mixBlendMode: "normal",
			lineHeight: "161%",
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				fullWidth: true,
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					fontWeight: "900",
					borderRadius: "80px",
					textTransform: "none",
					padding: "10px 0px",
				},
			},
		},
		MuiCircularProgress: {
			styleOverrides: {
				root: {
					"color": "#44B77B",
					"& .MuiCircularProgress-circle": {
						strokeLinecap: "round",
					},
				},
			},
		},
	},
});

export default theme;
