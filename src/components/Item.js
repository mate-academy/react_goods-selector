import React from 'react';
import PropTypes from 'prop-types';
import { ItemFromServerShape } from '../shapes/ItemFromServerShape';

export const Item = ({ selectedGoods, onClick, item }) => (
  <button
    onClick={event => onClick(event)}
    className={selectedGoods.includes(item.name)
      ? 'btn btn-dark'
      : 'list-group-item-action btn'}
    type="button"
  >
    {item.name}
  </button>
);

Item.propTypes = {
  selectedGoods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
  item: ItemFromServerShape.isRequired,
};
