import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ allGoods, addItem, selectedItems }) => (
  <ul className="products__list">
    {
      allGoods.map(item => (
        <li
          key={item}
        >
          <button
            type="button"
            onClick={event => addItem(event)}
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
  allGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
  addItem: PropTypes.func.isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.string),
};

GoodsList.defaultProps = {
  selectedItems: [],
};

export default GoodsList;
