import React from 'react';
import classNames from 'classnames';
import { AddRemoveButtonPropTypes } from '../propTypeShapes/addRemoveButton';
import { AddRemoveButton } from './AddRemoveButton';

export function ListItem({ name, selectedGoods, selectItem }) {
  return (
    <li
      className={classNames('list-item', {
        active: selectedGoods.includes(name),
      })}
    >
      {name}
      <AddRemoveButton
        name={name}
        selectItem={selectItem}
        selectedGoods={selectedGoods}
      />
    </li>
  );
}

ListItem.propTypes = {
  ...AddRemoveButtonPropTypes,
};
