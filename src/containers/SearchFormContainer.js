import { connect } from 'react-redux';
import SearchForm from '../components/AppBar/SearchForm/SearchForm';
import { fetchQuery } from '../redux/operations/fetchNews';
import { setQuery } from '../redux/actions/newsActions';

const mapDispatchToProps = dispatch => ({
  fetchQuery: query => dispatch(fetchQuery(query)),
  setQuery: query => dispatch(setQuery(query)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SearchForm);
