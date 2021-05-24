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
  'Milk',
  'Bear',
];

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  addToSelected = (product) => {
    if (!this.state.selectedGoods.includes(product)) {
      this.setState(state => ({
        selectedGoods: [...state.selectedGoods, product],
      }));
    } else {
      this.setState(state => ({
        selectedGoods: state.selectedGoods.filter(good => good !== product),
      }));
    }
  }

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    return (
      <div className="App">
        <h1 className="SelectedGoods">
          Selected goods:
          {' '}
          {
            this.state.selectedGoods.map((good, index, array) => {
              if (array.length > 1 && index === array.length - 2) {
                return `${good} and `;
              }

              return `${good} `;
            })
          }
          <button
            type="button"
            onClick={this.clearSelectedGoods}
          >
            X
          </button>
        </h1>
        {`Length of all goods: ${goodsFromServer.length}`}
        <ul className="ProductList">
          {goodsFromServer.map((product) => {
            const isSelected = this.state.selectedGoods.includes(product);

            return (
              <li
                className="Product"
                key={product}
              >
                <button
                  className={`${isSelected ? 'Active' : 'NoneActive'} Button`}
                  type="button"
                  onClick={() => {
                    this.addToSelected(product);
                  }}
                >
                  {product}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
