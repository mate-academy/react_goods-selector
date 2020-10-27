import React from 'react';
import PropTypes from 'prop-types';
import { Goods } from '../Goods';
import './GoodsList.scss';

export const GoodsList = (props) => {
  const { goods, selectedGoods, toggleSelectedGoods } = props;

  return (
    <ul className="goodsList">
      {goods.map(item => (
        <Goods
          key={item.index}
          good={item.good}
          selectedGoods={selectedGoods}
          toggleSelectedGoods={toggleSelectedGoods}
        />
      ))}
    </ul>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    good: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  selectedGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleSelectedGoods: PropTypes.func.isRequired,
};
