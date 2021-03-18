import React from 'react';
import './App.scss';
import { ResetButton } from './components/ResetButton';
import { Title } from './components/Title';
import { ProductsList } from './components/ProductsList';

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

const goodsWithID = goodsFromServer.map((product, index) => ({
  product,
  id: index + 1,
}));

export class App extends React.Component {
  state = {
    selectedProducts: [],
  }

  addGoods = (productName) => {
    const { selectedProducts } = this.state;

    if (!selectedProducts.includes(productName)) {
      this.setState(state => ({
        selectedProducts: [...state.selectedProducts, productName],
      }));
    }
  };

  removeGoods = (productName) => {
    this.setState(state => ({
      selectedProducts: state.selectedProducts.filter(
        product => product !== productName,
      ),
    }));
  }

  resetGoods = () => {
    this.setState({
      selectedProducts: [],
    });
  }

  render() {
    const { selectedProducts } = this.state;

    return (
      <div className="App">
        <ResetButton
          selectedProducts={selectedProducts}
          resetGoods={this.resetGoods}
        />
        <Title selectedProducts={selectedProducts} />
        <ProductsList
          goodsWithID={goodsWithID}
          addGoods={this.addGoods}
          removeGoods={this.removeGoods}
          selectedProducts={selectedProducts}
        />
        {goodsFromServer.length}
      </div>
    );
  }
}
