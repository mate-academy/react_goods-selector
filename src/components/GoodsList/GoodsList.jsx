import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const GoodsList = ({ goods, heading, handleClick }) => (
  <div className="goods">
    {goods.map(item => (
      <button
        type="button"
        className={classNames('goods__item', { selected: heading === item })}
        onClick={handleClick}
      >
        {item}
      </button>
    ))}
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
};
