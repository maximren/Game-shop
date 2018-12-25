const initialState = {
	gameItem: []
}

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_GAMES_LIST":
			return {
				...state,
				gameItem: action.payload
			}
		default:
			return state;
	}
}

export default gameReducer;