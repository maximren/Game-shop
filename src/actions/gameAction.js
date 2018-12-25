import { gameApi } from '../helpers/config';

export const getGamesList = () => dispatch => {
    fetch(gameApi)
        .then(result => result.json())
        .then(games => {
            dispatch({
                type: "GET_GAMES_LIST",
                payload: games
            })
        })
}