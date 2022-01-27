import React from 'react';
import classNames from 'classnames';
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
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood}
          {' '}
          selected
        </h1>

        <button
          type="button"
          className={classNames({
            buttonVisibility: selectedGood === 'No goods',
          })}
          onClick={() => {
            this.selectGood('No goods');
          }}
        >
          X
        </button>

        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              <span
                className={classNames(
                  'good',
                  {
                    selectedGood: selectedGood === good,
                  },
                )}
              >
                {good}
              </span>
              {' '}

              <button
                type="button"
                onClick={() => {
                  this.selectGood(good);
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
