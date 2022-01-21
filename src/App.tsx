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

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood}
          {' '}
          is selected
        </h1>

        <button
          type="button"
          className={classNames({
            buttonVisibility: selectedGood === 'No goods',
          })}
          onClick={() => {
            this.setState({ selectedGood: 'No goods' });
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
                  this.setState({ selectedGood: good });
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
