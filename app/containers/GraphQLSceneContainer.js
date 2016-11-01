import { connect } from 'react-redux';
import GraphQLScene from '../components/GraphQLScene';

export default connect(
  (store) => ({
    token: store.user.token,
  })
)(GraphQLScene);