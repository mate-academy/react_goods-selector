import React from 'react';
import { Good } from './Good';
import { GoodsListShape } from '../shapes/GoodsListShape';

export const GoodsList = ({ goods, selectedProducts, onClick }) => (
  <ul className="app__list">
    {goods.map(good => (
      <li key={good.id}>
        <Good
          good={good}
          selectedProducts={selectedProducts}
          onClick={onClick}
        />
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = GoodsListShape;
