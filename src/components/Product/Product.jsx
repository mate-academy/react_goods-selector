import React from 'react';
import './Product.scss';

export class Product extends React.Component {
  render() {
    let { product, addProducts, isActive } = this.props;

    return (
      <>
        <li
          className={isActive
            ? "list__item item--active"
            : "list__item item--unactive"
          }
          onClick={() => {
            addProducts(product);
            isActive = !isActive;
          }}
        >
          {product}
        </li>
      </>
    )
  }
}
