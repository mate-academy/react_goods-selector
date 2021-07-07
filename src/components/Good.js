import React from 'react';
import PropTypes from 'prop-types';
import { ItemFromServerShape } from '../shapes/ItemFromServerShape';

export const Good = ({ selectedGoods, item, onClick }) => (
  <>
    <span
      className={`good__title ${selectedGoods === item.name ? 's' : ''}`}
    >
      {item.name}
    </span>
    <button
      type="button"
      className="ui primary button"
      onClick={() => onClick(item.name)}
    >
      Sum button
    </button>
  </>
);

Good.propTypes = {
  item: ItemFromServerShape.isRequired,
  onClick: PropTypes.func.isRequired,
  selectedGoods: PropTypes.string.isRequired,
};
