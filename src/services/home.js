import apiConfig from './apiConfig';
import Ajax from '../utils/ajax';

export async function getList(params) {
  return Ajax.get(apiConfig.home.getList, params);
}

export async function getHome() {
  return Ajax.get(apiConfig.home.index);
}

export async function checkResult(params) {
  return Ajax.get(apiConfig.home.checkResult, params);
}
