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
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods.filter(item => item !== product)],
    }));
  };

  clearTheGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  titleCorrectness() {
    let title = 'No goods selected';

    if (this.state.selectedGoods.length === 1) {
      title = `${this.state.selectedGoods} is selected`;
    }

    if (this.state.selectedGoods.length >= 2) {
      title = `${this.state.selectedGoods.join(', ')} are selected`;
    }

    return title;
  }

  render() {
    const { selectedGoods } = this.state;

    selectedGoods.join(' ,');

    return (
      <div className="app">
        <h1>
          {this.titleCorrectness()}
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
