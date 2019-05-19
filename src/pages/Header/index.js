import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';

import './index.scss';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE } from '../../components/EditItem/constants';
import { addPageItem } from '../../components/EditItem/action';

class Header extends React.Component {
  onAddText = () => {
    const { dispatch } = this.props;
    dispatch(addPageItem(COMPONENT_TYPE_TEXT));
  }

  onAddPicture = () => {
    const { dispatch } = this.props;
    dispatch(addPageItem(COMPONENT_TYPE_PICTURE));
  }

  render() {
    const { pages, activePage } = this.props;
    return (
      <section
        className="page-header-container"
      >
        <ul>
            <li className="item" onClick={this.onAddText}>
                <Icon type="border-inner" className="icon" />
                <div className="txt">文本</div>
            </li>
            <li className="item" onClick={this.onAddPicture}>
                <Icon type="picture" className="icon" />
                <div className="txt">图片</div>
            </li>
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const { pages, activePage } = state;
  const result = { pages, activePage };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Header);
