import React from 'react';
import classNames from 'classnames';

import { GoodPropTypes } from '../PropTypes/GoodPropTypes';

export const Good = ({ good, selectedGoods, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(good.name)}
    className={classNames({
      app__item: true,
      'app__item--selected': selectedGoods.includes(good.name),
    })}
  >
    {good.name}
  </button>
);

Good.propTypes = GoodPropTypes;
