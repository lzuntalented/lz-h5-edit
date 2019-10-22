import React from 'react';
import { Icon } from 'antd';
import Carousel from 're-carousel';
import Text from '../../components/Input/render';
import Picture from '../../components/Picture/render';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE } from '../../core/constants';
import Music from '../../utils/music';

// 引入样式文件
import './index.scss';
import { getComponentEditMap, getComponentRenderMap } from '../../core/components';

const refNames = {
  content: 'content',
};

class RealPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePageIndex: 0,
      musicPlay: true,
    };
    this.magicRefs = {};
    this.musicHandler = new Music();
  }

  componentDidMount() {
    const { data } = this.props;
    this.musicHandler.setSrc(data.backMusicUrl);
  }

  // componentWillReceiveProps(nextProps) {
  //   const { data } = this.props;
  //   if (data && data.backMusicUrl !== nextProps.data.backMusicUrl) {
  //     this.musicHandler.setSrc(data.backMusicUrl);
  //   }
  // }

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

  onPause = () => {
    this.musicHandler.pause();
    this.setState({ musicPlay: false });
  }

  onPlay = () => {
    this.musicHandler.play();
    this.setState({ musicPlay: true });
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
                return <Component {...others} key={idx} />;
              })
            }
        </div>
      );
    });
  }

  render() {
    const { data } = this.props;
    const { musicPlay } = this.state;
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
        <div className="music-container">
          {
            !musicPlay && <Icon type="play-circle" onClick={this.onPlay} />
          }
          {
            musicPlay && <Icon type="pause-circle" onClick={this.onPause} />
          }
        </div>
      </div>
    );
  }
}

export default RealPreview;
