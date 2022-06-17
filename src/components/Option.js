import { Box } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Typography } from "@mui/material";
import { useEffect } from "react";

export const Option = ({ content, showAnswer, isCorrect }) => {
	useEffect(() => {
		console.log(isCorrect);
	});
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
				fontSize: "20px",
				backgroundColor: "#F3F4FA",
				padding: "20px 0 20px 20px",
				borderRadius: "12px",
				border: `${showAnswer ? "2px solid" : ""}`,
				borderColor: `${isCorrect ? "success.main" : ""}`,
			}}
		>
			{showAnswer ? (
				<CheckCircleIcon
					sx={{
						color: "success.main",
						opacity: `${isCorrect ? 1 : 0.08}`,
						height: "32px",
						width: "32px",
						marginRight: "24px",
					}}
				/>
			) : (
				<CircleOutlinedIcon
					sx={{
						color: "#000000",
						opacity: "0.08",
						height: "32px",
						width: "32px",
						marginRight: "24px",
					}}
				/>
			)}
			<Typography variant="h6">{content}</Typography>
		</Box>
	);
};
