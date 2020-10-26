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
    selectedItems: [],
  }

  addItem = (event) => {
    const target = event.target.textContent;
    const { selectedItems } = this.state;

    if (event.ctrlKey) {
      if (selectedItems.includes(target)) {
        this.setState(prevState => (
          {
            selectedItems: prevState.selectedItems
              .filter(item => item !== target),
          }
        ));
      } else {
        this.setState(prevState => (
          {
            selectedItems: [...prevState.selectedItems, target],
          }
        ));
      }
    } else {
      this.setState({ selectedItems: [target] });
    }
  }

  removeAllItems = () => {
    this.setState({
      selectedItems: [],
    });
  }

  render() {
    const { selectedItems } = this.state;

    return (
      <div className="App">
        <div className="container">
          <div className="products">
            <h2 className="products__title">Add Items to shopping cart</h2>
            <span
              className="products__tip"
            >
              Click on item to add to Shopping Cart
            </span>
            <br />
            <span
              className="products__tip"
            >
              Keep Ctrl key pressed to add multiple
            </span>
            <div>
              <GoodsList
                allGoods={goodsFromServer}
                selectedItems={selectedItems}
                addItem={this.addItem}
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
          removeAllItems={this.removeAllItems}
        />
      </div>
    );
  }
}

export default App;
