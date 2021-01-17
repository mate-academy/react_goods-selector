import React from 'react';
import PropTypes from 'prop-types';

export const Product = ({ goods }) => (
  <span>{goods.join(', ')}</span>
);

Product.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
