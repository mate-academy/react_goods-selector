import React from 'react';
import './App.scss';
import Select from './componnents/Select';

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
  }

  selectGood = (good) => {
    this.setState({
      selectedGood: good,
    });
  }

  clearSelect = () => {
    this.setState({
      selectedGood: '',
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App w-50 m-auto">
        <h1>
          {
            `Selected good: - ${selectedGood}`
          }
        </h1>

        <button
          type="button"
          className="btn btn-danger"
          onClick={this.clearSelect}
        >
          X
        </button>

        <div className="btn-group mt-2" role="group" aria-label="First group">
          {
            goodsFromServer.map(good => (
              <Select
                key={good}
                good={good}
                selectGoodClicker={this.selectGood}
                selectedGood={selectedGood}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
