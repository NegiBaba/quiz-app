import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Score from "./pages/Score";

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/question/:index" element={<Question />} />
				<Route path="/score" element={<Score />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
