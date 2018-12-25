const initialState = {
	info: {}
}

const descriptionReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_DESCRIPTION":
			return {
				...state,
				info: action.payload
			}
		default:
			return state;
	}
}

export default descriptionReducer;