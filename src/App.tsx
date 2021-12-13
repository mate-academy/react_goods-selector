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
    this.setState((pre : State) => {
      pre.selectedGood.push(product);

      return {
        selectedGood: pre.selectedGood,
      };
    });
  };

  deleteProduct = (product: string) => {
    this.setState((pre : State) => {
      return {
        selectedGood: pre.selectedGood.filter(
          (item: string) => item !== product,
        ),
      };
    });
  };

  onClickFunc = (product : string) => {
    if (this.isSelected(product)) {
      this.deleteProduct(product);
    } else {
      this.addProduct(product);
    }
  };

  renderSelectList = () => {
    const newLocal = this.state.selectedGood.length
      ? (
        <>
          <div className="select-products__title">Selected good:</div>
          <div className="select-products__list">
            {this.state.selectedGood.length === 1
              ? `${this.state.selectedGood[0]} is selected`
              : this.state.selectedGood.map((item, i, arr) => {
                return arr[i] === arr[arr.length - 1]
                  ? ` and ${item} are selected`
                  : ` ${item}`;
              })}
          </div>
        </>
      )
      : 'No goods selected';

    return newLocal;
  };

  render() {
    return (
      <div className="products">
        <h1 className="select-products-list">
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
