import {
	getQuestions,
	getQuestionsFailure,
	getQuestionsSuccess,
	setAnswerState,
} from "../actions/questionsActions";

const initialState = {
	questions: [],
	loading: false,
	error: false,
	showAnswers: false,
};

export default function questionsReducer(state = initialState, action) {
	switch (action.type) {
		case getQuestions:
			return {
				...state,
				loading: true,
				error: false,
			};
		case getQuestionsSuccess:
			return {
				...state,
				questions: action.payload,
				loading: false,
				error: false,
			};
		case getQuestionsFailure:
			return {
				...state,
				loading: false,
				error: false,
			};
		case setAnswerState:
			return {
				...state,
				showAnswers: action.payload,
			};
		default:
			return state;
	}
}
