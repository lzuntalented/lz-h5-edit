import React from 'react';
import { connect } from 'react-redux';
import {
  Tabs, Button, Row, Col, Card, Menu,
} from 'antd';
import {
  addPageItem, initStore, addPageItemWithSize, addPageItemWithAttrs,
} from '../../../../store/action';
import Node from './components/Node';
import Scene from './components/Scene';

const TAB_KEY_NODE = 'TAB_KEY_NODE';
const TAB_KEY_SCENE = 'TAB_KEY_SCENE';

const TabsMap = {
  [TAB_KEY_NODE]: Node,
  [TAB_KEY_SCENE]: Scene,
};

class Setting extends React.Component {
  state = { currentMenu: TAB_KEY_NODE }

  onAddComponent = key => () => {
    const { dispatch } = this.props;
    dispatch(addPageItem(key));
  }

  onAddComponentWithSize = (key, size) => () => {
    const { dispatch } = this.props;
    dispatch(addPageItemWithSize(key, size));
  }

  onAddComponentWithAttrs = (key, attrs) => () => {
    const { dispatch } = this.props;
    dispatch(addPageItemWithAttrs(key, attrs));
  }

  onClickTpl = store => () => {
    const { dispatch } = this.props;
    dispatch(initStore(store));
  }

  onChangeMenu = ({ key }) => {
    this.setState({ currentMenu: key });
  }

  render() {
    const { currentMenu } = this.state;
    const Comp = TabsMap[currentMenu];
    return (
      <div className="resource">
        <Card title="物料仓库" bordered>
          <Row type="flex" className="height100">
            <Col className="left-memu">
              <Menu defaultSelectedKeys={[currentMenu]} onClick={this.onChangeMenu}>
                <Menu.Item key={TAB_KEY_NODE}>元素模板</Menu.Item>
                <Menu.Item key={TAB_KEY_SCENE}>场景模板</Menu.Item>
              </Menu>
            </Col>
            <Col className="right-list">
              <Comp
                onAddComponentWithAttrs={this.onAddComponentWithAttrs}
                onAddComponentWithSize={this.onAddComponentWithSize}
                onAddComponent={this.onAddComponent}
                onClickTpl={this.onClickTpl}
              />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Setting);
