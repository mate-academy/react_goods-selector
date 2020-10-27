import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ allItems, addItem, selectedItems }) => (
  <ul className="products__list">
    {
      allItems.map(item => (
        <li
          key={item}
        >
          <button
            type="button"
            onClick={() => addItem(item)}
            className={selectedItems.includes(item)
              ? 'products__item products__item_selected'
              : 'products__item'}
          >
            {item}
          </button>
        </li>
      ))
    }
  </ul>
);

GoodsList.propTypes = {
  allItems: PropTypes.arrayOf(PropTypes.string),
  addItem: PropTypes.func.isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.string),
};

GoodsList.defaultProps = {
  selectedItems: [],
  allItems: [],
};

export default GoodsList;
