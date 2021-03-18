import React from 'react';
import PropTypes from 'prop-types';

export function RemoveButton({ selectedProducts, removeGoods, item }) {
  return (
    <>
      { !selectedProducts.includes(item)
      || (
      <button
        type="button"
        onClick={() => {
          removeGoods(item);
        }}
      >
        Remove
      </button>
      )}
    </>
  );
}

RemoveButton.propTypes = {
  selectedProducts: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  removeGoods: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
};
