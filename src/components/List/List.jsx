import React from 'react';
import { ListItem } from '../ListItem';
import { ListShape } from '../../ListShape';
import './List.scss';

export const List = ({ items, selectedGoods, clickHandler }) => (
  <ul className="app__list list">
    {items.map(item => (
      <li className="list__item item" key={item.id}>
        <ListItem
          item={item}
          selectedGoods={selectedGoods}
          clickHandler={clickHandler}
        />
      </li>
    ))
    }
  </ul>
);

List.propTypes = ListShape;
