import React from 'react';
import classNames from 'classnames';

import { GoodShape } from '../shapes/GoodShape';

export const Good = ({ good, selectedProducts, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(good.name)}
    className={classNames(`app__item`, {
      'app__item--active': selectedProducts.includes(good.name),
    })}
  >
    {good.name}
  </button>
);

Good.propTypes = GoodShape;
