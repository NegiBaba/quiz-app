import { Box } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Typography } from "@mui/material";

export const Option = ({ content, showAnswer, isCorrect, handleSelection }) => {
	return (
		<Box
			sx={{
				"p": "28px 0 28px 20px",
				"my": "10px",
				"border": `${showAnswer ? "2px solid" : ""}`,
				"display": "flex",
				"alignItems": "center",
				"borderRadius": "12px",
				"backgroundColor": "#F3F4FA",
				"justifyContent": "flex-start",
				"borderColor": `${isCorrect ? "success.main" : "error.main"}`,
				"&:hover": {
					cursor: "pointer",
				},
			}}
			onClick={handleSelection}
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
