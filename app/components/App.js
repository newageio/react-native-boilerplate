import React, { Component, PropTypes } from 'react';
import { createContainer } from 'react-relay';
import ReduxScene from './ReduxScene';
import GraphQLScene from './GraphQLScene';
import {
  NavigatorIOS,
} from 'react-native'

class App extends Component {
  goHome = () => {
    const { navigator } = this.refs;
    navigator.replaceAtIndex({
      component: GraphQLScene,
      title: 'Home',
    }, 0);
    navigator.popToTop();
  };
  render() {
    return(
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
    );
  }
}

export default createContainer(App, {
  fragments
});

