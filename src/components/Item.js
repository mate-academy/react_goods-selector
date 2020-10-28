import React from 'react';
import PropTypes from 'prop-types';
import { shapeList } from './shapeList';
import './Item.scss';

export const Item = ({ selectedGoods, onClick, item }) => (
  <button
    className={selectedGoods.includes(item.name)
      ? 'button button--isActive'
      : 'button'}
    onClick={event => onClick(item.name, event)}
    type="button"
  >
    {item.name}
  </button>
);

Item.propTypes = {
  selectedGoods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
  item: shapeList.isRequired,
};
