import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import gameReducer from './reducers/gameReducer';
import descriptionReducer from './reducers/descriptionReducer';

const rootReducer = combineReducers({
    gameReducer,
    descriptionReducer
});

const middleware = [thunk]

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;