import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good';

export const GoodsList = ({ goods, handler, heading }) => (
  <div className="goods">
    {goods.map(good => (
      <div key={good}>
        <Good handler={handler} good={good} heading={heading} />
      </div>
    ))}
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  handler: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
};
