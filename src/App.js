import React from 'react';
import classNames from 'classnames';
import './App.scss';

const goodsFromServer = [
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

export class App extends React.Component {
  state = {
    selected: null,
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {selected}
        </h1>

        {selected && (
          <button
            type="button"
            onClick={() => this.setState({ selected: null })}
          >
            X
          </button>
        )}

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                { selected: selected === good },
              )}
            >
              {`${good}---`}
              <button
                type="button"
                onClick={() => this.setState({ selected: good })}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
