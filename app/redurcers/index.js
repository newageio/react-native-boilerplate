import { combineReducers } from 'redux';
import registration from './registration';
import user from './user';
import login from './login';

export default combineReducers({
  registration,
  user,
  login,
});