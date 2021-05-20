import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';
import { Product } from '../Product';

export class List extends React.Component {
  render() {
    const {
      goods,
      counter,
      addProducts,
      removeProducts,
      displayProducts
    } = this.props;

    return (
      <ul className="App__list list">
        {goods.map(product =>
          <Product
            product={product}
            addProducts={addProducts}
            displayProducts={displayProducts}
            key={product}
          />
        )}

        <li
          className="list__item item--reset"
          onClick={() => removeProducts()}
        >
          reset
        </li>
        <li className="list__item item--count">{counter}</li>
      </ul>
    )
  }
}

List.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  addProducts: PropTypes.func.isRequired,
  removeProducts: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  displayProducts: PropTypes.string.isRequired,
}
