import React from 'react';
import PropTypes from 'prop-types';
import { ItemFromServerShape } from '../shapes/ItemFromServerShape';

export const Item = ({ stateValue, callback, item }) => (
  <button
    onClick={event => callback(event)}
    className={stateValue.includes(item.name)
      ? 'btn btn-dark'
      : 'list-group-item-action btn'}
    type="button"
  >
    {item.name}
  </button>
);

Item.propTypes = {
  stateValue: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  callback: PropTypes.func.isRequired,
  item: ItemFromServerShape.isRequired,
};
