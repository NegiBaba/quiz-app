import { Box, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { Button } from "../components/Button";

import background from "../assets/images/background.svg";
import { connect } from "react-redux";
import { get } from "lodash";
import { useNavigate } from "react-router-dom";
import { updateShowAnswerState } from "../actions/questionsActions";

const Score = ({ score, total, updateShowAnswerState }) => {
	const navigate = useNavigate();
	const calculateScore = () => {
		const finalScore = Number.parseInt(score);
		const totalScore = Number.parseInt(total);

		return Number.parseInt((finalScore / totalScore) * 100);
	};

	const navigateToHome = () => {
		updateShowAnswerState(false);
		navigate("/");
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
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					backgroundColor: "white",
					borderRadius: "30px 30px 0px 0px;",
				}}
			>
				<Typography
					variant="h5"
					sx={{
						fontWeight: 800,
						opacity: "0.8",
						textAlign: "center",
					}}
				>
					Your result
				</Typography>
				<Box
					sx={{
						mt: "60px",
						mb: "30px",
						height: "132px",
						width: "132px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "50%",
						boxShadow: " 0px 3px 10px rgba(0,0,0,0.08)",
						backgroundColor: "white",
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							height: "120px",
							width: "120px",
							borderRadius: "50%",
							border: "1px solid",
							borderColor: "rgba(0, 0, 0, 0.08)",
							backgroundColor: "white",
						}}
					>
						<Typography
							variant="h4"
							sx={{
								fontWeight: 900,
								color: "grey.dark",
							}}
						>
							{calculateScore()}%
						</Typography>
					</Box>
				</Box>
				<Box
					width="100%"
					sx={{
						mb: "40px",
					}}
				>
					<Box
						sx={{
							p: "20px",
							mb: "20px",
							display: "flex",
							alignItems: "center",
							fontFamily: "Poppins",
							borderRadius: "10px",
							fontWeight: 600,
							justifyContent: "flex-start",
							backgroundColor: "rgba(68, 183, 123, 0.12)",
						}}
					>
						<FiberManualRecordIcon sx={{ mr: "16px", color: "success.main" }} />
						{score}
						<Typography
							variant="h6"
							sx={{
								fontWeight: 700,
								ml: "16px",
								opacity: "0.5",
							}}
						>
							Correct
						</Typography>
					</Box>
					<Box
						sx={{
							p: "20px",
							display: "flex",
							alignItems: "center",
							fontFamily: "Poppins",
							borderRadius: "10px",
							fontWeight: 600,
							justifyContent: "flex-start",
							backgroundColor: "rgba(255, 59, 63, 0.12)",
						}}
					>
						<FiberManualRecordIcon sx={{ mr: "16px", color: "error.main" }} />
						{total - score}
						<Typography
							variant="h6"
							sx={{
								fontWeight: 700,
								ml: "16px",
								opacity: "0.5",
							}}
						>
							Incorrect
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					bottom: "10px",
					width: window.innerWidth - 40,
					position: "fixed",
				}}
			>
				<Button label="Start again" handleClick={navigateToHome}></Button>
			</Box>
		</Box>
	);
};

const mapStateToProps = (state) => ({
	score: get(state, "score.score", 0),
	total: get(state, "root.questions", []).length,
});

export default connect(mapStateToProps, { updateShowAnswerState })(Score);
