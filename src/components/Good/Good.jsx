import React from 'react';
import classNames from 'classnames';
import { GoodShape } from '../Shapes/GoodShape';
import 'semantic-ui-css/semantic.min.css';

export const Good = ({ good, selectedGoods, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(good.name)}
    className={classNames(
      `ui primary button`, {
        'ui secondary button': selectedGoods.includes(good.name),
      },
    )}
  >
    {good.name}
  </button>
);

Good.propTypes = GoodShape;
