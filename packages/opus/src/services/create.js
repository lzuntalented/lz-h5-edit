import apiConfig from './apiConfig';
import Ajax from './ajax';

const { create, log } = apiConfig;

export async function getDetail(params) {
  return Ajax.get(create.getDetail, params);
}

export async function saveFormData(params) {
  return Ajax.post(log.saveForm, params);
}
