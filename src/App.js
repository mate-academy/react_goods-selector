import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';

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

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  selectGood = (good) => {
    const { selectedGoods } = this.state;

    selectedGoods.includes(good)
      ? selectedGoods.splice(selectedGoods.indexOf(good), 1)
      : selectedGoods.push(good);

    this.setState({ selectedGoods: [...selectedGoods] });
  }

  removeAllSelected = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__header">
          <h1 className="App__title">
            {`Selected goods: `}
          </h1>
          <h2 className="App__selected-list">{selectedGoods.join(', ')}</h2>
        </div>

        <button
          type="button"
          className="App__button"
          onClick={this.removeAllSelected}
        >
          Clear all
        </button>
        <GoodsList
          goods={preparedGoods}
          selectedGoods={selectedGoods}
          selectGood={this.selectGood}
        />
      </div>
    );
  }
}

export default App;
