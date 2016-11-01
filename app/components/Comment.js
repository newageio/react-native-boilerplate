import React, { PropTypes } from 'react';
import Relay, { createContainer } from 'react-relay';
import {
  View,
  Text,
} from 'react-native';

function Comment({ comment }) {
  return(
    <View>
      <Text>{ comment.text }</Text>
    </View>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
  })
};

export default createContainer(Comment, {
  fragments: {
    comment: () => Relay.QL`
      fragment on Comment {
        text   
      }
    `
  },
});
