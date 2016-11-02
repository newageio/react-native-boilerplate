import React, { Component, PropTypes } from 'react';
import Relay, {
  RootContainer,
} from 'react-relay';
import {
  View,
  Text,
} from 'react-native';

import ArticlesScene from '../../relay/components/ArticlesList';
import AppHomeRoute from '../../relay/routes/AppHomeRoute';
import config from '../../config/default';
import {
  init as initNetwork,
  // setToken as setNetworkToken
} from '../../helpers/network';



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
    console.log('render root');
    return (
      <RootContainer
        Component={ ArticlesScene }
        route={new AppHomeRoute()}
        renderLoading={ () => {
          return <View style={{ paddingTop: 70 }}><Text>I am loading</Text></View>;
        }}
      />
    );
  }
}

export default GraphQLScene;