import { combineReducers } from 'redux';
import { actionType } from '../actions/newsActions';

const acticlesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionType.FETCH_NEWS_SUCCESS:
    case actionType.FETCH_QUERY_SUCCESS:
    case actionType.FETCH_CATEGORY_SUCCESS:
      return payload.data.articles;
    default:
      return state;
  }
};

const isLoadingReducer = (state = false, { type }) => {
  switch (type) {
    case actionType.FETCH_NEWS_SUCCESS:
    case actionType.FETCH_NEWS_ERROR:
    case actionType.FETCH_QUERY_SUCCESS:
    case actionType.FETCH_QUERY_ERROR:
    case actionType.FETCH_CATEGORY_SUCCESS:
    case actionType.FETCH_CATEGORY_ERROR:
      return false;
    case actionType.FETCH_NEWS_REQUEST:
    case actionType.FETCH_QUERY_REQUEST:
    case actionType.FETCH_CATEGORY_REQUEST:
      return true;
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionType.FETCH_NEWS_ERROR:
    case actionType.FETCH_QUERY_ERROR:
    case actionType.FETCH_CATEGORY_ERROR:
      return payload.error;
    default:
      return state;
  }
};

const isPaginantionReducer = (state = false, { type }) => {
  switch (type) {
    case actionType.FETCH_NEWS_SUCCESS:
    case actionType.FETCH_CATEGORY_SUCCESS:
      return false;
    case actionType.FETCH_QUERY_SUCCESS:
      return true;
    default:
      return state;
  }
};

const categoryReducer = (state = 'home', { type, payload }) => {
  switch (type) {
    case actionType.FETCH_CATEGORY_SUCCESS:
      return payload.data.category;
    case actionType.FETCH_NEWS_SUCCESS:
    case actionType.FETCH_QUERY_SUCCESS:
    case actionType.RESET_CATEGORY:
      return 'home';
    default:
      return state;
  }
};

const queryReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionType.SET_QUERY:
      return payload.query;
    case actionType.RESET_QUERY:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  articles: acticlesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  isPagination: isPaginantionReducer,
  category: categoryReducer,
  query: queryReducer,
});
