import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 're-carousel';

// 引入样式文件
import './index.scss';
import { Music, winSize } from '@lzshow/utils';
import { getComponentRenderMap } from '@lzshow/core';
import MusicIcon from './music';

class Preview extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    marginTop: PropTypes.number,
    onlyShowFirst: PropTypes.bool,
  }

  static defaultProps = {
    marginTop: 0,
    // 预览使用 仅展示第一页
    onlyShowFirst: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      activePageIndex: 0,
      lastData: null,
    };
    this.musicHandler = new Music();
    this.magicRefs = {};
    this.ref = React.createRef();
    this.formData = [];
  }

  static getDerivedStateFromProps(props, state) {
    const { lastData } = state;
    if (lastData !== props.data) {
      return Object.assign(state, { lastData: props.data });
    }
    return null;
  }

  prev = () => {
    const { current } = this.ref;
    current.prev();
  }

  next = () => {
    const { current } = this.ref;
    current.next();
  }

  onTransitionEnd = (e) => {
    const { current } = e;
    const index = current.firstElementChild.getAttribute('data-index');
    this.setState({ activePageIndex: +index });
  }

  onContentChange = (obj, deep, index) => (val) => {
    if (!this.formData[deep]) {
      this.formData[deep] = {};
    }
    this.formData[deep][index] = val;
  }

  getContentFormData = deep => () => this.formData[deep]

  getRequestHandler = deep => async (d) => {
    if (this.props.getRequestHandler) {
      this.props.getRequestHandler(d, deep + 1);
    }
  }

  renderComponent() {
    const {
      data, marginTop, onlyShowFirst, getRequestHandler,
    } = this.props;
    const { activePageIndex } = this.state;
    return data.list.map((item, index) => {
      if (onlyShowFirst && index > 0) {
        return false;
      }
      const style = {
        position: 'relative',
        height: winSize.height,
        display: 'none',
        overflow: 'hidden',
        marginTop,
      };
      if (activePageIndex === index) style.display = 'block';
      return (
        <div key={index} data-index={index} style={style}>
          {
              item.map((it, idx) => {
                const { type, animates = [], ...others } = it;
                const Component = getComponentRenderMap(type);
                return (
                  <Component
                    show={style.display === 'block'}
                    animates={onlyShowFirst ? [] : [...animates]}
                    {...others}
                    key={idx}
                    getRequestHandler={this.getRequestHandler(index)}
                    getContentFormData={this.getContentFormData(index)}
                    onContentChange={this.onContentChange(it, index, others?.attrs?.formkey || idx)}
                  />
                );
              })
            }
        </div>
      );
    });
  }

  render() {
    const { data, onlyShowFirst } = this.props;
    if (!data) return null;
    const style = {
      backgroundImage: `url(${data.backGroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
    return (
      <div className="content" style={style}>
        <Carousel onTransitionEnd={this.onTransitionEnd} axis="y" ref={this.ref}>
          {
            this.renderComponent()
          }
        </Carousel>
        {
          !onlyShowFirst && data.backMusicUrl && (<MusicIcon backMusicUrl={data.backMusicUrl} />)
        }
      </div>
    );
  }
}

export default Preview;
