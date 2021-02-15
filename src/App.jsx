import React from 'react';
import { List } from './components/List';
import './App.scss';

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

const prepareGoods = goodsFromServer.map((good, index) => ({
  id: index,
  name: good,
}));

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  remover = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  clickHandler = (name) => {
    const { selectedGoods } = this.state;
    const listOfGoods = [...selectedGoods];

    if (!selectedGoods.includes(name)) {
      listOfGoods.push(name);
    } else {
      const indexOfGood = selectedGoods.indexOf(name);

      listOfGoods.splice(indexOfGood, 1);
    }

    this.setState({
      selectedGoods: [...listOfGoods],
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          {`Selected Goods: ${selectedGoods.join(', ')}`}
        </h1>

        <button
          className="app__remove-button"
          type="button"
          onClick={this.remover}
        >
          X
        </button>

        <List
          items={prepareGoods}
          selectedGoods={selectedGoods}
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}

export default App;
