import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CredentialsForm from '../components/CredentialsForm';
import { login } from '../actions'

export default connect(state => ({
  loading: state.login.loading,
  errors: state.login.errors,
  values: state.login.values,
  authenticated: state.user.authenticated,
  buttonText: 'Login',
}), dispatch => bindActionCreators({
  submit: login,
}, dispatch))(CredentialsForm);