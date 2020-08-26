
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer.js';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// import rootReducer from "../reducers/claimlistreducer.js";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   storeEnhancers(applyMiddleware(thunk))
// );

// export default store;