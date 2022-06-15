/* eslint-disable react/prefer-stateless-function */
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

    this.setState((prevState) => ({ selected: [...prevState.selected, good] }));
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
              onClick={this.removeAll}
            >
              Clear all
            </button>
          )}
        </h1>
        <ul className="column">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'level',
                { 'has-background-success': selected.includes(good) },
              )}
            >
              {good}
              <button
                type="button"
                onClick={() => this.changeSelectedState(good)}
                className={classNames(
                  'button is-small', {
                    'is-warning': selected.includes(good),
                    'is-info': !selected.includes(good),
                  },
                )}
              >
                {this.state.selected.includes(good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

// `button
//                     is-small
//                   ${selected.includes(good)
//               ? 'is-warning'
//               : 'is-info'}`
