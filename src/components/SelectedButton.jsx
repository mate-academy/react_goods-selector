import React from 'react';
import PropTypes from 'prop-types';
import { classNameButton } from './classNameButton';

export const SelectedButton = (props) => {
  const { name, selectedProduct, selectedGood } = props;

  return (
    <button
      type="button"
      className={classNameButton(selectedGood.includes(name))}
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
  selectedGood: PropTypes.arrayOf(PropTypes.string).isRequired,
}).isRequired;
