import React from 'react';
import './Goods.scss';

import PropTypes from 'prop-types';

export class Goods extends React.PureComponent {
  render() {
    const { good, selectedGoods, toggleSelectedGoods } = this.props;

    return (
      <li className="goods">
        <div className="goods__text">
          {good}
        </div>
        <button
          type="button"
          className={selectedGoods.includes(good)
            ? 'goods__button goods__button--selected'
            : 'goods__button'}
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
  }
}

Goods.propTypes = {
  good: PropTypes.string.isRequired,
  selectedGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleSelectedGoods: PropTypes.func.isRequired,
};
