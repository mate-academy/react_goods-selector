import React from 'react';
import PropTypes from 'prop-types';
import { ProductName } from './ProductName';
import { SelectedButton } from './SelectedButton';
import { RemovedButton } from './RemovedButton';

export const ProductList = (props) => {
  const { name, selectedGood, selectedProduct, removedProduct } = props;

  return (
    <>
      <ProductName
        name={name}
        selectedGood={selectedGood}
      />

      <SelectedButton
        name={name}
        selectedProduct={selectedProduct}
        selectedGood={selectedGood}
      />

      <RemovedButton
        name={name}
        removedProduct={removedProduct}
        selectedGood={selectedGood}
      />
    </>
  );
};

ProductList.propTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  selectedGood: PropTypes.arrayOf(PropTypes.string).isRequired,
  removedProduct: PropTypes.func.isRequired,
  selectedProduct: PropTypes.func.isRequired,
}).isRequired;
