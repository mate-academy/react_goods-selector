import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({ preparedGoods, toggleGood }) => (
  <ul>
    {preparedGoods.map(good => (
      <li key={good.id}>
        <button
          type="button"
          onClick={() => toggleGood(good)}
        >
          {good.name}
        </button>
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  preparedGoods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  toggleGood: PropTypes.func.isRequired,
};
