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
  selectedGoods: string[],
};

function setTitle(selectedGoods: string[]): string {
  if (!selectedGoods.length) {
    return 'No goods selected';
  }

  if (selectedGoods.length === 1) {
    return `${selectedGoods[0]} is selected`;
  }

  return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
  };

  setGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods
        .filter(selectGood => (good !== selectGood)),
    }));
  };

  clearGood = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="good">
        <h1 className="good__title">
          { setTitle(selectedGoods) }
        </h1>
        <button
          type="button"
          className={selectedGoods.length
            ? 'good__clear good__clear button is-danger is-light'
            : 'good__clear--hidden'}
          onClick={() => {
            this.clearGood();
          }}
        >
          Clear
        </button>
        <ul className="good__list">
          {goodsFromServer.map(good => (
            <li className="good__element" key={good}>
              <p className="good__element-name">{good}</p>
              {!selectedGoods.includes(good)
                ? (
                  <button
                    type="button"
                    className="good__element-button button is-dark"
                    onClick={() => {
                      this.setGood(good);
                    }}
                  >
                    Select
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="good__element-button button is-danger"
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
