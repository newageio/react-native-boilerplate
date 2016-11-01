import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Relay, {
  createContainer,
} from 'react-relay';

import Article from './Article';

class ArticlesScene extends Component {
  render() {
    const { root: { articles: { edges: articles } } } = this.props;
    return (
      <View style={{ paddingTop: 100 }}>
        { articles.map(article => <Article key={ article.node.id } article={ article.node }/>) }
      </View>
    );
  }
}

export default createContainer(ArticlesScene, {
  initialVariables: {
    perPage: 10,
  },
  fragments: {
    root: () => Relay.QL`
      fragment on Root {
        articles(first: $perPage) {
          edges {
            node {
              id,
              ${Article.getFragment('article')}
            }
          }
        }
      }
    `
  }
});
