import { increaseCurrentScore } from "../actions/scoreActions";

const initialState = {
	score: 0,
};

export default function scoreReducers(state = initialState, action) {
	switch (action.type) {
		case increaseCurrentScore:
			return {
				...state,
				score: action.payload,
			};
		default:
			return state;
	}
}
