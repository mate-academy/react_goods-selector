import React from 'react';
import classNames from 'classnames';

import './App.scss';

export const goodsFromServer: string[] = [
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
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {selectedGood === ' ' ? 'No goods selected' : `${selectedGood} is selected`}

          {selectedGood === ' ' ? null
            : (
              <>
                <button
                  className="App__button"
                  type="button"
                  onClick={() => {
                    this.setState({ selectedGood: ' ' });
                  }}
                >
                  X
                </button>
              </>
            )}
        </h1>
        <ul className="GoodsList">
          {goodsFromServer.map(good => (
            <>
              <li
                className={classNames(
                  'GoodsList__item',
                  { active: selectedGood === good },
                )}
                key={good}
              >
                {good}
              </li>
              <button
                className="GoodsList__button"
                type="button"
                onClick={() => {
                  this.setState({ selectedGood: good });
                }}
              >
                Select
              </button>
            </>
          ))}
        </ul>
      </div>
    );
  }
}
