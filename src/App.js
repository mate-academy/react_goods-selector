import React from 'react';
import './App.scss';
import classNames from 'classnames';

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

  addItem = (item) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, item],
    }));
  }

  deleteItem = (item) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(good => good !== item),
    }));
  }

  clearItemSelection = () => {
    this.setState({ selectedGoods: [] });
  }

  setTitle = () => {
    const products = [...this.state.selectedGoods];
    const lastProduct = products[products.length - 1];

    switch (products.length) {
      case 0:
        return `No goods selected`;
      case 1:
        return `${products[0]} is selected`;
      default:
        products.length -= 1;

        return `${products.join(', ')} and ${lastProduct} are selected`;
    }
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {this.setTitle()}
          {selectedGoods.length > 0 && (
            <button
              type="button"
              className="button-x"
              onClick={this.clearItemSelection}
            >
              X
            </button>
          )}
        </h1>

        <ul>
          {goodsFromServer.map((good) => {
            const isIncludesGood = selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={classNames(`list`, {
                  selected: isIncludesGood,
                })}
              >
                <span>{good}</span>

                <button
                  type="button"
                  onClick={() => (isIncludesGood
                    ? this.deleteItem(good)
                    : this.addItem(good))}
                >
                  {isIncludesGood ? `Remove` : `Add`}
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
