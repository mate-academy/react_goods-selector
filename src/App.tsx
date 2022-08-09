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

  selectGood = (selectedGood: string) => {
    this.setState({ selectedGood });
  };

  unselectGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <div className="App__container">
          <header className="App__header">
            <h1 className="App__title">
              {selectedGood
                ? `${selectedGood} is selected`
                : 'No goods selected'}
            </h1>

            {selectedGood && (
              <button
                type="button"
                className="Good__btn button is-danger"
                onClick={this.unselectGood}
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

                  {isSelectedGood
                    ? (
                      <button
                        type="button"
                        className="Good__btn button is-danger"
                        onClick={this.unselectGood}
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="Good__btn button is-primary"
                        onClick={() => this.selectGood(good)}
                      >
                        Select
                      </button>
                    )}
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    );
  }
}
