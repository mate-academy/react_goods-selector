import React from 'react';
import classNames from 'classnames';
import { ListItemShape } from '../../ListShape';
import './ListItem.scss';

export const ListItem = ({ item, selectedGoods, clickHandler }) => (
  <button
    type="button"
    onClick={() => clickHandler(item.name)}
    className={classNames(`item__button`, {
      item__selected: selectedGoods.includes(item.name),
    })}
  >
    {item.name}
  </button>
);

ListItem.propTypes = ListItemShape;
