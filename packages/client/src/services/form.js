import apiConfig from './apiConfig';
import Ajax from '../utils/ajax';

const { form } = apiConfig;

export async function getList(params) {
  return Ajax.post(form.getList, params);
}
