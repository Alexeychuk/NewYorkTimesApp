import { connect } from 'react-redux';
import AppBar from '../components/AppBar/AppBar';
import { fetchNews } from '../redux/operations/fetchNews';
import { resetQuery } from '../redux/actions/newsActions';

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews()),
  resetQuery: () => dispatch(resetQuery()),
});

export default connect(
  null,
  mapDispatchToProps,
)(AppBar);
