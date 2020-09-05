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
    selectedGood: '-',
  }

  selectGood = (good) => {
    this.setState({
      selectedGood: good,
    });
  }

  deleteGood = () => {
    this.setState({
      selectedGood: '-',
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {selectedGood}
          <button
            type="button"
            onClick={this.deleteGood}
            className={
              selectedGood === '-'
                ? 'hidden'
                : ''
            }
          >
            x
          </button>
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              <button

                type="button"
                onClick={() => this.selectGood(good)}
                className={
                  selectedGood === good
                    ? 'selected'
                    : ''
                }
              >
                {good}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
