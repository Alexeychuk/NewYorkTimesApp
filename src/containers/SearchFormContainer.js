import { connect } from 'react-redux';
import SearchForm from '../components/AppBar/SearchForm/SearchForm';
import { fetchQuery } from '../redux/operations/fetchNews';
import { setQuery } from '../redux/actions/newsActions';
import { getQuery } from '../redux/selectors/newsSelectors';

const mapDispatchToProps = dispatch => ({
  fetchQuery: query => dispatch(fetchQuery(query)),
  setQuery: query => dispatch(setQuery(query)),
});

const mapStateToProps = state => ({
  currentQuery: getQuery(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm);
