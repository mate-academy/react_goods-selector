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
    // eslint-disable-next-line react/no-unused-state
    selectedGoods: [],
  };

  componentDidMount() {
    // eslint-disable-next-line react/no-access-state-in-setstate
    // this.setState({ selectedGoods: this.state.selectedGoods.push('Jam') });
    this.setState({ status: 'Jam is selected' });
  }

  selectItem = (good: string) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ status: `${good} is selected` });
  };

  removeItem = () => {
    this.setState({ status: 'No goods selected' });
  };

  render() {
    return (
      <div className="App">
        <ul>
          {
            // eslint-disable-next-line no-return-assign
            goodsFromServer.map((good, index) => (
              <>
                <li
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                >
                  <span
                    className={this.state.status.includes(good)
                      ? this.state.selected : 'good'}
                  >
                    {good}
                  </span>
                  <button onClick={() => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    !this.state.status.includes(good)
                      ? this.selectItem(good)
                      : this.removeItem();
                  }}
                  >
                    {this.state.status.includes(good)
                      ? 'Remove'
                      : 'Select'}
                  </button>
                </li>
              </>
            ))
          }
        </ul>
        <div>
          {this.state.status !== 'No goods selected' && (
            <button
              type="button"
              onClick={() => {
                this.setState({ status: 'No goods selected' });
              }}
            >
              Clear
            </button>
          )}
        </div>
        <h1>{this.state.status}</h1>
      </div>
    );
  }
}

export default App;
