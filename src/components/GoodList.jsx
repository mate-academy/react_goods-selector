import React from 'react';
import { Good } from './Good';

export const GoodList = ({ selectedGood, goods, onClick }) => (
  <ul className="good-list">
  {goods.map(good => (
    <li key={good.id} className="good-list__item">
      <Good selectedGood={selectedGood} good={good} onClick={onClick} />
    </li>
  ))}
</ul>
)
