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

  handleSelect = (good: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, good],
    }));
  };

  handleClearAll = () => {
    this.setState({ selectedGoods: [] });
  };

  handleClear = (good: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: selectedGoods.filter(item => (
        item !== good)),
    }));
  };

  render() {
    return (
      <div className="App">
        {this.state.selectedGoods.length > 0 ? (
          <h1 className="page__title">
            {this.state.selectedGoods.map(good => (
              <span key={good} className="page__title-item">
                {good}
                <button
                  type="button"
                  onClick={() => {
                    this.handleClear(good);
                  }}
                  className="page-button__clear"
                >
                  X
                </button>
              </span>
            ))}
            {' '}
            is selected
          </h1>
        ) : (
          <h1 className="page__title">No goods selected </h1>
        )}

        {this.state.selectedGoods.length > 1 && (
          <div className="page-button">
            <button
              type="button"
              onClick={this.handleClearAll}
              className="page-button__clear-all"
            >
              Clear All
            </button>
          </div>
        )}

        <div className="goods">
          <ul className="goods__list">
            {goodsFromServer.map(good => (
              <li key={good} className="goods__list-item">
                <p className="goods__list-item-text">
                  {good}
                </p>
                {!this.state.selectedGoods.includes(good) && (
                  <button
                    type="button"
                    onClick={() => {
                      this.handleSelect(good);
                    }}
                    className="goods__list-button"
                  >
                    Select
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
