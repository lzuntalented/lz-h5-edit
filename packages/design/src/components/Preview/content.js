/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button, Input, Modal, notification,
} from 'antd';

import './index.scss';
import { save } from '../../../../services/create';
import { deleteUnUseObject } from '../../../../utils';

class Header extends React.Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  onTitleChange = (e) => {
    const { target } = e;
    this.setState({ title: target.value });
  }

  onPublish = () => {
    const { title } = this.state;
    const { state } = this.props;
    if (title.trim() === '') {
      notification.error({
        message: '请先输入作品标题',
      });
      return;
    }
    const content = deleteUnUseObject(state);
    if (!content) {
      Modal.error({
        title: '发布失败',
        content: '请在场景中添加物料，以丰富内容',
      });
      return;
    }
    // // 远程存储用户预览模板
    save({ content: state, title }).then((id) => {
      Modal.success({
        content: '恭喜，发布成功！',
        onOk: () => {
          window.open(`#/preview/${id}`, '_blank');
        },
      });
    }).catch(() => {
      Modal.error({
        title: '发布失败',
      });
    });
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <div className="m-b-8">标题</div>
        <Input value={title} onChange={this.onTitleChange} className="m-b-8" placeholder="请输入标题" />
        <Button type="primary" onClick={this.onPublish}>发布</Button>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const result = {
    state: JSON.stringify(state),
  };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Header);
