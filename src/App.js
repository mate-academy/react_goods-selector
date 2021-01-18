import React from 'react';
import './App.scss';
import { GoodsTypes } from './types';

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
    selectedProduct: [],
  }

  addProduct = (event, product) => {
    this.setState(state => ({
      selectedProduct: [...state.selectedProduct, product],
    }));
  }

  removeProduct = (event, product) => {
    if (this.state.selectedProduct.includes(product)) {
      this.setState((prevState) => {
        const index = prevState
          .selectedProduct.findIndex(item => item === product);

        if (index !== -1) {
          prevState.selectedProduct.splice(index, 1);
        }

        return {
          selectedProduct: prevState.selectedProduct,
        };
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="title is-2">
          {`Selected good: - ${this.state.selectedProduct.join(', ')}`}
        </h1>
        <ul>
          {goodsFromServer.map((item, index) => (
            <>
              <li
                className={this.state.selectedProduct.includes(item)
                  ? 'subtitle is-success is-5 button'
                  : 'subtitle is-5 button'}
                key={item}
              >
                {item}
                <button
                  type="button"
                  className="button is-success is-light"
                  onClick={(event) => {
                    this.addProduct(event, item);
                  }}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={(event) => {
                    this.removeProduct(event, item);
                  }}
                >
                  Remove
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

App.propTypes = GoodsTypes.isRequired;
