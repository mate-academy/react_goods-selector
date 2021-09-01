import classNames from 'classnames';
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
  selectedGoods: string[];
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  addGood = (value: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, value],
    }));
  };

  removeGood = (value: string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(value)) {
      const index = selectedGoods.lastIndexOf(value);

      selectedGoods.splice(index, 1);

      this.setState((state) => ({
        selectedGoods: [...state.selectedGoods],
      }));
    }
  };

  resetGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1>
            {selectedGoods.length > 0
              ? `Selected good: ${selectedGoods.join(', ')}`
              : 'No goods selected'}
          </h1>
          <button
            type="button"
            className="cards__button"
            onClick={this.resetGoods}
          >
            Reset
          </button>

          <section className="cards">
            {goodsFromServer.map(good => (
              <div className={classNames(
                'card',
                { card__active: selectedGoods.includes(good) },
              )}
              >
                <h2 className="card__title">
                  {good}
                </h2>

                <button
                  type="button"
                  onClick={() => {
                    this.addGood(good);
                  }}
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => {
                    this.removeGood(good);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
