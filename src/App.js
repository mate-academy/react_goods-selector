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
    selected: 'nothing',
    clearButtonVisability: false,
  }

  selectedClass = (name) => {
    if (this.state.selected === name) {
      return 'selected-item';
    }

    return '';
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {this.state.selected}
        </h1>
        <button
          type="button"
          className="clear-button"
          onClick={() => {
            this.setState({
              clearButtonVisability: false,
              selected: 'nothing',
            });
          }}
          hidden={!this.state.clearButtonVisability}
        >
          clear selected
        </button>
        <ul className="goods-list">
          {
            goodsFromServer
              .map(
                good => (
                  <li
                    key={good}
                    className={
                      `list-item ${this.selectedClass(good)}`
                    }
                  >
                    <p>
                      {good}
                    </p>
                    <button
                      type="button"
                      className="select-button"
                      onClick={() => {
                        this.setState({
                          selected: good,
                          clearButtonVisability: true,
                        });
                      }}
                    >
                      select it
                    </button>
                  </li>
                ),
              )
          }
        </ul>
      </div>
    );
  }
}

export default App;
