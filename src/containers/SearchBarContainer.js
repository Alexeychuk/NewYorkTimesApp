import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar/SearchBar';
import { fetchCategory } from '../redux/operations/fetchNews';
import { resetQuery } from '../redux/actions/newsActions';
import { getCategory } from '../redux/selectors/newsSelectors';

const mapDispatchToProps = dispatch => ({
  fetchCategory: category => dispatch(fetchCategory(category)),
  resetQuery: () => dispatch(resetQuery()),
});

const mapStateToProps = state => ({
  category: getCategory(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
