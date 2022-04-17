import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import loadingReducer from "./ducks/loading";
import usersReducer from "./ducks/users";
import { watcherSaga } from "./sagas/rootSaga";
import userDetailReducer from "./ducks/userDetail";

const reducer = combineReducers({
    loading: loadingReducer,
    users: usersReducer,
    userDetail: userDetailReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
    reducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(watcherSaga);

export default store;