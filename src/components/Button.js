import { Button as MuiButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Button = ({ label, type }) => {
	const renderButton = () => {
		if (type && type === "next") {
			return (
				<MuiButton
					variant="contained"
					sx={{
						fontSize: "30px",
						lineHeight: "67px",
					}}
					endIcon={
						<ArrowForwardIcon sx={{ minHeight: "40px", minWidth: "40px" }} />
					}
				>
					{label}
				</MuiButton>
			);
		} else {
			return (
				<MuiButton
					variant="contained"
					sx={{
						position: "absolute",
						bottom: 0,
						fontSize: "28px",
					}}
				>
					{label}
				</MuiButton>
			);
		}
	};

	return renderButton();
};
