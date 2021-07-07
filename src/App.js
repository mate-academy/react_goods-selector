import React from 'react';
import { GoodsList } from './components/GoodsList';
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

const preperedGoods = goodsFromServer.map((product, index) => ({
  name: product,
  id: index,
}));

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  selectItem = (name) => {
    const { selectedGoods } = this.state;
    const productList = [...selectedGoods];

    if (!selectedGoods.includes(name)) {
      productList.push(name);
    } else {
      const productIndex = selectedGoods.indexOf(name);

      productList.splice(productIndex, 1);
    }

    this.setState({
      selectedGoods: [...productList],
    });
  }

  clearListOfProducts = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="app__header">
          {`Selected goods: ${selectedGoods.join(', ')}`}
        </h1>

        <span className="App__clear">
          <h2 className="App__heading">Clear all:</h2>
          <button
            type="button"
            className="ui red button"
            onClick={this.clearListOfProducts}
          >
            X
          </button>
        </span>

        <GoodsList
          goods={preperedGoods}
          selectedGoods={selectedGoods}
          onClick={this.selectItem}
        />
      </div>
    );
  }
}

export default App;
