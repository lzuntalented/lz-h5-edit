import apiConfig from './apiConfig';
import Ajax from './ajax';

const { create, log, activity } = apiConfig;

export async function getDetail(params) {
  return Ajax.get(create.getDetail, params);
}

export async function saveFormData(params) {
  return Ajax.post(log.saveForm, params);
}

export async function activityTurn(params) {
  return Ajax.post(activity.trun, params);
}
