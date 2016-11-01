import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  Text,
  TextInput,
  View,
} from 'react-native';
import RegistrationSceneContainer from '../containers/RegistrationSceneContainer';
import LoginSceneContainer from '../containers/LoginSceneContainer';

class ReduxScene extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    goHome: PropTypes.func.isRequired,
  };

  registrationRouteHandler = () => {
    this.props.navigator.push({
      component: RegistrationSceneContainer,
      title: 'Registration',
      passProps: {
        goHome: this.props.goHome,
      },
    })
  };

  loginRouteHandler = () => {
    this.props.navigator.push({
      component: LoginSceneContainer,
      title: 'Login',
      passProps: {
        goHome: this.props.goHome,
      },
    })
  };

  render() {
    return (
      <View style={{ paddingTop: 80, justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Text style={{ paddingBottom: 20 }} onPress={ this.registrationRouteHandler }>Registration</Text>
        <Text onPress={ this.loginRouteHandler }>Login</Text>
      </View>
    );
  }
}

export default ReduxScene;