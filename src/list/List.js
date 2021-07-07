import React from 'react';
import { ListItem } from '../list_item';
import { ListShape } from '../shapes/ListShape';
import './List.scss';

export const List = ({ items, selected, clicker }) => (
  <ul className="App__list list">
    {items.map(item => (
      <li key={item.id} className="list__item item">
        <ListItem
          item={item}
          selected={selected}
          clicker={clicker}
        />
      </li>
    ))
    }
  </ul>
);

List.propTypes = ListShape;
