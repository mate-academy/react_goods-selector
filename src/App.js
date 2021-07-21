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

class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  }

  render() {
    return (
      <div className="container border rounded-pill">
        <div className="message">
          <h1>
            {
            this.state.selectedGood === null
              ? 'No goods selected'
              : `${this.state.selectedGood} is selected`
            }
          </h1>
          <button
            type="button"
            className={this.state.selectedGood === null
              ? 'button--hidden'
              : 'btn-close'
            }
            onClick={() => {
              this.setState({ selectedGood: null });
            }}
          />
        </div>
        <ol className="goods">
          {goodsFromServer.map(good => (
            <div className="good">
              <li
                key={good}
                className={good === this.state.selectedGood
                  ? 'good-selected'
                  : ''}
              >
                {good}
              </li>
              <button
                type="button"
                className={
                  good === this.state.selectedGood
                    ? 'button--hidden btn btn-outline-secondary btn-sm'
                    : 'btn btn-outline-secondary btn-sm'
                }
                onClick={() => {
                  this.setState({ selectedGood: good });
                }}
              >
                Select
              </button>
            </div>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
