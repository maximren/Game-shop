const initialState = {
	gameItem: [],
	filter: ''
}

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_GAMES_LIST":
			return {
				...state,
				gameItem: action.payload
			};
		case "SET_FILTER":
			return {
				...state,
				filter: action.payload
			}
		default:
			return state;
	}
}

export default gameReducer;