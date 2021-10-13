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
  state = {
    selectedGoods: ['Jam'],
  };

  selectorChange = (selectedProduct: string, isSelected:boolean) => {
    this.setState(({ selectedGoods }) => (
      isSelected
        ? { selectedGoods: selectedGoods.filter(good => good !== selectedProduct) }
        : { selectedGoods: [...selectedGoods, selectedProduct] }
    ));
  };

  render() {
    const { selectedGoods } = this.state;
    const selected = selectedGoods.length;
    const title = selected ? `${selectedGoods.join(', ')} is selected` : 'No goods selected';

    return (
      <div className="products">
        <div className="products__header">
          <h1 className="products__title">
            {title}
          </h1>
          <button
            type="button"
            className={classNames(
              'reset_btn',
              { reset_btn__hidden: !selected },
            )}
            onClick={() => this.setState({ selectedGoods: [] })}
          >
            x Clear All x
          </button>
        </div>
        <ul className="products__list">
          {goodsFromServer.map(product => {
            const isSelected = selectedGoods.includes(product);

            return (
              <div
                key="product"
                className={classNames(
                  'products__field',
                  { 'products__field--selected': isSelected },
                )}
              >
                <li className="products__item">
                  {product}
                </li>
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    return this.selectorChange(product, isSelected);
                  }}
                >
                  {isSelected ? 'Remove' : 'Select'}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
