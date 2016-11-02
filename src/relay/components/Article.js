import React, { PropTypes } from 'react';
import Relay, { createContainer } from 'react-relay';
import {
  View,
  Text,
} from 'react-native';

import CommentsList from './CommentsList';

function Article({ article }) {
  return(
    <View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 16 }}>{ article.title }</Text>
      </View>
      <Text style={{ fontSize: 14, paddingBottom: 10 }}>{ article.text }</Text>
      <CommentsList article={ article } />
    </View>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default createContainer(Article, {
  fragments: {
    article: () => Relay.QL`
      fragment on Article {
        title,
        text,
        ${CommentsList.getFragment('article')}
      }
    `
  },
});
