import React from 'react';
import PropTypes from 'prop-types';

import './ShoppingCard.scss';

export const ShoppingCard = ({ selectedList }) => (
  <ul className="ShoppingCard">
    {selectedList.map(good => (
      <li key={good} className="ShoppingCard__item">
        {good}
      </li>
    ))}
  </ul>
);

ShoppingCard.propTypes = {
  selectedList: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
