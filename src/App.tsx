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
    selectedGoods: [],
  };

  deleteSelectedGoods = () => {
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

  render() {
    const { selectedGoods } = this.state;
    const stringOfGoods = selectedGoods.join(', ');
    const listTitle = selectedGoods.length
      ? `Selected goods: ${stringOfGoods}`
      : 'No goods selected';

    return (
      <div className="App">
        <div className="App__header">
          <h1>
            {listTitle}
          </h1>
          {selectedGoods.length !== 0 && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.deleteSelectedGoods}
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
