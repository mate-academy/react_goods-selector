import React from 'react';
import { Good } from '../Good';
import { GoodListShape } from '../../shapes/GoodListShape';

// eslint-disable-next-line max-len
export const GoodsList = ({ preparedGoods, selectTodo, deleteTodo, selected }) => (
  <ul className="goods">
    {preparedGoods.map(good => (
      <li
        className="goods__item"
        key={good.id}
      >
        <Good
          good={good}
          selectTodo={selectTodo}
          deleteTodo={deleteTodo}
          selected={selected}
        />
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = GoodListShape;
