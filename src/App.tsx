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

class App extends React.Component {
  state = {
    selected: undefined,
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.selected ? `Selected good: - ${this.state.selected}` : 'No good selected'}</h1>
        <ul className="good_list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={this.state.selected === good ? 'selected' : ''}
            >
              <p>{good}</p>
              <button
                type="button"
                onClick={() => this.setState({ selected: good })}
                className={this.state.selected === good ? 'disabled' : ''}
              >
                Select
              </button>
              <button
                type="button"
                onClick={() => this.setState({ selected: null })}
                className={this.state.selected !== good ? 'disabled' : ''}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
