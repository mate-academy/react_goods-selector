/* eslint-disable react/prefer-stateless-function */
import React from 'react';
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
  selected: string[]
};

class App extends React.Component<{}, State> {
  state = {
    selected: ['Jam'],
  };

  changeSelectedState = (good: string): void => {
    const { selected } = this.state;

    if (selected.includes(good)) {
      const result = selected.filter(item => item !== good);

      this.setState({ selected: result });

      return;
    }

    if (!selected.includes(good)) {
      const selectedCopy = [...selected];

      selectedCopy.push(good);
      this.setState({ selected: selectedCopy });
    }
  };

  removeAll = () => {
    this.setState({ selected: [] });
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="container">
        <h1 className="level">
          {selected.length > 0
            ? `Selected goods: ${selected.join(', ')}`
            : 'No selected goods'}
          {selected.length > 0 && (
            <button
              type="button"
              className="button is-small is-danger"
              onClick={() => this.removeAll()}
            >
              Clear all
            </button>
          )}
        </h1>
        <ul className="column">
          {goodsFromServer.map(good => {
            return (
              <li
                key={good}
                className={
                  `level
                  ${selected.includes(good)
                ? 'has-background-success'
                : ''}`
                }
              >
                {good}
                <button
                  type="button"
                  onClick={() => this.changeSelectedState(good)}
                  className={
                    `button
                    is-small
                  ${selected.includes(good)
                ? 'is-warning'
                : 'is-info'}`
                  }
                >
                  {this.state.selected.includes(good)
                    ? 'Remove'
                    : 'Select'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
