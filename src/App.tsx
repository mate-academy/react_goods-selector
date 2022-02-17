import React from 'react';
import './App.scss';
import classNames from 'classnames/bind';

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
  state = {
    selectedGoods: ['Jam'],
  };

  select = (newProduct: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, newProduct],
    }));
  };

  remove = (productToRemove: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: selectedGoods.filter(product => product !== productToRemove),
    }));
  };

  deleteAll = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    const { selectedGoods } = this.state;

    const goodsList = selectedGoods.length === 1
      ? selectedGoods[0]
      : `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)}`;

    return (
      <div className="App">
        <h1 className="App__title">
          {`Already in basket: ${selectedGoods.length > 0
            ? goodsList
            : ('empty')
          }`}
        </h1>
        <ul className="App__list">
          {goodsFromServer.map((product) => {
            const buttonMethod = () => (
              selectedGoods.includes(product)
                ? this.remove(product)
                : this.select(product)
            );

            const buttonName = selectedGoods.includes(product)
              ? 'Remove'
              : 'Add';

            return (
              <li
                key={product}
                className="App__item"
              >
                <span
                  className={classNames('App__product',
                    { 'App__product--active': selectedGoods.includes(product) })}
                >
                  {product}
                </span>
                <button
                  type="button"
                  className="App__button"
                  onClick={buttonMethod}
                >
                  {buttonName}
                </button>
              </li>
            );
          })}
        </ul>
        {selectedGoods.length > 0
          && (
            <button
              type="button"
              className="App__delete"
              onClick={this.deleteAll}
            >
              X
            </button>
          )}
      </div>
    );
  }
}

export default App;
