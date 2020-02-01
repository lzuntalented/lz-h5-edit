import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 're-carousel';
import MusicIcon from './music';

// 引入样式文件
import './index.scss';
import { getComponentRenderMap } from '../../core/components';

const refNames = {
  content: 'content',
};

class RealPreview extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      activePageIndex: 0,
    };
    this.magicRefs = {};
  }

  // 设置魔术引用
  setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

  prev = () => {
    this.magicRefs[refNames.content].prev();
  }

  next = () => {
    this.magicRefs[refNames.content].next();
  }

  onTransitionEnd = (e) => {
    const { current } = e;
    const index = current.firstElementChild.getAttribute('data-index');
    this.setState({ activePageIndex: +index });
  }

  renderComponent() {
    const { data } = this.props;
    const { activePageIndex } = this.state;
    return data.list.map((item, index) => {
      const style = { position: 'relative', height: '100%', display: 'none' };
      if (activePageIndex === index) style.display = 'block';
      return (
        <div key={index} data-index={index} style={style}>
          {
              item.map((it, idx) => {
                const { type, ...others } = it;
                const Component = getComponentRenderMap(type);
                return <Component show={style.display === 'block'} {...others} key={idx} />;
              })
            }
        </div>
      );
    });
  }

  render() {
    const { data } = this.props;
    const style = {
      backgroundImage: `url(${data.backGroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
    return (
      <div className="content" style={style}>
        <Carousel onTransitionEnd={this.onTransitionEnd} axis="y" ref={this.setMagicRefs(refNames.content)}>
          {
            this.renderComponent()
          }
        </Carousel>
        {
          data.backMusicUrl && (<MusicIcon backMusicUrl={data.backMusicUrl} />)
        }
      </div>
    );
  }
}

export default RealPreview;
