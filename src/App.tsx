import classNames from 'classnames';
import { Component } from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {`${selectedGood
              ? `${selectedGood} 'is selected'`
              : 'No goods selected'}`}
          </h1>

          <button
            hidden={!selectedGood}
            type="button"
            className={classNames(
              'App__clear', 'button',
              {
                button__hidden: !selectedGood,
              },
            )}
            onClick={() => {
              this.setState({ selectedGood: '' });
            }}
          >
            Clear
          </button>
        </header>

        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'Good',
                {
                  'Good--active': good === selectedGood,
                },
              )}
            >
              {good}
              <button
                type="button"
                className={classNames(
                  'Good', 'button', 'Good__remove',
                  {
                    button__hidden: good !== selectedGood,
                  },
                )}
                onClick={() => {
                  this.setState({ selectedGood: '' });
                }}
              >
                Remove
              </button>

              <button
                type="button"
                className={classNames(
                  'Good', 'button', 'Good__select',
                  {
                    button__hidden: good === selectedGood,
                  },
                )}
                onClick={() => {
                  this.setState({ selectedGood: good });
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
