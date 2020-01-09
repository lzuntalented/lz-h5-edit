import React from 'react';
import qs from 'query-string';
import Phone from './phone';

// 引入样式文件
import './index.scss';
import { getComponetData } from './config';
import { getDetail } from '../../services/create';
import { translateShowDataFromStore, addShortFonts } from '../../utils';

class Perview extends React.Component {
  constructor(props) {
    super(props);
    const { search } = window.location;
    const obj = qs.parse(search);

    const data = getComponetData(obj.id);
    this.state = {
      data,
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
    return (
      <Phone data={data} />
    );
  }
}

export default Perview;
