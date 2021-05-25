import React from 'react';
import './App.scss';
import classNames from 'classnames';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  getTitle = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    if (selectedGoods.length > 1) {
      return `${selectedGoods.join(', ')} are selected`;
    }

    return 'No good selected';
  }

  addProducts = (product) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, product],
    }));
  };

  removeProduct = (product) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(item => item !== product),
    }));
  };

  removeProductAll = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1 className="Product__title">
            {this.getTitle()}
          </h1>
          <button
            type="button"
            onClick={this.removeProductAll}
            className="Product__title-button"
          >
            X
          </button>
        </div>
        <ul className="Product__list">
          {goodsFromServer.map((product) => {
            const isIncluded = selectedGoods.includes(product);

            return (
              <li
                key={product}
                className={classNames('Product__item', {
                  Product__item_added: isIncluded,
                })}
              >
                {product}
                <button
                  type="button"
                  onClick={() => this.addProducts(product)}
                  className={classNames('Product__button',
                    'Product__button_g', {
                      active: !isIncluded,
                    })}
                >
                  add
                </button>
                <button
                  type="button"
                  onClick={() => this.removeProduct(product)}
                  className={classNames('Product__button',
                    'Product__button_r', {
                      active: isIncluded,
                    })}
                >
                  remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
