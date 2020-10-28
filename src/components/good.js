import React from 'react';

import { goodShape, commonProps } from './propsShapeVars';
import './good.scss';

export const Good = ({ good, selected, click }) => {
  const { name } = good;
  const goodClass = (selected === name) ? 'selected' : '';

  return (
    <li className={goodClass}>
      {name}
      <br />
      <button
        type="button"
        onClick={() => click(name)}
      >
        Select
      </button>
    </li>
  );
};

Good.propTypes = {
  good: goodShape,
  ...commonProps,
};

Good.defaultProps = {
  good: {},
};
