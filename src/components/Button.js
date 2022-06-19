import { Button as MuiButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Button = ({ label, type, fetchMethod, navigateMethod }) => {
	const startQuiz = () => {
		fetchMethod();
	};

	const renderButton = () => {
		if (type && type === "next") {
			return (
				<MuiButton
					variant="contained"
					sx={{
						height: "65px",
						fontSize: "22px",
					}}
					onClick={navigateMethod}
					endIcon={
						<ArrowForwardIcon
							sx={{
								top: "50%",
								right: "30px",
								position: "absolute",
								minHeight: "18px",
								minWidth: "18px",
								transform: "translateY(-50%)",
							}}
						/>
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
						fontSize: "26px",
					}}
					onClick={startQuiz}
				>
					{label}
				</MuiButton>
			);
		}
	};

	return renderButton();
};
