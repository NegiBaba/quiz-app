export const increaseCurrentScore = "score/increaseScore";
export const resetCurrentScore = "score/resetScore";

export const increaseScore = (score) => ({
	type: increaseCurrentScore,
	payload: score,
});
