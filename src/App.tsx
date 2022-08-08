import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  isSelected = (selectedGood : string) => {
    this.setState({ selectedGood });
  };

  GoodsToRemove = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected'}
          </h1>

          {selectedGood && (
            <button
              type="button"
              className="App__clear"
              onClick={this.GoodsToRemove}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="App__list">
          {goodsFromServer.map(good => {
            const isSelectedGood = selectedGood === good;

            return (
              <li
                key={good}
                className={classNames(
                  'Good App__list-item',
                  { 'Good--active': isSelectedGood },
                )}
              >

                {good}

                { isSelectedGood
                  ? (
                    <button
                      type="button"
                      className="Good__remove"
                      onClick={this.GoodsToRemove}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="Good__select"
                      onClick={() => this.isSelected(good)}
                    >
                      Select
                    </button>
                  )}
              </li>
            );
          })}
        </ul>

        {/* Put required buttons into each Good */}

      </main>
    );
  }
}
