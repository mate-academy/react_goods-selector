import React from 'react';
import './List.scss';
import { Product } from '../Product';

export class List extends React.Component {
  render() {
    const {goods} = this.props;

    return (
      <ul className="App__list list">
        {goods.map(product =>
          <Product product={product} addProducts={this.props.addProducts}/>
        )}

        <li
          className="list__item item--reset"
          onClick={() => {
            this.props.removeProducts('reset')
          }}
        >
          reset
        </li>
        <li className="list__item item--count">{this.props.counter}</li>
      </ul>
    )
  }
}
