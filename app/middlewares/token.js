import {
  LOGIN_SUCCESS,
  REGISTARTION_SUCCESS,
} from '../actions'
import {
  getToken,
  setToken,
} from '../helpers/token';

export default (store) => (next) => (action) => {
  if ([LOGIN_SUCCESS, REGISTARTION_SUCCESS].includes(action.type)) {
    setToken(action.payload.token).then(() => {
      next(action);
    });
  } else {
    next(action);
  }
}