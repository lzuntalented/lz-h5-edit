import React from 'react';
import qs from 'query-string';
import isMobile from 'ismobilejs';

// 引入样式文件
import './index.scss';
import { translateShowDataFromStore, winSize } from '@lzshow/utils';
import { addShortFonts } from './utils/font';
import { getDetail } from './services/create';
import LoadingWrap from './Loading';


let marginTop = 0;
function getTop() {
  const height = window.innerHeight;
  if (height > winSize.height) {
    marginTop = (height - winSize.height) / 2;
  }
}

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
    getTop();
  }

  componentDidMount() {
    const { id } = this.state;
    if (+id > 0) {
      addShortFonts(id);
      getDetail({ id, source: 'app' }).then((resp) => {
        const { content: res } = resp;
        const data = translateShowDataFromStore(JSON.parse(res));
        this.setState({ data });
      });
    }
  }

  render() {
    const { data, id } = this.state;
    if (!(isMobile(window.navigator.userAgent).phone)) {
      marginTop = 0;
    }
    return <LoadingWrap data={data} marginTop={marginTop} id={id} />;
  }
}

export default Perview;
