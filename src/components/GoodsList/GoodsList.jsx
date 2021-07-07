import React from 'react';
import { Good } from '../Good';
import { GoodsListShape } from '../Shapes/GoodsListShape';
import './GoodsList.scss';

export const GoodsList = ({ goods, selectedGoods, onClick }) => (
  <ul className="App__list">
    {
      goods.map(good => (
        <li
          key={good.id}
          className="App__item"
        >
          <Good
            good={good}
            selectedGoods={selectedGoods}
            onClick={onClick}
          />
        </li>
      ))
    }
  </ul>
);

GoodsList.propTypes = GoodsListShape;
