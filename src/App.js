import React from 'react';
import './App.scss';

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

  addProduct = (product) => {
    if (!this.state.selectedGoods.includes(product)) {
      this.setState(prevState => ({
        selectedGoods: [...prevState.selectedGoods, product],
      }));
    }
  }

  removeProduct = (product) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods
        .filter(selectedproduct => selectedproduct !== product),
    }));
  }

  clearProductCart = () => {
    this.setState(() => ({
      selectedGoods: [],
    }));
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <h1>
          {selectedGoods.length > 0
            ? `Selected goods: ${selectedGoods.join(', ')}`
            : 'No goods selected'}
        </h1>

        <button
          className="button button__clear"
          type="button"
          onClick={this.clearProductCart}
        >
          Clear
        </button>

        <ul className="goods__list">
          {goodsFromServer.map(product => (
            <div
              className={`list__product ${selectedGoods.includes(product)
                ? 'selected'
                : ''
              }`}
              key={product}
            >
              <li>{product}</li>

              <div>
                <button
                  type="button"
                  className="button button__add"
                  onClick={() => this.addProduct(product)}
                >
                  Add
                </button>

                <button
                  type="button"
                  className="button button__remove"
                  onClick={() => this.removeProduct(product)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
