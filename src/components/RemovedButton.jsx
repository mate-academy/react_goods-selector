import React from 'react';
import PropTypes from 'prop-types';

export const RemovedButton = (props) => {
  const { name, removedProduct } = props;

  return (
    <button
      type="button"
      onClick={(event) => {
        removedProduct(name);
      }}
    >
      ✘
    </button>
  );
};

RemovedButton.propTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  removedProduct: PropTypes.func.isRequired,
}).isRequired;
