import AsyncStorage from 'react-native';

const TOKEN_KEY = 'my_app_token';

let token;

export async function getToken() {
  if (!token) {
    try {
      token = await AsyncStorage.getItem(TOKEN_KEY);
    } catch (e) {
      console.log(`Async storage get error ${e.message}`);
    }
  }
  return token;
}

export async function setToken(newToken) {
  token = newToken;
  try {
    return await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.log(`Async storage set error ${e.message}`);
  }
}