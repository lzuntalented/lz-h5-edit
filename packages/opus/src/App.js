import React from 'react';
import qs from 'query-string';

// 引入样式文件
import './index.scss';
import { translateShowDataFromStore } from '@lz/utils';
import { addShortFonts } from './utils/font';
import { getDetail } from './services/create';
import LoadingWrap from './Loading';

class Perview extends React.Component {
  constructor(props) {
    super(props);
    const { search } = window.location;
    const obj = qs.parse(search);

    this.state = {
      data: null,
      id: obj.id,
    };
    if (window.opusData) {
      this.state = {
        data: window.opusData,
        id: 0,
      };
    }
  }

  componentDidMount() {
    const { id } = this.state;
    if (+id > 0) {
      addShortFonts(id);
      getDetail({ id }).then((resp) => {
        const { content: res } = resp;
        const data = translateShowDataFromStore(JSON.parse(res));
        this.setState({ data });
      });
    }
  }

  render() {
    const { data } = this.state;
    return <LoadingWrap data={data} />;
  }
}

export default Perview;
