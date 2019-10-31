export const actionType = {
  FETCH_NEWS_REQUEST: 'FETCH_NEWS_REQUEST',
  FETCH_NEWS_SUCCESS: 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR: 'FETCH_NEWS_ERROR',
  FETCH_QUERY_REQUEST: 'FETCH_QUERY_REQUEST',
  FETCH_QUERY_SUCCESS: 'FETCH_QUERY_SUCCESS',
  FETCH_QUERY_ERROR: 'FETCH_QUERY_ERROR',
  FETCH_CATEGORY_REQUEST: 'FETCH_CATEGORY_REQUEST',
  FETCH_CATEGORY_SUCCESS: 'FETCH_CATEGORY_SUCCESS',
  FETCH_CATEGORY_ERROR: 'FETCH_CATEGORY_ERROR',
  RESET_CATEGORY: 'RESET_CATEGORY',
  SET_QUERY: 'SET_QUERY',
  RESET_QUERY: 'RESET_QUERY',
};

export const fetchNewsRequest = () => ({
  type: actionType.FETCH_NEWS_REQUEST,
});

export const fetchNewsSuccess = data => ({
  type: actionType.FETCH_NEWS_SUCCESS,
  payload: { data },
});

export const fetchNewsError = error => ({
  type: actionType.FETCH_NEWS_ERROR,
  payload: { error },
});

export const fetchQueryRequest = () => ({
  type: actionType.FETCH_QUERY_REQUEST,
  meta: { throttle: 500 },
});

export const fetchQuerySuccess = data => ({
  type: actionType.FETCH_QUERY_SUCCESS,
  payload: { data },
});

export const fetchQueryError = error => ({
  type: actionType.FETCH_QUERY_ERROR,
  payload: { error },
});

export const fetchCategoryRequest = () => ({
  type: actionType.FETCH_CATEGORY_REQUEST,
  meta: { throttle: 500 },
});

export const fetchCategorySuccess = data => ({
  type: actionType.FETCH_CATEGORY_SUCCESS,
  payload: { data },
});

export const fetchCategoryError = error => ({
  type: actionType.FETCH_CATEGORY_ERROR,
  payload: { error },
});

export const resetCategory = () => ({
  type: actionType.RESET_CATEGORY,
});

export const setQuery = query => ({
  type: actionType.SET_QUERY,
  payload: { query },
  meta: { throttle: 500 },
});

export const resetQuery = () => ({
  type: actionType.RESET_QUERY,
});
