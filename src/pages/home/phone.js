import React from 'react';
import { connect } from 'react-redux';
import Input from '../../components/Input';
import Picture from '../../components/Picture';
import Music from '../../components/Music';
import GroupItem from '../../components/GroupItem';
import {
 COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE, ITEM_TYPE_SINGLE, ITEM_TYPE_GROUP 
} from '../../core/constants';

// 引入样式文件
import './index.scss';

const componentMap = {
  COMPONENT_TYPE_TEXT: Input,
  COMPONENT_TYPE_PICTURE: Picture,
};

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComponent() {
    const {
      pages, activePage, editList, groupList,
    } = this.props;
    const list = pages[activePage];
    return list.map((it) => {
      const { nodeType } = editList[it];
      if (nodeType === ITEM_TYPE_SINGLE) {
        const { type, ...others } = editList[it];
        switch (type) {
          case COMPONENT_TYPE_TEXT:
            return <Input uniqueId={it} key={it} data={others} />;
          case COMPONENT_TYPE_PICTURE:
            return <Picture uniqueId={it} key={it} data={others} />;
          default:
            break;
        }
      } else if (nodeType === ITEM_TYPE_GROUP) {
        return <GroupItem key={it} uniqueId={it} list={groupList[it]} editList={editList} />;
      }
      return null;
    });
  }

  render() {
    const { backGroundImage, backMusicUrl } = this.props;
    const style = {
      backgroundImage: `url(${backGroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
    return (
      <div className="home-edit-item-container">
        <div style={style}>
          {this.renderComponent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const {
    pages, activePage, editList, backGroundImage, backMusicUrl, groupList,
  } = state;
  const result = {
    pages, activePage, editList, backGroundImage, backMusicUrl, groupList,
  };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Phone);
