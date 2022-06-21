import { combineReducers } from "redux";

import questionsReducer from "./questionsReducer";
import scoreReducers from "./scoreReducers";

const rootReducer = combineReducers({
	root: questionsReducer,
	score: scoreReducers,
});

export default rootReducer;
