import React from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import getSelectOptions from './config';
import { changeBaseStyle } from '../../../EditItem/action';

const opts = getSelectOptions();
const { Option, OptGroup } = Select;

function Animation(props) {
  const {
    animate, activeEditKey, dispatch,
  } = props;

  return (
    <Select
      onChange={(e) => {
        dispatch(changeBaseStyle({
          animate: e,
        }, activeEditKey));
      }}
      style={{ width: '100%' }}
      value={animate}
    >
      {
        Object.keys(opts).map(item => (
          <OptGroup label={item} key={item}>
            {
                opts[item].map(it => <Option value={it} key={it}>{it}</Option>)
            }
          </OptGroup>
        ))
    }
    </Select>
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(Animation);
