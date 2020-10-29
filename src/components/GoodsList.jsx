import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ items, selectedGoods, addItem }) => (
  <ul className="list-group container mx-auto">
    {
      items.map(item => (
        <button
          type="button"
          onClick={() => addItem(item)}
          className={selectedGoods.includes(item)
            ? 'list-group-item btn list-group-item active mx-auto w-25 my-1'
            : 'list-group-item btn mx-auto w-25 my-1'
          }
        >
          <li key={item}>
            {item}
          </li>
        </button>
      ))
    }
  </ul>
);

GoodsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired),
  selectedGoods: PropTypes.arrayOf(PropTypes.string.isRequired),
  addItem: PropTypes.func.isRequired,
};

GoodsList.defaultProps = {
  items: [],
  selectedGoods: [],
};
