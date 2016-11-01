import { CALL_API } from 'redux-api-middleware'

export const TOGGLE = 'toggle';

export const REGISTARTION_REQUEST = 'registration_req';
export const REGISTARTION_SUCCESS = 'reg_succ';
export const REGISTRATION_FAILURE = 'reg_fail';

export const LOGIN_REQUEST = 'login_req';
export const LOGIN_SUCCESS = 'login_suc';
export const LOGIN_FAILURE = 'login_fail';

export function toggle() {
  return {
    type: TOGGLE,
  };
}

const API_URL = 'http://localhost:3000';

export function register(credentials) {
  return {
    [CALL_API]: {
      endpoint: `${API_URL}/registration`,
      method: 'POST',
      types: [
        {
          type: REGISTARTION_REQUEST,
          payload: (action, state) => JSON.parse(action[CALL_API].body),
        },
        REGISTARTION_SUCCESS,
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
      endpoint: `${API_URL}/login`,
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