import React from 'react';
import { connect } from 'react-redux';
import Input from '../../components/Input';
import Picture from '../../components/Picture';
import Setting from '../../components/Setting';
import PageManage from '../../components/PageManage';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE } from '../../components/EditItem/constants';

// 引入样式文件
import './index.scss';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComponent() {
    const { pages, activePage, editList } = this.props;
    const list = pages[activePage];
    return list.map((it) => {
      if (editList[it]) {
        const { current } = editList[it];
        const { type } = current;
        switch (type) {
          case COMPONENT_TYPE_TEXT:
            return <Input uniqueId={it} key={it} />;
          case COMPONENT_TYPE_PICTURE:
            return <Picture uniqueId={it} key={it} />;
          default:
            break;
        }
      }
      return <div />;
    });
  }

  render() {
    return this.renderComponent();
  }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const { pages, activePage, editList } = state;
  const result = { pages, activePage, editList };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Phone);
