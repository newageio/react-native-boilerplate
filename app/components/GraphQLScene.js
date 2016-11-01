import React, { Component, PropTypes } from 'react';
import Relay, {
  RootContainer,
} from 'react-relay';
import {
  View,
  Text,
} from 'react-native';

import ArticlesScene from './ArticlesScene';
import AppHomeRoute from '../routes/AppHomeRoute';
import config from '../../config';
import {
  init as initNetwork,
  // setToken as setNetworkToken
} from '../helpers/network';



class GraphQLScene extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired,
  };

  constructor(props, ctx) {
    super(props, ctx);
    this.initNetwork();
  }

  initNetwork() {
    const { token } = this.props;
    initNetwork(config.graphQlUrl, token);
  }

  render() {
    return (
      <RootContainer
        Component={ ArticlesScene }
        route={new AppHomeRoute()}
      />
    );
  }
}

export default GraphQLScene;