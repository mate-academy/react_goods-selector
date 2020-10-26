import React from 'react';
import './Product.scss';

export class Product extends React.Component {
  state = {
    isActive: false,
  }

  render() {
    const { product } = this.props;
    const { isActive } = this.state;

    return (
      <>
        <li
          className={isActive
            ? "list__item item--active"
            : "list__item item--unactive"}
          onClick={() => {
            this.props.addProducts(product);
            this.setState(prevState => ({isActive: !prevState.isActive}));
          }}
        >
          {product}
        </li>
      </>
    )
  }
}
