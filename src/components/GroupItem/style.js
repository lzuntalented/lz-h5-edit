import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Select, Row, Col, Slider, Input,
} from 'antd';
import { changeAttrs, changeBaseStyle } from '../../store/action';
import SettingPosition from '../SettingPosition';
import ColorPicker from '../ColorPicker';

import './style.scss';

class TextStyle extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
    }

    state = {}

    onChange = (e) => {
      const { dispatch, activeEditKey } = this.props;
      dispatch(changeAttrs({ fontSize: +e }, activeEditKey));
    }

    onChangeColor = (e) => {
      const { dispatch, activeEditKey } = this.props;
      dispatch(changeAttrs({ color: e }, activeEditKey));
    }

    onChangeAttr = key => (e) => {
      const { target } = e;
      let value = e;
      if (target) {
        value = +target.value;
      }
      const { dispatch, activeEditKey } = this.props;
      dispatch(changeAttrs({ [key]: value }, activeEditKey));
    }

    setBaseStyle = key => (e) => {
      const { dispatch, activeEditKey } = this.props;
      const { target } = e;
      let value = e;
      if (target) {
        value = +target.value;
      }
      dispatch(changeBaseStyle({ [key]: value }, activeEditKey));
    }

    render() {
      const { activeEditKey } = this.props;
      if (!activeEditKey || activeEditKey.length < 0) return <div>no style</div>;
      return (
        <div className="component-groupitem-style-container">
          <SettingPosition {...this.props} setBaseStyle={this.setBaseStyle} />
        </div>
      );
    }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const { editList, activeEditKey } = state;
  const result = { activeEditKey };
  if (activeEditKey && activeEditKey.length === 1) {
    const item = editList[activeEditKey[0]];
    if (item) return Object.assign(result, item);
  }
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(TextStyle);
