import React from 'react';
import './App.scss';
import { ProductList } from './components/ProductList';
import { classNameButton } from './components/classNameButton';

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

const products = goodsFromServer.map((product, index) => ({
  name: product,
  id: index + 1,
}));

class App extends React.Component {
  state = {
    selectedGood: ['Jam'],
  }

  selectedProduct = (name) => {
    if (!this.state.selectedGood.includes(name)) {
      this.setState(state => ({ selectedGood: [...state.selectedGood, name] }));
    }
  };

  removedProduct = (name) => {
    if (this.state.selectedGood.includes(name)) {
      this.setState(state => ({
        selectedGood: state.selectedGood.filter(product => product !== name),
      }));
    }
  };

  resetProduct = () => {
    this.setState({ selectedGood: [] });
  }

  render() {
    const { selectedGood } = this.state;
    const productsGood = selectedGood.join(', ');

    return (
      <div className="App">
        <h1>
          {selectedGood.length > 0
            ? `Selected good: ${productsGood}`
            : 'No goods selected'
          }
        </h1>

        <button
          type="button"
          className={
            classNameButton(selectedGood.length === 0)
          }
          onClick={(event) => {
            this.resetProduct();
          }}
        >
          reset
        </button>

        <div>
          {products.map(product => (
            <div key={product.id}>

              <ProductList
                name={product.name}
                selectedGood={selectedGood}
                selectedProduct={this.selectedProduct}
                removedProduct={this.removedProduct}
              />

            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
