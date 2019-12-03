import React from 'react';
import { Button } from 'antd';
import { getComponentRenderMap } from '../../../../../../core/components';
import { getLocalCardList } from './config';
import { winSize } from '../../../../../../utils';

class RealPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: getLocalCardList(),
    };
  }

  renderComponent(data) {
    const { onClickTpl } = this.props;
    const { content, id, origin } = data;
    const { height } = winSize;
    const { list, backGroundImage } = content;
    const style = {
      backgroundImage: `url(${backGroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height,
      transform: 'scale(0.8)',
    };
    const item = list[0];

    return (
      <div key={id} className="scene-content" style={style}>
        <div style={{ position: 'relative' }}>
          {
            item.map((it, idx) => {
              const { type, ...others } = it;
              others.animate = {};
              const Component = getComponentRenderMap(type);
              return <Component {...others} key={idx} />;
            })
          }
        </div>
        <div className="mask"><Button onClick={onClickTpl(origin)} size="large" type="primary">使用此场景</Button></div>
      </div>
    );
  }

  render() {
    const { list } = this.state;
    return (
      <div className="scene">
        {
          list.map(it => this.renderComponent(it))
        }
      </div>
    );
  }
}

export default RealPreview;
