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
            key={goods.indexOf(product)}
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
  addProducts: PropTypes.func.isRequired,
}
