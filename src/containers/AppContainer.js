import { connect } from 'react-redux';
import App from '../components/App/App';
import { fetchNews } from '../redux/operations/fetchNews';

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews()),
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
