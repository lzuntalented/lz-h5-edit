
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SortableElement } from 'react-sortable-hoc';
import classnames from 'classnames';
import {
  Icon, Col, Row, Input,
} from 'antd';

function Item(props) {
  const {
    value, onItemClick, onItemCopyClick, group, children, onChangeItemName,
  } = props;
  const { name, key, active } = value;
  const cls = active ? 'active' : '';
  const [editAble, setEditAble] = useState(false);
  const [inputVal, setInputVal] = useState(name);
  const onInputValueChange = (e) => { setInputVal(e.target.value); };
  const onItemEditClick = () => { setEditAble(true); };
  const onInputBlur = () => { setEditAble(false); onChangeItemName(key, inputVal); };
  return (
    <div className={classnames('level-item', group && 'group-names')}>
      <div className={classnames('name', cls)} onMouseDown={onItemClick(key)}>
        <Row type="flex" justify="space-between">
          <Col style={{ flex: 1 }}>
            {
              editAble ? <Input value={inputVal} onChange={onInputValueChange} onBlur={onInputBlur} /> : name
            }
          </Col>
          <Col onMouseDown={onItemEditClick}>
            <Icon type="edit" />
          </Col>
          <Col className="m-l-8" onMouseDown={onItemCopyClick(key)}>
            <Icon type="copy" />
          </Col>
        </Row>
      </div>
      {children}
    </div>
  );
}

Item.propTypes = {
  value: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onItemCopyClick: PropTypes.func.isRequired,
  onChangeItemName: PropTypes.func.isRequired,
  group: PropTypes.bool,
  children: PropTypes.any,
};

Item.defaultProps = {
  group: false,
  children: null,
};

export default SortableElement(Item);
