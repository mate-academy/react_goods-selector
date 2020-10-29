import React, { Component } from 'react';
import './App.scss';
import { GoodList } from './components/GoodList';

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

const preparedGoods = goodsFromServer.map((good, index) => ({
  name: good,
  id: index,
}));

export class App extends Component {
  state = {
    selectedGood: '-',
  };

  addGood = (good) => {
    this.setState({ selectedGood: good });
  }

  clearGood = () => {
    this.setState({ selectedGood: '-' });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {selectedGood}
          <button
            className="button"
            type="button"
            onClick={this.clearGood}
          >
            Clear
          </button>
        </h1>

        <GoodList
          selectedGood={selectedGood}
          goods={preparedGoods}
          onClick={this.addGood}
        />
      </div>
    );
  }
}

export default App;
