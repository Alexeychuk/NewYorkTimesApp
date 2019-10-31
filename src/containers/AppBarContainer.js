import { connect } from 'react-redux';
import AppBar from '../components/AppBar/AppBar';
import { fetchNews } from '../redux/operations/fetchNews';

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews()),
});

export default connect(
  null,
  mapDispatchToProps,
)(AppBar);
