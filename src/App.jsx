import React from 'react';
import './App.scss';
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

class App extends React.Component {
  state = {
    selectedProducts: [],
    displayProducts: '',
    isActive: false,
  }

  addProducts = (product) => {
    const {selectedProducts} = this.state;
    const index = selectedProducts.indexOf(product);

    if (selectedProducts.includes(product)) {
      selectedProducts.splice(index, 1);

      return this.setState({
        displayProducts: selectedProducts.join(', '),
      });
    }

    if (!selectedProducts.includes(product)) {
      selectedProducts.push(product);

      return this.setState({
        displayProducts: selectedProducts.join(', '),
      });
    }
  }

  removeProducts = () => {
    this.setState({
      selectedProducts: [],
      displayProducts: '',
      isActive: false,
    });
  }

  render() {
    const {selectedProducts, displayProducts} = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Selected good: {displayProducts}</h1>
        <List
          goods={goodsFromServer}
          addProducts={this.addProducts}
          removeProducts={this.removeProducts}
          displayProducts={displayProducts}
          counter={selectedProducts.length}
        />
      </div>
    )
  }
}

export default App;
