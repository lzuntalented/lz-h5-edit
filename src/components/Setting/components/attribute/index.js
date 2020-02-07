import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Collapse } from 'antd';

import RenderStyle from './components/Select';
import RenderColor from './components/Color';
import RenderSliderInput from './components/SliderInput';
import Input from './components/Input';
import Textarea from './components/Textarea';
import ContentEditDiv from './components/ContentEditDiv';
import RenderTwoInput from './components/TwoInput';
// import styleConfig from '../../../../resource/Text/config';
import {
  STYLE_RENDER_TYPE_SELECT, STYLE_RENDER_TYPE_COLOR, STYLE_RENDER_TYPE_SLIDER_INPUT,
  STYLE_VALUE_TYPE_NUMBER, STYLE_RENDER_TYPE_INPUT, STYLE_RENDER_TYPE_TEXTAREA,
  STYLE_RENDER_TYPE_CONTENT_EDIT_DIV,
  STYLE_RENDER_TYPE_COLLAPSE,
  STYLE_RENDER_TYPE_TWO_INPUT,
} from '../../../../core/constants';
import { changeAttrs } from '../../../../store/action';
import { isObject, isString } from '../../../../utils/Tools';

const renderMap = {
  [STYLE_RENDER_TYPE_SELECT]: RenderStyle,
  [STYLE_RENDER_TYPE_COLOR]: RenderColor,
  [STYLE_RENDER_TYPE_SLIDER_INPUT]: RenderSliderInput,
  [STYLE_RENDER_TYPE_INPUT]: Input,
  [STYLE_RENDER_TYPE_TEXTAREA]: Textarea,
  [STYLE_RENDER_TYPE_CONTENT_EDIT_DIV]: ContentEditDiv,
  [STYLE_RENDER_TYPE_TWO_INPUT]: RenderTwoInput,
};

export function registerRender(key, Comp) {
  renderMap[key] = Comp;
}

class Attribute extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
    }

    state = {}

    onChange = obj => (value) => {
      const { dispatch, activeEditKey } = this.props;
      const { valueType, key } = obj;
      let v = value;
      if (valueType === STYLE_VALUE_TYPE_NUMBER) {
        v = +value;
      }
      // 多个属性设置
      if (Array.isArray(key)) {
        if (!isObject(v)) {
          console.error('array key should has object value');
          return;
        }

        key.forEach((k) => {
          // 检测key是否是对象
          if (isObject(k)) {
            // 该对象表示字段类型为数字型
            if (k.valueType === STYLE_VALUE_TYPE_NUMBER) {
              if (v[k.key]) {
                v[k.key] = +v[k.key];
              }
            }
          }
        });
        dispatch(changeAttrs(v, activeEditKey));
      } else {
        dispatch(changeAttrs({ [key]: v }, activeEditKey));
      }
    }

    renderItem(it, attrs, index) {
      const {
        renderType, valueType, props, key, ...others
      } = it;
      let Comp = renderType;
      if (isString(renderType)) {
        Comp = renderMap[renderType];
      }
      let data = attrs;
      if (isString(key)) {
        data = attrs[key];
      }
      return (
        Comp
          ? (
            <Comp
              key={index}
              keys={key}
              data={data}
              attrs={props}
              {...others}
              onChange={this.onChange(it)}
            />
          )
          : null
      );
    }

    render() {
      const { activeEditKey, styleConfig } = this.props;
      if (!activeEditKey || activeEditKey.length < 0) return <div>no style</div>;
      const { attrs } = this.props;
      return (
        <div className="component-text-style-container">
          {
            styleConfig.map((it, index) => {
              const {
                renderType, children, props, label,
              } = it;
              if (renderType === STYLE_RENDER_TYPE_COLLAPSE) {
                return (
                  <Collapse
                    key={index}
                    defaultActiveKey={props.defaultOpen ? '1' : ''}
                    className="m-t-8 m-b-8"
                  >
                    <Collapse.Panel header={label} key="1">
                      {
                        children.map((item, idx) => this.renderItem(item, attrs, `${index}-${idx}`))
                      }
                    </Collapse.Panel>
                  </Collapse>
                );
              }
              return this.renderItem(it, attrs, index);
            })
        }
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
export default connect(mapStateToProps, mapDispatchToProps)(Attribute);
