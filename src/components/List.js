import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Item';
import { shapeList } from './shapeList';
import './List.scss';

export const List = ({ goodsItems, selectedGood, onClick }) => (
  <ul className="list">
    {
      goodsItems.map(item => (
        <li key={item.id} className="list__item">
          <Item
            selectedGoods={selectedGood}
            onClick={onClick}
            item={item}
          />
        </li>
      ))
    }
  </ul>
);

List.propTypes = {
  goodsItems: PropTypes.arrayOf(shapeList).isRequired,
  selectedGood: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};
