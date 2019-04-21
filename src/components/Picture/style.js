import React from 'react';
import { connect } from 'react-redux';
import {
  Select, Row, Col, Input,
} from 'antd';
import { changeAttrs, changeBaseStyle } from '../EditItem/action';
import SettingPosition from '../SettingPosition';

class TextStyle extends React.Component {
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
      const { dispatch, activeEditKey } = this.props;
      dispatch(changeAttrs({ [key]: e }, activeEditKey));
    }

    setBaseStyle = key => (e) => {
      const { dispatch, activeEditKey } = this.props;
      const { target } = e;
      dispatch(changeBaseStyle({ [key]: +target.value }, activeEditKey));
    }

    render() {
      const { activeEditKey } = this.props;
      if (!activeEditKey) return <div>no style</div>;
      const {
        width, height, top, left,
      } = this.props;
      return (
        <div>
          <SettingPosition {...this.props} setBaseStyle={this.setBaseStyle} />
        </div>
      );
    }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const { editList, activeEditKey } = state;
  const result = { activeEditKey };
  if (activeEditKey) {
    const item = editList[activeEditKey];
    if (item) return Object.assign(result, item.current);
  }
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(TextStyle);
