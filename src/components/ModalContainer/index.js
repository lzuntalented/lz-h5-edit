import React from 'react';
import {
  Modal, Row, Col, Menu,
} from 'antd';

import './index.scss';

export default class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    const { options } = props;
    this.state = {
      defaultKeys: [options[0].title],
      selectKeys: [options[0].title],
    };
  }

  onSelect = ({ key }) => {
    this.setState({ selectKeys: [key] });
  }

  render() {
    const {
      options, children, className, ...others
    } = this.props;
    const { defaultKeys, selectKeys } = this.state;
    return (
      <Modal
        {...others}
        footer={null}
        closable
        className={`component-modal-container ${className}`}
        width={960}
      >
        <Row type="flex" justify="space-between">
          <Col className="nav">
            <div className="title">{others.title}</div>
            <Menu
              theme="dark"
              onSelect={this.onSelect}
              defaultSelectedKeys={defaultKeys}
            >
              {
                options.map(it => <Menu.Item key={it.title}>{it.title}</Menu.Item>)
            }
            </Menu>
            <div className="extra">
              {children}
            </div>
          </Col>
          <Col className="right">
            {
              options.map((it) => {
                const style = {
                  display: 'none',
                  height: '100%',
                };
                if (selectKeys.indexOf(it.title) > -1) {
                  style.display = 'block';
                }
                return <div key={it.title} style={style}>{it.comp}</div>;
              })
            }
          </Col>
        </Row>
      </Modal>
    );
  }
}
