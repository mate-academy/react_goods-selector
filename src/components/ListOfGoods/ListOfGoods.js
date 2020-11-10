import React from 'react';
import { ListOfGoodsPropTypes } from '../PropTypes/ListOfGoodsPropTypes';

import { Good } from '../Good/Good';

export const ListOfGoods = ({ goods, selectedGoods, onClick }) => (
  <ul className="app__list">
    {goods.map(good => (
      <li key={good.id}>
        <Good
          good={good}
          selectedGoods={selectedGoods}
          onClick={onClick}
        />
      </li>
    ))}
  </ul>
);

ListOfGoods.propTypes = ListOfGoodsPropTypes.js;
