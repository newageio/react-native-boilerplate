import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from '../actions';
import { ApiError } from 'redux-api-middleware';

const initialState = {
  values: {
    email: '',
    password: '',
  },
  loading: false,
  errors: '',
};

export default function(state = initialState, action) {
  switch(action.type) {
    case REGISTRATION_REQUEST:
      if (action.error) {
        return { ...state, errors: 'Internal error, try again later.', loading: false };
      }
      return { ...state, loading: true, 'errors': '', values: { ...state.values, ...action.payload } };
    case REGISTRATION_SUCCESS:
    case REGISTRATION_FAILURE:
      if (action.error && action.payload instanceof ApiError) {
        let errors;
        if (action.payload.response) {
          errors = action.payload.response.errors.reduce((prev, curr) => {
            return prev + curr.messages.join('. ') + '.';
          }, '');
        } else {
          errors = 'Error occurred, try again later.';
        }
        return { ...state, loading: false, errors };
      }
      return { ...state, loading: false };
    default:
      return state;
  }
}