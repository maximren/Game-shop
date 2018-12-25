import { descriptionApi } from '../helpers/config';

export const getDescriptions = (id) => dispatch => {
    fetch(descriptionApi + id)
        .then(result => result.json())
        .then(description => {
            dispatch({
                type: 'GET_DESCRIPTION',
                payload: description
            })
        })
}