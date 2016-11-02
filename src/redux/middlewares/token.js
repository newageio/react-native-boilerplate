import {
  LOGIN_SUCCESS,
  REGISTRATION_SUCCESS,
} from '../actions'
import {
  setToken,
} from '../../helpers/token';

export default (store) => (next) => (action) => {
  if ([LOGIN_SUCCESS, REGISTRATION_SUCCESS].includes(action.type)) {
    setToken(action.payload.token).then(() => {
      next(action);
    });
  } else {
    next(action);
  }
}