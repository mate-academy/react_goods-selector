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

type State = {
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addProduct = (product: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, product],
    }));
  };

  removeProduct = (product: string) => {
    this.state.selectedGoods.splice(this.state.selectedGoods.indexOf(product), 1);

    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods],
    }));
  };

  clearTheGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    selectedGoods.join(' ,');

    return (
      <div className="app">
        <h1>
          {selectedGoods.length === 0 && 'No goods selected'}
          {selectedGoods.length === 1 && `${selectedGoods} is selected`}
          {selectedGoods.length >= 2 && `${selectedGoods.join(', ')} are selected`}
        </h1>
        <ul className="app__list">
          {goodsFromServer.map(product => {
            if (this.state.selectedGoods.includes(product)) {
              return (
                <li
                  className="list-group-item selected app__item"
                >
                  {product}
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => {
                      this.removeProduct(product);
                    }}
                  >
                    Remove
                  </button>
                </li>
              );
            }

            return (
              <li className="list-group-item app__item">
                {product}
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.addProduct(product);
                  }}
                >
                  Select
                </button>
              </li>
            );
          })}
        </ul>
        <button
          className="btn btn-outline-danger button__clear"
          type="button"
          onClick={() => this.clearTheGoods()}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
