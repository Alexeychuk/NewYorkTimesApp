import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import newsReducer from './reducers/newsReducer';
import logger from './middlewares/logger';
import throttle from './middlewares/throttle';

const rootReducer = combineReducers({ news: newsReducer });
const middleware = [ReduxThunk, logger, throttle];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
