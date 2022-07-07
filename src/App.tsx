import React from 'react';
import './App.scss';
import classNames from 'classnames';

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

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  clickHandler = (good: string, selectedGoods: string[]): void => {
    if (selectedGoods.includes(good)) {
      this.setState((state: State): State => ({
        selectedGoods: state.selectedGoods.filter(g => g !== good),
      }));
    } else {
      this.setState((state: State): State => ({
        selectedGoods: state.selectedGoods.concat(good),
      }));
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App section">
        <h1 className="title is-2">
          {!selectedGoods.length && 'No goods selected'}
          {selectedGoods.length === 1 && `${selectedGoods} is selected`}
          {selectedGoods.length > 1 && `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`}

          {selectedGoods.length > 0 && (
            <button
              type="button"
              className="button is-danger is-light ml-5"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              Clear List
            </button>
          )}
        </h1>
        <ul>
          {goodsFromServer.map((good) => (
            <li
              key={good}
              className={classNames(
                'mb-3 pl-3 pb-1 is-size-4',
                { selected: selectedGoods.includes(good) },
              )}
            >
              {good}
              {' '}
              {selectedGoods.includes(good)
                && (
                  <button
                    type="button"
                    className="button is-warning ml-5 is-pulled-right"
                    onClick={() => {
                      this.clickHandler(good, selectedGoods);
                    }}
                  >
                    Remove
                  </button>
                )}
              {!selectedGoods.includes(good)
                && (
                  <button
                    type="button"
                    className="button is-info is-light ml-5 is-pulled-right"
                    onClick={() => {
                      this.clickHandler(good, selectedGoods);
                    }}
                  >
                    Select
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
