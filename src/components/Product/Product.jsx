import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';

export class Product extends React.Component {
  render() {
    const { product, addProducts, displayProducts } = this.props;

    return (
      <>
        <li
          className={displayProducts.includes(product)
            ? "list__item item--active"
            : "list__item item--unactive"
          }
          onClick={() => {
            addProducts(product);
          }}
        >
          {product}
        </li>
      </>
    )
  }
}

Product.propTypes = {
  product: PropTypes.string.isRequired,
  addProducts: PropTypes.func.isRequired,
  displayProducts: PropTypes.string.isRequired,
}
