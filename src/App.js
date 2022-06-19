import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { Home } from "./pages/Home";
import { Question } from "./pages/Question";
import { Score } from "./pages/Score";

function App() {
	const [questions, setQuestions] = useState([]);
	const [score, setScore] = useState(0);

	const fetchQuestions = () => {
		axios
			.get("https://62aef939b735b6d16a4a46fd.mockapi.io/api/questions")
			.then((res) => {
				setQuestions(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const QuestionChild = () => {
		const { index } = useParams();
		return (
			<Question
				question={questions[index]}
				totalQuestions={questions.length}
				currentScore={score}
				changeScore={setScore}
			/>
		);
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							fetchQuestions={fetchQuestions}
							questionsState={questions.length !== 0}
						/>
					}
				/>
				<Route path="/question/:index" element={<QuestionChild />} />
				<Route path="/score" element={<Score score={1} total={2} />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
