import React from 'react';
import PropTypes from 'prop-types';

export function Title({ selectedProducts }) {
  return (
    <h1>
      {selectedProducts.length > 0
        ? `${selectedProducts.join(', ')} is selected`
        : 'No goods selected'
      }
    </h1>
  );
}

Title.propTypes = {
  selectedProducts: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
