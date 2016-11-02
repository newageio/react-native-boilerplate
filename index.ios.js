/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { RootContainer } from 'react-relay';
import { Provider } from 'react-redux';
import {
  AppRegistry,
  NavigatorIOS,
} from 'react-native';
import ReduxScene from './src/redux/components/ReduxScene';
import GraphQLSceneContainer from './src/redux/containers/GraphQLSceneContainer';
import store from './src/redux/store';

export default class test extends Component {

  goHome = () => {
    console.log('going home');
    const { navigator } = this.refs;
    navigator.replace({
      component: GraphQLSceneContainer,
      title: 'Home',
    });
  };

  render() {
    return (
      <Provider store={ store }>
        <NavigatorIOS
          ref="navigator"
          initialRoute={{
            component: ReduxScene,
            title: 'Main',
            passProps: {
              goHome: this.goHome,
            },
          }}
          style={{ flex: 1 }}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('test', () => test);
