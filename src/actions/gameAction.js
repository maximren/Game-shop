import { api } from '../helpers/config';

export const getGamesList = () => dispatch => {
    fetch(api)
        .then(result => result.json())
        .then(games => {
            dispatch({
                type: "GET_GAMES_LIST",
                payload: games
            })
        })
}