import apiConfig from './apiConfig';
import Ajax from '../utils/ajax';

const { user } = apiConfig;

export async function register(params) {
  return Ajax.post(user.register, params);
}

export async function login(params) {
  return Ajax.post(user.login, params);
}

export async function info(params) {
  return Ajax.post(user.info, params);
}

export async function logout(params) {
  return Ajax.post(user.logout, params);
}
