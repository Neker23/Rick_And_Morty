import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar la app con la extencion chrome

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))// esta linea sirva para que podamos hacer peticiones a una api/servidor
);

export default store;