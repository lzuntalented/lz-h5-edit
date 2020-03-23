import apiConfig from './apiConfig';
import Ajax from '../utils/ajax';

const { create, file } = apiConfig;

export async function getList(params) {
  return Ajax.get(create.getList, params);
}

export async function save(params) {
  return Ajax.post(create.add, params);
}

export async function getDetail(params) {
  return Ajax.get(create.getDetail, params);
}

export async function getPictureList(params) {
  return Ajax.get(file.getList, params);
}

export async function uploadPicture(params) {
  return Ajax.get(file.upload, params);
}

export async function cropImage(params) {
  return Ajax.post(file.cropImage, params);
}
