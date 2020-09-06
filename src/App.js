import React from 'react';
import ClassNames from 'classnames';

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
    selected: '-',
  }

  selectHandler = (item) => {
    this.setState({ selected: item });
  }

  render() {
    return (
      <div className="App">
        <h1>
          {`Selected good: ${this.state.selected}`}
          <button
            type="button"
            className="selectedItem__btn-cancel"
            onClick={() => {
              this.setState({ selected: '-' });
            }}
          >
            X
          </button>
        </h1>
        <ul className="list">
          {
            goodsFromServer.map(item => (
              <li key={item} className="list__item">
                <button
                  type="button"
                  className={ClassNames(
                    'selectedItem__btn-good',
                    { ' selectedItem': this.state.selected.includes(item) },
                  )}
                  onClick={() => {
                    this.selectHandler(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
