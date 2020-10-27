import React from 'react';
import PropTypes from 'prop-types';
import { shapeList } from './shapeList';
import './Item.scss';

export const Item = ({ onClick, item }) => (
  <button
    className="button"
    onClick={event => onClick(event)}
    type="button"
  >
    {item.name}
  </button>
);

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: shapeList.isRequired,
};
