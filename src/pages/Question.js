import { get } from "lodash";
import { Box } from "@mui/system";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress, Typography } from "@mui/material";

import Option from "../components/Option";
import { Button } from "../components/Button";

import background from "../assets/images/background.svg";
import { updateShowAnswerState } from "../actions/questionsActions";

const Question = ({
	questions,
	totalQuestions,
	showAnswers,
	updateShowAnswerState,
}) => {
	const { index } = useParams();
	const navigate = useNavigate();

	const renderOptions = () => {
		if (questions[index] && questions[index].options) {
			return questions[index].options.map((item) => (
				<Option
					key={item}
					answer={questions[index].answer}
					content={item}
					showAnswer={showAnswers ? questions[index].answer === item : null}
					isCorrect={showAnswers ? questions[index].answer === item : null}
				/>
			));
		}
	};

	const navigateToNextPage = () => {
		if (!showAnswers) {
			alert("Please select an answer");
		} else if (Number.parseInt(totalQuestions) - 1 <= Number.parseInt(index)) {
			navigate("/score");
		} else {
			updateShowAnswerState(false);
			navigate(`/question/${Number.parseInt(index) + 1}`);
		}
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
						<Typography variant="h4">{Number.parseInt(index) + 1}</Typography>
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
					{questions[index] && questions[index].question}
				</Typography>
				{questions[index] && questions[index].image ? (
					<Box>
						<img
							src={questions[index].image}
							width={window.innerWidth - 40}
							alt="MCQ"
						/>
					</Box>
				) : null}
				{renderOptions()}
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
					handleClick={navigateToNextPage}
				></Button>
			</Box>
		</Box>
	);
};

const mapStateToProps = (state) => ({
	questions: get(state, "root.questions", []),
	totalQuestions: get(state, "root.questions", []).length,
	showAnswers: get(state, "root.showAnswers", null),
});

export default connect(mapStateToProps, { updateShowAnswerState })(Question);
