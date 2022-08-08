import classNames from 'classnames';
import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string[],
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: ['Jam'],
  };

  selectGood = (good: string) => {
    this.setState((prevState) => ({
      selectedGood: [...prevState.selectedGood, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState((prevState) => ({
      selectedGood: [...prevState.selectedGood]
        .filter(selectedGood => good !== selectedGood),
    }));
  };

  clear = () => {
    this.setState({ selectedGood: [] });
  };

  makeListInTitle = (goods: string[] | []) => {
    switch (true) {
      case !goods.length:
        return 'No goods selected';

      case goods.length === 1:
        return `${goods[0]} is selected`;

      case goods.length > 1:
        return `${goods.slice(0, -1).join(', ')} and ${goods.slice(-1)} are selected`;

      default:
        return '';
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title title">
            {this.makeListInTitle(selectedGood)}
          </h1>

          {
            selectedGood.length
              ? (
                <button
                  type="button"
                  className="App__clear button is-info is-light is-rounded"
                  onClick={() => this.clear()}
                >
                  Clear
                </button>
              )
              : ''
          }
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'Good',
                {
                  'Good--active': selectedGood.includes(good),
                },
              )}
            >
              {good}

              {selectedGood.includes(good)
                ? (
                  <button
                    type="button"
                    className="button is-danger"
                    onClick={() => {
                      this.removeGood(good);
                    }}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button is-success"
                    onClick={() => {
                      this.selectGood(good);
                    }}
                  >
                    Select
                  </button>
                )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
