import React from 'react';
import PropTypes from 'prop-types';
import { Good } from './Good';
import { ItemFromServerShape } from '../shapes/ItemFromServerShape';

export const GoodsList = ({ selectedGoods, data, onClick }) => (
  <ul className="list">
    {
      data.map(good => (
        <li key={good.id} className="good">
          <Good selectedGoods={selectedGoods} item={good} onClick={onClick} />
        </li>
      ))
    }
  </ul>
);

GoodsList.propTypes = {
  data: PropTypes.arrayOf(ItemFromServerShape).isRequired,
  onClick: PropTypes.func.isRequired,
  selectedGoods: PropTypes.string.isRequired,
};
