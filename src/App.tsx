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
  selectedGoods: string[];
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
        <h1 className="title">
          {selectedGoods.length === 0 && 'No goods selected'}
          {selectedGoods.length === 1 && `${selectedGoods} is selected`}
          {selectedGoods.length > 1 && `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`}

          {selectedGoods.length > 0 && (
            <button
              type="button"
              className="button is-warning is-light ml-5"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              Clear
            </button>
          )}
        </h1>
        <ul>
          {goodsFromServer.map((good) => (
            <li
              key={good}
              className={classNames(
                'pl-6 mb-2 is-size-4',
                {
                  selected: selectedGoods.includes(good),
                },
              )}
            >
              {good}
              {' '}
              <button
                type="button"
                className="
                  button
                  is-info
                  is-light
                  is-pulled-left
                  mr-5
                "
                onClick={() => {
                  this.clickHandler(good, selectedGoods);
                }}
              >
                {selectedGoods.includes(good) ? 'Remove' : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
