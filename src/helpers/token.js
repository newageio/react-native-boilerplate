import AsyncStorage from 'react-native';
import config from '../config/default';

let token;

export async function getToken() {
  if (!token) {
    try {
      token = await AsyncStorage.getItem(config.tokenKey);
    } catch (e) {
      console.log(`Async storage get error ${e.message}`);
    }
  }
  return token;
}

export async function setToken(newToken) {
  token = newToken;
  try {
    return await AsyncStorage.setItem(config.tokenKey, token);
  } catch (error) {
    console.log(`Async storage set error ${e.message}`);
  }
}