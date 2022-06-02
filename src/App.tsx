/* eslint-disable react/button-has-type */
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
    // eslint-disable-next-line react/no-unused-state
    status: 'No goods selected',
    selected: 'selected',
  };

  componentDidMount() {
    this.setState({ status: 'Jam is selected' });
  }

  selectItem = (good: string) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ status: `${good} is selected`, className: 'good good--selected' });
  };

  render() {
    return (
      <div className="App">
        <ul>
          {
            goodsFromServer.map(good => (
              <>
                <li
                  key={good}
                >
                  <span
                    className={this.state.status.includes(good)
                      ? this.state.selected : 'good'}
                  >
                    {good}
                  </span>
                  <button onClick={() => {
                    this.selectItem(good);
                  }}
                  >
                    Select
                  </button>
                </li>
              </>
            ))
          }
        </ul>
        <div>
          <button
            type="button"
            onClick={() => {
              this.setState({ status: 'No goods selected' });
            }}
          >
            Clear
          </button>
        </div>
        <h1>{this.state.status}</h1>
      </div>
    );
  }
}

export default App;
