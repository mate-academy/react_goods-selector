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
  selected: string,
};

class App extends React.Component<{}, State> {
  state = {
    selected: '',
  };

  clickHandler(good: string) {
    this.setState({ selected: good });
  }

  render() {
    return (
      <div className="App">
        {this.state.selected
          ? (
            <>
              <h1>{`${this.state.selected} is selected`}</h1>

              <button
                type="button"
                className="cross"
                onClick={() => this.clickHandler('')}
              >
                X
              </button>
            </>
          )
          : <h1>No goods selected</h1>}
        <ul>
          {goodsFromServer.map(good => {
            return (
              <div className="ui container" key={good}>
                <li
                  className={this.state.selected === good ? 'selected' : ''}
                >
                  {good}
                </li>

                <button
                  className={this.state.selected === good ? 'hidden' : 'ui button mini'}
                  type="button"
                  onClick={() => this.clickHandler(good)}
                >
                  Select
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
