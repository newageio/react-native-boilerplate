import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CredentialsForm from '../components/CredentialsForm';
import { register } from '../actions'

export default connect(state => ({
  loading: state.registration.loading,
  errors: state.registration.errors,
  values: state.registration.values,
  authenticated: state.user.authenticated,
}), dispatch => bindActionCreators({
  submit: register,
}, dispatch))(CredentialsForm);