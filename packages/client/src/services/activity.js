import apiConfig from './apiConfig';
import Ajax from '../utils/ajax';

const { activity } = apiConfig;

export async function getList(params) {
  return Ajax.post(activity.getList, params);
}
