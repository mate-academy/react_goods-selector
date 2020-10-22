import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Item';
import { ItemFromServerShape } from '../shapes/ItemFromServerShape';

export const List = ({ data, selectedGoods, onClick }) => (
  <ul className="list-group list-group-horizontal list">
    {
      data.map(item => (
        <li key={item.id} className="list-group-item item">
          <Item
            selectedGoods={selectedGoods}
            onClick={onClick}
            item={item}
          />
        </li>
      ))
    }
  </ul>
);

List.propTypes = {
  data: PropTypes.arrayOf(ItemFromServerShape).isRequired,
  selectedGoods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};
