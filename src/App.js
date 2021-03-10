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
  good,
  index,
}));

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  toggleSelectedGoods = (good) => {
    const updatedSelectedGoods = [...this.state.selectedGoods];

    if (!updatedSelectedGoods.includes(good)) {
      updatedSelectedGoods.push(good);
    } else {
      updatedSelectedGoods.splice(updatedSelectedGoods.indexOf(good), 1);
    }

    this.setState({ selectedGoods: [...updatedSelectedGoods] });
  }

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {'Selected goods: '}
          {selectedGoods.join(', ')}
        </h1>
        <GoodsList
          goods={preparedGoods}
          selectedGoods={selectedGoods}
          toggleSelectedGoods={this.toggleSelectedGoods}
        />
        <button
          className="App__button"
          type="button"
          onClick={this.clearSelectedGoods}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
