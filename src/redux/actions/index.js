import { CALL_API } from 'redux-api-middleware'
import config from '../../config/default';

export const TOGGLE = 'toggle';

export const REGISTRATION_REQUEST = 'registration_req';
export const REGISTRATION_SUCCESS = 'reg_succ';
export const REGISTRATION_FAILURE = 'reg_fail';

export const LOGIN_REQUEST = 'login_req';
export const LOGIN_SUCCESS = 'login_suc';
export const LOGIN_FAILURE = 'login_fail';

export function toggle() {
  return {
    type: TOGGLE,
  };
}

export function register(credentials) {
  return {
    [CALL_API]: {
      endpoint: `${config.apiUrl}/registration`,
      method: 'POST',
      types: [
        {
          type: REGISTRATION_REQUEST,
          payload: (action, state) => JSON.parse(action[CALL_API].body),
        },
        REGISTRATION_SUCCESS,
        REGISTRATION_FAILURE,
      ],
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    }
  };
}

export function login(credentials) {
  return {
    [CALL_API]: {
      endpoint: `${config.apiUrl}/login`,
      method: 'POST',
      types: [
        {
          type: LOGIN_REQUEST,
          payload: (action, state) => JSON.parse(action[CALL_API].body),
        },
        LOGIN_SUCCESS,
        LOGIN_FAILURE,
      ],
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    }
  };
}