import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '../Item/Item';

export const GoodsList = ({ goods, selectHandler, selectedItem }) => (
  <ul className="goods">
    {goods.map(listItem => (
      <li className="goods__item" key={listItem}>
        <Item
          item={listItem}
          selectHandler={selectHandler}
          selectedItem={selectedItem}
        />
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
  selectHandler: PropTypes.func.isRequired,
  selectedItem: PropTypes.string.isRequired,
};

GoodsList.defaultProps = {
  goods: [],
};
