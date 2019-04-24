import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import Carousel from 're-carousel';
import Text from '../../components/Input/render';
import Picture from '../../components/Picture/render';
import Setting from '../../components/Setting';
import PageManage from '../../components/PageManage';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE } from '../../components/EditItem/constants';

// 引入样式文件
import './index.scss';

const refNames = {
  content: 'content',
};

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  renderComponent() {
    const { pages, editList } = this.props;
    return pages.map(item => (
      <div key={item} style={{ position: 'relative', height: '100%' }}>
        {
            item.map((it) => {
              if (editList[it]) {
                const { current } = editList[it];
                const { type, ...others } = current;
                switch (type) {
                  case COMPONENT_TYPE_TEXT:
                    return <Text {...others} key={it} />;
                  case COMPONENT_TYPE_PICTURE:
                    return <Picture {...others} key={it} />;
                  default:
                    break;
                }
              }
            })
          }
      </div>
    ));
  }

  render() {
    return (
      <Carousel axis="y" ref={this.setMagicRefs(refNames.content)}>
        {
          this.renderComponent()
        }
      </Carousel>
    );
  }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const { pages, activePage, editList } = state;
  const result = { pages, activePage, editList };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(Phone);
