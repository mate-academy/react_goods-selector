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

const preparedList = goodsFromServer.map((product, index) => ({
  name: product,
  id: index,
}));

class App extends React.Component {
  state = {
    selectedProducts: [],
  }

  selectItem = (name) => {
    const { selectedProducts } = this.state;
    const listOfProducts = [...selectedProducts];

    if (!selectedProducts.includes(name)) {
      listOfProducts.push(name);
    } else {
      const productIndex = selectedProducts.indexOf(name);

      listOfProducts.splice(productIndex, 1);
    }

    this.setState({
      selectedProducts: [...listOfProducts],
    });
  }

  clearListOfProducts = () => {
    this.setState({
      selectedProducts: [],
    });
  }

  render() {
    const { selectedProducts } = this.state;

    return (
      <div className="app">
        <h1 className="app__header">
          {`Selected goods: ${selectedProducts.join(', ')}`}
        </h1>

        <span className="app__reset">
          <h2>Clear all:</h2>
          <button
            type="button"
            className="app__button-x"
            onClick={this.clearListOfProducts}
          >
            X
          </button>
        </span>

        <GoodsList
          goods={preparedList}
          selectedProducts={this.state.selectedProducts}
          onClick={this.selectItem}
        />
      </div>
    );
  }
}

export default App;
