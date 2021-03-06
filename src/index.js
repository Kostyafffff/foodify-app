import React from 'react';
import ReactDOM from 'react-dom';

import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from "react-redux";
import { rootReducer } from "./logic/reducers/rootReducer";
import rootSaga from "./logic/sagas/rootSaga";
import { loadState, saveToLocalStorage } from "./localStorage";
import { throttle } from "lodash";
import './translation/i18n';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ),
);

store.subscribe(throttle(() => saveToLocalStorage(store.getState()), 1000));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
