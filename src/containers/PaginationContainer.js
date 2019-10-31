import { connect } from 'react-redux';
import Pagination from '../components/Pagination/Pagination';
import { fetchQuery } from '../redux/operations/fetchNews';
import { getQuery } from '../redux/selectors/newsSelectors';
import { setQuery, resetQuery } from '../redux/actions/newsActions';

const mapStateToProps = state => ({ query: getQuery(state) });

const mapDispatchToProps = dispatch => ({
  fetchQuery: (query, page) => dispatch(fetchQuery(query, page)),
  setQuery: query => dispatch(setQuery(query)),
  resetQuery: () => dispatch(resetQuery()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
