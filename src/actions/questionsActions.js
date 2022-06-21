import axios from "axios";

export const getQuestions = "questions/getQuestions";
export const getQuestionsSuccess = "questions/getQuestionsSuccess";
export const getQuestionsFailure = "questions/getQuestionsFailure";
export const setAnswerState = "answer/updateAnswerState";

export const fetchQuestions = () => ({
	type: getQuestions,
});

export const fetchQuestionsSuccess = (questions) => ({
	type: getQuestionsSuccess,
	payload: questions,
});

export const fetchQuestionsFailure = () => ({
	type: getQuestionsFailure,
});

export const updateShowAnswerState = (state) => ({
	type: setAnswerState,
	payload: state,
});

export const fetchAllQuestions = () => {
	return async (dispatch) => {
		dispatch(fetchQuestions());
		await axios
			.get("https://62aef939b735b6d16a4a46fd.mockapi.io/api/questions")
			.then((res) => {
				dispatch(fetchQuestionsSuccess(res.data));
			})
			.catch(() => {
				dispatch(fetchQuestionsFailure());
			});
	};
};
