/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

interface State {
  selectedGood: string[];
}

class App extends React.Component {
  state: State = {
    selectedGood: ['Jam'],
  };

  isSelected = (product: string) => {
    return this.state.selectedGood.includes(product);
  };

  addProduct = (product: string) => {
    const newSelectedGood : string[] = this.state.selectedGood;

    newSelectedGood.push(product);

    return newSelectedGood;
  };

  deleteProduct = (product: string) => {
    return this.state.selectedGood.filter(
      (item: string) => item !== product,
    );
  };

  onClickFunc = (product : string) => {
    if (this.isSelected(product)) {
      this.setState({ selectedGood: this.deleteProduct(product) });
    } else {
      this.setState({ selectedGood: this.addProduct(product) });
    }
  };

  renderSelectList = () => {
    const listSelectedGood = this.state.selectedGood.join(', ');
    const newLocal = this.state.selectedGood.length
      ? (
        <>
          <div className="select-products__title">Selected good:</div>
          <div className="select-products__list">
            {`${this.state.selectedGood.length === 1
              ? listSelectedGood
              : this.state.selectedGood.map((item, i, arr) => {
                if (arr[i] === arr[arr.length - 1]) {
                  return ` and ${item}`;
                }

                return ` ${item}`;
              })}
              ${this.state.selectedGood.length === 1 ? 'is selected' : 'are selected'}`}
          </div>
        </>
      )
      : 'No goods selected';

    return newLocal;
  };

  render() {
    return (
      <div className="products">
        <h1 className="select-products">
          { this.renderSelectList() }
        </h1>
        <button
          className="button-clear"
          type="button"
          disabled={this.state.selectedGood.length === 0}
          onClick={() => this.setState({ selectedGood: [] })}
        >
          {this.state.selectedGood.length ? 'Clear list' : 'X'}
        </button>
        <ul className="products__list">
          {
            goodsFromServer.map(product => (
              <li key={product} className="product-container">
                <button
                  className="button-select"
                  type="button"
                  onClick={() => this.onClickFunc(product)}
                >
                  {this.isSelected(product) ? 'remove' : 'select'}
                </button>

                <span className={this.isSelected(product) ? 'product product-selected' : 'product'}>
                  {product}
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

// eslint-disable-next-line no-console
console.log(goodsFromServer);

export default App;
