import React from 'react';
import PropTypes from 'prop-types';
import '../App/App.scss';

export const Product = ({ product, isProductSelected, goodsHandler }) => (
  <div className="button-wrapper">
    <button
      type="button"
      className={
        `button ${isProductSelected
          ? 'button__active'
          : 'button__noneactive'}`
      }
      onClick={() => {
        goodsHandler(product);
      }}
    >
      {product}
    </button>
  </div>
);

Product.propTypes = {
  product: PropTypes.string.isRequired,
  isProductSelected: PropTypes.bool.isRequired,
  goodsHandler: PropTypes.func.isRequired,

};
