import React, { Component } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { List } from './components/List';
import 'semantic-ui-css/semantic.min.css';

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

const goodsItems = goodsFromServer.map((item, index) => ({
  id: index + 1,
  name: item,
}));

class App extends Component {
  state = {
    selectedGoods: [],
  };

  clickHandler = (item) => {
    this.setState((changeState) => {
      if (changeState.selectedGoods.includes(item)) {
        const selectedWords = changeState.selectedGoods
          .filter(good => good !== item);

        return { selectedGoods: selectedWords };
      }

      const selectedWords = [...changeState.selectedGoods, item];

      return { selectedGoods: selectedWords };
    });
  }

  removeAll = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <Header selectedGood={selectedGoods} onClick={this.removeAll} />
        <List
          goodsItems={goodsItems}
          selectedGoods={selectedGoods}
          onClick={this.clickHandler}
        />
      </div>
    );
  }
}

export default App;
