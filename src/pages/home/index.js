import React from 'react';
import { connect } from 'react-redux';
import Input from '../../components/Input';
import Picture from '../../components/Picture';
import Setting from '../../components/Setting';
import PageManage from '../../components/PageManage';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE } from '../../components/EditItem/constants';
import Phone from './phone';

// 引入样式文件
import './index.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComponent() {
    const { pages, activePage, editList } = this.props;
    if (activePage >= pages.length) {
      return pages.map((it) => {
        if (editList[it]) {
          const { current } = editList[it];
          const { type } = current;
          switch (type) {
            case COMPONENT_TYPE_TEXT:
              return <Input />;
            case COMPONENT_TYPE_PICTURE:
              return <Picture />;
            default:
              break;
          }
        }
        return <div />;
      });
    }
    return <div />;
  }

  render() {
    return (
      <div className="home-container">
        <div className="phone-container">
          <div className="header" />
          <div className="content">
            <Phone />
          </div>
          <div className="footer" />
        </div>
        <div className="style-setting-container">
          <Setting />
        </div>
        <div className="page-manage-container">
          <PageManage />
        </div>
        <a href="#/preview">preview</a>
      </div>
    );
  }
}

export default Home;
