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

  reset = () => {
    this.setState({
      selectedGood: null,
    });
  }

  makeSelect = (good) => {
    this.setState({
      selectedGood: good,
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="out">
          { !this.state.selectedGood
            ? 'No goods selected'
            : `${this.state.selectedGood} is selected`
          }
          {this.state.selectedGood && (
            <button
              className="reset"
              onClick={this.reset}
              type="button"
            >
              X
            </button>
          )
          }
        </h1>

        <div className="list-wrapper">
          <ul className="list">
            {goodsFromServer.map(good => (
              <li
                key={good}
                className={
                this.state.selectedGood === good
                  ? 'selected item'
                  : 'item'
              }
              >
                <span className="text">
                  {good}
                </span>
                <button
                  className={
                  this.state.selectedGood === good
                    ? 'button buttonRem'
                    : 'button buttonSel'
                  }
                  onClick={() => {
                    this.makeSelect(good);
                  }}
                  type="button"
                >
                  select
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
