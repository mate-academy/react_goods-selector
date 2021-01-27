import React from 'react';
import { Good } from '../Good';
import { GoodListShape } from '../../shapes/GoodListShape';

export const GoodsList = (
  { preparedGoods, selectTodo, selected },
) => (
  <ul className="goods">
    {preparedGoods.map(good => (
      <li
        className="goods__item"
        key={good.id}
      >
        <Good
          good={good}
          selectTodo={selectTodo}
          selected={selected}
        />
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = GoodListShape;
