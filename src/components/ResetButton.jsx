import React from 'react';
import PropTypes from 'prop-types';

export function ResetButton({ selectedProducts, resetGoods }) {
  return (
    <>
      {selectedProducts.length > 0
        && (
        <button
          type="button"
          onClick={resetGoods}
        >
          X
        </button>
        )}
    </>
  );
}

ResetButton.propTypes = {
  selectedProducts: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  resetGoods: PropTypes.func.isRequired,
};
