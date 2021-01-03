import apiConfig from './apiConfig';
import Ajax from '../utils/ajax';

const { log } = apiConfig;

export async function getList(params) {
  return Ajax.post(log.getList, params);
}
