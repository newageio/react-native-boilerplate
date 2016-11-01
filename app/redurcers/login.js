import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
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
    case LOGIN_REQUEST:
      if (action.error) {
        return { ...state, errors: 'Internal error, try again later.', loading: false };
      }
      return { ...state, loading: true, 'errors': '', values: { ...state.values, ...action.payload } };
    case LOGIN_SUCCESS:
    // return { ...state, loading: false };
    case LOGIN_FAILURE:
      if (action.error && action.payload instanceof ApiError) {
        return { ...state, loading: false, errors: 'Invalid email or password' };
      }
      return { ...state, loading: false };
    default:
      return state;
  }
}