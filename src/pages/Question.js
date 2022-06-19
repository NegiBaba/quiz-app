import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { Option } from "../components/Option";
import { Button } from "../components/Button";

import background from "../assets/images/background.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export const Question = ({
	question,
	totalQuestions,
	currentScore,
	changeScore,
}) => {
	const params = useParams();
	const navigate = useNavigate();
	const [showAnswers, setAnswersState] = useState(false);

	const validateAnswer = (event) => {
		if (!showAnswers) setAnswersState(true);
		if (event.currentTarget.dataset.answer === question.answer) {
			changeScore(currentScore + 1);
		}
	};

	const navigateToNextMethod = () => {
		if (Number.parseInt(totalQuestions) - 1 === Number.parseInt(params.index)) {
			navigate("/score");
		} else {
			setAnswersState(false);
			navigate(`/question/${Number.parseInt(params.index) + 1}`);
		}
		setAnswersState(false);
	};

	return (
		<Box
			sx={{
				backgroundColor: "secondary.main",
				backgroundImage: `url(${background})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "contain",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "flex-end",
				pt: "130px",
				boxSizing: "border-box",
			}}
		>
			<Box
				sx={{
					p: "73px 20px 80px",
					width: "100%",
					position: "relative",
					backgroundColor: "white",
					borderRadius: "30px 30px 0px 0px;",
				}}
			>
				<Box
					sx={{
						top: 0,
						left: "50%",
						width: "132px",
						height: "132px",
						borderRadius: "50%",
						position: "absolute",
						backgroundColor: "white",
						transform: "translate(-50%, -50%)",
					}}
				>
					<Box
						height={116}
						width={116}
						sx={{
							top: "50%",
							left: "50%",
							zIndex: 1000,
							position: "absolute",
							transform: "translate(-50%, -50%)",
						}}
					>
						<CircularProgress variant="determinate" size={116} value={20} />
					</Box>
					<Box
						height={116}
						width={116}
						sx={{
							top: "50%",
							left: "50%",
							position: "absolute",
							transform: "translate(-50%, -50%)",
						}}
					>
						<CircularProgress
							variant="determinate"
							size={116}
							value={100}
							sx={{ color: "grey.main" }}
						/>
					</Box>
					<Box
						height={116}
						width={116}
						sx={{
							top: "50%",
							left: "50%",
							position: "absolute",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							transform: "translate(-50%, -50%)",
						}}
					>
						<Typography variant="h4">
							{Number.parseInt(params.index) + 1}
						</Typography>
						<Typography variant="h6" sx={{ pt: "10px" }}>
							/{totalQuestions}
						</Typography>
					</Box>
				</Box>
				<Typography
					variant="h5"
					sx={{
						mb: "20px",
						fontSize: "22px",
						fontWeight: 900,
						lineHeight: "140%",
						fontFamily: "Nunito",
					}}
				>
					{question ? question.question : ""}
				</Typography>
				{question && question.image ? (
					<Box>
						<img
							src={question.image}
							width={window.innerWidth - 40}
							alt="MCQ"
						/>
					</Box>
				) : null}
				{question
					? question.options.map((item) => (
							<Option
								key={item}
								data-answer={item}
								content={item}
								showAnswer={showAnswers ? question.answer === item : null}
								isCorrect={showAnswers ? question.answer === item : null}
								handleSelection={validateAnswer}
							/>
					  ))
					: ""}
			</Box>
			<Box
				sx={{
					bottom: "10px",
					width: window.innerWidth - 40,
					position: "fixed",
				}}
			>
				<Button
					label="Next"
					type="next"
					currentPage={params.index}
					totalQuestions={totalQuestions}
					navigateMethod={navigateToNextMethod}
				></Button>
			</Box>
		</Box>
	);
};
