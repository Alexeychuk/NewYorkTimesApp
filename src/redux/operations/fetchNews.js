import {
  fetchNewsRequest,
  fetchNewsSuccess,
  fetchNewsError,
  fetchQueryRequest,
  fetchQuerySuccess,
  fetchQueryError,
  fetchCategoryRequest,
  fetchCategorySuccess,
  fetchCategoryError,
} from '../actions/newsActions';

import {
  getNews,
  getQueryArcticles,
  getCategoryArcticles,
} from '../../api/newsApi';

export const fetchNews = () => dispatch => {
  dispatch(fetchNewsRequest());

  getNews()
    .then(data => dispatch(fetchNewsSuccess(data)))
    .catch(err => dispatch(fetchNewsError(err)));
};

export const fetchQuery = (query, page = 1) => dispatch => {
  dispatch(fetchQueryRequest());

  getQueryArcticles(query, page)
    .then(data => dispatch(fetchQuerySuccess(data)))
    .catch(err => dispatch(fetchQueryError(err)));
};

export const fetchCategory = category => dispatch => {
  dispatch(fetchCategoryRequest());

  return getCategoryArcticles(category)
    .then(data => dispatch(fetchCategorySuccess(data)))
    .catch(err => dispatch(fetchCategoryError(err)));
};
