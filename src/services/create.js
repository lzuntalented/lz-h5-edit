import apiConfig from './apiConfig';
import Ajax from '../utils/ajax';

const { create } = apiConfig;

export async function getList(params) {
  return Ajax.get(create.getList, params);
}

export async function save(params) {
  return Ajax.post(create.add, params);
}

export async function getDetail(params) {
  return Ajax.get(create.getDetail, params);
}
