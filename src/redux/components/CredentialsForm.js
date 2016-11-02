import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  ActivityIndicator,
} from 'react-native';

export default class CredentialsForm extends Component {

  static propTypes = {
    goHome: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    authenticated: PropTypes.bool.isRequired,
    errors: PropTypes.string,
    buttonText: PropTypes.string,
  };

  static defaultProps = {
    buttonText: 'Register'
  };

  state = {
    values: {
      email: '',
      password: '',
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      values: props.values
    };
  }

  componentWillReceiveProps(nextProps) {
    const { goHome, authenticated } = nextProps;
    if (authenticated) {
      goHome();
    }
  }

  handleChange = (stateValue) => (value) => {
    this.setState({
      values: { ...this.state.values, [stateValue]: value },
    });
  };

  handleSubmit = () => {
    this.props.submit(this.state.values);
  };

  render() {
    const { email, password } = this.state.values;
    return (
      <View style={{
        flex: 1,
        padding: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }} >
        {
          (() => {
            if (this.props.loading) {
              return (
                <View>
                  <ActivityIndicator
                    size="large"
                    animating={ true }
                    style={{
                      padding: 8,
                    }}
                  />
                </View>
              )
            }
            return (
              <View>
                <View>
                  <TextInput
                    onChangeText={ this.handleChange('email')} placeholder="Email" style={{ height: 20, width: 100}}
                    value={ email }
                  />
                </View>
                <View>
                  <TextInput
                    secureTextEntry={ true }
                    onChangeText={ this.handleChange('password')} placeholder="Password" style={{ height: 50, width: 100}}
                    value={ password }
                  />
                </View>
                {
                  (() => {
                    if (this.props.errors) {
                      return (
                        <View>
                          <Text style={{ color: 'red' }} >{ this.props.errors }</Text>
                        </View>
                      )
                    }
                  })()
                }
                <View style={{ paddingTop: 20 }}>
                  <Text onPress={ this.handleSubmit }>{ this.props.buttonText }</Text>
                </View>
              </View>
            )
          })()
        }
      </View>
    )
  }
}