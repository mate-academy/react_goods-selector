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
    selectedGoods: [],
    products: [],
  }

  addOrRemoveSelectedGood = ({ target }, product) => {
    this.setState(({ selectedGoods, products }) => {
      const item = target.closest('.list__item');

      item.classList.toggle('list__item--selected');

      const newSelectedGoods = [...selectedGoods];
      const newProducts = [...products];

      if (products.includes(product)) {
        const index = selectedGoods.indexOf(item);

        newSelectedGoods.splice(index, 1);
        newProducts.splice(index, 1);
      } else {
        newSelectedGoods.push(item);
        newProducts.push(product);
      }

      return {
        selectedGoods: newSelectedGoods,
        products: newProducts,
      };
    });
  }

  clearSelectedGoods = (event) => {
    const { selectedGoods } = this.state;

    selectedGoods.forEach((item) => {
      item.classList.remove('list__item--selected');
    });

    this.setState({
      selectedGoods: [],
      products: [],
    });
  }

  printHeader() {
    const { products } = this.state;

    if (products.length === 0) {
      return '';
    }

    return products.reduce((prev, product) => `${prev}, ${product}`);
  }

  render() {
    return (
      <div className="App">
        <h1>
          {`Selected goods: - ${this.printHeader()}`}

          <button
            className="button--clear"
            type="button"
            onClick={this.clearSelectedGoods}
          >
            x
          </button>
        </h1>

        <ul>
          {goodsFromServer.map(product => (
            <li
              className="list__item"
              key={product}
            >
              <span>
                {product}
              </span>
              <button
                type="button"
                className="list__button"
                onClick={(event) => {
                  this.addOrRemoveSelectedGood(event, product);
                }}
              >
                Add / Remove
              </button>
            </li>
          ))}
        </ul>

        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
