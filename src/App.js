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
    selectedGood: null,
  }

  static getGoodClassName(selectedGood, good) {
    return (
      `app__good 
      ${selectedGood === good
        ? 'app__good--is-active'
        : ''}`
    );
  }

  chooseGood(good) {
    this.setState({ selectedGood: good });
  }

  clearGood() {
    this.setState({ selectedGood: null });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="app">
        <h1 className="app__header">
          Selected good:
          <span className="app__header-list">
            {' '}
            {selectedGood}
          </span>
        </h1>
        <button
          className="app__button-clear"
          type="button"
          onClick={() => this.clearGood()}
        >
          X
        </button>
        <ul className="app__list">
          {goodsFromServer.map(
            good => (
              <li
                className={App.getGoodClassName(selectedGood, good)}
                key={good}
              >
                <button
                  className="app__button-add"
                  type="button"
                  onClick={() => {
                    this.chooseGood(good);
                  }}
                >
                  Select
                </button>
                {' '}
                {good}
              </li>
            ),
          )}
        </ul>
      </div>
    );
  }
}

export default App;
