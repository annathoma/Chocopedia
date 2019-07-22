import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import { chocolateWatcherSaga} from "../sagas";
import rootReducer from "../reducers";
import logger from "redux-logger"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware,logger));
sagaMiddleware.run(chocolateWatcherSaga);
export default store;