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
    selectedGood: [],
  };

  clickHandler = (item) => {
    this.setState((changeState) => {
      if (changeState.selectedGood.includes(item)) {
        const goodsWord = changeState.selectedGood
          .filter(good => good !== item);

        return { selectedGood: goodsWord };
      }

      const joinedWord = [...changeState.selectedGood, item];

      return { selectedGood: joinedWord };
    });
  }

  removeAll = () => {
    this.setState({ selectedGood: [] });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <Header selectedGood={selectedGood} onClick={this.removeAll} />
        <List
          goodsItems={goodsItems}
          selectedGood={selectedGood}
          onClick={this.clickHandler}
        />
      </div>
    );
  }
}

export default App;
