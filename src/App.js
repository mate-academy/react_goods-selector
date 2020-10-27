import React, { Component } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { List } from './components/List';

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

  clickHandler = (event) => {
    if (event.ctrlKey) {
      const target = event.target.textContent;

      this.setState((state) => {
        if (state.selectedGood.includes(target)) {
          const goodsWord = state.selectedGood
            .filter(good => good !== target);

          return { selectedGood: goodsWord };
        }

        const joinedWord = [...state.selectedGood, target];

        return { selectedGood: joinedWord };
      });
    } else {
      this.setState({ selectedGood: [event.target.textContent] });
    }
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
