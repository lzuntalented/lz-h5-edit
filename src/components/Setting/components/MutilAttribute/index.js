import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Row, Col, Tooltip,
} from 'antd';
import { changeMultiActiveAlign } from '../../../../store/action';
import { getAlignConfig } from './config';

const alignOptions = getAlignConfig();

class Attribute extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    activeEditKey: PropTypes.array.isRequired,
  }

  onClickAlign = actionKey => () => {
    const { dispatch } = this.props;
    dispatch(changeMultiActiveAlign(actionKey));
  }

  render() {
    const { activeEditKey } = this.props;
    if (!activeEditKey || activeEditKey.length < 0) return <div>no style</div>;
    return (
      <Row align="middle" type="flex" gutter={6} justify="space-around">
        {
          alignOptions.map(it => (
            <Col key={it.key}>
              <Tooltip placement="top" title={it.tip}>
                <i className={`cursor-pointer iconfont ${it.icon}`} onClick={this.onClickAlign(it.key)} />
              </Tooltip>
            </Col>
          ))
        }
      </Row>
    );
  }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const { activeEditKey } = state;
  const result = { activeEditKey };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Attribute);
