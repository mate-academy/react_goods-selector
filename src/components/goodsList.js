import React from 'react';
import PropTypes from 'prop-types';
import { goodShape, commonProps } from './propsShapeVars';
import { Good } from './good';

export const GoodsList = ({ goods, selected, click }) => (
  <ul>
    {goods.map(good => (
      <Good
        good={good}
        selected={selected}
        click={click}
        key={good.id}
      />
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(goodShape).isRequired,
  ...commonProps,
};
