import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Good } from './Good';

export const GoodsList = ({ goods, addGood, removeGood }) => (
  <ul className="list">
    {goods.map(item => (
      <li key={item} className="list__item">
        <Good
          good={item}
          addGood={addGood}
          removeGood={removeGood}
        />
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(string).isRequired,
  addGood: PropTypes.func.isRequired,
  removeGood: PropTypes.func.isRequired,
};
