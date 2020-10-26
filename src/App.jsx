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
  constructor(props) {
    super(props)
    this.state = {
      selectedProducts: [],
      temp: '',
    }

    this.addProducts = this.addProducts.bind(this);
    this.removeProducts = this.removeProducts.bind(this);
  }

  addProducts(product) {
    if (this.state.selectedProducts.includes(product)) {
      const index = this.state.selectedProducts.indexOf(product);

      this.state.selectedProducts.splice(index, 1);
      return this.setState({temp: this.state.selectedProducts.join(', ')});
    }

    if (!this.state.selectedProducts.includes(product)) {
      this.state.selectedProducts.push(product);
      return this.setState({temp: this.state.selectedProducts.join(', ')});
    }
  }

  removeProducts(callback) {
    if (callback === 'reset') {
      return this.setState({selectedProducts: [], temp: ''});
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Selected good: {this.state.temp}</h1>
        <List
          goods={goodsFromServer}
          addProducts={this.addProducts}
          removeProducts={this.removeProducts}
          counter={this.state.selectedProducts.length}
        />
      </div>
    )
  }
}

export default App;
