import React from 'react';
import './App.scss';
import { GoodsList } from './components/goodsList';

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

const goodsPrepared = goodsFromServer.map((item, index) => (
  {
    id: index + 1,
    name: item,
  }));

// console.log(goodsPrepared);

class App extends React.Component {
  state = {
    selectedGoods: '',
  }

  clickSelect = name => (
    this.setState({
      selectedGoods: name,
    })
  )

  clearSelection = () => (
    this.setState(
      {
        selectedGoods: '',
      },
    ));

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected good: - ${selectedGoods}`}
        </h1>
        <button
          type="button"
          onClick={this.clearSelection}
        >
          X
        </button>
        <GoodsList
          goods={goodsPrepared}
          selected={this.state.selectedGoods}
          click={this.clickSelect}
        />
      </div>
    );
  }
}

export default App;
