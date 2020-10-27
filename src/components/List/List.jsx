import React from 'react';
import './List.scss';
import { Product } from '../Product';

export class List extends React.Component {
  render() {
    const {goods, isActive, counter, addProducts, removeProducts} = this.props;

    return (
      <ul className="App__list list">
        {goods.map(product =>
          <Product
            product={product}
            addProducts={addProducts}
            isActive={isActive}
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
