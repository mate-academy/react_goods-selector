import React from 'react';
import PropTypes from 'prop-types';

export const SelectedButton = (props) => {
  const { name, selectedProduct } = props;

  return (
    <button
      type="button"
      onClick={(event) => {
        selectedProduct(name);
      }}
    >
      ✔
    </button>
  );
};

SelectedButton.propTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  selectedProduct: PropTypes.func.isRequired,
}).isRequired;
