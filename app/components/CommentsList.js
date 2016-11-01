import React, { PropTypes } from 'react';
import Relay, { createContainer } from 'react-relay';
import {
  View,
} from 'react-native';

import Comment from './Comment';

function CommentsList({ article }) {
  const { comments: { edges: comments }} = article;
  return(
    <View>
      { comments.map(comment => <Comment key={ comment.node.id } comment={ comment.node } />) }
    </View>
  );
}

export default createContainer(CommentsList, {
  initialVariables: {
    commentsPerPage: 10,
  },
  fragments: {
    article: () => Relay.QL`
      fragment on Article {
        comments(first: $commentsPerPage) {
          edges {
            node {
              id,
              ${Comment.getFragment('comment')},    
            }
          }
        }   
      }
    `
  },
});
