import React from 'react';
import PropTypes from 'prop-types';

import { Good } from '../Good';

import './GoodsList.scss';

export const GoodsList = (props) => {
  const { goods, selectedGoods, selectGood } = props;

  return (
    <ul className="goods-list">
      {goods.map(good => (
        <li className="goods-list__item" key={good.id}>
          <Good
            goodName={good.name}
            selectedGoods={selectedGoods}
            selectGood={selectGood}
          />
        </li>
      ))}
    </ul>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    goodName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  selectedGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectGood: PropTypes.func.isRequired,
};
