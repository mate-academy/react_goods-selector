import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { Header } from './components/Header';

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

const goodsList = goodsFromServer.map((good, index) => (
  {
    id: index,
    name: good,
  }
));

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  addGood = (name) => {
    this.setState((state) => {
      if (state.selectedGoods.includes(name)) {
        const newSelectedGoods = state.selectedGoods.filter(good => (
          good !== name
        ));

        return {
          selectedGoods: newSelectedGoods,
        };
      }

      const newSelectedGoods = [...state.selectedGoods, name];

      return {
        selectedGoods: newSelectedGoods,
      };
    });
  }

  removeAll = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <Header
          selectedGoods={selectedGoods}
          onClick={this.removeAll}
        />
        <GoodsList
          goods={goodsList}
          selectedGoods={selectedGoods}
          onClick={this.addGood}
        />
      </div>
    );
  }
}

export default App;
