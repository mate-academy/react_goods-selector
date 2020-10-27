import React, { Component } from 'react';
import './App.scss';
import GoodsList from './components/GoodsList/GoodsList';
import RemoveButton from './components/RemoveButton/RemoveButton';

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

class App extends Component {
  state = {
    allItems: goodsFromServer,
    selectedItems: [],
  }

  addItem = (selectedItem) => {
    this.setState((state) => {
      if (state.selectedItems.includes(selectedItem)) {
        const newSelectedItems = state.selectedItems.filter(item => (
          item !== selectedItem
        ));

        return {
          selectedItems: newSelectedItems,
        };
      }

      const newSelectedItems = [...state.selectedItems, selectedItem];

      return {
        selectedItems: newSelectedItems,
      };
    });
  }

  removeAllItems = () => {
    this.setState({
      selectedItems: [],
    });
  }

  render() {
    const { selectedItems, allItems } = this.state;
    const { addItem, removeAllItems } = this;

    return (
      <div className="App">
        <div className="container">
          <div className="products">
            <h2 className="products__title">Add Items to shopping cart</h2>
            <span
              className="products__tip"
            >
              Click on item to add or remove it from Shopping Cart
            </span>
            <div>
              <GoodsList
                allItems={allItems}
                selectedItems={selectedItems}
                addItem={addItem}
              />
            </div>
          </div>

          <div className="shoppingCart">
            <h2 className="shoppingCart__title">Shopping Cart</h2>

            {selectedItems.length
              ? selectedItems.map(item => (
                <p
                  key={item}
                  className="shoppingCart__text"
                >
                  {item}
                </p>
              ))
              : (
                <p
                  className="shoppingCart__info"
                >
                  Your Shopping Cart is empty
                </p>
              )
            }
          </div>
        </div>

        <RemoveButton
          removeAllItems={removeAllItems}
        />
      </div>
    );
  }
}

export default App;
