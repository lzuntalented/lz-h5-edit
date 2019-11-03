import React from 'react';
import qs from 'query-string';
import Phone from './phone';

// 引入样式文件
import './index.scss';
import { resetComponentSize, getComponetData } from './config';
import { getDetail } from '../../services/create';
import { translateShowDataFromStore } from '../../utils';

const refNames = {
  content: 'content',
};

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
  }

  componentDidMount() {
    const { id } = this.state;
    if (+id > 0) {
      getDetail({ id }).then((res) => {
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
