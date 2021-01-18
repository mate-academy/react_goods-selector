import React from 'react';
import PropTypes from 'prop-types';

export const Product = ({ goods }) => (
  <p className="app__list">{goods.join(', ')}</p>
);

Product.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
