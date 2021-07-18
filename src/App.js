import React from 'react';
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

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  addProduct = (item) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.concat(item),
    }));
  }

  removeProduct = (item) => {
    this.setState(prevState => ({
      selectedGoods:
        prevState.selectedGoods.filter(product => product !== item),
    }));
  }

  clearProductList = () => {
    this.setState({ selectedGoods: [] });
  }

  createProductList = () => {
    if (this.state.selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (this.state.selectedGoods.length < 3) {
      return this.state.selectedGoods.join(' and ');
    }

    return `${this.state.selectedGoods.slice(0, -2).join(', ')
    }, ${this.state.selectedGoods.slice(-2).join(' and ')}`;
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good:
          {this.createProductList()}
        </h1>
        {this.state.selectedGoods.length === 0
          ? null
          : (
            <button
              type="button"
              className="deleteButton"
              onClick={() => this.clearProductList()}
            >
              Clear all
            </button>
          )}
        <ul>
          {goodsFromServer.map((item) => {
            const isProductSelected = this.state.selectedGoods.includes(item);

            return (
              <div key={item}>
                <li className={
                  isProductSelected
                    ? 'added'
                    : null
                  }
                >
                  { item }
                </li>
                <button
                  type="button"
                  className={
                    isProductSelected
                      ? 'removeButton'
                      : 'addButton'
                  }
                  onClick={
                    isProductSelected
                      ? () => {
                        this.removeProduct(item);
                      }
                      : () => {
                        this.addProduct(item);
                      }
                  }
                >
                  {
                    isProductSelected
                      ? 'remove'
                      : 'add'
                  }
                </button>
              </div>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;
