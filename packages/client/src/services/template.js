import apiConfig from './apiConfig';
import Ajax from '../utils/ajax';

const { template } = apiConfig;

export async function getMyList(params) {
  return Ajax.get(template.getMyList, params);
}
