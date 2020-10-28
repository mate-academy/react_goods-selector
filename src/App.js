import React from 'react';
import './App.scss';
import { ListOfGoods } from './components/ListOfGoods/ListOfGoods';
import { Header } from './components/Header/Header';

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
        <ListOfGoods
          goods={preparedGoods}
          selectedGoods={selectedGoods}
          onClick={this.addGood}
        />
      </div>
    );
  }
}

export default App;
