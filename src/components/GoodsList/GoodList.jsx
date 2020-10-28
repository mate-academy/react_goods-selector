import React from 'react';
import PropTypes from 'prop-types';

import { Good } from '../Good';
import { GoodPropTypes } from '../PropTypes/GoodPropTypes';

export const GoodsList = ({ goods, selectedGoods, onClick }) => (
  <ul className="ui link list">
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

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape(GoodPropTypes).isRequired,
  ).isRequired,
  selectedGoods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
