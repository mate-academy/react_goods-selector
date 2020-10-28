import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';

export const Product = ({ selectedGoods, onClick, good }) => (
  <button
    className={selectedGoods.includes(good.name)
      ? 'button button__active selected'
      : 'button'}
    onClick={event => onClick(event)}
    type="button"
  >
    {good.name}
  </button>
);

Product.propTypes = {
  selectedGoods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
  good: PropTypes.string.isRequired,
};
