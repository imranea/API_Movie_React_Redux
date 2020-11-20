import React from "react";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import initialState from "./initialState";

const store = createStore(reducer,initialState,applyMiddleware(thunk)); // On va pouvoir utiliser des middlewares et des éléments impures

export default props => <Provider store={store} {...props}/>;


/* Le store crée */
/* Provider redux sert à interfacer notre composant et un store redux */
/* Importer les states */ 