import classNames from 'classnames';
import { Component } from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string[],
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: ['Jam'],
  };

  clearAll = () => {
    this.setState({ selectedGood: [] });
  };

  select = (good: string) => {
    this.setState(state => ({
      selectedGood: [
        ...state.selectedGood,
        good,
      ],
    }));
  };

  remove = (good: string) => {
    this.setState(state => {
      const newState = [...state.selectedGood];

      newState.splice(state.selectedGood.indexOf(good), 1);

      return { selectedGood: newState };
    });
  };

  render() {
    const { selectedGood } = this.state;
    const flag = selectedGood.length;
    let title = 'No goods selected';

    if (flag === 1) {
      title = `${selectedGood[0]} is selected`;
    }

    if (flag > 1) {
      title = `${selectedGood.slice(0, flag - 1).join(', ')} `
        + `and ${selectedGood[flag - 1]} is selected`;
    }

    return (
      <main className="App panel">
        <header className="App__header panel-heading">
          <h1 className="App__title title">
            {title}
          </h1>

          {flag > 0 && (
            <button
              type="button"
              className="App__clear button is-danger"
              onClick={this.clearAll}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="">
          {goodsFromServer.map(good => (
            <li className={classNames(
              'Good',
              'panel-block',
              { 'Good--active': selectedGood.includes(good) },
            )}
            >
              {good}
              {!selectedGood.includes(good) ? (
                <button
                  type="button"
                  className="
                    Good__select
                    button
                    is-primary
                    is-light
                    is-small
                  "
                  onClick={() => this.select(good)}
                >
                  Select
                </button>
              ) : (
                <button
                  type="button"
                  className="
                    Good__remove
                    button
                    is-danger
                    is-light
                    is-small
                  "
                  onClick={() => this.remove(good)}
                >
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
