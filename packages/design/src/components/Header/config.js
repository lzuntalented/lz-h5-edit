import apiConfig, { getUrlPrefix } from '../../../../services/apiConfig';

export function getUploadProps() {
  const props = {
    name: 'upFile',
    accept: 'image/*',
    action: `${getUrlPrefix()}${apiConfig.file.upload}`,
    showUploadList: false,
    // withCredentials: true,
  };
  return props;
}

export default () => {};
