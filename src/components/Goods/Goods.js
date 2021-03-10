import React from 'react';
import cn from 'classnames';
import './Goods.scss';

import PropTypes from 'prop-types';

export const Goods = ({ good, selectedGoods, toggleSelectedGoods }) => {
  const buttonClasses = cn(
    'goods__button',
    {
      'goods__button--selected': selectedGoods.includes(good),
    },
  );

  return (
    <li className="goods">
      <div className="goods__text">
        {good}
      </div>
      <button
        type="button"
        className={buttonClasses}
        onClick={() => {
          toggleSelectedGoods(good);
        }}
      >
        {selectedGoods.includes(good)
          ? 'Remove'
          : 'Add'}
      </button>
    </li>
  );
};

Goods.propTypes = {
  good: PropTypes.string.isRequired,
  selectedGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleSelectedGoods: PropTypes.func.isRequired,
};
