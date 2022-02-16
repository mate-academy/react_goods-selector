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
  state = {
    selectedGoods: ['Jam'],
  };

  clear() {
    this.setState({ selectedGoods: [] });
  }

  removeGood(good: string) {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods.filter((product) => product !== good),
    }));
  }

  addGood(good: string) {
    this.setState((state) => ({ selectedGoods: [...state.selectedGoods, good] }));
  }

  createGoodsList() {
    const { selectedGoods } = this.state;

    const leng = selectedGoods.length;

    if (leng === 0) {
      return 'No goods selected';
    }

    if (leng === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[leng - 1]} are selected`;
  }

  isIncluded(good: string) {
    const { selectedGoods } = this.state;

    return selectedGoods.includes(good);
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          {this.createGoodsList()}
        </h1>
        <div className="container">
          {`Goods in list: ${this.state.selectedGoods.length}`}
          {selectedGoods.length > 0 && (
            <button
              className="button button--clear"
              type="button"
              onClick={() => this.clear()}
            >
              X
            </button>
          )}
        </div>
        <ul className="app__list list">
          {goodsFromServer.map(good => (
            <li
              className="list__item"
              key={good}
            >
              {good}
              {!this.isIncluded(good)
                ? (
                  <button
                    className="list__button button button--add"
                    type="button"
                    onClick={() => {
                      this.addGood(good);
                    }}
                  >
                    Select
                  </button>
                ) : (
                  <button
                    className="list__button button button--remove"
                    type="button"
                    onClick={() => {
                      this.removeGood(good);
                    }}
                  >
                    Remove
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
