import React from 'react';
import classNames from 'classnames';
import './App.scss';

const goodsFromServer: string[] = [
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

type State = {
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  addProduct = (product: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, product],
    }));
  };

  deleteProduct = (product: string) => {
    const { selectedGoods } = this.state;
    const changedGoods = selectedGoods.filter(item => item !== product);

    this.setState({ selectedGoods: changedGoods });
  };

  getStringOfProducts = () => {
    const { selectedGoods } = this.state;
    let stringOfProducts = '';

    if (selectedGoods.length > 1) {
      const productsWithoutLast = selectedGoods.slice(0, -1);

      stringOfProducts = `${productsWithoutLast.join(', ')} `
       + `and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    } else {
      stringOfProducts = `${selectedGoods[0]} is selected`;
    }

    return stringOfProducts;
  };

  render() {
    const { selectedGoods } = this.state;
    const stringOfGoods = this.getStringOfProducts();
    const listTitle = selectedGoods.length
      ? stringOfGoods
      : 'No goods selected';

    return (
      <div className="App">
        <div className="App__header">
          <h1>
            {listTitle}
          </h1>
          {!!selectedGoods.length && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.clearSelectedGoods}
            >
              Clear
            </button>
          )}
        </div>

        <ul className="list list-group">
          {goodsFromServer.map(product => {
            const isProductSelected = selectedGoods.includes(product);

            return (
              <li
                key={product}
                className={classNames({
                  'list-group-item': true,
                  'list-group-item-success': isProductSelected,
                  'list-group-item-dark': !isProductSelected,
                })}
              >
                <span>{product}</span>

                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => {
                    if (isProductSelected) {
                      this.deleteProduct(product);
                    } else {
                      this.addProduct(product);
                    }
                  }}
                >
                  {isProductSelected
                    ? 'Remove'
                    : 'Add'}
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
