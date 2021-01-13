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
    const element = event.target.closest('li');

    element.classList.add('is-success');
    this.setState(state => ({
      selectedProduct: [...state.selectedProduct, product],
    }));
  }

  removeProduct = (event, product) => {
    const element = event.target.closest('li');

    element.classList.remove('is-success');

    if (element.childNodes[0].textContent === product) {
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
              <li className="subtitle is-5 button" key={item}>
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
