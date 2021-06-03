import React from 'react';
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
    selected: 'Jam',
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <div className="title">
          <h1>
            {selected
              ? `${selected} is selected `
              : 'No goods selected'}
          </h1>
          {selected && (
          <button
            type="button"
            onClick={() => this.setState({ selected: '' })}
          >
            X
          </button>
          )}
        </div>
        <ul className="list">
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={selected === item ? 'selected' : ''}
            >
              <span>
                {item}
              </span>
              {selected !== item && (
              <button
                type="button"
                onClick={() => (this.setState({ selected: item }))}
              >
                select
              </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
