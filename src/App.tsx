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

  addProduct = (product: string) => {
    this.setState((prevState) => {
      const { selectedGoods } = prevState;

      return { selectedGoods: [...selectedGoods, product] };
    });
  };

  deleteProduct = (product: string) => {
    this.setState((state) => {
      return { selectedGoods: state.selectedGoods.filter(item => item !== product) };
    });
  };

  clearSelection = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;
    const { length } = selectedGoods;

    const toBeForm = length >= 2 ? 'are' : 'is';
    const whatIsSelected = selectedGoods.reduce((prev, item, i) => {
      if (i === 0) {
        return item;
      }

      if (i !== length - 1) {
        return `${prev}, ${item}`;
      }

      return `${prev} and ${item}`;
    }, '');

    return (
      <div className="app">
        <h1 className="app__heading">
          {length ? `${whatIsSelected} ${toBeForm} selected` : 'No goods selected'}
        </h1>

        {!!selectedGoods.length && (
          <button
            type="button"
            onClick={this.clearSelection}
          >
            Clear selection
          </button>
        )}

        <ul className="list">
          { goodsFromServer.map(product => (
            <li
              className="list__item"
              key={product}
            >
              <p
                className={classNames('list__text', {
                  'list__text--selected': selectedGoods.includes(product),
                })}
              >
                {product}
              </p>

              <button
                type="button"
                onClick={() => {
                  if (selectedGoods.includes(product)) {
                    this.deleteProduct(product);
                  } else {
                    this.addProduct(product);
                  }
                }}
              >
                { selectedGoods.includes(product) ? 'Remove' : 'Add' }
              </button>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default App;
