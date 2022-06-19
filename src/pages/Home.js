import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { Button } from "../components/Button";

import brandIcon from "../assets/icons/brand.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Home = ({ fetchQuestions, questionsState }) => {
	const navigate = useNavigate();
	const fetchQuestionsAndRedirect = () => {
		fetchQuestions();
	};

	useEffect(() => {
		if (questionsState === true) {
			navigate("/question/0");
		}
	});

	return (
		<Box
			container
			sx={{
				pt: "20px",
				pb: "30px",
				flexGrow: 1,
				height: window.innerHeight,
				display: "flex",
				position: "relative",
				alignItems: "center",
				flexDirection: "column",
				justifyContent: "space-between",
				background:
					"linear-gradient(180deg, rgba(175, 156, 243, 0) 7.92%, #AF9CF3 86.48%)",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					height: "50px",
				}}
			>
				<img src={brandIcon} height="36px" alt="Upraised Icon" />
				<Typography
					variant="h5"
					sx={{
						fontFamily: "Poppins",
						fontWeight: "700",
						marginLeft: "10px",
						fontSize: "26px",
					}}
				>
					upraised
				</Typography>
			</Box>
			<Box
				sx={{
					width: "220px",
					height: "210px",
					display: "flex",
					borderRadius: "50%",
					alignItems: "center",
					backgroundColor: "white",
					justifyContent: "center",
				}}
			>
				<Typography
					variant="h4"
					sx={{
						fontFamily: "Poppins",
						fontWeight: 800,
						fontSize: "40px",
						lineHeight: "112%",
						color: "primary.main",
					}}
				>
					Quiz
				</Typography>
			</Box>
			<Box sx={{ p: "32px", width: "100%" }}>
				<Button label="Start" fetchMethod={fetchQuestionsAndRedirect}></Button>
			</Box>
		</Box>
	);
};
