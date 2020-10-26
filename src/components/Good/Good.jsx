import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { GoodPropTypes } from '../PropTypes/GoodPropTypes';

export const Good = ({ good, selectedGoods, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={classNames({
      app__item: true,
      'app__item--selected': selectedGoods.includes(good.name),
    })}
  >
    {good.name}
  </button>
);

Good.propTypes = {
  good: PropTypes.shape(GoodPropTypes).isRequired,
  selectedGoods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
