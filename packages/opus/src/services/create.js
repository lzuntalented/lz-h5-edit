import apiConfig from './apiConfig';
import Ajax from './ajax';

const { create } = apiConfig;

export async function getDetail(params) {
  return Ajax.get(create.getDetail, params);
}
