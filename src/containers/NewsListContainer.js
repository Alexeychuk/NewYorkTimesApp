import { connect } from 'react-redux';
import NewsList from '../components/NewsList/NewsList';
import {
  getArticles,
  getIsLoading,
  getIsPagination,
} from '../redux/selectors/newsSelectors';

const mapStateToProps = state => ({
  articles: getArticles(state),
  isLoading: getIsLoading(state),
  isPagination: getIsPagination(state),
});

export default connect(mapStateToProps)(NewsList);
