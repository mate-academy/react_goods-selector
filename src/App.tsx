import React from 'react';
import './App.scss';
import className from 'classnames';

import goodsFromServer from './goods';

type State = {
  selectedGood: string[];
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: ['Jam'],
  };

  getTitle = () => {
    const { selectedGood } = this.state;

    if (selectedGood.length === 0) {
      return 'No goods selected';
    }

    if (selectedGood.length === 1) {
      return `${selectedGood[0]} is selected`;
    }

    return `${selectedGood.slice(0, selectedGood.length - 1).join(', ')} and ${selectedGood[selectedGood.length - 1]}`;
  };

  clearList = () => {
    this.setState({ selectedGood: [] });
  };

  selectGood = (good: string) => {
    this.setState((prev) => ({
      selectedGood: [...prev.selectedGood, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState((prev) => (
      {
        selectedGood: [...prev.selectedGood.filter(elem => elem !== good)],
      }
    ));
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {this.getTitle()}
          </h1>

          {selectedGood.length > 0 && (
            <button
              type="button"
              className="App__clear button is-warning"
              onClick={this.clearList}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {
            goodsFromServer.map(good => {
              const isSelected = selectedGood.includes(good);

              return (
                <li
                  key={good}
                  // eslint-disable-next-line max-len
                  className={className('good', { 'good--active': isSelected })}
                >
                  {good}
                  {
                    !isSelected
                      ? (
                        <button
                          type="button"
                          className="Good__select button is-success"
                          onClick={() => this.selectGood(good)}
                        >
                          Select
                        </button>
                      )
                      : (
                        <button
                          type="button"
                          className="Good__remove button is-danger"
                          onClick={() => this.removeGood(good)}
                        >
                          Remove
                        </button>
                      )
                  }
                </li>
              );
            })
          }
        </ul>
      </main>
    );
  }
}
