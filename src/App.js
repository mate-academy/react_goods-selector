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
    isProductAdded: false,
  }

  addProduct = (item) => {
    if (!this.state.selectedGoods.includes(item)) {
      this.setState(prevState => ({
        selectedGoods: [...prevState.selectedGoods, item],
      }));
    }
  }

  removeProduct = (item) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods
        .filter(selectedItem => selectedItem !== item),
    }));
  }

  clearProductCart = () => {
    this.setState(() => ({
      selectedGoods: [],
    }));
  };

  changeProductStatus = () => {
    this.setState(prevState => ({
      isProductAdded: !prevState.isProductAdded,
    }));
  }

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
          {goodsFromServer.map(item => (
            <div
              className={`list__item ${selectedGoods.includes(item)
                ? 'selected'
                : ''
              }`}
              key={item}
            >
              <li>{item}</li>

              <div>
                <button
                  type="button"
                  className="button button__add"
                  onClick={() => (this.addProduct(item))}
                >
                  Add
                </button>

                <button
                  type="button"
                  className="button button__remove"
                  onClick={() => (this.removeProduct(item))}
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
