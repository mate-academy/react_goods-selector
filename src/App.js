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
    selectedGood: '',
  };

  selectGood = (item) => {
    this.setState({ selectedGood: item });
  };

  clearSelection = () => {
    this.setState({ selectedGood: '' });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <header className="header">
          <h1 className="header__title">
            Selected good:
            {selectedGood}
          </h1>

          <button
            type="button"
            className="header__button"
            onClick={this.clearSelection}
            hidden={selectedGood === ''}
          >
            X
          </button>
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <div key={good} className="App__good">
              <li
                className={good === selectedGood ? 'selected' : ''}
              >
                {good}
              </li>

              <button
                type="button"
                onClick={() => {
                  this.selectGood(good);
                }}
              >
                Select
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
