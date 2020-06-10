import apiConfig from './apiConfig';
import Ajax from '../utils/ajax';

const { user } = apiConfig;

export async function register(params) {
  return Ajax.post(user.register, params);
}

// 设置为模板
export async function login(params) {
  return Ajax.post(user.login, params);
}
