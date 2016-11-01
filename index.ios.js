/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Relay, { RootContainer } from 'react-relay';
import { Provider } from 'react-redux';
import {
  AppRegistry,
  NavigatorIOS,
} from 'react-native';
import ReduxScene from './app/components/ReduxScene';
import GraphQLSceneContainer from './app/containers/GraphQLSceneContainer';
import store from './app/store';

export default class test extends Component {

  goHome = () => {
    const { navigator } = this.refs;
    navigator.replaceAtIndex({
      component: GraphQLSceneContainer,
      title: 'Home',
    }, 0);
    navigator.popToTop();
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
