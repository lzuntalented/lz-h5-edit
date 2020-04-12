import apiConfig from './apiConfig';
import Ajax from '../utils/ajax';

const { mall } = apiConfig;

export async function getList(params) {
  return Ajax.get(mall.getList, params);
}

// 设置为模板
export async function addTemplate(params) {
  return Ajax.post(mall.addTemplate, params);
}

// 取消设置模板
export async function removeTemplate(params) {
  return Ajax.post(mall.removeTemplate, params);
}
