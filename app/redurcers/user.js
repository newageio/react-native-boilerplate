import {
  getToken,
  setToken,
} from '../helpers/token'
import  {
  REGISTARTION_SUCCESS,
  LOGIN_SUCCESS,
} from '../actions';

const initialState = {
  token: null,
  authenticated: false,
};

(async function() {
  const token = await getToken();
  initialState.authenticated = !! token;
  initialState.token = token;
})();

export default function (state = initialState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
    case REGISTARTION_SUCCESS:
      if (action.payload && action.payload.token) {
        return { ...state, authenticated: true, token: action.payload.token };
      }
      return state;
    default:
      return state;
  }
}