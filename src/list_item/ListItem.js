import React from 'react';
import classNames from 'classnames';
import { ListItemShape } from '../shapes/ListItemShape';

export const ListItem = ({ item, selected, clicker }) => (
  <button
    type="button"
    onClick={() => clicker(item.name)}
    className={classNames(`item__button`, {
      item__selected: selected.includes(item.name),
    })}
  >
    {item.name}
  </button>
);

ListItem.propTypes = ListItemShape;
