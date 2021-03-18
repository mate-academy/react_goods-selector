import React from 'react';
import PropTypes from 'prop-types';

export function AddButton({ selectedProducts, addGoods, item }) {
  return (
    <>
      { !selectedProducts.includes(item)
      && (
      <button
        type="button"
        onClick={() => {
          addGoods(item);
        }}
      >
        Add
      </button>
      )}
    </>
  );
}

AddButton.propTypes = {
  selectedProducts: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  addGoods: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
};
