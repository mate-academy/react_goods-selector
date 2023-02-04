import classNames from 'classnames';
import React from 'react';

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
  selectedGood: string[],
};

export class App extends React.Component<{}, State> {
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
    this.setState(state => (
      { selectedGood: state.selectedGood.filter(oldGood => oldGood !== good) }
    ));
  };

  createTitle = (flag: number, selectedGood: string[]): string => {
    if (flag === 1) {
      return `${selectedGood[0]} is selected`;
    }

    if (flag > 1) {
      return `${selectedGood.slice(0, flag - 1).join(', ')} `
        + `and ${selectedGood[flag - 1]} is selected`;
    }

    return 'No goods selected';
  };

  render() {
    const { selectedGood } = this.state;
    const flag = selectedGood.length;

    return (
      <main className="App panel">
        <header className="App__header panel-heading">
          <h1 className="App__title title">
            {this.createTitle(flag, selectedGood)}
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
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
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
