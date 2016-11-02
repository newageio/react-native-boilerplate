import React, { PropTypes } from 'react';
import Relay, { createContainer } from 'react-relay';
import {
  View,
  Text,
} from 'react-native';

function Comment({ comment }) {
  return(
    <View>
      <Text style={{ fontSize: 12 }}>{ comment.text } ( { comment.user.email } )</Text>
    </View>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
    })
  })
};

export default createContainer(Comment, {
  fragments: {
    comment: () => Relay.QL`
      fragment on Comment {
        text,
        user {
          email
        }
      }
    `
  },
});
