import React from 'react';
import PropTypes from 'prop-types';
import { classNameButton } from './classNameButton';

export const RemovedButton = (props) => {
  const { name, removedProduct, selectedGood } = props;

  return (
    <button
      type="button"
      className={classNameButton(!selectedGood.includes(name))}
      onClick={() => {
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
  selectedGood: PropTypes.arrayOf(PropTypes.string).isRequired,
}).isRequired;
