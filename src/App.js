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
    selectedGood: 'No selected goods',
  }

  selector = (good) => {
    this.setState({ selectedGood: good });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good: -
          {` ${this.state.selectedGood}`}
        </h1>

        {goodsFromServer.map(good => (
          <button
            type="button"
            className={good === this.state.selectedGood
              ? 'good good--selected'
              : 'good'
            }
            key={good}
            onClick={() => {
              this.selector(good);
            }}
          >
            {good}
          </button>
        ))}

        <button
          type="button"
          className="cleaner"
          onClick={() => {
            this.setState({ selectedGood: 'No selected goods' });
          }}
        >
          Clean
        </button>
      </div>
    );
  }
}

export default App;
